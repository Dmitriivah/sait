import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  company: z.string().trim().max(120).optional().default(""),
  website: z.string().trim().max(2048).optional().default("").refine((value) => !value || /^https?:\/\/[^\s]+$/i.test(value)),
  service: z.string().trim().max(120).optional().default(""),
  details: z.string().trim().min(20).max(5000),
  budget: z.string().trim().max(100).optional().default(""),
  timeline: z.string().trim().max(200).optional().default(""),
  consent: z.literal("on"),
  websiteTrap: z.string().max(0).optional().default(""),
  locale: z.enum(["ru", "en"]).default("ru"),
});

const formIdSchema = z.string().min(1).max(100).regex(/^[A-Za-z0-9]+$/);

const response = (code: string, status: number) =>
  Response.json({ error: code }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) return response("invalid_request", 413);
  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return response("invalid_request", 400);
  }
  if (new TextEncoder().encode(rawBody).byteLength > 16_384) return response("invalid_request", 413);

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return response("invalid_request", 400);
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return response("invalid_fields", 400);
  const enquiry = parsed.data;
  if (enquiry.websiteTrap) return response("invalid_request", 400);

  const formId = formIdSchema.safeParse(process.env.FORMSPREE_FORM_ID);
  if (!formId.success) return response("not_configured", 503);

  const subject = enquiry.locale === "ru" ? "Новая заявка на сайт" : "New website enquiry";

  try {
    const delivery = await fetch(`https://formspree.io/f/${formId.data}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        _subject: subject,
        _replyto: enquiry.email,
        name: enquiry.name,
        email: enquiry.email,
        company: enquiry.company,
        website: enquiry.website,
        service: enquiry.service,
        budget: enquiry.budget,
        timeline: enquiry.timeline,
        details: enquiry.details,
        consent: enquiry.consent,
        locale: enquiry.locale,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!delivery.ok) return response("delivery_failed", 502);
  } catch {
    return response("delivery_failed", 502);
  }

  return Response.json({ ok: true }, { status: 200, headers: { "Cache-Control": "no-store" } });
}

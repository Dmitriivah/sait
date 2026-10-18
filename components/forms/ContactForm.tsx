"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/config/site";
import { copy } from "@/lib/content";

type FormState = "idle" | "sending" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    for (const control of Array.from(form.elements)) {
      if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement)) continue;
      control.setCustomValidity("");
      if (control.validity.valueMissing) control.setCustomValidity(t.fields.required);
      else if (control.validity.typeMismatch) control.setCustomValidity(t.fields.invalidEmail);
      else if (control.validity.tooShort) control.setCustomValidity(t.fields.detailsMin);
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setState("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), locale }),
      });
      if (!response.ok) {
        const payload: { error?: string } = await response.json().catch(() => ({}));
        if (payload.error === "not_configured") throw new Error(t.contact.notConfigured);
        if (payload.error === "invalid_fields") throw new Error(locale === "ru" ? "Проверьте обязательные поля формы." : "Please check the required form fields.");
        throw new Error(payload.error ?? t.fields.error);
      }
      router.push(`/${locale}/thanks`);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : t.fields.error);
      setState("error");
    }
  }

  const services = t.services.map((service) => service.title);
  return (
    <form className="contact-form" id="project-form" onSubmit={handleSubmit} onInput={(event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) target.setCustomValidity("");
    }} noValidate>
      <div className="form-grid">
        <label className="field"><span>{t.fields.name} <b>*</b></span><input autoComplete="name" name="name" required maxLength={100} placeholder={locale === "ru" ? "Как к вам обращаться" : "Your name"} /></label>
        <label className="field"><span>{t.fields.email} <b>*</b></span><input autoComplete="email" type="email" name="email" required maxLength={254} placeholder="name@example.com" /></label>
        <label className="field"><span>{t.fields.company}</span><input autoComplete="organization" name="company" maxLength={120} placeholder={locale === "ru" ? "Название компании" : "Company name"} /></label>
        <label className="field"><span>{t.fields.website}</span><input type="url" name="website" maxLength={2048} placeholder="https://" /></label>
        <label className="field"><span>{t.fields.service}</span><select name="service" defaultValue=""><option value="">{locale === "ru" ? "Выберите вариант" : "Select an option"}</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
        <label className="field"><span>{t.fields.budget}</span><input name="budget" maxLength={100} placeholder={locale === "ru" ? "Если уже определён" : "If you have a range in mind"} /></label>
        <label className="field field-wide"><span>{t.fields.details} <b>*</b></span><textarea name="details" required minLength={20} maxLength={5000} rows={5} placeholder={locale === "ru" ? "Расскажите об услуге, аудитории и том, какой результат вам нужен…" : "Tell me about your service, audience, and what you need from a website…"} /></label>
        <label className="field field-wide"><span>{t.fields.timeline}</span><input name="timeline" maxLength={200} placeholder={locale === "ru" ? "Например, ориентировочный месяц" : "For example, an approximate month"} /></label>
      </div>
      <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="websiteTrap" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="consent-field"><input type="checkbox" name="consent" required /><span>{locale === "ru" ? "Я согласен(на) на обработку данных для ответа на мой запрос согласно" : "I agree to the use of my details to respond to this enquiry under the"} <a href={`/${locale}/privacy-policy`} target="_blank" rel="noreferrer">{locale === "ru" ? "политике конфиденциальности" : "privacy policy"}</a>.</span></label>
      <p className="form-note">{t.contact.note}</p>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-accent form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? t.fields.sending : t.fields.send}<span aria-hidden="true">↗</span></button>
    </form>
  );
}

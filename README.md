# Dmitry — bilingual web design portfolio

A responsive Russian/English portfolio for Dmitry, an independent web designer and developer. It includes three explicitly fictional design concepts, localized service and project pages, SEO metadata, and a server-validated contact form.

## Requirements

- Node.js 20.9 or later (tested with Node 24).
- npm.

## Run locally

```powershell
Copy-Item .env.example .env.local
npm.cmd install
npm.cmd run dev
```

Open <http://localhost:3000/ru> or <http://localhost:3000/en>. Set `FORMSPREE_FORM_ID=xvkzdozd` in `.env.local` to deliver enquiries to the Formspree form supplied by the site owner. Do not submit test or production enquiries until you are ready to receive them.

## Share a temporary preview with devices on the same Wi-Fi

Run the development server on all network interfaces:

```powershell
npm.cmd run dev -- --hostname 0.0.0.0 --port 3000
```

Open `http://<this-computer's-local-IP>:3000/ru` on another device connected to the same non-guest Wi-Fi. Find this PC's IPv4 address with `ipconfig` (for this setup it is currently `192.168.1.31`). Keep this PC awake and the dev server running. This is a temporary local-network preview, not a public Internet deployment; the address can change when reconnecting to Wi-Fi. If another device cannot connect, Windows Firewall may block inbound TCP 3000. An administrator can create a narrowly scoped rule for the local subnet:

```powershell
New-NetFirewallRule -DisplayName "Dmitry website preview (local network)" -Direction Inbound -Protocol TCP -LocalPort 3000 -Action Allow -RemoteAddress LocalSubnet -Profile Public
```

## Production build

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd run start
```

Deploy to Vercel or another Node.js host that supports the Next.js App Router and server route handlers. A hosting account and a real domain are not configured from this project.

## Before launch

1. Set `SITE_URL` to your real HTTPS domain in `.env.local` and again in your hosting environment. The checked-in example uses `http://localhost:3000` for local development.
2. Set `FORMSPREE_FORM_ID=xvkzdozd` locally and in your hosting environment. The form ID is the endpoint provided by the site owner; delivery depends on Formspree having that form active and verified.
3. Confirm that the public email address and telephone number in `config/site.ts` are correct and that you intend them to be visible to all visitors.
4. Review the Russian and English About text. It uses only the name supplied by the owner and makes no claims about client work or experience.
5. Review both privacy-policy pages against your jurisdiction and Formspree's current privacy terms; complete any applicable data-retention and international-transfer details before launch.
6. If using a custom domain, buy or connect one using an account you control, configure its DNS at your hosting provider, and set the resulting URL as `SITE_URL`. Neither a domain nor hosting account is supplied by this project.
7. After deployment, check all routes and language variants, submit one clearly identified test enquiry to the supplied Formspree form, confirm that it arrives at the owner's email, and verify the success and failure paths.
8. Choose an analytics provider before adding analytics. No tracking scripts or analytics events are installed by default.

## Contact email setup

The endpoint is `POST /api/contact`. It validates all fields on the server with Zod, limits the request size, uses a hidden honeypot, requires privacy consent, and forwards enquiries to the Formspree endpoint on the server. The form shows success only after Formspree accepts the message. If the form ID is missing or the provider rejects the request, the endpoint returns an error and the localized form displays an error instead. Enquiries are transmitted to a third-party service; the privacy policy must describe the actual handling and retention.

The site owner supplied the Formspree endpoint `https://formspree.io/f/xvkzdozd`. Its form ID is saved in the ignored local `.env.local` file and must also be set in the deployment provider's environment variables. No Resend API key or mail-sender domain is required. `.env.local` is excluded from Git; do not commit it.

## Updating content

- Site name, canonical origin, language settings, contact email, telephone number, and social URLs: `config/site.ts`. Confirm that the email and phone are public contact details before deployment.
- Russian and natural English content, project descriptions, project navigation, and service details: `lib/content.ts`.
- Project detail routes use the shared slug list in `app/[locale]/projects/[slug]/page.tsx`. Add each project to both language dictionaries and the slug list.
- Metadata and hreflang generation: `lib/seo.ts`; routes and sitemap entries: `app/sitemap.ts`.
- Design tokens and responsive styles: `app/globals.css`.

The three portfolio entries are visual/concept studies, not client work. Keep their concept labels and do not add fictional testimonials, customer names, awards, or business results.

## Integrations and deployment notes

- Contact delivery is configured to use the provided Formspree form ID. A production delivery test has not been sent; verify the form and its notification settings before launch.
- `SITE_URL` must be changed before publication so canonical URLs, sitemap, robots, and social metadata point to the correct domain.
- No hosting account or custom domain is connected; deployment and DNS changes must be made through accounts controlled by the site owner.
- Analytics, cookie tracking, CRM, and other third-party integrations are intentionally not enabled.
- The privacy page is a template, not legal advice or a claim of compliance for a particular jurisdiction.
- Illustrations are original inline SVG artwork; no remote image or font service is required.
- `npm audit --omit=dev` reported no production dependency vulnerabilities at the last check. Re-run the audit before launch.
- The full audit still reports a high-severity `braces` advisory in the development-only ESLint/Next.js lint toolchain. `npm audit fix --force` proposes downgrading `eslint-config-next` to a different Next.js major version, so it was not applied. Recheck for a compatible upstream fix before updating dependencies.

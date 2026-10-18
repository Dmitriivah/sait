import { ChevronDown } from "lucide-react";
import type { Locale } from "@/config/site";
import { copy } from "@/lib/content";

export function Accordion({ locale }: { locale: Locale }) {
  return (
    <div className="faq-list">
      {copy[locale].faq.map(([question, answer], index) => (
        <details className="faq-item" key={question}>
          <summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{question}</span><ChevronDown size={18} aria-hidden="true" /></summary>
          <div className="faq-answer"><p>{answer}</p></div>
        </details>
      ))}
    </div>
  );
}

import type { Project } from "@/lib/content";

export function ProjectArtwork({ project, compact = false }: { project: Project; compact?: boolean }) {
  const title = project.name;
  return (
    <div className={`artwork artwork-${project.palette}${compact ? " artwork-compact" : ""}`} role="img" aria-label={`${title} — ${project.category}`}>
      {project.palette === "northline" && (
        <svg viewBox="0 0 900 590" aria-hidden="true">
          <rect width="900" height="590" fill="#171a1d" />
          <circle cx="735" cy="164" r="112" fill="none" stroke="#bbb9ad" strokeOpacity=".22" />
          <circle cx="735" cy="164" r="78" fill="none" stroke="#bbb9ad" strokeOpacity=".16" />
          <path d="M0 430H900M580 0V590M36 80H864M36 510H864" stroke="#ccc9bc" strokeOpacity=".2" />
          <text x="42" y="56" fill="#e8e5db" fontSize="12" letterSpacing="4">NORTHLINE / ADVISORY</text>
          <text x="42" y="213" fill="#f3f1e8" fontSize="68" fontFamily="Georgia,serif" letterSpacing="-4">A clearer</text>
          <text x="42" y="283" fill="#f3f1e8" fontSize="68" fontFamily="Georgia,serif" letterSpacing="-4">way forward.</text>
          <text x="44" y="333" fill="#aaa99f" fontSize="15">Thoughtful operations. Sustainable progress.</text>
          <rect x="44" y="378" width="150" height="42" rx="21" fill="#dce477" />
          <text x="66" y="405" fill="#1a1d1b" fontSize="12" letterSpacing="1">OUR APPROACH ↗</text>
          <path d="M610 339h204m-164 31h164m-124 31h124" stroke="#d9d6cb" strokeOpacity=".34" />
          <rect x="622" y="458" width="176" height="47" fill="none" stroke="#aaa99f" strokeOpacity=".5" />
          <text x="646" y="487" fill="#e8e5db" fontSize="12">START A CONVERSATION</text>
        </svg>
      )}
      {project.palette === "atelier" && (
        <svg viewBox="0 0 900 590" aria-hidden="true">
          <rect width="900" height="590" fill="#e6dfd3" />
          <rect x="335" y="84" width="474" height="430" fill="#aa9b86" />
          <rect x="378" y="113" width="389" height="371" fill="#c8bdad" />
          <rect x="406" y="141" width="178" height="248" fill="#7e8175" />
          <rect x="601" y="141" width="139" height="180" fill="#eee8de" />
          <rect x="600" y="336" width="141" height="116" fill="#74766b" />
          <path d="M406 388h178m-162-20 90-84 72 84" fill="none" stroke="#ddd5c9" strokeWidth="5" />
          <path d="M430 389v-76m33 76v-98m36 98v-66m43 66v-85" stroke="#ddd5c9" strokeWidth="2" />
          <rect x="566" y="424" width="203" height="72" fill="#b6a895" />
          <rect x="591" y="389" width="92" height="49" rx="22" fill="#d6ccbd" />
          <circle cx="716" cy="337" r="27" fill="#91806a" />
          <path d="M716 337v-89m0 44-34-33m34 20 32-34" stroke="#6a715f" strokeWidth="8" />
          <text x="48" y="55" fill="#514c43" fontSize="12" letterSpacing="3">ATELIER FORM / SPACES</text>
          <text x="48" y="239" fill="#2c2b28" fontSize="56" fontFamily="Georgia,serif">A quieter</text>
          <text x="48" y="301" fill="#2c2b28" fontSize="56" fontFamily="Georgia,serif">kind of home.</text>
          <path d="M49 353h225" stroke="#7d756a" />
          <text x="49" y="389" fill="#5c564d" fontSize="14">Spaces shaped around</text>
          <text x="49" y="413" fill="#5c564d" fontSize="14">how you want to live.</text>
          <text x="49" y="515" fill="#5c564d" fontSize="11" letterSpacing="2">INTERIORS / OBJECTS / PROCESS</text>
        </svg>
      )}
      {project.palette === "clearspace" && (
        <svg viewBox="0 0 900 590" aria-hidden="true">
          <rect width="900" height="590" fill="#d8f05c" />
          <path d="M612 0h288v590H557c78-126 116-323 55-590Z" fill="#bdde45" />
          <rect x="412" y="98" width="392" height="373" rx="4" fill="#f5f5ef" />
          <rect x="442" y="127" width="332" height="236" fill="#d9ded5" />
          <rect x="459" y="143" width="144" height="204" fill="#a6b3a2" />
          <rect x="614" y="143" width="143" height="126" fill="#f0f1e8" />
          <rect x="614" y="280" width="143" height="67" fill="#9ba990" />
          <path d="M459 347h298M474 331l51-49 45 49m46 0 51-58 68 58" stroke="#fff" strokeWidth="4" fill="none" />
          <rect x="442" y="380" width="332" height="68" fill="#26312a" />
          <text x="462" y="408" fill="#f5f5ef" fontSize="12" letterSpacing="2">A BETTER KIND OF CLEAN.</text>
          <text x="462" y="432" fill="#ccd2c7" fontSize="11">Thoughtful care for working spaces.</text>
          <text x="42" y="57" fill="#273129" fontSize="12" letterSpacing="4">CLEARSPACE / FACILITIES</text>
          <text x="42" y="208" fill="#202923" fontSize="62" fontFamily="Arial,sans-serif" fontWeight="600" letterSpacing="-4">Space to</text>
          <text x="42" y="274" fill="#202923" fontSize="62" fontFamily="Arial,sans-serif" fontWeight="600" letterSpacing="-4">do your best.</text>
          <text x="45" y="326" fill="#414b40" fontSize="14">Considered cleaning for</text>
          <text x="45" y="349" fill="#414b40" fontSize="14">workplaces that work harder.</text>
          <rect x="45" y="386" width="166" height="45" rx="23" fill="#202923" />
          <text x="67" y="414" fill="#eff5e2" fontSize="12" letterSpacing="1">LET&apos;S TALK ↗</text>
          <text x="45" y="516" fill="#414b40" fontSize="11" letterSpacing="2">WORKPLACE CARE / MADE CLEAR</text>
        </svg>
      )}
      <span className="artwork-caption">{project.name} <span>— concept study</span></span>
    </div>
  );
}

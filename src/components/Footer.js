import Link from "next/link";
import { SITE, NAV } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-sm text-milk/70">
      <div className="container-x grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-extrabold tracking-[0.14em] text-lime">HEALTHY FOOD</p>
          <p className="mt-2 max-w-xs">Полезная еда с прозрачным КБЖУ в Алматы.</p>
        </div>
        <nav aria-label="Навигация в подвале">
          <ul className="grid grid-cols-2 gap-2">
            {[...NAV.slice(1), { href: "/delivery", label: "Доставка" }, { href: "/contacts", label: "Контакты" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-lime">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <p>{SITE.address}</p><p>{SITE.hours}</p>
          <p><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-lime">{SITE.phone}</a></p>
        </address>
      </div>
    </footer>
  );
}

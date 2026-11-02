"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { NAV } from "@/config/site";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-ink text-milk">
      <div className="container-x flex h-16 items-center gap-6">
        <Link href="/" className="font-extrabold tracking-[0.14em] text-lime">HEALTHY FOOD</Link>
        <nav aria-label="Основная навигация" className="mx-auto hidden gap-6 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}
              className={`text-sm transition hover:text-lime ${pathname === n.href ? "text-lime" : "text-milk/75"}`}>{n.label}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <Link href="/cart" aria-label={`Корзина, товаров: ${count}`} className="relative p-1">
            <ShoppingBag size={22} />
            {count > 0 && <span className="absolute -right-1 -top-1 min-w-[18px] rounded-full bg-clay px-1 text-center text-[11px] font-bold text-ink">{count}</span>}
          </Link>
          <Link href="/menu" className="btn-lime hidden px-4 py-2 md:inline-flex">Заказать</Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Закрыть меню" : "Открыть меню"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Мобильная навигация" className="border-t border-milk/10 px-5 pb-5 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-milk/10 py-3 text-lg font-semibold">{n.label}</Link></li>
            ))}
          </ul>
          <Link href="/menu" onClick={() => setOpen(false)} className="btn-lime mt-4 w-full">Заказать</Link>
        </nav>
      )}
    </header>
  );
}

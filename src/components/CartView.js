"use client";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { GridSkeleton } from "./Skeleton";

export default function CartView() {
  const { items, ready, total, change, remove } = useCart();
  if (!ready) return <GridSkeleton n={2} />;
  if (!items.length) return (
    <div className="rounded-lg border-2 border-dashed border-ink/15 p-10 text-center">
      <p className="font-bold">В корзине пока пусто</p>
      <Link href="/menu" className="btn-lime mt-4">Выбрать блюда</Link>
    </div>
  );
  return (
    <div>
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {items.map((i) => (
          <li key={i.id} className="grid grid-cols-[1fr_auto] items-center gap-4 py-4 sm:grid-cols-[1fr_auto_auto_auto]">
            <div><p className="font-bold">{i.name}</p>{i.note && <p className="text-xs text-ink/60">{i.note}</p>}<p className="text-sm text-ink/70">{formatPrice(i.price)}</p></div>
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 rounded border-2 border-ink/15 font-bold" aria-label={`Уменьшить количество: ${i.name}`} onClick={() => change(i.id, -1)}>−</button>
              <span className="w-6 text-center font-bold">{i.qty}</span>
              <button className="h-8 w-8 rounded border-2 border-ink/15 font-bold" aria-label={`Увеличить количество: ${i.name}`} onClick={() => change(i.id, 1)}>+</button>
            </div>
            <p className="font-extrabold sm:w-28 sm:text-right">{formatPrice(i.price * i.qty)}</p>
            <button onClick={() => remove(i.id)} aria-label={`Удалить: ${i.name}`} className="rounded p-2 hover:bg-ink/5"><Trash2 size={18} /></button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xl">Итого: <b className="text-2xl font-extrabold">{formatPrice(total)}</b></p>
        <Link href="/checkout" className="btn-lime">Перейти к оформлению</Link>
      </div>
    </div>
  );
}

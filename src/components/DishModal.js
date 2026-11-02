"use client";
import { useEffect, useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import Plate from "./Plate";
import Macros from "./Macros";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function DishModal({ dish, onClose }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 sm:items-center sm:p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={dish.name} onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-xl bg-white p-6 sm:rounded-xl">
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Закрыть" className="rounded p-1 hover:bg-ink/5"><X size={22} /></button>
        </div>
        <Plate hue={dish.hue} image={dish.image} alt={dish.name} className="mx-auto w-40" />
        <p className="mt-4 text-xs font-bold tracking-wide text-ink/60">{dish.mode}</p>
        <h2 className="text-2xl font-extrabold">{dish.name}</h2>
        <p className="mt-2 text-sm text-ink/70">Состав: {dish.ingredients.join(", ")}</p>
        <p className="mt-1 text-sm text-ink/70">Вес порции: {dish.weight} г</p>
        <p className="mt-1 text-sm text-ink/70">Аллергены: {dish.allergens.length ? dish.allergens.join(", ") : "не указаны"}</p>
        <Macros kcal={dish.kcal} p={dish.protein} f={dish.fat} c={dish.carbs} className="mt-3 text-sm" />
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-extrabold">{formatPrice(dish.price)}</span>
          <div className="flex items-center gap-3">
            <button aria-label="Меньше" onClick={() => setQty(Math.max(1, qty - 1))} className="rounded border-2 border-ink/15 p-1.5"><Minus size={16} /></button>
            <span className="w-5 text-center font-bold" aria-live="polite">{qty}</span>
            <button aria-label="Больше" onClick={() => setQty(qty + 1)} className="rounded border-2 border-ink/15 p-1.5"><Plus size={16} /></button>
          </div>
        </div>
        <button className="btn-lime mt-5 w-full" onClick={() => { add({ id: dish.id, name: dish.name, price: dish.price }, qty); onClose(); }}>
          Добавить в корзину · {formatPrice(dish.price * qty)}
        </button>
      </div>
    </div>
  );
}

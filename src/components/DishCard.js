"use client";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import Plate from "./Plate";
import Macros from "./Macros";
import DishModal from "./DishModal";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function DishCard({ dish }) {
  const { add } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white transition hover:shadow-lg">
      <button onClick={() => setOpen(true)} aria-label={`Подробнее: ${dish.name}`} className="flex justify-center bg-ink/[0.04] p-5">
        <Plate hue={dish.hue} image={dish.image} alt={dish.name} className="w-32" />
      </button>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded bg-lime px-2 py-0.5 text-xs font-bold">{dish.mode}</span>
        <h3 className="text-lg font-extrabold leading-tight">{dish.name}</h3>
        <p className="text-sm text-ink/65">{dish.description}</p>
        <Macros kcal={dish.kcal} p={dish.protein} f={dish.fat} c={dish.carbs} />
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-extrabold">{formatPrice(dish.price)}</span>
          <div className="flex gap-2">
            <button className="btn-line px-3 py-2" onClick={() => setOpen(true)}>Состав</button>
            <button className="btn-lime px-3 py-2" onClick={() => add({ id: dish.id, name: dish.name, price: dish.price })} aria-label={`Добавить в корзину: ${dish.name}`}>
              <ShoppingBag size={16} />В корзину
            </button>
          </div>
        </div>
      </div>
      {open && <DishModal dish={dish} onClose={() => setOpen(false)} />}
    </article>
  );
}

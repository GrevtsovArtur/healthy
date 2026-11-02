"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DishCard from "./DishCard";
import { CATEGORIES } from "@/data/dishes";
import { formatPrice } from "@/lib/format";

export default function MenuCatalog({ dishes }) {
  const params = useSearchParams();
  const initial = CATEGORIES.some((c) => c.id === params.get("cat")) ? params.get("cat") : "all";
  const [cat, setCat] = useState(initial);
  const [maxKcal, setMaxKcal] = useState(900);
  const [minProtein, setMinProtein] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [ingredient, setIngredient] = useState("");

  const allIngredients = useMemo(() => [...new Set(dishes.flatMap((d) => d.ingredients))].sort((a, b) => a.localeCompare(b, "ru")), [dishes]);

  const list = useMemo(() => dishes.filter((d) =>
    (cat === "all" || d.category === cat || d.mode === cat) &&
    d.kcal <= maxKcal && d.protein >= minProtein && d.price <= maxPrice &&
    (!ingredient || d.ingredients.includes(ingredient))
  ), [dishes, cat, maxKcal, minProtein, maxPrice, ingredient]);

  const reset = () => { setCat("all"); setMaxKcal(900); setMinProtein(0); setMaxPrice(5000); setIngredient(""); };

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Категории">
        {CATEGORIES.map((c) => (
          <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</button>
        ))}
      </div>

      <div className="my-6 grid gap-4 rounded-lg border border-ink/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="grid gap-1 text-sm font-semibold">Калории до {maxKcal} ккал
          <input type="range" min="100" max="900" step="50" value={maxKcal} onChange={(e) => setMaxKcal(+e.target.value)} className="accent-ink" /></label>
        <label className="grid gap-1 text-sm font-semibold">Белок от {minProtein} г
          <input type="range" min="0" max="40" step="2" value={minProtein} onChange={(e) => setMinProtein(+e.target.value)} className="accent-ink" /></label>
        <label className="grid gap-1 text-sm font-semibold">Цена до {formatPrice(maxPrice)}
          <input type="range" min="800" max="5000" step="100" value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="accent-ink" /></label>
        <label className="grid gap-1 text-sm font-semibold">Ингредиент
          <select className="field" value={ingredient} onChange={(e) => setIngredient(e.target.value)}>
            <option value="">Любой</option>
            {allIngredients.map((i) => <option key={i} value={i}>{i}</option>)}
          </select></label>
      </div>

      <p className="mb-4 text-sm text-ink/60" aria-live="polite">Найдено блюд: {list.length}</p>
      {list.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((d) => <DishCard key={d.id} dish={d} />)}</div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-ink/15 p-10 text-center">
          <p className="font-bold">Ничего не найдено</p>
          <p className="mt-1 text-sm text-ink/60">Ослабьте фильтры или сбросьте их.</p>
          <button className="btn-ink mt-4" onClick={reset}>Сбросить фильтры</button>
        </div>
      )}
    </div>
  );
}

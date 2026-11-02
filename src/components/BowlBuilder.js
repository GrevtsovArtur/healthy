"use client";
import { useMemo, useState } from "react";
import Macros from "./Macros";
import { useCart } from "@/context/CartContext";
import { calcBowl } from "@/lib/nutrition";
import { formatPrice, round } from "@/lib/format";

const INITIAL = { base: ["rice"], protein: ["chicken"], veg: ["tomato"], extras: [], sauce: ["yogurt"] };

export default function BowlBuilder({ steps }) {
  const { add } = useCart();
  const [sel, setSel] = useState(INITIAL);
  const result = useMemo(() => calcBowl(steps, sel), [steps, sel]);

  const toggle = (step, id) => setSel((s) => {
    const cur = s[step.id] || [];
    if (step.multiple) return { ...s, [step.id]: cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id] };
    return { ...s, [step.id]: [id] };
  });

  const gradient = useMemo(() => {
    if (!result.picked.length) return "#d9d8cf";
    let acc = 0;
    const parts = result.picked.map((ing) => {
      const from = (acc / result.grams) * 100; acc += ing.grams;
      return `${ing.color} ${from}% ${(acc / result.grams) * 100}%`;
    });
    return `conic-gradient(${parts.join(", ")})`;
  }, [result]);

  const addToCart = () => {
    const names = result.picked.map((i) => i.name);
    const id = "bowl-" + result.picked.map((i) => i.id).join("-");
    add({ id, name: "Свой Bowl", price: result.price, note: `${names.join(", ")} · ${round(result.kcal)} ккал` });
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <div className="grid gap-8">
        {steps.map((step) => (
          <fieldset key={step.id}>
            <legend className="mb-3 text-lg font-extrabold">{step.title}{step.multiple && <span className="ml-2 text-sm font-medium text-ink/55">можно несколько</span>}</legend>
            <div className="flex flex-wrap gap-2">
              {step.items.map((ing) => (
                <button key={ing.id} type="button" className="chip flex items-center gap-2" aria-pressed={(sel[step.id] || []).includes(ing.id)} onClick={() => toggle(step, ing.id)}>
                  <span className="h-3 w-3 rounded-full border border-ink/20" style={{ background: ing.color }} aria-hidden="true" />
                  {ing.name}<span className="font-normal text-ink/55">{formatPrice(ing.price)}</span>
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <aside className="h-fit rounded-lg bg-ink p-6 text-milk lg:sticky lg:top-24" aria-label="Ваш Bowl">
        <div className="mx-auto aspect-square w-48 rounded-full p-2 ring-4 ring-milk/10" style={{ background: gradient }} role="img" aria-label="Состав Bowl">
          <div className="h-full w-full rounded-full bg-ink/10" />
        </div>
        <p className="mt-4 text-center text-sm text-milk/70">{result.picked.map((i) => i.name).join(" · ") || "Выберите ингредиенты"}</p>
        <div className="mt-5 grid grid-cols-4 gap-2 text-center">
          {[["ккал", result.kcal], ["Белки", result.p], ["Жиры", result.f], ["Углеводы", result.c]].map(([l, v]) => (
            <div key={l} className="rounded bg-milk/10 py-2"><p className="text-lg font-extrabold text-lime">{round(v)}</p><p className="text-[11px] text-milk/65">{l}</p></div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-milk/70">Вес: {round(result.grams)} г</p>
        <div className="mt-4 flex items-center justify-between"><span>Стоимость</span><span className="text-2xl font-extrabold">{formatPrice(result.price)}</span></div>
        <button className="btn-lime mt-4 w-full" onClick={addToCart} disabled={!result.picked.length}>Добавить Bowl в корзину</button>
      </aside>
    </div>
  );
}

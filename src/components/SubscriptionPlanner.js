"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PROGRAMS, TARIFFS } from "@/data/programs";
import { formatPrice } from "@/lib/format";

export default function SubscriptionPlanner() {
  const router = useRouter();
  const params = useSearchParams();
  const { add } = useCart();
  const [tariffId, setTariffId] = useState("SMART");
  const [mode, setMode] = useState(PROGRAMS[params.get("mode")] ? params.get("mode") : "BALANCE");
  const [meals, setMeals] = useState(PROGRAMS[mode].meals);
  const [days, setDays] = useState("Пн–Пт");
  const [pickup, setPickup] = useState("Доставка");

  const tariff = TARIFFS.find((t) => t.id === tariffId);
  const program = PROGRAMS[mode];
  const price = Math.round(program.pricePerDay * (meals / program.meals) * tariff.days * (1 - tariff.discount / 100));

  const submit = () => {
    add({ id: `sub-${tariffId}-${mode}-${meals}-${days}-${pickup}`, name: `Подписка ${tariffId} · ${tariff.days} дней`, price,
      note: `${mode}, ${meals} приёма в день, ${days}, ${pickup}` });
    router.push("/cart");
  };

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {TARIFFS.map((t) => (
          <button key={t.id} type="button" onClick={() => setTariffId(t.id)} aria-pressed={tariffId === t.id}
            className={`rounded-lg border-2 p-6 text-left transition ${tariffId === t.id ? "border-ink bg-lime" : "border-ink/10 bg-white hover:border-ink/40"}`}>
            <h2 className="text-2xl font-extrabold">{t.id}</h2>
            <p className="font-bold">{t.days} дней</p>
            <ul className="mt-3 grid gap-1 text-sm">{t.perks.map((p) => <li key={p}>{p}</li>)}</ul>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-semibold">Тип питания
          <select className="field" value={mode} onChange={(e) => { setMode(e.target.value); setMeals(PROGRAMS[e.target.value].meals); }}>
            {Object.keys(PROGRAMS).map((k) => <option key={k}>{k}</option>)}
          </select></label>
        <label className="grid gap-1 text-sm font-semibold">Приёмов пищи в день
          <select className="field" value={meals} onChange={(e) => setMeals(+e.target.value)}>{[2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}</select></label>
        <label className="grid gap-1 text-sm font-semibold">Дни получения
          <select className="field" value={days} onChange={(e) => setDays(e.target.value)}>{["Пн–Пт", "Пн–Сб", "Ежедневно"].map((d) => <option key={d}>{d}</option>)}</select></label>
        <label className="grid gap-1 text-sm font-semibold">Способ получения
          <select className="field" value={pickup} onChange={(e) => setPickup(e.target.value)}><option>Доставка</option><option>Самовывоз</option></select></label>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-ink p-5 text-milk">
        <p>Итого: <b className="text-2xl text-lime">{formatPrice(price)}</b><span className="ml-2 text-sm text-milk/60">демонстрационный расчёт</span></p>
        <button className="btn-lime" onClick={submit}>Оформить подписку</button>
      </div>
    </div>
  );
}

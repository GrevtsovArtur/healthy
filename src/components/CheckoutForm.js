"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/lib/api";
import { formatPrice } from "@/lib/format";

const EMPTY = { name: "", phone: "", address: "", entrance: "", floor: "", apartment: "", comment: "", time: "", method: "Доставка", payment: "Онлайн" };

export default function CheckoutForm() {
  const { items, ready, total, clear } = useCart();
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = "Укажите имя";
    if (!/^[+\d][\d\s()-]{9,}$/.test(f.phone.trim())) e.phone = "Введите корректный телефон";
    if (f.method === "Доставка" && !f.address.trim()) e.address = "Укажите адрес доставки";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    const res = await createOrder({ ...f, items, total }); // Демо: сервер не вызывается.
    setDone({ name: f.name, total, demo: res.demo });
    clear();
  };

  if (done) return (
    <div className="rounded-lg bg-lime p-8 text-center">
      <p className="text-xs font-bold tracking-widest">ДЕМО-ЗАКАЗ ОФОРМЛЕН</p>
      <h2 className="mt-2 text-3xl font-extrabold">Спасибо, {done.name}!</h2>
      <p className="mt-2">Сумма заказа: {formatPrice(done.total)}. Заказ не отправлен и оплата не списана — backend не подключён.</p>
      <Link href="/" className="btn-ink mt-6">На главную</Link>
    </div>
  );
  if (!ready) return <div className="h-64 animate-pulse rounded-lg bg-ink/10" />;
  if (!items.length) return (<div><p>Корзина пуста.</p><Link href="/menu" className="btn-lime mt-4">В меню</Link></div>);

  const Err = ({ k }) => (errors[k] ? <span className="text-xs text-red-700">{errors[k]}</span> : null);
  return (
    <form onSubmit={submit} noValidate className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="grid gap-4">
        <label className="grid gap-1 text-sm font-semibold">Способ получения
          <select className="field" value={f.method} onChange={set("method")}><option>Доставка</option><option>Самовывоз</option></select></label>
        <label className="grid gap-1 text-sm font-semibold">Имя *<input className="field" value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} /><Err k="name" /></label>
        <label className="grid gap-1 text-sm font-semibold">Телефон *<input className="field" type="tel" value={f.phone} onChange={set("phone")} placeholder="+7" autoComplete="tel" aria-invalid={!!errors.phone} /><Err k="phone" /></label>
        {f.method === "Доставка" && (<>
          <label className="grid gap-1 text-sm font-semibold">Адрес *<input className="field" value={f.address} onChange={set("address")} autoComplete="street-address" aria-invalid={!!errors.address} /><Err k="address" /></label>
          <div className="grid grid-cols-3 gap-3">
            <label className="grid gap-1 text-sm font-semibold">Подъезд<input className="field" value={f.entrance} onChange={set("entrance")} /></label>
            <label className="grid gap-1 text-sm font-semibold">Этаж<input className="field" value={f.floor} onChange={set("floor")} /></label>
            <label className="grid gap-1 text-sm font-semibold">Квартира<input className="field" value={f.apartment} onChange={set("apartment")} /></label>
          </div></>)}
        <label className="grid gap-1 text-sm font-semibold">Желаемое время<input className="field" type="time" value={f.time} onChange={set("time")} /></label>
        <label className="grid gap-1 text-sm font-semibold">Способ оплаты
          <select className="field" value={f.payment} onChange={set("payment")}><option>Онлайн</option><option>При получении</option></select></label>
        <label className="grid gap-1 text-sm font-semibold">Комментарий<textarea rows={3} className="field" value={f.comment} onChange={set("comment")} /></label>
      </div>
      <aside className="h-fit rounded-lg bg-ink p-6 text-milk">
        <h2 className="font-extrabold">Ваш заказ</h2>
        <ul className="mt-3 grid gap-1 text-sm text-milk/80">{items.map((i) => <li key={i.id} className="flex justify-between gap-2"><span>{i.name} × {i.qty}</span><span>{formatPrice(i.price * i.qty)}</span></li>)}</ul>
        <p className="mt-4 flex justify-between text-lg font-extrabold"><span>Итого</span><span className="text-lime">{formatPrice(total)}</span></p>
        <button className="btn-lime mt-4 w-full">Подтвердить заказ</button>
        <p className="mt-3 text-xs text-milk/60">Демо: оплата не проводится, заказ не отправляется.</p>
      </aside>
    </form>
  );
}

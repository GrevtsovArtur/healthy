"use client";
import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const err = {};
    if (!String(f.get("name")).trim()) err.name = "Укажите имя";
    if (!String(f.get("message")).trim()) err.message = "Напишите сообщение";
    setErrors(err);
    setSent(Object.keys(err).length === 0); // Демо: сообщение никуда не отправляется.
  };
  if (sent) return <p role="status" className="rounded-lg bg-lime p-5 font-bold">Демо: форма заполнена верно, но сообщение не отправлено — backend не подключён.</p>;
  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <label className="grid gap-1 text-sm font-semibold">Имя<input name="name" className="field" aria-invalid={!!errors.name} />
        {errors.name && <span className="text-xs text-red-700">{errors.name}</span>}</label>
      <label className="grid gap-1 text-sm font-semibold">Сообщение<textarea name="message" rows={4} className="field" aria-invalid={!!errors.message} />
        {errors.message && <span className="text-xs text-red-700">{errors.message}</span>}</label>
      <button className="btn-ink w-fit">Отправить</button>
    </form>
  );
}

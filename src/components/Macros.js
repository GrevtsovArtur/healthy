import { round } from "@/lib/format";

export default function Macros({ kcal, p, f, c, className = "" }) {
  return (
    <dl className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60 ${className}`}>
      <div className="flex gap-1"><dt>ккал</dt><dd className="font-bold text-ink">{round(kcal)}</dd></div>
      <div className="flex gap-1"><dt>Б</dt><dd className="font-bold text-ink">{round(p)}</dd></div>
      <div className="flex gap-1"><dt>Ж</dt><dd className="font-bold text-ink">{round(f)}</dd></div>
      <div className="flex gap-1"><dt>У</dt><dd className="font-bold text-ink">{round(c)}</dd></div>
    </dl>
  );
}

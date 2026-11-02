"use client";
import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const KEY = "hf-cart-v1";
const CartContext = createContext(null);

function reducer(state, a) {
  switch (a.type) {
    case "init": return a.items;
    case "add": {
      const found = state.find((x) => x.id === a.item.id);
      const qty = a.qty || 1;
      return found ? state.map((x) => (x.id === found.id ? { ...x, qty: x.qty + qty } : x)) : [...state, { ...a.item, qty }];
    }
    case "change": return state.map((x) => (x.id === a.id ? { ...x, qty: Math.max(1, x.qty + a.delta) } : x));
    case "remove": return state.filter((x) => x.id !== a.id);
    case "clear": return [];
    default: return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) dispatch({ type: "init", items: JSON.parse(raw) });
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items, ready]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1600);
    return () => clearTimeout(t);
  }, [toast]);

  const value = useMemo(() => ({
    items, ready,
    count: items.reduce((s, i) => s + i.qty, 0),
    total: items.reduce((s, i) => s + i.price * i.qty, 0),
    add: (item, qty = 1) => { dispatch({ type: "add", item, qty }); setToast("Добавлено в корзину"); },
    change: (id, delta) => dispatch({ type: "change", id, delta }),
    remove: (id) => dispatch({ type: "remove", id }),
    clear: () => dispatch({ type: "clear" }),
  }), [items, ready]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex justify-center">
        {toast && <span className="rounded-md bg-lime px-4 py-2 text-sm font-bold text-ink shadow-lg">{toast}</span>}
      </div>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart должен использоваться внутри CartProvider");
  return ctx;
}

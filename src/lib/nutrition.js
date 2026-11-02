
export function calcIngredient(ing) {
  const k = ing.grams / 100;
  return { kcal: ing.per100.kcal * k, p: ing.per100.p * k, f: ing.per100.f * k, c: ing.per100.c * k, price: ing.price, grams: ing.grams };
}


export function calcBowl(steps, selection) {
  const total = { kcal: 0, p: 0, f: 0, c: 0, price: 0, grams: 0 };
  const picked = [];
  for (const step of steps) {
    for (const ing of step.items) {
      if ((selection[step.id] || []).includes(ing.id)) {
        const v = calcIngredient(ing);
        for (const key of Object.keys(total)) total[key] += v[key];
        picked.push(ing);
      }
    }
  }
  return { ...total, picked };
}

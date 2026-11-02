export const PROGRAMS = {
  FIT: { id: "FIT", title: "FIT", description: "Высокобелковое питание для тренировок и набора формы.", meals: 4, kcal: 2200, protein: 160, fat: 70, carbs: 220, pricePerDay: 9800,
    sample: ["Омлет с овощами", "Bowl с курицей и киноа", "Салат с говядиной", "Протеиновый коктейль"] },
  BALANCE: { id: "BALANCE", title: "BALANCE", description: "Сбалансированный рацион на каждый день.", meals: 3, kcal: 1800, protein: 100, fat: 60, carbs: 210, pricePerDay: 8200,
    sample: ["Овсянка с ягодами", "Bowl с лососем", "Цезарь с курицей"] },
  LIGHT: { id: "LIGHT", title: "LIGHT", description: "Рацион с контролируемой калорийностью.", meals: 3, kcal: 1300, protein: 70, fat: 40, carbs: 150, pricePerDay: 7200,
    sample: ["Смузи зелёный", "Bowl с тофу", "Греческий лайт"] },
};


export const TARIFFS = [
  { id: "START", days: 10, discount: 0, perks: ["Попробовать формат без обязательств", "Выбор типа питания", "Доставка или самовывоз"] },
  { id: "SMART", days: 20, discount: 5, perks: ["Скидка 5% на рацион", "Выбор дней получения", "Возможность замены блюд"] },
  { id: "PRO", days: 30, discount: 10, perks: ["Скидка 10% на рацион", "Приоритетная связь с командой", "Индивидуальная корректировка меню"] },
];

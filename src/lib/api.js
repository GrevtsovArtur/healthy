
import { DISHES } from "@/data/dishes";
import { BOWL_STEPS } from "@/data/ingredients";

export async function getDishes() { return DISHES; }
export async function getBowlSteps() { return BOWL_STEPS; }
export async function createOrder(order) {

  return { ok: true, demo: true, order };
}

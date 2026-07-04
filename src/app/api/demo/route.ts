import { NextResponse } from "next/server";
import type { DemoItem } from "@/types/demo";

/**
 * Route handler mock que actúa de stand-in de `dashboard-api` (ADR-12).
 *
 * Existe solo para validar la capa de red end-to-end mientras el BFF real no
 * exista. `?fail=1` fuerza un 500 con payload `{ message, code }` para ejercitar
 * el camino de error del interceptor y de la UI.
 */
const DEMO_ITEMS: DemoItem[] = [
  { id: 1, title: "Employment", subtitle: "Work, contracts and tracking" },
  { id: 2, title: "Finances", subtitle: "Income, expenses and planning" },
  { id: 3, title: "Pointlife", subtitle: "Waypoint event timeline (coming)" },
];

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  if (searchParams.get("fail") === "1") {
    return NextResponse.json(
      { message: "Simulated server error", code: "DEMO_FAILURE" },
      { status: 500 }
    );
  }

  return NextResponse.json(DEMO_ITEMS);
}

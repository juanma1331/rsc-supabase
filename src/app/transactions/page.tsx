import { protectedRoute } from "@/utils/server-protected-route";

export default async function TransactionsPage() {
  await protectedRoute();

  return <main>Transactions Page</main>;
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function addTransaction(formData: FormData) {
  "use server";
  const supabase = createServerComponentClient({
    cookies,
  });
  const { data, error } = await supabase.from("transactions").insert({
    amount: formData.get("amount"),
    description: formData.get("description"),
    category: formData.get("category"),
    type: formData.get("type"),
  });

  console.log(data);
  console.log(error);
}

export default function NewTransaction() {
  return (
    <main className="min-h-screen p-2 bg-slate-200">
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action={addTransaction}
        >
          <div className="mb-4"></div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              placeholder="Amount"
              name="amount"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
              name="description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              defaultValue="food"
              name="category"
            >
              <option>Food</option>
              <option>Transportation</option>
              <option>Entertainment</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Transaction Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              defaultValue="income"
              name="type"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

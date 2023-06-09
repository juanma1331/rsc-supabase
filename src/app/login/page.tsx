"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {
  const supabase = createClientComponentClient();

  return (
    <div>
      <button
        className="p-2 text-black bg-slate-300"
        onClick={() =>
          supabase.auth.signUp({
            email: "juanma1331@gmail.com",
            password: "12345678",
          })
        }
      >
        Sign Up
      </button>

      <button
        className="p-2 text-black bg-slate-300"
        onClick={() =>
          supabase.auth.signInWithPassword({
            email: "juanma1331@gmail.com",
            password: "12345678",
          })
        }
      >
        Sign In
      </button>

      <button
        className="p-2 text-black bg-slate-300"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations/cms";
import { z } from "zod";
import { useState } from "react";

type LoginForm = z.infer<typeof loginSchema>;

export default function AdminLoginForm() {
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(values: LoginForm) {
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(values),
    });
    const json = await res.json();
    if (!json.success) {
      setError(json.message || "Login failed");
      return;
    }

    const nextPath = searchParams.get("next") || "/admin";
    window.location.href = nextPath.startsWith("/") ? nextPath : "/admin";
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl border border-[#1F3D3B]/10 bg-white p-8 shadow-lg"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-[#9A6800]">GRIHAM Admin</p>
        <h1 className="mt-2 text-2xl font-semibold text-[#1F3D3B]">Sign in</h1>
        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">Username</label>
            <input
              {...register("username")}
              className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2 outline-none focus:border-[#F4A300]"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full rounded-lg border border-[#1F3D3B]/20 px-3 py-2 outline-none focus:border-[#F4A300]"
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[#F4A300] px-4 py-2.5 font-semibold text-[#1F3D3B] disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

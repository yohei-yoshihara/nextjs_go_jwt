"use client";

import { logout } from "@/app/lib/api";
import { redirect } from "next/navigation";
import { useTransition } from "react";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();
  function onLogout() {
    startTransition(async () => {
      const resp = await logout();
      if (!resp.error) {
        redirect("/");
      }
    });
  }

  return (
    <button
      onClick={() => {
        onLogout();
      }}
      className="bg-blue-500 px-2 py-1 rounded-full text-white font-bold disabled:text-gray-500 shadow-md shadow-gray-500/50"
      disabled={isPending}>
      Logout
    </button>
  );
}

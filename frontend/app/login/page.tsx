"use client";

import Form from "next/form";
import { useActionState } from "react";
import { redirect } from "next/navigation";
import { z } from "zod";
import { login } from "@/app/lib/api";
import ErrorField from "@/app/ui/error-field";

const loginSchema = z.object({
  username: z
    .string({ message: "username is required" })
    .min(1, { message: "username is required" }),
  password: z
    .string({ message: "password is required" })
    .min(1, { message: "password is required" }),
});

type loginState = {
  error?: {
    username?: string[];
    password?: string[];
  };
  message?: string;
};

export default function LoginPage() {
  async function apiCall(
    prevState: loginState,
    formData: FormData
  ): Promise<loginState> {
    const validated = loginSchema.safeParse({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    if (!validated.success) {
      const error = validated.error.flatten().fieldErrors;
      console.log(error);
      return { error };
    }

    const resp = await login(validated.data);
    if (resp.error) {
      return { message: resp.error.message };
    }

    redirect("/tasks");
  }
  const [state, formAction] = useActionState<loginState, FormData>(apiCall, {});

  return (
    <div className="m-5">
      <Form action={formAction}>
        <div className="flex flex-row items-center max-w-sm mb-2">
          <div className="w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Username
            </label>
          </div>
          <div className="w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="username"
              defaultValue="user1"></input>
          </div>
        </div>
        {state.error?.username && (
          <ErrorField className="mb-3" errors={state.error.username} />
        )}
        <div className="flex flex-row items-center max-w-sm mb-2">
          <div className="w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              name="password"
              defaultValue="password"></input>
          </div>
        </div>
        {state.error?.password && (
          <ErrorField className="mb-3" errors={state.error.password} />
        )}
        {state.message && (
          <div className="text-red-500 mb-3">{state.message}</div>
        )}
        <button className="bg-blue-500 text-white font-bold px-2 py-1 rounded-full shadow-md shadow-gray-500/50">
          Login
        </button>
      </Form>
    </div>
  );
}

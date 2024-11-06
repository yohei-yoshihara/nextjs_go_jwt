"use client";

import { useState, useEffect } from "react";
import { getTasks } from "@/app/lib/api";
import { Task } from "@/app/lib/models";
import LogoutButton from "../ui/logout-button";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<{
    status: number;
    message: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const resp = await getTasks();
      if (resp.error) {
        setTasks([]);
        setError({ status: resp.error.status, message: resp.error.message });
        return;
      }
      if (resp.tasks) {
        setTasks(resp.tasks);
        setError(null);
      }
    })();
  }, []);

  if (error && error.status === 401) {
    return (
      <div className="m-5">
        <div className="mb-3 text-gray-500 font-bold text-lg">
          Not logged in
        </div>
        <button className="block bg-blue-500 text-white font-bold px-2 py-1 rounded-full shadow-md shadow-gray-500/50 mb-5">
          <Link href="/login" className="flex flex-row items-center">
            <div className="mr-2">Login</div>
            <FaRegArrowAltCircleRight className="block" />
          </Link>
        </button>
      </div>
    );
  }

  return (
    <div className="m-5">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-gray-500 text-lg">Task List</div>
        <LogoutButton />
      </div>
      <ul className="mb-5 divide-gray-300 divide-y-[1px] ">
        {tasks.map((task) => {
          return (
            <li className="py-1" key={task.id}>
              {task.title}
            </li>
          );
        })}
      </ul>
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
}

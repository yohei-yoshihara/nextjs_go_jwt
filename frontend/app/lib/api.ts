"use client";
//"use server"
import { User, Folder, Task } from "@/app/lib/models";

export async function login(
  user: User
): Promise<{ user?: User; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(user),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to login, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as User;
  return { user: data };
}

export async function registerUser(
  user: User
): Promise<{ user?: User; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(user),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to register a user, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as User;
  return { user: data };
}

export async function logout(): Promise<{
  error?: { status: number; message: string };
}> {
  const resp = await fetch("/api/logout");
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to register a user, ${message}`);
    return { error: { status: resp.status, message } };
  }
  return {};
}

export async function getFolders(): Promise<{
  folders?: Folder[];
  error?: { status: number; message: string };
}> {
  const resp = await fetch("/api/folders");
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to register a user, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const folders = (await resp.json()) as Folder[];
  return { folders };
}

export async function getFolder(
  id: number
): Promise<{ folder?: Folder; error?: string }> {
  const resp = await fetch(`/api/folders/${id}`);
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to get a folder, ${message}`);
    return { error: message };
  }
  const data = (await resp.json()) as Folder;
  return { folder: data };
}

export async function createFolder(
  folder: Folder
): Promise<{ folder?: Folder; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/folders/create", {
    method: "POST",
    body: JSON.stringify(folder),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to create a folder, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Folder;
  return { folder: data };
}

export async function updateFolder(
  folder: Folder
): Promise<{ folder?: Folder; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/folders/update", {
    method: "POST",
    body: JSON.stringify(folder),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to update a folder, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Folder;
  return { folder: data };
}

export async function deleteFolder(folder: Folder): Promise<{
  folder?: Folder;
  error?: { status: number; message: string };
}> {
  const resp = await fetch("/api/folders/delete", {
    method: "POST",
    body: JSON.stringify(folder),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to delete a folder, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Folder;
  return { folder: data };
}

export async function getTasks(): Promise<{
  tasks?: Task[];
  error?: { status: number; message: string };
}> {
  const resp = await fetch("/api/tasks");
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to get all tasks, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Task[];
  return { tasks: data };
}

export async function getTask(
  id: number
): Promise<{ task?: Task; error?: { status: number; message: string } }> {
  const resp = await fetch(`/api/tasks/${id}`);
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to get a task, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Task;
  return { task: data };
}

export async function createTask(
  task: Task
): Promise<{ task?: Task; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/tasks/create", {
    method: "POST",
    body: JSON.stringify(task),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to create a task, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Task;
  return { task: data };
}

export async function updateTask(
  task: Task
): Promise<{ task?: Task; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/tasks/update", {
    method: "POST",
    body: JSON.stringify(task),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to update a task, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Task;
  return { task: data };
}

export async function deleteTask(
  task: Task
): Promise<{ task?: Task; error?: { status: number; message: string } }> {
  const resp = await fetch("/api/tasks/delete", {
    method: "POST",
    body: JSON.stringify(task),
  });
  if (!resp.ok) {
    const message = await resp.text();
    console.log(`failed to delete a task, ${message}`);
    return { error: { status: resp.status, message } };
  }
  const data = (await resp.json()) as Task;
  return { task: data };
}

export interface User {
  id?: number;
  username: string;
  password?: string;
}

export interface Folder {
  id?: number;
  name: string;
}

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  due_date: Date;
  folder_id: number;
}

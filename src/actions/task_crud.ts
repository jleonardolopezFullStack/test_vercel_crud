"use server";

import prisma from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTask = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const framework = formData.get("framework")?.toString();

  //console.log(name, description, framework);

  if (!name || !description || !framework) return;
  console.log(name, description, framework);

  const task = await prisma.task.create({
    data: {
      name: name,
      description: description,
      framework: framework,
    },
  });

  console.log(task);
  redirect("/");
};

export const findTask = async () => {
  const task = await prisma.task.findMany();
  return task;
};

export const deleteTask = async (taskId: number) => {
  await prisma.task.delete({ where: { id: taskId } });

  revalidatePath("/");
};

export const editTask = async (formData: FormData) => {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const framework = formData.get("framework")?.toString();

  if (!id || !name || !description || !framework) return;

  await prisma.task.update({
    where: { id: parseInt(id) },
    data: { name: name, description: description, framework: framework },
  });

  redirect("/");
};

import FormTask from "@/components/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const task = await prisma.task.findFirst({
    where: { id: parseInt(params.id) },
  });

  if (!task) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <FormTask task={task} />
    </div>
  );
};

export default EditPage;

import React from "react";

import FormTask from "@/components/task-form";
import prisma from "@/lib/prisma";

const EditPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  /*   const task = await findTaskByID(params.id as string); */
  const task = await prisma.task.findFirst({
    where: { id: parseInt(params.id as string) },
  });
  if (!task) return;

  return (
    <div className="flex justify-center items-center h-screen">
      <FormTask task={task} />
    </div>
  );
};

export default EditPage;

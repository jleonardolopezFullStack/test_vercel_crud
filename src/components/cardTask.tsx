"use client";
import React from "react";
import { Task } from "@prisma/client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { deleteTask } from "@/actions/task_crud";
import Link from "next/link";

const CardTask = ({ task }: { task: Task }) => {
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{task.name}</CardTitle>
          <Badge
            className={clsx({
              "bg-blue-600": task.framework === "astro",
              "bg-yellow-600": task.framework === "next",
              "bg-green-600": task.framework === "nuxt",
              "bg-red-600": task.framework === "sveltekit",
            })}
          >
            {task.framework}
          </Badge>
        </div>

        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-end gap-3">
        <Button variant="outline" onClick={async () => deleteTask(task.id)}>
          Delete
        </Button>
        <Link
          href={`tasks/${task.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardTask;

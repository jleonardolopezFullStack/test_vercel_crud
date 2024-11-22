"use client";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { createTask, editTask } from "@/actions/task_crud";
import { toast } from "sonner";
import { Task } from "@prisma/client";
import Link from "next/link";

const FormTask = ({ task }: { task: Task }) => {
  const actionForm = task ? editTask : createTask;

  return (
    <div>
      <form
        action={async (formData) => {
          await actionForm(formData);
        }}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create task</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <input type="hidden" name="id" value={task?.id} />
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name of your project"
                  defaultValue={task ? task.name : ""}
                />
                <Label htmlFor="description">Description</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="description"
                  name="description"
                  defaultValue={task ? task.description : ""}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select
                  name="framework"
                  defaultValue={task ? task.framework : "Select framwork"}
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              Cancel
            </Link>
            <Button
              type="submit"
              onClick={() => {
                const toasty = task
                  ? toast.success("task have been edited")
                  : toast.success("task have been created");
              }}
            >
              {task ? "Edit" : "Create"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default FormTask;

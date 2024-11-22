import React from "react";

import CardTask from "@/components/cardTask";
import { findTask } from "@/actions/task_crud";

const HomePage = async () => {
  const task = await findTask();

  return (
    <div className="flex flex-wrap gap-4  p-4 ">
      {task.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default HomePage;

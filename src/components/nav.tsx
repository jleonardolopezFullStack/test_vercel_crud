import Link from "next/link";
import React from "react";
import { ModeToggle } from "./toggle_button";
import { buttonVariants } from "@/components/ui/button";

const Nav = () => {
  return (
    <div className="flex justify-between p-4">
      <Link href="/">Practice3</Link>
      <div className="flex justify-end gap-4">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Home
        </Link>
        <Link href="/new" className={buttonVariants({ variant: "outline" })}>
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Nav;

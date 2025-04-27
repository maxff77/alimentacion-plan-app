"use client";

import { Kbd } from "@heroui/react";
import { Link } from "@heroui/react";
import { Input } from "@heroui/react";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <header className="py-3 px-6 sticky top-0 z-40 w-full border-b border-primary-200 dark:border-primary-800 bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link className="flex items-center" href="/">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold mr-2">
              PA
            </div>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-200 text-xl">
              Plan Alimenticio
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

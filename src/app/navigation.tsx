"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/react-navigation-menu";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  const [navbar, setNavbar] = useState(false);
  return (
    <NavigationMenu
      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        navbar ? "p-12 md:p-0 block" : "hidden"
      }`}
    >
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <Image src="/close.svg" width={30} height={30} alt="logo" />
          ) : (
            <Image
              src="/hamburger.svg"
              width={30}
              height={30}
              alt="logo"
              className="focus:border-none active:border-none"
            />
          )}
        </button>
      </div>
      <NavigationMenuList className="w-full  fixed top-0 left-0 right-0 z-10">
        <NavigationMenuItem className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <Link
            href="/"
            legacyBehavior
            passHref
            onClick={() => setNavbar(!navbar)}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              MDQ
            </NavigationMenuLink>
          </Link>


          <Link href="/granty" legacyBehavior passHref>

            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Гранты
            </NavigationMenuLink>
          </Link>
          <Link
            href="/analytics"
            legacyBehavior
            passHref
            onClick={() => setNavbar(!navbar)}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Аналитика
            </NavigationMenuLink>
          </Link>
          <Link
            href="/konkursy"
            legacyBehavior
            passHref
            onClick={() => setNavbar(!navbar)}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Конкурсы
            </NavigationMenuLink>
          </Link>
          <Link
            href="/faq"
            legacyBehavior
            passHref
            onClick={() => setNavbar(!navbar)}
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQ
            </NavigationMenuLink>
          </Link>

          <Link href="/aboutus" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              О нас
            </NavigationMenuLink>
          </Link>
          <Link href="/contacts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Контакты
            </NavigationMenuLink>
          </Link>

        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeSwitcher />
          </ThemeProvider>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

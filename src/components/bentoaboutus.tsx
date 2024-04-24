import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from 'next/image'

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] py-20">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Рандомный чел",
    description: "Относит бумажки",
    header: <Image 
    src="/lol.gif"
    alt="moving images"
    width="230"
    height="200"
    objectFit='contain'
  />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {    
    title: "Рандомный чел",
    description: "Относит бумажки",
    header: <Image 
    src="/lol.gif"
    alt="moving images"
    width="230"
    height="200"
    objectFit='contain'
  />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Рандомный чел",
    description: "Относит бумажки",
    header: <Image 
    src="/lol.gif"
    alt="moving images"
    width="230"
    height="200"
    objectFit='contain'
  />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Aslan Sabyrov",
    description: "Best developer in the room",
    header: <Image 
    src="/aslan.jpeg"
    alt="Aslan"
    width="200"
    height="200"
    objectFit='contain'
  />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Aslan Sabyrov",
    description: "Best developer in the room",
    header: <Image 
    src="/aslan.jpeg"
    alt="Aslan"
    width="200"
    height="200"
    objectFit='contain'
  />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Aslan Sabyrov",
    description: "Best developer in the room",
    header: <Image 
    src="/aslan.jpeg"
    alt="Aslan"
    width="200"
    height="200"
    objectFit='contain'
  />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

];

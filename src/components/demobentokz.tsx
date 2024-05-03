"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] my-20 md:px-0 px-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.5,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative'}}><Image 
    src="/Картинка акселератор.png"
    alt="trener"
    layout='fill'
    
  /></div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

// const SkeletonFive = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
//       >
//         <Image
//           src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="rounded-full h-10 w-10"
//         />
//         <p className="text-xs text-neutral-500">
//           There are a lot of cool framerworks out there like React, Angular,
//           Vue, Svelte that can make your life ....
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
//       >
//         <p className="text-xs text-neutral-500">Use PHP.</p>
//         <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
//       </motion.div>
//     </motion.div>
//   );
// };
const items = [
  {
    title: (
      <a className="text-sm bold" href="/kk/granty/mediatrener">
      Медиа тренерлерге арналған гранттар      </a>
    ),
    description: (
      <a className="text-sm bold" href="/kk/granty/mediatrener">Медиа тренерлерге арналған гранттар     </a>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-3",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: (
      <a className="text-sm bold" href="/kk/granty/journalists">
Шағын медиа акселерациясына арналған гранттар      </a>
    ),
    description: (
      <a className="text-sm bold" href="/kk/granty/journalists">
Шағын медиа акселерациясына арналған гранттар      </a>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-3",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: (
      <a className="text-sm bold" href="/kk/granty/videographs">
Әлеуметтік желілердегі медиа контент авторларына       </a>
    ),
    description: (
      <a className="text-sm bold" href="/ru/granty/videographs">
Әлеуметтік желілердегі медиа контент авторларына       </a>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-3",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  // {
  //   title: "Условия и юридические документы",
  //   description: (
  //     <span className="text-sm">

  //     </span>
  //   ),
  //   header: <SkeletonThree />,
  //   className: "md:col-span-1",
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Фидбэк от наших стипендиантов!",
  //   description: (
  //     <span className="text-sm">
  //       Оставьте ответ здесь
  //     </span>
  //   ),
  //   header: <SkeletonFour />,
  //   className: "md:col-span-2",
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },

  //   {
  //     title: "Text Summarization",
  //     description: (
  //       <span className="text-sm">
  //         Summarize your lengthy documents with AI technology.
  //       </span>
  //     ),
  //     header: <SkeletonFive />,
  //     className: "md:col-span-1",
  //     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //   },
];

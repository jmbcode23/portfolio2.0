import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/_bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
    return (
        <BentoGrid className="md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    className={item.className}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "I prioritize client collaboration, fostering open communication",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        img: <Skeleton />,
        className: "md:col-span-2 bg-black dark:bg-slate-900",
        // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        img: <Skeleton />,
        className: "md:col-span-1 bg-black dark:bg-slate-900",
        // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        img: <Skeleton />,
        className: "md:col-span-1 bg-black dark:bg-slate-900",
        // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        img: <Skeleton />,
        className: "md:col-span-2 bg-black dark:bg-slate-900",
        // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

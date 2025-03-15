"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CiLinkedin } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


import {
    IconBrandGithub,
    IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "About",
            icon: (
                <CgProfile className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },

        {
            title: "Projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "LinkedIn",
            icon: (
                <CiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Contact",
            icon: (
                <FaPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#contact",
        },
    ];
    return (
        <div className="sticky top-3 z-50 flex items-center justify-center w-full mt-12">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}

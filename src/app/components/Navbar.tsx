"use client"
import {  
    Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem
} from "@heroui/react";

import { Image } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function NavbarHome() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { title: "About", href: "/about" },
        { title: "Events", href: "/events" },
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" },
        { title: "Join", href: "/join" },
        { title: "Sponsors", href: "/sponsor" },
    ];   

    return (
        <Navbar 
            onMenuOpenChange={setIsMenuOpen}
            className="sticky top-0 z-50 bg-transparent backdrop-blur-sm"
        >
            <NavbarContent justify="start">
                <NavbarBrand>
                   <Link href="/">
                    <Image src="/flag-orpheus-top.svg" alt="Hack Club CNPRSV" className="hover:transform hover:scale-95 delay-100" />
                   </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="center" className="hidden sm:flex sm:visible">
                {menuItems.map((item) => (
                    <NavbarItem key={item.title}>
                        <Link href={item.href}
                            className="hover:underline"
                        >
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={item.title}>
                        <Link href={item.href} className="hover:underline">
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu> 

            <NavbarContent justify="end" className="sm:hidden">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
        </Navbar>
    );
}
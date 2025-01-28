'use client'
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex h-screen">
            <aside className='w-64 border-r'>
                <Sidebar />
            </aside>
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    )
}

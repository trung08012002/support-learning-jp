"use client"
import Chat from "@/components/Chat/Chat";
import NavBar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import React from "react"

const Alphabet = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    return (
        <section className="min-h-screen">
            <NavBar />
            <main className="flex min-h-screen w-full">
                <SideBar />
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </section>
    )
};

export default Alphabet;

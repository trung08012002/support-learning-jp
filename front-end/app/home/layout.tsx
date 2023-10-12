import NavBar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import React from "react"

const HomeLayOut = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    return (
        <section className="h-screen ">
            <NavBar />
            <main className="flex h-contentHeight w-full">
                <SideBar />
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </section>
    )
};

export default HomeLayOut;

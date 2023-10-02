import NavBar from "@/components/navbar/navbar";
import React from "react"

const HomeLayOut = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    return (
        <section className="h-screen w-full">
            <NavBar />
            {children}
        </section>
    )
};

export default HomeLayOut;

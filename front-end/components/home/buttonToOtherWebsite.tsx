import React from "react"

interface Props {
    link: string,
    classButton?: string,
    icon: React.ReactNode,
    classWrapper?: string,
    classTitle?: string,
    title?: string,
}
const ButtonToOtherWebsite = ({ link, classButton = "border border-green-400 bg-white rounded-sm px-2 py-2", classWrapper = "flex items-center gap-2", icon, classTitle = "text-sm text-green-400", title }: Props) => {
    function openWindow() {
        const win = window.open(link, '', 'width=1000,height=500')
        win?.focus();
    }
    return (
        <button className={classButton} onClick={() => openWindow()}>
            <div className={classWrapper}>
                {icon}
                <div className={classTitle}>{title}</div>
            </div>
        </button>
    )
};

export default ButtonToOtherWebsite;

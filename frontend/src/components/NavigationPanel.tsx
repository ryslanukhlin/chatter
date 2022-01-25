import React from "react";
import {
    ChatIcon,
    ChatAlt2Icon,
    UserIcon,
    StarIcon,
    ArchiveIcon,
    MoonIcon,
} from "@heroicons/react/solid";
import DropdownButton from "./DropdownButton";

const NavigationPanel = () => {
    return (
        <header className="w-[100px] h-screen bg-inherit border-r-2 flex flex-col justify-start items-center py-6">
            <ChatIcon className="w-[60px] h-[60px] text-sky-500" />
            <h1 className="mb-14 font-bold uppercase">chatter</h1>
            <nav className="nav">
                <button className="nav-icon nav-icon-active">
                    <ChatAlt2Icon />
                </button>
                <button className="nav-icon">
                    <UserIcon />
                </button>
                <button className="nav-icon">
                    <StarIcon />
                </button>
                <button className="nav-icon">
                    <ArchiveIcon />
                </button>
            </nav>
            <button className="nav-icon mt-auto mb-2">
                <MoonIcon />
            </button>
            <DropdownButton>
                <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={require("../assets/img/women_avatar5.jpg")}
                    alt="user"
                />
            </DropdownButton>
        </header>
    );
};

export default NavigationPanel;

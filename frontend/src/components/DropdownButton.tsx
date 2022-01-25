import React from "react";

const DropdownButton: React.FC = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="relative">
            <button onClick={setOpen.bind(null, (prev) => !prev)}>{children}</button>
            {open && (
                <ul className="absolute top-[-196px] left-[50px] w-[160px] rounded-lg border-2 border-gray-200 py-2 z-10 bg-white shadow-2xl">
                    <li className="pl-6 py-2 text-lg hover:bg-gray-200">Edit profile</li>
                    <li className="pl-6 py-2 text-lg hover:bg-gray-200">Profile</li>
                    <li className="pl-6 py-2 text-lg hover:bg-gray-200 border-b-2">Settings</li>
                    <li className="pl-6 py-2 text-lg hover:bg-gray-200 text-red-500">Logout</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownButton;

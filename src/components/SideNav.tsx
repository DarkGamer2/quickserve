import React from 'react';

const SideNav: React.FC = () => {
    return (
        <div className="h-screen bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center h-20 border-b border-gray-700">
                <h1 className="text-2xl font-bold">QuickServe</h1>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#home" className="block">Home</a>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#services" className="block">Services</a>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#about" className="block">About</a>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded">
                        <a href="#contact" className="block">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
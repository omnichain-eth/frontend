"use client";

import Button from "./walletConnectButton";

export default function Header() {
    return (
        <div className="mx-2 my-2 px-2 py-2 bg-white flex justify-between items-center border border-gray-400 rounded-md">
            <p className="font-press-start font-bold text-md">OmniMarket</p>
            <Button/>
        </div>
    );
}
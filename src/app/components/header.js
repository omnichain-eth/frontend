"use client";

import Button from "./walletConnectButton";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <p className="font-bold text-xl">OmniMarket</p>
            <Button />
        </div>
    );
}
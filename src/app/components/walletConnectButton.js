"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: ["telegram", "email", "googley4u77"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("com.okex.wallet"),
  createWallet("com.bitget.web3"),
];

export default function Button() {
    return (
        <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
        />
    );
}
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { airdrop } from "../airdrop";

export const showBalance = async (publicKey: PublicKey) => {
  const connection = new Connection("http://127.0.0.1:8899", "confirmed");
  const response = await connection.getAccountInfo(publicKey);
  return response.lamports / LAMPORTS_PER_SOL;
};

(async () => {
  const publicKey = "4VUsxdzEDc4qiFJSfiWuYQnFjQDsW2hXkevUGpCoweUX";
  const balance = await showBalance(new PublicKey(publicKey));
  console.log(`The balance of the key ${publicKey} is ${balance} SOL`);
  await airdrop(publicKey, 4);
  const updatedBalance = await showBalance(new PublicKey(publicKey));
  console.log(`updated balance is ${updatedBalance}`);
})();

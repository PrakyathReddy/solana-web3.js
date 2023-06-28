import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const airdrop = async (address: PublicKey, amount: number) => {
  const publickey = new PublicKey(address);
  const conn = new Connection("http://127.0.0.1:8899", "confirmed");
  const signature = await conn.requestAirdrop(
    publickey,
    amount * LAMPORTS_PER_SOL
  );
  await conn.confirmTransaction(signature);
};

// airdrop("4VUsxdzEDc4qiFJSfiWuYQnFjQDsW2hXkevUGpCoweUX", 4);

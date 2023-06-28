import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { airdrop } from "../airdrop";
import { showBalance } from "../show-balance";

export const transferSol = async (
  from: Keypair,
  to: PublicKey,
  amount: number
) => {
  const connection = new Connection("http://127.0.0.1:8899", "confirmed");
  const transaction = new Transaction();
  const instruction = SystemProgram.transfer({
    fromPubkey: from.publicKey,
    toPubkey: to,
    lamports: LAMPORTS_PER_SOL * amount,
  });

  transaction.add(instruction);
  await sendAndConfirmTransaction(connection, transaction, [from]);
  console.log("Done");
};

const secret = Uint8Array.from([
  194, 153, 21, 10, 105, 110, 183, 27, 191, 176, 26, 57, 241, 114, 147, 163,
  109, 122, 159, 19, 235, 162, 18, 53, 167, 178, 244, 51, 146, 30, 197, 53, 218,
  80, 50, 219, 218, 49, 218, 27, 187, 86, 183, 172, 149, 127, 108, 221, 104, 59,
  160, 127, 43, 161, 156, 180, 85, 226, 55, 140, 105, 206, 178, 151,
]);

const fromKeyPair = Keypair.fromSecretKey(secret);
const toPublicKey = new PublicKey(
  "4VUsxdzEDc4qiFJSfiWuYQnFjQDsW2hXkevUGpCoweUX"
);

(async () => {
  await airdrop(fromKeyPair.publicKey, 5);
  const initialBalance = await showBalance(fromKeyPair.publicKey);
  console.log(`initial balance of from wallet is ${initialBalance})`);
  const initialBalanceTo = await showBalance(toPublicKey);
  console.log(`initial balance of to wallet is ${initialBalanceTo}`);

  await transferSol(fromKeyPair, toPublicKey, 2);
  const finalBalance = await showBalance(fromKeyPair.publicKey);
  console.log(`final balance of from wallet is ${finalBalance})`);
  const finalBalanceTo = await showBalance(toPublicKey);
  console.log(`final balance of to wallet is ${finalBalanceTo}`);
})();

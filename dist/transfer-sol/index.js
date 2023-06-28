"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferSol = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop_1 = require("../airdrop");
const show_balance_1 = require("../show-balance");
const transferSol = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new web3_js_1.Connection("http://127.0.0.1:8899", "confirmed");
    const transaction = new web3_js_1.Transaction();
    const instruction = web3_js_1.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: web3_js_1.LAMPORTS_PER_SOL * amount,
    });
    transaction.add(instruction);
    yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [from]);
    console.log("Done");
});
exports.transferSol = transferSol;
const secret = Uint8Array.from([
    194, 153, 21, 10, 105, 110, 183, 27, 191, 176, 26, 57, 241, 114, 147, 163,
    109, 122, 159, 19, 235, 162, 18, 53, 167, 178, 244, 51, 146, 30, 197, 53, 218,
    80, 50, 219, 218, 49, 218, 27, 187, 86, 183, 172, 149, 127, 108, 221, 104, 59,
    160, 127, 43, 161, 156, 180, 85, 226, 55, 140, 105, 206, 178, 151,
]);
const fromKeyPair = web3_js_1.Keypair.fromSecretKey(secret);
const toPublicKey = new web3_js_1.PublicKey("4VUsxdzEDc4qiFJSfiWuYQnFjQDsW2hXkevUGpCoweUX");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, airdrop_1.airdrop)(fromKeyPair.publicKey, 5);
    const initialBalance = yield (0, show_balance_1.showBalance)(fromKeyPair.publicKey);
    console.log(`initial balance of from wallet is ${initialBalance})`);
    const initialBalanceTo = yield (0, show_balance_1.showBalance)(toPublicKey);
    console.log(`initial balance of to wallet is ${initialBalanceTo}`);
    yield (0, exports.transferSol)(fromKeyPair, toPublicKey, 2);
    const finalBalance = yield (0, show_balance_1.showBalance)(fromKeyPair.publicKey);
    console.log(`final balance of from wallet is ${finalBalance})`);
    const finalBalanceTo = yield (0, show_balance_1.showBalance)(toPublicKey);
    console.log(`final balance of to wallet is ${finalBalanceTo}`);
}))();
//# sourceMappingURL=index.js.map
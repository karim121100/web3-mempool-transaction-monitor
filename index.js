import { connectRPC } from "./rpc.client.js";
import { loadTransactions } from "./transaction.registry.js";
import { simulateMempool } from "./mempool.engine.js";
import { confirmTransaction } from "./confirmation.engine.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Mempool Transaction Monitor");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const transactions = loadTransactions();

const mempool = simulateMempool(transactions);
const confirmation = confirmTransaction(mempool[0]);

generateReport(mempool, confirmation);

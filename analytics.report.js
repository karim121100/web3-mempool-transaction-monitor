export function generateReport(mempool, confirmation) {
  console.log("----- Mempool Report -----");

  mempool.forEach(tx => {
    console.log("TX:", tx.hash, "Status:", tx.status, "Amount:", tx.amount);
  });

  console.log("----- Confirmation -----");
  console.log("TX:", confirmation.hash);
  console.log("Block:", confirmation.blockNumber);
  console.log("-------------------------");
}

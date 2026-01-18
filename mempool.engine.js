export function simulateMempool(transactions) {
  console.log("Simulating mempool...");

  return transactions.map(tx => {
    return {
      ...tx,
      status: "PENDING",
      addedAt: Date.now()
    };
  });
}

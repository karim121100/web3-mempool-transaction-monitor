export function confirmTransaction(tx) {
  console.log("Confirming transaction:", tx.hash);

  return {
    ...tx,
    status: "CONFIRMED",
    blockNumber: Math.floor(Math.random() * 1000000)
  };
}

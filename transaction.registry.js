export function loadTransactions() {
  console.log("Loading transactions...");

  return [
    { from: "0xUSER001", to: "0xUSER002", amount: 25, hash: "0xTX001" },
    { from: "0xUSER003", to: "0xUSER004", amount: 50, hash: "0xTX002" }
  ];
}

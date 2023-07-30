const { buyTollRoadCard, topUpBalance, useTollRoad } = require("./utils");

async function getTollAccess() {
  try {
    const card1 = await buyTollRoadCard(25);
    const card2 = await topUpBalance(card1, 10);
    await useTollRoad(card2);
  } catch (error) {
    console.log("Terjadi error:", error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess();

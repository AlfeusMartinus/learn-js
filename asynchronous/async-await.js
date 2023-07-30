// jika memakai then catch maka kode seperti ini
// function watchMovie() {
//   withDrawMoney(10)
//     .then((money) => buyCinemaTicket(money))
//     .then((ticket) => goInsideCinema(ticket))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message));
// }
// watchMovie();

// jika memakai async dan await
async function watchMovie() {
  try {
    const money = await withDhrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
watchMovie().then(() => console.log('done'));

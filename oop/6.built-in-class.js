const date = new Date();

const timeInBandung = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Makassar',
});

console.log(timeInBandung);
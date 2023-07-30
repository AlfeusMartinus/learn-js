// Cara kerja method ini mirip seperti Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.

const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
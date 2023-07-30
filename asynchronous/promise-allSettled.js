// Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut.
// {
//     status: 'fulfilled' | 'rejected',
//     value: 'value of the Promise',
//     reason: 'error of the Promise',
//   }

const promise1 = new Promise((reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
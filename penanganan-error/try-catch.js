try {
    console.log('Awal blok try');
    errorNih;
    console.log('Akhir blok try');
} catch (error) {
    console.log('Terjadi error');
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
} finally {
    setTimeout(() => {
        console.log('Apapun yang terjadi tetaplah eksekusi');
    }, 1000);
}
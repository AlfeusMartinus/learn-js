function getProvinces(countryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const content = [
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]

            if (countryId !== 'id') {
                reject(new Error('Country not found'));
            }

            resolve(content);
        }, 1000);
    });
}

getProvinces('id')
    .then(content => console.log(content))
    .catch(error => console.log(error.message));

module.exports = { getProvinces: getProvinces };
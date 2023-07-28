// function getUsers(callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ["Kahfi", "Adam", "Hawa"];
//     callback(users);
//   }, 3000);
// }

// function usersCallback(users) {
//   console.log(users);
// }

// getUsers(usersCallback);


// kondisi error
function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ["Kahfi", "Adam", "Hawa"];

        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null,users)
    }, 3000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('process failed : ', error.message);
        return;
    }

    console.log('process success: ', users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
const user = {
    firstName: 'Alfeus',
    lastName: 'Marwtinus'
}

const createUserWithLastName = (newLastName, user) => {
    return {...user, lastName: newLastName}
}

const newUser = createUserWithLastName('Martinus', user);
console.log(user);
console.log(newUser);
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

const json = '{"name": "Yoda","age": 20}';
// const json = '{"age": 20}';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError('"name" is required.');
    }

    if (!user.age) {
        throw new ValidationError('"age" is required');
    }


    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    if (error instanceof SyntaxError) {
        console.log(`JSON File Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();

const names = ['Sandi', 'Asep', 'Galuh', 'Septian'];

const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopThrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
    return loopThrough(arr,action);
}

const newNames = arrayMap(names, (name) => `${name}🚀`);
console.log(newNames);
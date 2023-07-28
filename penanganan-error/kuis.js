class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

function validateNumberInput (p1, p2, p3) {
    if (typeof p1 !== 'number') {
        throw new ValidationError('Argumen pertama harus number');
    }
    if (typeof p2 !== 'number') {
        throw new ValidationError('Argumen kedua harus number');
    }
    if (typeof p3 !== 'number') {
        throw new ValidationError('Argumen ketiga harus number');
    }
}

const detectTriangle = (a, b, c) => {

  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    if (error instanceof ValidationError) {
        return `${error.message}`
    }
  }

  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};


const hasil = detectTriangle(1, 3, null);
console.log(hasil); 
//function declaration
function multipleCalculations(number1, number2) {
    const addSquared = (number1 ** number1) + (number2 ** number2);
    const squared = addSquared ** addSquared;
    return squared;
  }
  
  const result = multipleCalculations(3, 2); 

  console.log (result);


//function expression
const calculation = function (number1, number2) {
    const addSquared = (number1 ** number1) + (number2 ** number2);
    const squared = addSquared ** addSquared;
    return squared;
};

const resultaat = calculation (3, 2); 

  console.log (resultaat);


 //arrow function
 const berekening = (number1, number2) => {
    const addSquared = (number1 ** number1) + (number2 ** number2);
    const squared = addSquared ** addSquared;
    return squared;
};

const uitslag = berekening (3, 3); 

  console.log (uitslag);


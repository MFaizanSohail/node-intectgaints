function add(a, b) {
    return a + b;
}

function calculate(a,b,operation){
    return new Promise((resolve, reject) => {
        const result = operation(a,b);
        if (result> 0 ){
            resolve("addtion done")
        }
    else {
        reject("addtion cannot be added")
    }
    })
}

calculate(9, 3, add)
  .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
    });
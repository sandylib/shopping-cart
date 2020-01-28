const Checkout = require('./checkout');


const test = new Checkout();

console.log(`-------------------------------------------`)
console.log(`Step 1: Add products to the shopping cart`);
test.addProduct({ name: 'Dove_Soap', price : 39.99});

test.scan('Dove_Soap');
test.scan('Dove_Soap');
test.scan('Dove_Soap');
test.scan('Dove_Soap');
test.scan('Dove_Soap');


console.log(`the shopping cart’s total price should equal ${test.total()}`)
console.log(`---------------------------------------------------------------`)
console.log(`Step 2:Add additional products of the same type to the shopping cart`)
test.scan('Dove_Soap');
test.scan('Dove_Soap');
test.scan('Dove_Soap');

console.log(`the shopping cart’s total price should equal ${test.total()}`)

console.log(`---------------------------------------------------------------`)

console.log(`Step 3:Calculate the tax rate of the shopping cart with multiple items`)

const test2 = new Checkout();
test2.addProduct({ name: 'Dove_Soap', price : 39.99});
test2.addProduct({ name: 'Axe_Deo', price: 99.99});
test2.scan('Dove_Soap');
test2.scan('Dove_Soap');
test2.scan('Axe_Deo');
test2.scan('Axe_Deo');
test2.total(true);

console.log(`And the total sales tax amount for the shopping cart should equal ${test2._totalTax}`)
console.log(`And the shopping cart’s total price should equal ${test2._total}`)



   
   


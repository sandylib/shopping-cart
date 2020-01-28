const Checkout = require("./checkout");

describe('UNIT TEST | Checkout', () => {
  describe('SHOPPING CART ONE', () => {
    const cartOne = new Checkout();
    test("Step 1: Add products to the shopping cart", () => {
    
      cartOne.addProduct({ name: 'Dove_Soap', price : 39.99});
    
      var i;
      for (i = 0; i < 5; i++) {
        cartOne.scan('Dove_Soap');
      }
    
      expect(cartOne.total()).toBe(199.95);
    });


    test("Step 2: Add additional products of the same type to the shopping cart.", () => {
    
      var i;
      for (i = 0; i < 3; i++) {
        cartOne.scan('Dove_Soap');
      }
    
      expect(cartOne.total()).toBe(319.92);
    });
  })


  describe('SHOPPING CART TWO', () => {
    const cartTWO = new Checkout();
    test("Step 1: Add products to the shopping cart", () => {
    
      cartTWO.addProduct({ name: 'Dove_Soap', price : 39.99});
      cartTWO.addProduct({ name: 'Axe_Deo', price: 99.99});
    
      var i;
      const withTax = true;
      for (i = 0; i < 2; i++) {
        cartTWO.scan('Dove_Soap');
        cartTWO.scan('Axe_Deo');
       
      }

      cartTWO.total(withTax)
    
      expect(cartTWO._totalTax).toBe(35);
      expect(cartTWO._total).toBe(314.96);
    });


  })
  
})

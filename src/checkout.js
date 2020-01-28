
    var Checkout = function () {
      
      this._catalogue = [];
      this._items = [];
      this._taxRate = 0.125;
      this._subTotal = 0
      this._total= 0;
      this._totalTax = 0;
  };

  Checkout.prototype.addProduct = function(product) {
     this._catalogue.push(product);
  }

  Checkout.prototype.scan = function(sku) {
     var product = this._catalogue.find(function(i){
        return i.name === sku;
     });
     this._items.push(product);
  }

  Checkout.prototype.total = function(rate) {
     var subtotal = 0;
     
     for (var i=0; i<this._items.length; i++) {
        subtotal += this._items[i].price;
      };
     this._subTotal = subtotal;
     
     if(true) {
        this._totalTax = roundToTwo(subtotal * this._taxRate);
        this._total = roundToTwo(subtotal + this._totalTax);
     }
     return roundToTwo(subtotal);
  }


module.exports = Checkout;


function roundToTwo(num) {    
   return +(Math.round(num + "e+2")  + "e-2");
}
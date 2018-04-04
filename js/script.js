// Object Constructors
function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

// Prototypes
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

// Objects
var samsungGalaxyS6 = new Phone("Samsung", 1800, "black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var onePlusOne = new Phone("One Plus", 1600, "silver");

iPhone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.printInfo();
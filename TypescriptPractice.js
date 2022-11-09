var mountains = [{ name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },];
function findNameOfTallestMountain(mountains) {
    var tallest = 0;
    var mountainName = "";
    for (var i = 0; i < mountains.length; i++) {
        var current = mountains[i];
        if (current.height > tallest) {
            tallest = current.height;
            mountainName = current.name;
        }
    }
    console.log(mountainName);
}
findNameOfTallestMountain(mountains);
var products = [{ name: "Xbox", price: 399 },
    { name: "PS5", price: 499 },
    { name: "PC", price: 1099 }];
function calcAverageProductPrice(products) {
    var sum = 0;
    var length = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
        length = i + 1;
    }
    var av = sum / length;
    console.log(av);
}
calcAverageProductPrice(products);
var inventory = [{ name: "motor", price: 10.00, quantity: 10 },
    { name: "sensor", price: 12.50, quantity: 4 },
    { name: "LED", price: 1.00, quantity: 20 }];
function calcInventoryValue(inventory) {
    var value = 0;
    var totalV = 0;
    for (var i = 0; i < inventory.length; i++) {
        value = inventory[i].price * inventory[i].quantity;
        totalV += value;
    }
    console.log(totalV);
}
calcInventoryValue(inventory);

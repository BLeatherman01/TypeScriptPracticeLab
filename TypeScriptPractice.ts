interface Mountain {
    name:string,
    height:number
}

const mountains: Mountain[]  = [{name:"Kilimanjaro", height: 19341},
                                {name:"Everest", height: 29029},
                                {name:"Denali", height: 20310},]

function findNameOfTallestMountain(mountains){
    let tallest=0;  
    let mountainName ="";
    for(let i = 0; i < mountains.length; i++){ 
        
        let current = mountains[i];
        
        if(current.height > tallest){
            tallest = current.height; 
            mountainName = current.name; 
        }
    }
    console.log(mountainName);
     
}
findNameOfTallestMountain(mountains);

interface Product {
    name:string,
    price:number
}

const products: Product [] = [{name:"Xbox", price:399},
                              {name:"PS5", price:499},
                              {name:"PC", price:1099}];

 function calcAverageProductPrice(products){
    
    let sum = 0;
    let length= 0;
   
    for(let i = 0; i < products.length; i++){
        sum += products[i].price;
       length = i + 1;
    
    }
    
    let av = sum/ length;
    console.log(av);

 }  
 
 calcAverageProductPrice(products);

 interface InventoryItem extends Product{
    
    quantity:number
    
 }

 const inventory: InventoryItem[] = [{name:"motor", price: 10.00, quantity: 10},
                                     {name:"sensor", price: 12.50, quantity: 4},
                                     {name:"LED", price: 1.00, quantity: 20}];

function calcInventoryValue(inventory){
  let value = 0;
  let totalV = 0;   
  
  for(let i = 0; i < inventory.length; i++){
    value =  inventory[i].price *inventory[i].quantity;
    totalV += value;
  }
  console.log(totalV);

}

calcInventoryValue(inventory);
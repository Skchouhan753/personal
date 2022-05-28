// ### Problem 2 : **Products Cart Object**

// - Given an input of products in the below format **(Name, Quantity, Price and Rating)**
// - Input

let product=["Shirt", "Jeans", "Shoes","Slippers"];
let quantity=[2, 3, 1, 4];
let price=[600, 1500, 2000, 500];
let rating=[3.5, 4, 2, 4];
 
//part 1 Create an object with the key data which is an array 


//Part 2 Add an object method name addItem which will take 4 parameter values 
//name, quantity, price, rating (use values from the given arrays) and 
//add into the below data array format.

let flipkart={
    data:[],
    additem:function(naam,qnty,mrp,rting){
        let obj={};
        obj["name"]=naam,
        obj["quantity"]=qnty,
        obj["price"]=mrp,
        obj["rating"]=rting,
        
        this.data.push(obj);
    },
    filterProduct:function(rating,price){
       for(let j=0;j<this.data.length;j++){
         let produt=this.data[j];  
        if(data["rating"]>=rating && product["price"]>=price){
           console.log(product["name"]); 
        }
       }

    }
    
};
for(let i=0;i<product.length;i++){
flipkart["additem"](product[i],quantity[i],price[i],rating[i]);
}
console.log(flipkart["data"]);
flipkart["filterProduct"](4,1500)

// ### Part 3
// Add an object method with a name `filterProduct` which will take 2 parameter value
// **rating and price** . It will find all products name whose price and rating is greater 
// than and equal to given **price and rating (passed in parameter)**.
// - if the product is not found it print **"Not Available"**


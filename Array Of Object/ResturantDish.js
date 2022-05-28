// ###*** Part 1 ***###
// Given a list of dish data with category and price, 
// create a list of key-value pairs from the input

let dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"];
let category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"];
let price = [40, 80, 50, 60, 25];

let data=[];
for(let i=0;i<dish.length;i++){
    let obj={};
    obj["name"]=dish[i];
    obj["category"]=category[i];
    obj["price"]=price[i];
    //console.log(obj);
    data.push(obj);
};
//console.log(data);

// ### **Part 2:**
// From the above data, Write a function i.e **getDishesNames(data)** 
// that will take the above data as input and print all the dish's names available 
// in the restaurant.

function getDishesnames(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i]["name"]);
   
    };
};
//getDishesnames(data);

// ### **Part 3:**
// From the above data, Write a function i.e**getDishInRange(data, price1, price2)**
// that will take the above data as input with the price1 and price2 value and 
// print objects of a dish having price range in between 
// price1 and price2 (including price1=40 and price2=80).
let price1=40;
let price2=80;
function getDishInRange(data, price1, price2){
    for(let i=0;i<data.length;i++){
        
        if((data[i]["price"]>=price1) && (data[i]["price"]<=price2)){
            console.log(data[i]["name"],data[i]["price"],data[i]["category"]);
        };
    };
};
//getDishInRange(data, price1, price2);

// ### **Part 4:**
// From the above data, Write a function i.e **getMaxPriceDish(data)** 
// that will take the above data as input and return an object of a dish having maximum price.
//ask&&&&*****###@#$%$
function getMaxPriceDish(data){
    let max_price=-Infinity;
    let ans;
    for(let i=0;i<data.length;i++){
        if(data[i]["price"]>max_price){
            max_price=data[i]["price"];
            ans=data[i];
            //console.log(data[i]["name"],data[i]["price"],data[i]["category"]);
            //console.log(max_price);
             // console.log(data[i]["name"]);
        };
    };
    console.log(max_price);
    console.log(ans["name"]);
};
getMaxPriceDish(data);
// let max_price=-Infinity;
// for(let i=0;i<data.length;i++){
//     if(data[i]["price"]>max_price){
//         max_price=data[i]["price"];
//         //console.log(data[i]["name"],data[i]["price"],data[i]["category"]);
//         //console.log(max_price);
//          // console.log(data[i]["name"]);
//     };
    
// };

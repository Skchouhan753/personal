    let person1={
    name:"ram",
    age:14,
    address:"asansol"
    };
    let person2={
        name:"charu",
        age:15,
        address:"dendua"
    };
    let person3={
        name:"gitwa",
        age:49,
        address:"bonjemihary"
    };
    let person4={
        name:"andhaka",
        age:30,
        address:"ramgarh"
    }
    
let arr=[];
arr.push(person1);
arr.push(person2);
arr.push(person3);
arr.push(person4);
//console.log(arr);
//print all values
for(let i=0;i<arr.length;i++){
    //console.log(arr[i]);
};
//prnt name and age
for(let j=0;j<arr.length;j++){
    console.log(arr[j]["name"],arr[j]["age"]);
};

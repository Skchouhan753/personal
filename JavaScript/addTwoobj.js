
//Write a program to create a object from two arrays.
// Expected Output:{Class-V: 1 , Class-VI: 2 , Class-VII: 3, Class-VIII: 4}


let obj = {};
let arr = ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'];
let value = [1, 2, 3, 4];

for(let i=0;i<arr.length;i++){
obj[arr[i]]=value[i];
}
console.log(obj);

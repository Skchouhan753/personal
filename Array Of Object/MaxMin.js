let student1={
    name:"raju",
    class:9,
    age:35,
    roll_no:255,
    marks:45
};
let student2={
    name:"manshu",
    class:2,
    age:9,
    roll_no:48,
    marks:65
};
let student3={
    name:"fagulal",
    class:11,
    age:40,
    roll_no:20,
    marks:75
};
let student4={
    name:"chakwa",
    class:12,
    age:25,
    roll_no:11,
    marks:90
};
let student5={
    name:"paddu",
    class:6,
    age:15,
    roll_no:29,
    marks:96
};
let arr=[];
arr.push(student1);
arr.push(student2);
arr.push(student3);
arr.push(student4);
arr.push(student5);
//print all student name
for(let i=0;i<arr.length;i++){
    //console.log(arr[i]["name"])
};
//print all student name with marks
for(let i=0;i<arr.length;i++){
    //console.log(arr[i]["name"],"-",arr[i]["marks"]);
};
//print who got more than 90
for(let i=0;i<arr.length;i++){
    if(arr[i]["marks"]>90){
        //console.log(arr[i]["name"]);
    };
};
//print name who got exactly 90
for(let i=0;i<arr.length;i++){
    if(arr[i]["marks"]>90){
      //  console.log(arr[i]["name"],"-",arr[i]["roll_no"]);
    };
};
//find average marks of students
//1 method
let sum=0;
let count=0;
for(let i=0;i<arr.length;i++){
    sum=arr[i]["marks"]; 
    count++;
};
let sum2=0;
for(let i=1;i<arr.length;i++){
sum2=arr[i]["marks"];
};
let avg=(sum+sum2)/count;
//console.log(avg);
//2 method
let sum3=0;
let count3=0;
for(let i=0;i<arr.length;i++){
    sum3=sum3+arr[i]["marks"];
    count3++;
    let avg=sum3/count3;
};
//console.log(avg);
//print name who go maximum marks
let maximum_marks=-Infinity;
for(let k=0;k<arr.length;k++){
    if(arr[k]["marks"]>maximum_marks){
        maximum_marks=arr[k]["marks"];
        mahan=arr[k]["name"];
    };
};
//console.log(maximum_marks)
//console.log(maximum_marks,mahan);
//print name who go minimum marks
let minimum_marks=Infinity;
for(let p=0;p<arr.length;p++){
    if(arr[p]["marks"]<minimum_marks){
        minimum_marks=arr[p]["marks"];
    };
};
console.log(minimum_marks)


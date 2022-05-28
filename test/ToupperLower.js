// Given information in a data i.e contain the keys as name, toUpperCase 
// and toLowercase.
// toUpperCase : function to print the uppercase of the given name
// toLowerCase : function to print the lowercase of the given name

data = {

    name : "Suraj Lal Singh",
    toUpperCase : function(){

      let result="";
                        
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
   
let lower="abcdefghijklmnopqrstuvwxyz ";
 
for(let i=0;i<this.name.length;i++){
    
    let char=this.name;
let match=0;
   
    for(let j=0;j<lower.legth;j++){
      
      if(char==lower[j]){
      
        result=result+upper[j];
        match=1;
      }
    }
    if(match==0){
      result=result+char;
    }
console.log(result);
  };
}
}


// 					toLowerCase : function(){
// 		          let lower="abcdefghijklmnopqrstuvwxyz";

// 											  }
// 			};
// console.log(data["toUpperCase"]());
// console.log(data["toLowerCase"]());
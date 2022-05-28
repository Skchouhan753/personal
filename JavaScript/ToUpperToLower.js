// Given information in a data i.e contain the keys as name, toUpperCase 
// and toLowercase.
// toUpperCase : function to print the uppercase of the given name
// toLowerCase : function to print the lowercase of the given name
// data.toUpperCase() give output "SURAJ LAL SINGH"
// data.toLowerCase() give output "suraj lal singh"

data = {
		 name : "Suraj Lal Singh",
         toUpperCase : function(){
            let result="";							
            let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
            let lower="abcdefghijklmnopqrstuvwxyz ";
                 
            for(let i=0;i<this.name;i++){
                    
                    let char=this.name[i];
              let match=0;
                   
                    for(let j=0;j<lower.length;j++){
                      
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
    
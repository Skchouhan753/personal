let data={
    name:"Suraj Lal Singh",
    upperCase:function(){
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
let result="";
let count="nhi mila";
    for(let i=0;i<this.name.length;i++){
        for(let j=0;j<lower.length;j++){
            if(this.name[i]==lower[j]){
                result=result+upper[j];
                count="mil gya";
            }
        }
        if(count=="nhi mila"){
        result=result+this.name[i];
    }
    }
    console.log(result)
    }

};
    data["upperCase"]();
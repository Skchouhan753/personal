
// Given information in a data i.e contain the keys as arr and lastIndexOf
// Implement the lastIndexOf : method returns the last index at which a given 
// element can be found in the array, or -1 if it is not present.
// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

let data = {

	arr : ['Dodo', 'Tiger', 'Penguin', 'Dodo'],
	lastIndexOf : function(search){
				let lindex;
				for(let i=0;i<this.arr.length;i++){
					if(search===this.arr[i]){
						 lindex=i;
						// console.log(i)
					}
				}
				// return lindex;
				console.log(lindex);							
		}
		
	}
data["lastIndexOf"]("Dodo");
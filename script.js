function threeSum(arr, target) {
	arr.sort();
	let n=arr.length;
	for(let i=0;i<n-2;i++){
		target=target-arr[i];
		let j=i+1;
	    let k=n-1;
		let sum=0;
	    while(j<k){
			sum=arr[j]+arr[k];
			
			if(sum>target){
				k--;
			}
			else if(sum<target){
				j++;
			}
			else if(sum===target){
				return sum;
			}
		}
	}
	
	
	
  
}

module.exports = threeSum;

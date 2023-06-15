function threeSum(arr, target) {
	arr.sort();
	let n=arr.length;
	let ans=Number.MAX_VALUE
	for(let i=0;i<n-2;i++){
		currentTarget=target-arr[i];
		let j=i+1;
	    let k=n-1;
		let sum=0;
	    while(j<k){
			sum=arr[j]+arr[k];
			ans=  Math.min(ans,Math.abs(currentTarget-sum))
			
			if(sum>currentTarget){
				k--;
			}
			else if(sum<currentTarget){
				j++;
			}
			else if(sum===currentTarget){
				return sum;
			}
		}
	
	}
	return ans;
	
	
	
  
}

module.exports = threeSum;

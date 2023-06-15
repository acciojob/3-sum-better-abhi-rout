function threeSum(arr, target) {
	arr.sort();
	let n=arr.length;
	let minDiff=Number.MAX_VALUE
	let ans=Number.MAX_VALUE
	let index=0
	for(let i=0;i<n-2;i++){
		currentTarget=target-arr[i];
		let j=i+1;
	    let k=n-1;
		let sum=0;
	    while(j<k){
			sum=arr[j]+arr[k];
			let absDiff=Math.abs(currentTarget-sum)
			if(absDiff<minDiff){
				minDiff=absDiff
				ans=sum
				index=i
			}
			
			if(sum>currentTarget){
				k--;
			}
			else if(sum<currentTarget){
				j++;
			}
			else if(sum===currentTarget){
				return sum+arr[i];
			}
		}
	
	}
	return ans+arr[i];
	
	
	
  
}

module.exports = threeSum;

 const reverse = function(arr)
    {
        let i;
        let temp=[];
        for(i=0;i<arr.length;i++)
        {
            temp[i]=arr[arr.length-i-1];
        }
        return temp;
    };


const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]);
console.log(reversedArray);
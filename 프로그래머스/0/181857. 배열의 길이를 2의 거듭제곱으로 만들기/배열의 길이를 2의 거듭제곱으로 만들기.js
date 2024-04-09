function solution(arr) {
    const arrLength = arr.length;
    let pow = 0;
    
    while(Math.pow(2,pow) < arrLength) pow ++;
    
    let fillNum = Math.pow(2,pow)-arrLength;
    
    const zArr = Array(fillNum).fill(0);
    
    return arr.concat(zArr);
}
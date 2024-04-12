function solution(number) {
    let answer = 0;
    let arr = number.split("");
    for(i = 0; i < number.length; i++){
        answer += Number(arr[i]);
    }
    return answer%9;
}
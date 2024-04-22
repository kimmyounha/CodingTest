function solution(my_string, m, c) {
    var answer = '';
    let arr = my_string.split("");
    for(i = c-1; i < arr.length; i+=m){
        answer += arr[i];
    }
    return answer;
}
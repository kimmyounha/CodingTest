function solution(x, n) {
    var answer = new Array(n);
    for(var i = 1; i <= n; i++){
        answer[i-1] = x*i 
    }
    return answer;
}
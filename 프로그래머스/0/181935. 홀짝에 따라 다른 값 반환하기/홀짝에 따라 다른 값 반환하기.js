function solution(n) {
    var answer = 0;
    if(n % 2 == 0 ){
        for(i = 2; i <= n; i++){
            answer += i%2==0?(i*i):0;
        }
    }else{
        for(i = 1; i <= n; i++){
            answer += i%2==0?0:i;
        }
    }
    return answer;
}
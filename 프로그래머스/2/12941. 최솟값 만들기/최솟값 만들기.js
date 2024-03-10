function solution(A,B){
    var answer = []
    let result = 0
    var a = A.sort((a,b)=> a-b);
    var b = B.sort((a,b)=> b-a);
    for(let i = 0; i < a.length; i++){
        answer.push(a[i]*b[i])
    }
    for(let i = 0; i < answer.length; i++){
        result += answer[i]
    }
    return result;
}
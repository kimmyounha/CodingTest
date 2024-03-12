function solution(s) {
    let arr = s.split("")
    arr.sort()
    arr.reverse()
    return arr.join("")
}
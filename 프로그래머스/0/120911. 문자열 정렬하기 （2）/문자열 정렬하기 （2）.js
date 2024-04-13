function solution(my_string) {
    let small = my_string.toLowerCase();
    let smallarr = small.split('').sort();
    return smallarr.join('');
}
function solution(num_list) {
    let tot1 = num_list[0]
    let tot2 = num_list[0]
    for(i = 1; i < num_list.length; i++){
        tot1 *= num_list[i]
        tot2 += num_list[i]
    }
    return tot1<(tot2*tot2)?1:0;
}
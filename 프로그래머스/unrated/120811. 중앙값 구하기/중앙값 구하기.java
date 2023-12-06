import java.util.Arrays;

class Solution {
    public int solution(int[] array) {
        int answer = 0;
        Arrays.sort(array); //Arrays.sort로 array자동정렬 가능 (오름차순)
        
        answer = array[array.length/2];
        
        return answer;
    }
}
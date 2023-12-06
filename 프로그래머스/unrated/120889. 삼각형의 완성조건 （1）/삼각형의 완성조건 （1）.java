class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        int max = sides[0];      
        int maxIndex = 0; 
        int sum = 0; 

        for (int i=1; i < sides.length; i++) { 
            if (sides[i] > max) {
                max = sides[i]; 
                maxIndex = i; 
            } 
        }

        for(int i=0; i<sides.length; i++){
            if(i != maxIndex ) sum += sides[i];
        }

        if (max < sum) { 
            answer = 1;                        
        } else {
            answer = 2;
        }
        
        return answer;
    }
}
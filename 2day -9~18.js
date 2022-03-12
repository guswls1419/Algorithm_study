//09. 부족한 금액 계산하기
function solution(price, money, count) {
    var answer = 0;
    for(let i =1; i<=count; i++){
        answer += price * i;
    }// i를 1로 둠으로써, count는 1,2,3,4 가 되고,
    // answer =
    //(price * 1) + (price * 2) + (price * 3) + (price * 4)

    return money > answer ? 0 : answer - money;
}  // money 보다 answer의 값이 더 큼으로 삼항 연산자 조건에 따라,
   // false 값이 return된다.

let a = 3
let b = 20
let c = 4
console.log(solution(a,b,c))
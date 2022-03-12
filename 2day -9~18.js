//09. 부족한 금액 계산하기
//방법.01 나의 풀이법
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


//방법.02 가우스공식을 사용한 풀이법
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
// n * (n + ㅣ) / 2 (등차수열 합공식)
//ex) 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.
let d = 3
let e = 20
let f = 4
console.log(solution(d,e,f))
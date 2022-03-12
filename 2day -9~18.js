//09.핸드폰 번호 가리기

function solution(s) {
  return answer = '*'.repeat(s.length-4)+ s.slice(-4)
} //s 에 '*'-> 를 s의 개수에서 -4를 뺀만큼 반복해 붙인다.
  // slice 함수를 이용하여 s의 뒤에서부터 -4번째까지의 값을 붙인다.

//repeat() :  문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환하는 메서드
//slice() : 잘라낼 배열의 시작index와 end index를 파라미터로 받아서,그 사이의 원소들을 새로운 배열로 만들어서 리턴하는 함수
let a = "01033334444"
console.log(solution(a))

//10. 행렬의 덧셈
function solution(arr1, arr2) {
    var answer = [];
  // []배열의 수만큼 중첩하여 for문 사용하여 값을 구한다. 
  // ex.[[1,2]] -> 2번, [[[1,2],[3,4]]] -> 3번
    for (let i =0; i<arr1.length; i++){
      //arr1의 길이만큼 반복문 실행 (바깥쪽[]배열에 대한 for문)
        var NewAswer = [];//새로운 arr 생성에 대비해 생성
        for(let j = 0; j<arr1[i].length; j++){
        //arr1의[i] 길이만큼 반복문 실행 (안쪽[]배열에 대한 for문)
            NewAswer.push(arr1[i][j]+arr2[i][j]);
            //arr1,arr2의 [i]번째 [j]번째 더한값을 NewAswer로 push한다.
        }
        answer.push(NewAswer);//NewAswer값을 answer로 push한다.
    }
    return answer;
}

let a = [[1,2],[2,3]]
let b = [[3,4],[5,6]]

console.log(solution(a,b))

//11.x만큼 간격이 있는 n개의 숫자

// x씩 증가하는 x의 값을 n개 만큼 찍어주는 문제.
function solution(x, n) {
  let answer = [];
  for (let i = 1; i<=n; i++){
  //n개 만큼 찍어줘야 함으로, i를 1부터 시작 ex.(X*1),(X*2),(X*3)...
    answer.push(x*i);
  }
    return answer;
}

let a = 2
let b = 5
console.log(solution(a,b))


//12. 부족한 금액 계산하기
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


//16.문자열 내 p와 y의 개수
//방법.01 나의 풀이법
function solution(s){
    var a = s.match(/p/gi).length
    var b = s.match(/y/gi).length
  //match() : 특정 텍스트 안에 검색할 단어, 찾고 싶은 단어가 있는경우 
  //해당 텍스트가 문구에 포함되어 있는지 확인가능
  // g,i는 대소문자 무시하는 플레그
  //사용법 match(/찾고자하는 문자 /플래그)
    if (a==b || a ==0 && b==0){
    // (a와 b의 값이 같고), (a,b모두 0과 같을때) 둘중하나라도 true를 반환하면 true 반환해라.
        answer = true
    }else{
        answer = false // 아닐경우 false를 반환해라.
    }
    return answer;
}

var s = "pPoooyY";
console.log(solution(s))

//방법.02 상위 풀이법
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
// s 값을 대분자로 변환한 후, 'p','y'문자열만 뽑아 개수를 센값이 같으면 true 를 반환한다. 
//toUpperCase() : 대문자로 변환하는 함수
//split() : 문자열을 분할하는 메서드

var s = "pPoooyY";
console.log(numPY(s))



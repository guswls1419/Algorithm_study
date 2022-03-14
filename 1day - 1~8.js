//01.직사각형 별 만들기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    // split() : 문자열을 일정한 구분자로 잘라서 배열로 저장하는 함수
    const a = Number(n[0]), b = Number(n[1]);
  //Number() : 문자열을 숫자로 변환하는 함수
    let star = '*'.repeat(a)
  //repeat : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환하는 메서드
//조건 : 1.반복 횟수는 양의 정수여야 함.
//       2.반복 횟수는 무한대보다 작아야 하며, 최대 문자열 크기를 넘어선 안됨.
//repeat를 사용하여,'*'을 변수 a 만큼 반복해 붙인다.(*****->가로)
  for (let i=0; i<b; i++){
//b 를 i 만큼 반복하여 붙인다(* -> 세로*3)
    console.log(star)
  }
});


//02.짝수와 홀수
function solution(num) {
    if (num % 2 == 0){ // num을 2로 나눴을때 나머지값이 0
        answer = 'Even'//즉, 짝수일때, Even을
    }else{
        answer = 'Odd'// 홀수일때, Odd를 반환한다.
    }
    return answer;
}
let aa = 5
let bb = 2
console.log(solution(aa))


//03.가운데글자 가져오기
function solution(s) {
    var answer = '';
    if (s.length % 2 ==0){// s가 짝수일때
        answer = s[s.length / 2 - 1] + s[s.length / 2];
    // s의 [인덱스길이 나누기 2 , -1을 하면 중앙에서 -1번째] + s의 [인덱스길이 나누기 2(중앙)] => 즉 짝수일때 가운데 두글자를 가져온다.
    }else{
        answer = s[Math.floor(s.length/2)];
    // s의 [홀수는 소수점 발생함으로 소수점 내리는 Math 클래스사용 <-(인덱스길이 나누기 2)]
    }
    return answer;
}
let cc = "abcde"
console.log(solution(cc))

//04.두 정수 사이의 합
function solution(a, b, s=0) {
    for (let i = Math.min(a,b); i<=Math.max(a,b); i++)
    //i는 (a,b)의 최소 값, 최소값 i보다 크거나 같은 최대값 까지 반복해서 +한다.
        s+=i; // 오른쪽 변수 i 더한값을 s로 보낸다.
    return s;
}

let dd = 3
let ee = 5
console.log(solution(dd,ee))

//05.문자열을 정수로 바꾸기

function solution(s) {
    var answer = parseInt(s); //parseInt() :문자를 숫자로변환시켜주는 메소드
    return answer;
}

//06.없는 숫자 더하기
function solution(numbers) {
    var answer = 0;
    for(let i =0; i<10; i++){
      //i를 10보다 크지않은 값이나올때가지 반복한다.
        if(!numbers.includes(i)){
        // !-> not연산자. 
        //includes() :문자열이 특정 문자열을 포함하는지 확인하는 메서드
        //즉, 넘버스에 포함되지않는 값을 i만큼 반복하여 찾는다.
            answer += i;
        }
    }
    return answer;
}

let ff = [1,2,3,4,6,7,8,0]
console.log(solution(ff))

//07.음양 더하기
function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i<absolutes.length; i++){
    // 변수 i(현재 index값, 배열에서의 현재 위치)를 순서대로 계산하여 answer값 도출
        // 배열이 먼저 생성하여 signs[] 처럼 배열을 대입하는 식으로 접근해야 함.
        if (signs[i] === true) {
            answer = answer + absolutes[i];
              //true값 도출. if 문 실행되어 answer에 <+a(i=0),+c(i=2)> 
        } else {
            answer = answer - absolutes[i];
              //false값 도출. else 문 실행되어 answer에 <-b(i=1)> 
        }
    }

let gg = [4,7,12]
let hh = [true,false,true]

console.log(solution(gg,hh))

  //08.평균구하기
방법.1
let answer = [1,2,3,4]
let answers = answer.reduce((a,b) => a+b); 
let a = answers/answer.length;
  
console.log(a)
  
방법.2
function average(array){
return array.reduce((a, b) => a + b) / array.length;
}
var test = [5,3,4] 
console.log(average(test));
  
방법.3
function solution(arr) {
    var answer = 0;
    for(let i =0; i<arr.length; i++){
      // arr의 길이만큼 i를 반복한다.
        answer += arr[i];}
      //arr의 i번째를 모두 더한값을 answer로 보낸다.
    return answer/arr.length;}// answer 나누기 arr길이값.

var average = [3,4,5,6,7]
console.log( solution(average));

방법.4
  function solution(arr) {
    return arr.reduce((accumulator,currentValue) => accumulator+currentValue,0)/arr.length;
}//accumulator =>누산기는 콜백의 반환값을 누적한다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값.
//currentValue => 처리할 현재 요소.
  //0 => accumulator 값의 시작 배열지정

let ii = [1,2,3,4]
console.log(solution(ii)) 
//reduce() :배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환 하는 메서드
// (a, b) => a + b는 인수 a와 b를 받는 함수로 (a, b) => a + b는 실행되는 순간 표현식 a + b를 평가하고 그 결과를 반환한다.
//17.문자열 다루기 기본
//방법.01
function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s)
// (01. s의 길이가 4,6중 하나라도 맞으면 true), (02.s와 s를 정수로 바꿨을때 값이 같으면 true) 01,02 모두 일치하면 true 아니면 false
}
//parseInt() : 문자열을 정수로 바꾸는 함수

let s = "a1234"
console.log(solution(s))

//18.서울에서 김서방찾기
function solution(seoul) {
    let a = seoul.indexOf("Kim")
    //seoul에서 "Kim" 값이 몇번째 인덱스열에 있는지 구한다.
    let name = `김서방은 ${a}에 있다`
    return name;
}
//indexOf() : 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴한다.

let s = ["Jane", "Kim"]
console.log(solution(s))

//19.수박수박수박수

//2. 완주하지못한 선수
function solution(participant, completion) {
    participant.sort()
    completion.sort()
  // 각 배열 기본정렬순서로 정렬시킨다.
  // 정렬시키지않으면 밑에서 비교값을 찾을때 같은값이 아니라고 인식하기때문에 기본정렬순서로 정렬시켜주어야한다.
    let answer = participant.find((run,index)=>run !== completion[index])
  //find함수를 이용하여 찾을요소의 인덱스와, completion의 인덱스 중 같지않은 값을 구한다.
    return answer;
}
//fine() : 배열에서 특정 값을 찾는 조건을 callback 함수를 통해 전달하여,조건에 맞는 값 중 첫번째 값을 리턴한다. 만약 배열에 조건을 만족하는 값이 없으면 undefined를 리턴한다.
//arr.find(callback(element[, index[, array]])[, thisArg])

//sort() : 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.

let a = ["leo", "kiki", "eden"]
let b = ["eden", "kiki"]

console.log(solution(a,b))








//24. 정수 내림차순으로 배치
//방법.01
function solution(n) {
    return  parseInt(n.toString().split('').sort((a,b) => b-a).join(''))
}
// 1.n을 숫자에서 문자로 바꾼다
// 2.split을 이용해 배열을 만든다.
// 3.sort로 내림차순 정렬한다.
// 4.배열을 문자열로 바꾼다.
// 5.문자열을 숫자로 바꾼다.

let a = 118372

console.log(solution(a))

//join() : 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

//<sort 정렬>
// 오름차순 정렬
//numbers.sort((a, b) => a - b);
// 내림차순 정렬,
//numbers.sort((a, b) => b - a); 

// <Number() 와 parseInt()>
// 공통 : 문자를 숫자로변환시켜주는 메서드
// 차이 : 문자열에 숫자가 아닌것이 포함되어있을경우 ex)'1000원'
      // Number - NaN을 반환한다.
      // parseInt - 숫자가 끝날때 까지만 형변환을 하여 반환한다. ex)1000
      // 만약 시작이 숫자가 아니면 Number와 마찬가지로 NaN을 반환한다.

// <String() 과 toString()>
// 공통 : 숫자를 문자열로 형 변환하여 반환한다.
// 차이 : toString은 특정 진수로 객체를 표현한 문자열을 반환

//방법.02
function solution(n) {
  const newN = n + ""; 
  //number+string => string, string*number => number 
  //ex) 1+"" => "1", "1"*1 => 1 
  //split은 string에 사용하는 메서드니 기호에 맞게 형변환을 한 것
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;//단항 연산자 + 를 사용하여 값을 숫자로 변환 
}

let a = 118372
console.log(solution(a))









// 28. 하샤드 수
// 방법.01 내가한 풀이
function solution(x) {
    var answer = 0;
    var a = (x+"").split("") //문자로 변환후 split을 이용해 배열을 만듬
    for (let i = 0; i<a.length; i++){
        answer += Number(a[i]); 
  //a의 길이만큼 반복해서 더한값을 숫자로 변환하여 answer로 보냄
    }    
    return x % answer ==0 ? true : false;
}// x를 answer로 나눴을때 나머지가 0이면 true, 아니면 false(삼항연산자)
let b = 36
console.log(solution(b))

//방법.02 상위풀이법
function solution(x) {
  return !(x % (x + "").split("").reduce((a, b) => +a + +b ));
} 
let c = 84
console.log(solution(c))
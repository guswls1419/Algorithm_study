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
function solution(n) {
    var answer = '수박'.repeat(n/2) + (n % 2 == 1 ? '수' : '')
  //'수박'을 n/2만큼 반복해준다. + n을 2로 나눴을때 나머지값이 1이면 '수'를 붙인다.
    return answer;
}
let s = 7
console.log(solution(s))

//20. 완주하지못한 선수
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

//21.이상한 문자만들기
function solution(s) {
    var answer = '';
    var a = s.split(" ")
  // s를 split을 이용해 배열로 만들다. ex)['try','hello','world']
    for(let i =0; i<a.length; i++){ // a의 길이만큼 반복
        for(let j =0; j<a[i].length; j++){//a[i]의 길이만큼 반복
            if(j%2 ==0){//j를 2로 나눴을때 나머지값이 0
                answer = answer + a[i][j].toUpperCase();//대문자
            }else{
                answer = answer + a[i][j].toLowerCase();//소문자
            }
        }
        if(i<a.length-1){\
       //-1은 try hello world 사이의 공백 2를 넣어주기위해 붙인다.
            answer = answer+ " "
        }
    }
    return answer;
}

let a = "try hello world"
console.log(solution(a))

//22.자릿수 더하기
//방법.01
function solution(n){
    var answer = 0;
    var a = n+"".split("") // 문자열로 바꾼뒤 배열을만들어줌
    for (let i = 0; i<a.length; i++){//a개수만큼 반복해줌
        answer += Number(a[i]);
   //a[i]개수만큼 더해서 숫자도 바꾼뒤answer로 보낸다
    }
    return answer;
}
 var a = 123
    console.log(solution(a))

//방법.02
function solution(n){
    return (n+"").split("").reduce((a,b)=>a+parseInt(b),0)
// 문자열로변경,배열만든후,reduce(누산기)와 화살표함수를 사용하여 숫자로 변환해준 값을 반복해서 더한다.
}
 var a = 123
    console.log(solution(a))

//23.자연수 뒤집어 배열로 만들기
function solution(n) {
    return (n+"").split("").reverse().map(n=>parseInt(n));
}// 문자열로변경,배열만든후 reverse메서드로 배열을 거꾸로 돌려준다.
// map메서드를 이용하여,각 배열을 문자에서 숫자로 변환시켜준다.

let a = 12345
console.log(solution(a))

//- reverse() :  배열의 순서를 반전하는 메서드. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 된다


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

//25.정수 제곱근 판별
function solution(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n))  ? 
    // n의 제곱근과 정수 n의 제곱근이 같으면,  
    (Math.sqrt(n)+1)*(Math.sqrt(n)+1) : -1;
}// (n제곱근 +1)에 제곱근을 반환한다. 틀리면 -1을 반환한다.

let a = 121
console.log(solution(a))
//-Math.sqrt() 함수는 숫자의 제곱근을 반환한다.

// 다른 풀이법
function solution(n) {
    return n%Math.sqrt(n)==0 ? Math.pow((Math.sqrt(n)+1),2) : -1
}

function solution(n) {
    return n%Math.sqrt(n)==0 ? (Math.sqrt(n)+1)**2 : -1
}


//26.제일 작은 수 제거하기
function solution(arr) {
    if(arr.length ===1){
        return [-1];
    }// arr 길이가 1과 같다면 -1을 반환
    let min = arr.reduce((arr,crr)=>{
        return Math.min(arr,crr);
    })// arr의 가장 작은값을 reduce로 찾아냄.
    
    let minIndex = arr.indexOf(min)
  // 최소값이 들어있는 값의 인덱스 번호를 추출
     arr.splice(minIndex,1)
  //arr에서 최소값을 제거해준다.
    return arr;
}
//splice() : 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.


//27.콜라츠 추측
function solution(num) {
    var answer = 0;
    
    for(var i = 0; i < 500; i++) { // 500번까지만 반복
        if(num != 1) { // num이 1이 아닌 경우
            num = num % 2 == 0 ? num / 2 : num * 3 + 1; 
          //num은 짝수일경우 나누기2, 홀수일경우 *3+1 
          //(num이 1이 될때까지 계속 반복)
          
        } else { // 1인 경우
            return answer = i; // 현재 횟수를 출력
        }
    }    
    return answer = -1; // 500번을 실행했지만 return된 값이 없는 경우
}
//방법 2. 새로운 풀이법
function solution(num) {
    var answer = 0;
    while(num !=1 && answer != 500){
      //와일문은 조건이 참이될때까지 반복한다.
      // num이 1이 아닐때까지, 그리고 answer가 500이 아닐때까지 반복한다.
        num % 2==0 ? num = num/2 : num = num*3+1 
      // num= -> num을 지칭해주지않으면 값이 쌓이지않기때문에 꼭 num을 지칭해주어야 한다.
      //num이 짝수라면 num은 나누기 2, 아니면 *3+1을해서
      answer++ // answer에 더해줘라.(누산기 개념)
    }
      return num == 1 ? answer : -1;
} // num이 1이라면 answer를 반환, 아니라면 -1을 반환.


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
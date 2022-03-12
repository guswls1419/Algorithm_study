function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
// s 값을 대분자로 변환한 후, 'p','y'문자열만 뽑아 개수를 센값이 같으면 true 를 반환한다. 
//toUpperCase() : 대문자로 변환하는 함수
//split() : 문자열을 분할하는 메서드

var s = "pPoooyY";
console.log(numPY(s))
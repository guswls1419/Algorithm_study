function solution(x) {
    var a = (x+"").split("")
    var b = parseInt(a[0])+parseInt(a[1])
    if (x % b ==0){
        answer = true
    }else{
        answer = false
    }
    return answer;
}
let a = 19
console.log(solution(a))
//---------------------------------

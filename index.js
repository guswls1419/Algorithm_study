function solution(x, n) {
  let answer = [];
  for (let i = 1; i<=n; i++){
    answer.push(x*i);
  }
    return answer;
}

let a = 2
let b = 5
console.log(solution(a,b))
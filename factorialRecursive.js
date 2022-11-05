 // 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 1*2*3*4*5*6       means 5!*6 or (6-1)!*6
// 7! = 1*2*3*4*5*6*7
// 8! = 1*2*3*4*5*6*7*8
// 9! = 1*2*3*4*5*6*7*8*9  means 8!*9 or (9-1)!*9
// 10! = 1*2*3*4*5*6*7*8*9*10
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);

function solution(str){
    let result = ''
    for (let i = 0; i < str.length; i++){
        result = str[i] + result
    }
    return result
}

console.log(solution('hello'))
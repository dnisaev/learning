let arr = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick']; // [True, True, False, False, True]

console.log(flickSwitch(arr));

function flickSwitch(arr){

//   let newArr = [];
//   let boolean = true;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 'flick') {
//         boolean = !boolean;
//         newArr = [...newArr, boolean];
//     } else {
//         newArr = [...newArr, boolean];
//     }
//   }
//   return newArr;

    let boolean = true;
    return arr.map(el => el === 'flick' ? boolean = !boolean : boolean);
}
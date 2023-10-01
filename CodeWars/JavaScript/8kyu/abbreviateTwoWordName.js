// function abbrevName(name){

//     let str = `${name[0].toUpperCase()}.`;
    
//     for (let i = 1; i < name.length; i++){
//       if(name[i] === ' '){
//         str += name[i + 1].toUpperCase()
//       }
//     }
//     return str
//   }

function abbrevName(name){
    name = name.toUpperCase().split(' ');
    return name[0][0] + '.' + name[1][0];
}
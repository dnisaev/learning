console.log(elevator(0, 1, 0)); // => "left"
console.log(elevator(0, 1, 1)); // => "right"
console.log(elevator(0, 1, 2)); // => "right"
console.log(elevator(0, 0, 0)); // => "right"
console.log(elevator(0, 2, 1)); // => "right"

function elevator(left, right, call){
    if (call === 0) {
        if (left < right) {
            return 'left'
        } else {
            return 'right'
        }
    }
    if (call === 1) {
        if (left === call && right !== call) {
            return 'left'
        } else {
            return 'right'
        }
    }
    if (call === 2) {
        if (right >= left) {
            return 'right'
        } else {
            return 'left'
        }
    }
}
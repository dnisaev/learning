function countdown(n){

    if (n <= 0) {
        return []
    } else {
        let array = countdown(n - 1)
            array.unshift(n);
        return array
    }
    
}
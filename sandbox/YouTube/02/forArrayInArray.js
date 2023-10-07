let shoppingList = [
    firstBill = ["Apples", "Melons", "Berries"],
    secondBill = ["Water", "Wine", "Beer"],
    thirdBill = ["Chips", "Coke"]
]

for (let i = 0; i < shoppingList.length; i++) {    
    for (let j = 0; j < shoppingList[i].length; j++){
        console.log(shoppingList[i][j]);
    }
    console.log(shoppingList[i]);
}
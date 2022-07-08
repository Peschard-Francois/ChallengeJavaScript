//                                        CHALLENGE 5 


// function tips(additionValeur){
    

//     if ( additionValeur >= 50 && additionValeur <= 300){
//         const tipsValue = additionValeur * 15 / 100
//         const total = additionValeur + tipsValue
//         message = console.log(`La note était de : ${additionValeur}, le pourboire de ${tipsValue} et la valeur total etait de ${total}`);  
//         return message;
//     }else{
//         const tipsValue = additionValeur * 20 / 100
//         const total = additionValeur + tipsValue
//         message = console.log(`La note était de : ${additionValeur}, le pourboire de ${tipsValue} et la valeur total etait de ${total}`);   
//         return message;
//     }
// };

// tips(240);
// tips(40);
// tips(430);

// //DONNEES TEST 1
// let additionValeur = 240;
// let resultat  = additionValeur >= 50 && additionValeur <= 300 ? console.log(`La note était de : ${additionValeur}, le pourboire de ${tip = (additionValeur * 15 / 100)} et la valeur total etait de ${tip + additionValeur}`) : console.log(`La note était de : ${additionValeur}, le pourboire de ${tip = (additionValeur * 20 / 100)} et la valeur total etait de ${tip + additionValeur}`);
// //DONNEES TEST 2
// let additionValeur2 = 40;
// let resultat2  = additionValeur2 >= 50 && additionValeur2 <= 300 ? console.log(`La note était de : ${additionValeur2}, le pourboire de ${tip2 = (additionValeur2 * 15 / 100)} et la valeur total etait de ${tip2 + additionValeur2}`) : console.log(`La note était de : ${additionValeur2}, le pourboire de ${tip2 = (additionValeur2 * 20 / 100)} et la valeur total etait de ${tip2 + additionValeur2}`);
// //DONNEES TEST 3
// let additionValeur3 = 430;
// let resultat3  = additionValeur3 >= 50 && additionValeur3 <= 300 ? console.log(`La note était de : ${additionValeur3}, le pourboire de ${tip3 = (additionValeur3 * 15 / 100)} et la valeur total etait de ${tip3 + additionValeur3}`) : console.log(`La note était de : ${additionValeur3}, le pourboire de ${tip3 = (additionValeur3 * 20 / 100)} et la valeur total etait de ${tip3 + additionValeur3}`);


//                                        CHALLENGE 6

// function calcAverage(array) {
//     let i = 0;
//     let summ = 0 ;
//     while (i < array.length) {
//         summ += array[i++];
// }
//     return summ / array.length;
// };

// function checkWinner(moy1,moy2){

//     if (moy1 >= (moy2 * 2)){
//         let total = console.log(`L’équipe Dauphins gagne (${moy1} vs ${moy2})`);
//         return total;
//     }else if (moy2 >= (moy1 * 2)){
//         let total = console.log(`L’équipe Koala gagne (${moy2} vs ${moy1})`);
//         return total;
//     }else{
//         let total = console.log(`Personne ne gagne (${moy2} vs ${moy1}) !!`);
//         return total;
//     }
// };

// //DONNEE TEST 1
// let dauphins = [44, 23, 71];
// let koalas = [65, 54, 49];
// checkWinner(calcAverage(dauphins),calcAverage(koalas));

// //DONNEE TEST 1
// let dauphins2 = [85, 54, 41];
// let koalas2 = [23, 34, 27];
// checkWinner(calcAverage(dauphins2),calcAverage(koalas2));


//                                        CHALLENGE 7

// function cacltip(additionValeur,array,array2){
//     if ( additionValeur >= 50 && additionValeur <= 300){
//         const tipsValue = additionValeur * 15 / 100
//         const total = additionValeur + tipsValue
//         array.push(tipsValue);
//         array2.push(total);
//         message = console.log(`La note était de : ${additionValeur}, le pourboire de ${tipsValue} et la valeur total etait de ${total}`);
//         return message;
//     }else{
//         const tipsValue = additionValeur * 20 / 100
//         const total = additionValeur + tipsValue
//         message = console.log(`La note était de : ${additionValeur}, le pourboire de ${tipsValue} et la valeur total etait de ${total}`);  
//         array.push(tipsValue);
//         array2.push(total);
//         return message;
//     }
// };
// // TEST 100
// let tips = [];
// let totals = [];
// let bills = [125,555,44];

// function billsUse(array){
//     for  (i = 0 ;i < array.length; i++) {
//         cacltip(array[i],tips,totals);
//     }
//     let tipsArray =  console.log(tips);
//     let totalArray =  console.log(totals);
//     return tipsArray + totalArray;
// };

// billsUse(bills);



//                                        CHALLENGE 8

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function cacltip(additionValeur,array,array2){
    if ( additionValeur >= 50 && additionValeur <= 300){
        const tipsValue = additionValeur * 15 / 100
        const total = additionValeur + tipsValue
        array.push(tipsValue);
        array2.push(total);
        message = console.log(`La note était de : ${additionValeur}, le pourboire de ${tipsValue} et la valeur total etait de ${total}`);
        return message;
    }else{
        const tipsValue = additionValeur * 20 / 100
        const total = additionValeur + tipsValue
        message = console.log(`La note était de : ${additionValeur}, le pourboire de ${tipsValue} et la valeur total etait de ${total}`);  
        array.push(tipsValue);
        array2.push(total);
        return message;
    }
};

function billsUse(array){
    for  (i = 0 ;i < array.length; i++) {
        cacltip(array[i],tips,totals);
    }
    let tipsArray =  console.log(tips);
    let totalArray =  console.log(totals);
    return tipsArray + totalArray;
};
billsUse(bills);

function calcAverage(array) {
    let i = 0;
    let summ = 0 ;
    while (i < array.length) {
        summ += array[i++];
}
    return summ / array.length;
}
console.log(calcAverage(tips));
console.log(calcAverage(totals));
//                                        Challenge1

// let admin = "";
// let user = "John";
// console.log(user);

// admin = user;
// console.log(admin);

//                                        Challenge2
// let a = 1, b = 1;
// let c = ++a; // ? Answers 2 On renvoie la valeur apres l'incrémentation 1 + 1 = 2
// let d = b++; // ? Answers 1 On renvoie la valeur avant l'inecrémentation

//                                        Challenge3

// //EXERCICE 1
// let poidBernard = 78;
// let poidBernard2 = 95;
// let tailleBernard = 1.69;
// let tailleBernard2 = 1.88;
// let poidMarcel = 92;
// let poidMarcel2 = 85;
// let tailleMarcel = 1.95;
// let tailleMarcel2 = 1.76;

// function imc (poids , taille){
//     return poids / (taille * taille);

// }
// //Données Test 1
// let bernardHigerIMC = imc(poidBernard,tailleBernard) > imc(poidMarcel,tailleMarcel);
// console.log(bernardHigerIMC);
// let test1B  = imc(poidBernard,tailleBernard);
// let test1M = imc(poidMarcel,tailleMarcel);
// //Données Test 2
// let bernardHigerIMC2 = imc(poidBernard2,tailleBernard2) > imc(poidMarcel2,tailleMarcel2);
// console.log(bernardHigerIMC2);
// let test2B = imc(poidBernard2,tailleBernard2);
// let test2M = imc(poidMarcel2,tailleMarcel2);


// //EXERCICE 2

// if(test1B > test1M){

//     console.log(`Bernard a un IMC plus élevé que Marcel (${test1B})`);
// }else {
//     console.log(`Bernard a un IMC inferieur a Marcel (${test1B})`)
// };

// //EXERCICE 3


// function imcEtat ( name , imc ){

//     if ( imc < 21 ){
//         console.log(`${name} : Insuffisance pondérale `)
//     }else if ( imc >= 21 && imc <= 26 ){
//         console.log(`${name} : Poids normal `)
//     }else if ( imc > 26 && imc <= 31 ){
//         console.log(`${name} : Surpoids `)
//     }else if ( imc > 31 && imc <= 41){
//         console.log(`${name} : Obésité `)
//     }else{
//         console.log(`${name} : Obésité importante `)
//     }

// };
// //Données Test 1
// imcEtat("Bernard",test1B);
// imcEtat("Marcel",test1M);

// //Données Test 2
// imcEtat("Bernard",test2B);
// imcEtat("Marcel",test2M);

//                                        CHALLENGE 4

// let dauphinsTab = [96, 108, 89];
// let moyDauphins = moyenne(dauphinsTab).toFixed(2);
// console.log(moyDauphins);
// let koalasTab = [88, 91, 110];
// let moyKoalas = moyenne(koalasTab).toFixed(2);
// console.log(moyKoalas);



// if( moyDauphins > moyKoalas){
//     console.log("Les Dauphins ont gagnés !!!");
// }else{
//     console.log("Les Koalas ont gagnés !!!");
// };
// let resultat = moy1 > moy2 ? console.log("Les Dauphins ont gagnés !!!") : console.log("Les Koalas ont gagnés !!!");
// let resultat = moyDauphins > moyKoalas ? console.log("Les Dauphins ont gagnés !!!") : console.log("Les Koalas ont gagnés !!!");
// let resultat2 = moyDauphins > moyKoalas ? console.log("Les Dauphins ont gagnés !!!") : console.log("Les Koalas ont gagnés !!!");
// let resultat3 = moyDauphins > moyKoalas ? console.log("Les Dauphins ont gagnés !!!") : console.log("Les Koalas ont gagnés !!!");

function moyenne(array) {
    let i = 0;
    let summ = 0 ;
    let longueur = array.length;
    while (i < longueur) {
        summ = summ + array[i++];
}
    return summ / longueur;
}

function moy(tab1, tab2){
    let moy1 = moyenne(tab1).toFixed(2);
    let moy2 = moyenne(tab2).toFixed(2);
    let resultat;
    if ( moy1 === moy2 ){
        resultat = console.log(`Il ne peut pas avoir d'égalité (Dauphins : ${moy1}  Koalas : ${moy2})`);
        return resultat;
    }else if ( moy1 > 100 && moy1 > moy2 ){
        resultat = console.log(`Les Dauphins ont gagnés ${moy1} !!!`);
        return resultat;
    }else if( moy1 > 100 && moy1 < moy2 ){
        resultat = console.log(`Les Koalas ont gagnés ${moy2} !!!`);
        return resultat;
    }else{
        resultat = console.log(`Score trop faible pas de gagnant !! ${moy1} et ${moy2} !!!`);
        return resultat;
    }
}
// Données TEST 1

let dauphinsTab = [96, 108, 89];
let koalasTab = [88, 91, 110];
moy(dauphinsTab,koalasTab);

// Donneés TEST 2

let dauphinsTab2 = [97, 112, 101];
let koalasTab2 = [109, 95, 123];
moy(dauphinsTab2,koalasTab2);

// Donneés TEST 2

let dauphinsTab3 = [97, 112, 101];
let koalasTab3 = [109, 95, 106];
moy(dauphinsTab3,koalasTab3);





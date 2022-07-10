//                                        CHALLENGE 12
const tab1 = [17, 21, 23];
const tab2 = [12, 5, -5, 0, 4];

function  Deliapp (array){
    let resultat = "";
    let j = 1;
    for ( i = 0 ; i < array.length ; i++){
        resultat = console.log(` ${array[i]} degrés dans ${j} jour`);
        j++;
    }
    return resultat;
}

Deliapp(tab1);
console.log(``);
Deliapp(tab2);


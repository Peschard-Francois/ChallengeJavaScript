//                                        CHALLENGE 11
const user = {
    firstName: 'Bernard',
    weight: 78,
    size: 1.69,
    calcBMI : function (){
        return user.imc =  (user.weight / (user.size * user.size)).toFixed(2);
    },
    imc : ""
   };
   const user2 = {
    firstName: 'Marcel',
    weight: 92,
    size: 1.95,
    calcBMI : function (){
        return user2.imc = (user2.weight / (user2.size * user2.size)).toFixed(2);
    },
    imc : ""
   };

user.calcBMI();
console.log(user);
user2.calcBMI();
console.log(user2);

if ( user.imc > user2.imc){

    console.log(`L’IMC de Bernard ${user.imc} est plus élevé que celui de Marcel ${user2.imc})`)
}else{

    console.log(`L’IMC de Marcel ${user2.imc} est plus élevé que celui de Bernard ${user.imc})`)
};

// DONNEES TEST 2

const user3 = {
    firstName: 'Bernard',
    weight: 95,
    size: 1.88,
    calcBMI : function (){
        return user3.imc =  (user3.weight / (user3.size * user3.size)).toFixed(2);
    },
    imc : ""
   };
   const user4 = {
    firstName: 'Marcel',
    weight: 85,
    size: 1.76,
    calcBMI : function (){
        return user4.imc = (user4.weight / (user4.size * user4.size)).toFixed(2);
    },
    imc : ""
   };

user3.calcBMI();
console.log(user3);
user4.calcBMI();
console.log(user4);

if ( user3.imc > user4.imc){

    console.log(`L’IMC de Bernard ${user3.imc} est plus élevé que celui de Marcel ${user4.imc})`)
}else{

    console.log(`L’IMC de Marcel ${user4.imc} est plus élevé que celui de Bernard ${user3.imc})`)
};
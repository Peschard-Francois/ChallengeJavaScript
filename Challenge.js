//                                        CHALLENGE 13
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

//  EXERCICE 1
//1
let players1 = game.players[0];
    console.log(players1);
let players2 = game.players[1];
    console.log(players2);

//2
let gk = players1[0];
    console.log(gk);
let fieldPlayers = players1.slice(1);
    console.log(fieldPlayers);

//3
let allPlayers = players1.concat(players2);
    console.log(allPlayers);

//4
let players1Final = players1.push( "Thiago" , "Coutinho" , "Perisic");
    console.log(players1);

//5
let team1 = game.odds.team1;
    console.log(team1);
let draw = game.odds.x;
    console.log(draw);
let team2 = game.odds.team2;
    console.log(team2);
   
//6
function printGoals (array){
  let resultat = "";
  for ( i = 0 ; i < array.length ; i++){
    resultat =  resultat + "\n"  + array[i] ;
  }
   return `Liste des joueurs qui ont marqués : \n ${resultat} \n Le nombres de but est de : ${array.length}`;
};
console.log(printGoals(game.scored));

//7
if ( game.odds.team1 > game.odds.team2){
  console.log(`${game.team2} aura plus de chance de gagner que ${game.team1} `)
}else{
  console.log(`${game.team1} aura plus de chance de gagner que ${game.team2} `)
};

//  EXERCICE 2

//1
let j = 1;
for ( let player of game.scored){
  console.log(`But n°${j} : ${player}`);
  j++
};

//2
const probaValeur = Object.values(game.odds);
console.log(probaValeur);
let resultat ="";
for ( moy in probaValeur){
  resultat = resultat + moy;
  
}
console.log(resultat / probaValeur.length)


//3
 console.log(` Probabilité de victoire pour ${game.team1} : ${game.odds.team1} \n
 Probabilité d’égalité : ${game.odds.x} \n
 Probabilité de victoire de ${game.team2} : ${game.odds.team2}`) 


//4
const scorers = {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
};

//  EXERCICE 3

//1
const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];
//Récuperation des nom évenements ( sans les minutes )
const eventName = [];
for(let i = 0 ; i < gameEvents.length ; i++){
  eventName.push(gameEvents[i][1]);
}
//Parcours le tablezu evenName et vérifie s'il existe ou pas ( si apparait pour la prèmiere fois il initialise à 1 sinon incrémentation de 1 car il existe deja )
const dictEvents = {};
for (let event of eventName){
  dictEvents[event] ? dictEvents[event]++ : dictEvents[event] = 1;
}
console.log(dictEvents);

//2
let deleteYellowCard = gameEvents.splice(4,1);
console.log(gameEvents);

//3
console.log(`Un événement est appartu en moyenne toutes les ${90 / (gameEvents.length)} minutes`)

//4
for (let i = 0 ; i < gameEvents.length ; i++ ){
    let events = gameEvents[i];
    if(events[0] < 45){
      console.log(`[PREMIÈRE MOITIÉ] ${events[0]} . ${events[1]}`);
    }else{
      console.log(`[DEUXIÈME MOITIÉ] ${events[0]} . ${events[1]}`);
    }
};









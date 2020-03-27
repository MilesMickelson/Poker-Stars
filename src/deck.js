
// 

let Deck = class {
    buildDeck(){
      let suits = {
        'h': '\u2661 Hearts',  'd': '\u2662 Diamonds',  's': '\u2664 Spades',  'c': '\u2667 Clubs', 
       };
       
       let values = {
           '1':    'Ace',     '2':    'Two',     '3':  'Three',     '4':   'Four', 
           '5':   'Five',    '6':    'Six',    '7':  'Seven',    '8':  'Eight',
           '9':   'Nine',    '10':   'Ten',    '11':  'Jack',    '12': 'Queen',    '13':  'King',
       };
       
       let ca=[];
       let k=0;
       this._ca = [];
       for( var e in suits) {
           for( let i=1;i<=13;++i) {
               this._ca.push({s:e,v:i,i:k++});
           }
       }        
    }
    constructor(){
      this.buildDeck();
    }
    resetDeck(){
      this.buildDeck();
    }
    getCards(){
        return this._ca;
    }
    shuffleCards(){
      const rand =()=>0.5-Math.random();
      this._ca.sort(rand);
      this._ca.sort(rand);
      return this._ca;
    }
    dealACard(){
      return this._ca.pop();
    }
}
let deck = new Deck();
// console.log(deck.dealACard());
// console.log("shuffleCards -> return newDeck;", deck.shuffleCards());
deck.shuffleCards();
let players = [];

players.push([]);
players.push([]);
const playerCount = players.length;
const cardCount = 5;
for(let i=0; i<cardCount; ++i){
  for(let j=0; j<playerCount; ++j){
    players[j].push( deck.dealACard() );    
  }
}

for(let j=0; j<playerCount; ++j){
  console.log( '========');
  console.log( 'player #', j);
  console.log( players[j] );    
}


deck.resetDeck();
console.log(deck.getCards());
console.log(deck.shuffleCards());






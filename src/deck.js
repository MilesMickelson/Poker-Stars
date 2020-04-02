
// 

  module.exports = class Deck {
    buildDeck(){
      let suits = {
        'h': '\u2661',  'd': '\u2662',  's': '\u2664',  'c': '\u2667', 
       };
       
       let values = {
           '1':    'Ace',     '2':    '2',     '3':  '3',     '4':   '4', 
           '5':   '5',    '6':    '6',    '7':  '7',    '8':  '8',
           '9':   '9',    '10':   '10',    '11':  'Jack',    '12': 'Queen',    '13':  'King',
       };
       
       let k=0;
       this._ca = [];
       for( var e in suits) {
           for( let i=1;i<=13;++i) {
               this._ca.push({s:suits[e],v:values[i]});
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
// let deck = new Deck();
// console.log(deck.dealACard());
// console.log("shuffleCards -> return newDeck;", deck.shuffleCards());
// deck.shuffleCards();
// let players = [];

// players.push([]);
// players.push([]);
// const playerCount = players.length;
// const cardCount = 5;
// for(let i=0; i<cardCount; ++i){
//   for(let j=0; j<playerCount; ++j){
//     players[j].push( deck.dealACard() );    
//   }
// }

// for(let j=0; j<playerCount; ++j){
//   console.log( '========');
//   console.log( 'player #', j);
//   console.log( players[j] );    
// }


// deck.resetDeck();
// console.log(deck.getCards());
// console.log(deck.shuffleCards());






// uses deck
// uses player

const Deck = require('./deck');
const Player = require('./player');

let Game = class {   
	constructor() {
		this.deck = new Deck();
		this.deck.shuffleCards();
		this.players = [];
		this.players.push( new Player());
		this.players.push( new Player());
  }
  
	dealCards() {
		for(let i=0; i<5; ++i) {
			this.players.forEach( e => {
				e.getCardFromDealer( this.deck.dealACard());
			})
		}
  }
  
	getPlayers() {
		return this.players;
	}
	// showHands() {
	// 	let game = new Game();
		
	// 	let hands = document.createElement('ul');
	
	// 	for(let i=0; i < players.length; ++i) {
	// 		let card = document.createElement('li');
	// 		players.appendChild()
	// 	}
	// }
}

let game = new Game();
game.dealCards();
let players = game.getPlayers();

let playersHand = document.createElement('ul');

for(let i=0; i < players.length; ++i) {
  let liCard = document.createElement('li');
  let tempCards = JSON.stringify(players[i].showCards());
  console.log(tempCards);
  let playerCards = document.createTextNode(tempCards);
  let doc = document.getElementById('root');
  doc.appendChild(playersHand).appendChild(liCard).appendChild(playerCards);
}

// let game = new Game();
// game.dealCards();
// let players = game.getPlayers();
// players.forEach((e,i)=>{
// 	console.log('player:', i+1);
// 	console.log(e.showCards());
// });



/*
texas hold em
cards are dealt
options are submitted..
	check - bet - call - raise - fold
		loop through players doing one of those based on rules
**flop**
options are submitted..
	check - bet - call - raise - fold
**turn**
options are submitted..
	check - bet - call - raise - fold
**river**
options are submitted..
	check - bet - call - raise - fold
show cards / winner

Black Jack
Bets are made
  -- Loop through read bets
Cards are dealt -- 2 cards -- only 1 dealer card visible
  loop through players --
    hit / stay
Dealer hits until 17 or bust
players above dealer win
  -- evaluate hands

ability to evaluate turns
*/

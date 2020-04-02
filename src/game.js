// uses deck
// uses player

const Deck = require('./deck');
const Player = require('./player');

let Game = class {   
	constructor(){
		this.deck = new Deck();
		this.deck.shuffleCards();
		this.players = [];
		this.players.push( new Player());
		this.players.push( new Player());
  }
  
	dealCards(){
		for(let i=0;i<5;++i){
			this.players.forEach((e)=>{
				e.getCardFromDealer( this.deck.dealACard());
			})
		}
  }
  
	getPlayers(){
		return this.players
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

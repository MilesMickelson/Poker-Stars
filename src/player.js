module.exports = class Player { 
  constructor(){
    this.hand = []; 
	}
	showCards() {
		return this.hand;
	}

	getCardFromDealer(card) {
		this.hand.push(card);
	}
	// discard(card){
	// 	// this.hand - card
	// }
	// draw(card){
	// 	// if this.hand.length < 5
	// 	//   this.hand add the card

	// }
}

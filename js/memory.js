class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
      let shuffleCards = [];
      while (!(this.cards.length === 0)) {
        let randomCard = Math.floor(Math.random() * this.cards.length);
        shuffleCards.push(this.cards[randomCard]);
        this.cards.splice(randomCard, 1);
      }
    this.cards = shuffleCards;
    }
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } else {
      return false
    }
  }
}

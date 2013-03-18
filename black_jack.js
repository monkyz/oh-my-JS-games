//this is the constructor for all cards
function Card(n, s) {
    //the card number
    var number = n;
    //the card suit
    var suit = s;
    //getter for the card number
    this.getNumber = function () {
        return number;
    };
    //getter for the suit
    this.getSuit = function () {
        return suit;
    };
    //get the correct value of the number
    this.getValue = function () {
        if (number > 10) {
            return 10;
        } else if (number === 1) {
            return 11;
        } else {
            return number;
        }
    };
}
//the deal() function generates new Card objects
var deal = function () {
    //generate a random card number between 1 and 13
    var randNum = Math.floor(Math.random() * 13) + 1;
    //generate a random suit 
    var randSuit = Math.floor(Math.random() * 4) + 1;
    //returns the card
    return new Card(randNum, randSuit);
};
// the constructor for hand objects
function Hand() {
    //define 2 cards for the hand
    var card1 = deal();
    var card2 = deal();
    var cards = [card1, card2];

    this.getHand = function () {
        return cards;
    };
    this.score = function () {
        var sum = 0;
        numberOfAces = 0;
        for (i = 0; i < cards.length; i++) {

            if (cards[i].getValue() === 11) {
                numberOfAces++;
            }
            sum += cards[i].getValue();

            while (sum > 21) {
                numberOfAces--;
                sum -= 10;
            }
        }
        return sum;
    };

    this.printHand = function () {
        var string = "";

        for (i = 0; i < cards.length; i += 1) {
            string += cards[i].getNumber() + " of " + cards[i].getSuit();

            if (i < cards.length - 1) {
                string += ", ";
            }
        }
        return string;
    };
    this.hitMe = function () {
        var moreCards = deal();
        cards.push(moreCards);
    };
}
var playAsDealer = function() {
    var dealerHand = new Hand();

    while( dealerHand.score() < 17 ) {
        dealerHand.hitMe();
    }
return dealerHand.printHand();
};

function Card(n, s) {
    var number = n;
    var suit = s;
    this.getNumber = function () {
        return number;
    };
    this.getSuit = function () {
        return suit;
    };
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
var deal = function () {
    var randNum = Math.floor(Math.random() * 13) + 1;
    var randSuit = Math.floor(Math.random() * 4) + 1;
    //the card
    return new Card(randNum, randSuit);
};
var deal = function(){
        var randNum = Math.floor(Math.random() * 13) + 1;
        var randSuit = Math.floor(Math.random() * 4) + 1;
        //the card
        return new Card(randNum, randSuit);
};
function Hand(){
var card1 = deal();
var card2 = deal();
var cards = [card1, card2];

    this.getHand = function() {
return cards;
};

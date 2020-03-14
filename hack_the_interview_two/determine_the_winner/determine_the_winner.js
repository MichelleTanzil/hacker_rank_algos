function getRoundResult(winning_suit, suit1, number1, suit2, number2) {
  if (suit1 === winning_suit && suit2 === winning_suit) {
    if (number1 === number2) return "Draw";
    else if (number1 > number2) return "Player 1 wins";
    else return "Player 2 wins";
  } else if (suit1 === winning_suit && suit2 !== winning_suit)
    return "Player 1 wins";
  else if (suit1 !== winning_suit && suit2 === winning_suit)
    return "Player 2 wins";
  else {
    if(number1 === number2) return "Draw"
    else if (number1 > number2) return "Player 1 wins";
    else return "Player 2 wins";
  }
}

class GameState {
  constructor() {
    this.playerName = '';
    this.localStorage = '';
    this.currentState = {
      playerHP: 100,
      monsterHP: 100,
      playerChosenCast: '',
      playerAnswer: '',
      correctAnswer: '',
      countOfWonMonsters: 0,
    };
  }
}
// add get & set
export default GameState;

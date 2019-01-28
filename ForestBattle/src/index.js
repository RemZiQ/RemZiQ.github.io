import 'regenerator-runtime/runtime';
import 'bootstrap';
import $ from 'jquery';


import Nav from './components/navigation/nav';
import landingPage from './components/landing-page/landingPage';
import chosePlayerName from './screens/choose-player-name/chosePlayername';
import battle from './screens/battle/battle';
import GameState from './gameState';
import randomMonsterName from './components/utils/monsterName';
import performCast from './components/utils/performCast';
import callModal from './screens/cast/callModal';


const setPlayerName = async (gameState) => {
  const playerName = await chosePlayerName(gameState);
  gameState.playerName = playerName;
};

const battleScreen = async (gameState) => {
  await setPlayerName(gameState);
  battle();
  document.querySelector('.js-player-name').textContent = gameState.playerName;
  document.querySelector('.js-monster-name').textContent = randomMonsterName();
  $('#js-button-atack').on('click', async () => {
    const currentId = await callModal();
    performCast(currentId, gameState);
  });
};

const startApp = () => {
  const gameState = new GameState();
  window.gameState = gameState;
  Nav.draw();
  landingPage();
  $('.js-choose-player-name').on('click', async () => {
    await battleScreen(gameState);
  });
};
startApp();

export default startApp;

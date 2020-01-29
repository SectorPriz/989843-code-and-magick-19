'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 15;
var GAP = 70;
var TEXT_Y = 250;
var TEXT_WIDTH = 20;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 50;
var TEXT_GAP = 20;
var barHeight = CLOUD_HEIGHT - TEXT_HEIGHT - CLOUD_Y - TEXT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + TEXT_WIDTH + (GAP) * i, CLOUD_Y + TEXT_Y);
    ctx.fillStyle = 'red';
    ctx.fillRect(CLOUD_X + TEXT_WIDTH + (GAP) * i, CLOUD_Y + TEXT_Y - TEXT_HEIGHT, BAR_WIDTH, (('-' + barHeight) * times[i]) / maxTime);
  }

  /* var playerIndex = 0;
  var playerName = 'Вы';

  ctx.fillText(playerName, CLOUD_X + TEXT_WIDTH + (GAP) * playerIndex, CLOUD_Y + TEXT_Y);
  ctx.fillRect(CLOUD_X + TEXT_WIDTH + (GAP) * playerIndex, CLOUD_Y + TEXT_Y - TEXT_HEIGHT, BAR_WIDTH, -barHeight);

  var playerIndex = 1;
  var playerName = 'Иван';

  ctx.fillText(playerName, CLOUD_X + TEXT_WIDTH + (GAP) * playerIndex, CLOUD_Y + TEXT_Y);
  ctx.fillRect(CLOUD_X + TEXT_WIDTH + (GAP) * playerIndex, CLOUD_Y + TEXT_Y - TEXT_HEIGHT, BAR_WIDTH, -barHeight);

  var playerIndex = 2;
  var playerName = 'Юлия';

  ctx.fillText(playerName, CLOUD_X + TEXT_WIDTH + (GAP) * playerIndex, CLOUD_Y + TEXT_Y);
  ctx.fillRect(CLOUD_X + TEXT_WIDTH + (GAP) * playerIndex, CLOUD_Y + TEXT_Y - TEXT_HEIGHT, BAR_WIDTH, -barHeight); */
};

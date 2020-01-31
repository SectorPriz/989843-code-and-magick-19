'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_TIME = 25;
var GAP_SHADOW = 15;
var GAP = 50;
var TEXT_Y = 250;
var TEXT_WIDTH = 40;
var TEXT_HEIGHT = 20;
var TITLE_TEXT_WIDTH = 15;
var TITLE_TEXT_HEIGHT = 30;
var TITLE_GAP_Y = 20;
var BAR_WIDTH = 40;
var barHeight = '-' + 150;

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

window.renderStatistics = function (ctx, players, times,) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_TEXT_WIDTH, CLOUD_Y + TITLE_TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_TEXT_WIDTH, CLOUD_Y + TITLE_TEXT_HEIGHT + TITLE_GAP_Y);

  var maxTime = getMaxElement(times);

  var time = function () {
    return Math.round(times[i]);
  };

  var randomColor = function () {
    return Math.round(Math.random() * 100);
  }

  var colorPlayers = function () {
    return players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + randomColor() + '%, 50%)';
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + GAP) * i, CLOUD_Y + TEXT_Y);
    ctx.fillText(time(), CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + GAP) * i, (CLOUD_Y + TEXT_Y - GAP_TIME) + (barHeight * times[i] / maxTime));
    ctx.fillStyle = colorPlayers();
    ctx.fillRect(CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + GAP) * i, CLOUD_Y + TEXT_Y - TEXT_HEIGHT, BAR_WIDTH, barHeight * times[i] / maxTime);
  }
};

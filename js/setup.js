'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг', ' Вальц'];

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[0],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[4]
  },
  {
    name: WIZARD_NAMES[0] + WIZARD_SURNAMES[0],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[4]
  },
  {
    name: WIZARD_NAMES[0] + WIZARD_SURNAMES[0],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[4]
  },
  {
    name: WIZARD_NAMES[0] + WIZARD_SURNAMES[0],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[4]
  }
];

/* var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var maxRe = getMaxElement(WIZARD_NAMES); */

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

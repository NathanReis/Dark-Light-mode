feather.replace();

function applyBrightness() {
  let alpha = localStorage.getItem('alpha');

  document
    .querySelector('#mask')
    .style
    .backgroundColor = `rgba(0, 0, 0, ${alpha})`;
}

function downBrightness() {
  let alpha = parseFloat(localStorage.getItem('alpha'));

  if(alpha > 0) {
    alpha -= 0.1;
  }

  localStorage.setItem('alpha', alpha.toFixed(1));

  applyBrightness();
}

function upBrightness() {
  let alpha = parseFloat(localStorage.getItem('alpha'));

  if(alpha < 0.9) {
    alpha += 0.1;
  }

  localStorage.setItem('alpha', alpha.toFixed(1));

  applyBrightness();
}

function useDarkMode() {
  localStorage.setItem('mode', 'dark');

  document
    .querySelector('#light-mode')
    .classList
    .remove('mode-selected');

  document
    .querySelector('#dark-mode')
    .classList
    .add('mode-selected');

  document
    .querySelector('body')
    .classList
    .add('dark-mode');
}

function useLightMode() {
  localStorage.setItem('mode', 'light');

  document
    .querySelector('#dark-mode')
    .classList
    .remove('mode-selected');

  document
    .querySelector('#light-mode')
    .classList
    .add('mode-selected');

  document
    .querySelector('body')
    .classList
    .remove('dark-mode');
}

let mode = localStorage.getItem('mode');

if(mode && mode === 'dark') {
  useDarkMode();
} else {
  useLightMode();
}

let alpha = localStorage.getItem('alpha');

if(alpha) {
  localStorage.setItem('alpha', 0.5);
}

applyBrightness();

document
  .querySelector('#settings')
  .addEventListener('click', () => {
    document
      .querySelector('#settings-block')
      .classList
      .toggle('hide');
  });

document
  .querySelector('#light-mode')
  .addEventListener('click', useLightMode);

document
  .querySelector('#dark-mode')
  .addEventListener('click', useDarkMode);

document
  .querySelector('#down-brightness')
  .addEventListener('click', upBrightness);

document
  .querySelector('#up-brightness')
  .addEventListener('click', downBrightness);
window.addEventListener('load', () => {
  const LOCAL_VARIABLES = Object.freeze({
    ALPHA: '@darklitemode:alpha',
    MODE: '@darklitemode:mode'
  });

  feather.replace();

  function applyBrightness() {
    let alpha = localStorage.getItem(LOCAL_VARIABLES.ALPHA);

    document
      .querySelector('#mask')
      .style
      .backgroundColor = `rgba(0, 0, 0, ${alpha})`;
  }

  function downBrightness() {
    let alpha = parseFloat(localStorage.getItem(LOCAL_VARIABLES.ALPHA));

    if(alpha > 0) {
      alpha -= 0.1;
    }

    localStorage.setItem(LOCAL_VARIABLES.ALPHA, alpha.toFixed(1));

    applyBrightness();
  }

  function upBrightness() {
    let alpha = parseFloat(localStorage.getItem(LOCAL_VARIABLES.ALPHA));

    if(alpha < 0.7) {
      alpha += 0.1;
    }

    localStorage.setItem(LOCAL_VARIABLES.ALPHA, alpha.toFixed(1));

    applyBrightness();
  }

  function useDarkMode() {
    localStorage.setItem(LOCAL_VARIABLES.MODE, 'dark');

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
    localStorage.setItem(LOCAL_VARIABLES.MODE, 'light');

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

  let mode = localStorage.getItem(LOCAL_VARIABLES.MODE);

  if(mode && mode === 'dark') {
    useDarkMode();
  } else {
    useLightMode();
  }

  let alpha = localStorage.getItem(LOCAL_VARIABLES.ALPHA);

  if(!alpha) {
    localStorage.setItem(LOCAL_VARIABLES.ALPHA, 0.5);
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
});
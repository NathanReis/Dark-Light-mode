function showDigit(selector, digitClass) {
  let digitHTML = document.querySelector(selector);

  let digit = parseInt(digitClass[digitClass.length - 1]);
  let previusDigit = digit === 0 ? 9 : digit - 1;

  if(digitHTML.classList.contains(`digit-${previusDigit}`)) {
    digitHTML.classList.replace(`digit-${previusDigit}`, `digit-${digit}`);
  } else {
    digitHTML.classList.add(`digit-${digit}`);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateDigitalClock() {
  while(true) {
    await sleep(1000).then(() => {
      let now = new Date();

      let hour = now.getHours().toString();
      let minute = now.getMinutes().toString();

      if(hour.length === 1) {
        hour = `0${hour}`;
      }

      if(minute.length === 1) {
        minute = `0${minute}`;
      }

      let firstDigitHour = hour[0];
      let secondDigitHour = hour[1];

      let firstDigitMinute = minute[0];
      let secondDigitMinute = minute[1];

      showDigit('#hour .first-digit', `digit-${firstDigitHour}`);
      showDigit('#hour .second-digit', `digit-${secondDigitHour}`);

      showDigit('#minute .first-digit', `digit-${firstDigitMinute}`);
      showDigit('#minute .second-digit', `digit-${secondDigitMinute}`);
    });
  }
}

updateDigitalClock();
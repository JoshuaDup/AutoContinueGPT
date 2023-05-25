function findAndClickButton() {
  const buttons = document.querySelectorAll('button.btn');

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const buttonText = button.textContent.trim();

    if (buttonText === 'Continue generating') {
      button.click();
      break;
    }
  }
}

setInterval(findAndClickButton, 1000);

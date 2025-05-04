const themeSelector = document.querySelector('#theme-selector'); // selects the dropdown
const body = document.body;
const logo = document.querySelector('#logo'); // assuming you gave your <img> an id="logo"

function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.png'; // update with your actual white logo filename
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // light theme logo
  }
}

// listen for when the select element value changes
themeSelector.addEventListener('change', changeTheme);

// call the function once to set the initial theme
changeTheme();

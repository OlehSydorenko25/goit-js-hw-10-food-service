const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeBtn = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
themeBtn.addEventListener('change', OnChangeTheme)

function defaultThems() {
  const valueStorage = localStorage.getItem('theme');
  if (!valueStorage || valueStorage === 'light-theme') {
    lightThemeOn()
  }else darkThemeOn()
}
defaultThems()

function lightThemeOn() {
  body.classList.remove(Theme.DARK)
  body.classList.add(Theme.LIGHT)
  localStorage.setItem('theme', Theme.LIGHT);
}

function darkThemeOn() {
  body.classList.remove(Theme.LIGHT)
  body.classList.add(Theme.DARK)
  localStorage.setItem('theme', Theme.DARK);
  themeBtn.checked = 'true'
}

function OnChangeTheme() {
  if (!themeBtn.checked) {
    lightThemeOn()
  } else darkThemeOn() 
}


class ThemeSwitcher {
  attachEvent() {
    const html = document.querySelector('html');

    document.querySelectorAll('.toggle-theme').forEach((button) => {
      button.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const changeTheme = currentTheme === 'light' ? 'dark' : 'light';
        const changeIcon = changeTheme === 'light' ? '&#127765;' : '&#9728;';
        const changeLogo =
          changeTheme === 'light' ? '/assets/images/GitHub_Logo.png' : '/assets/images/GitHub_Logo_White.png';

        html.setAttribute('data-theme', changeTheme);
        button.innerHTML = changeIcon;
        document.querySelector('footer img').setAttribute('src', changeLogo);
      });
    });
  }
}

export default ThemeSwitcher;

function hijackGoogleLogo(source) {
  const googleLogo = document.getElementById('hplogo');
  googleLogo.setAttribute('src', source);
  googleLogo.setAttribute('srcset', source);
}

hijackGoogleLogo('https://www.hackyourfuture.dk/static/logo-dark.svg');

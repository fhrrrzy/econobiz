const eyeButtonInitiator = {
    init(eyeIcon) {
    const passwordInput = document.getElementById('password');
    const openEyeIcon = document.getElementById('open-eye');
    const closedEyeIcon = document.getElementById('closed-eye');

    eyeIcon.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        openEyeIcon.classList.add('hidden');
        closedEyeIcon.classList.remove('hidden');
      } else {
        passwordInput.type = 'password';
        openEyeIcon.classList.remove('hidden');
        closedEyeIcon.classList.add('hidden');
      }
    });
  },
}

export default eyeButtonInitiator;
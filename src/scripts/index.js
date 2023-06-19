import 'regenerator-runtime';
import '../css/app.css';
import 'swiper/swiper-bundle.min.css';
import 'flowbite';
import main from './main';
import App from './views/app';

const app = new App({
  content: document.querySelector('#wrapper'),
  skipContent: document.getElementById('skip-link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  main();
});

window.addEventListener('load', async () => {
  await app.renderPage();
  initFlowbite();
  main();
//   swRegister();
});

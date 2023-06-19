import { heroElement } from '../../templates/hero';
import { filterElement } from '../../templates/filter';
import { productListElement } from '../../templates/product-list';

const Home = {
  async render() {
    return `
        ${heroElement()}
        ${filterElement()}
        ${productListElement()}
    `;
  },

  async afterRender() {
    const homeLinks = document.querySelectorAll('li a');
    homeLinks.forEach((link) => {
      if (link.getAttribute('href') === '/') {
        link.classList.add('text-greenbase');
      } else {
        link.classList.remove('text-greenbase');
      }
    });
  },
};

export default Home;

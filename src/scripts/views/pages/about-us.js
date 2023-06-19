import { aboutUsElement } from '../../templates/about-us';
import { ourTeamElement } from '../../templates/our-team';

const AboutUs = {
  async render() {
    return `
        ${aboutUsElement()}
        ${ourTeamElement()}
      `;
  },

  async afterRender() {
    const homeLinks = document.querySelectorAll('li a');
    homeLinks.forEach((link) => {
      if (link.getAttribute('href') === '/#/about-us') {
        link.classList.add('text-greenbase');
      } else {
        link.classList.remove('text-greenbase');
      }
    });

    // const restaurants = await RestaurantSource.all();
    // console.log(restaurants);
    // const restaurantList = document.querySelector('restaurant-list');
    // restaurantList.restaurants = restaurants;
  },
};

export default AboutUs;

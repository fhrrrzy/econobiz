// import { navbarElement } from '../../templates/navbar';
import { heroElement } from '../../templates/hero';
import { ourTeamElement } from '../../templates/our-team';

const Home = {
  async render() {
    return `
        ${heroElement()}
        ${ourTeamElement()}
    `;
  },

  async afterRender() {
    // const restaurants = await RestaurantSource.all();
    // console.log(restaurants);
    // const restaurantList = document.querySelector('restaurant-list');
    // restaurantList.restaurants = restaurants;
  },
};

export default Home;

import Home from '../views/pages/home';
import DetailUmkm from '../views/pages/detail-umkm';
import DetailProduct from '../views/pages/detail-product';
import Profile from '../views/pages/profile';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail-umkm/:id': DetailUmkm,
  '/detail-product/:id': DetailProduct,
  '/profile': Profile,
  '/about-us': AboutUs,
};

export default routes;

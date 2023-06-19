import EconobizAPI from '../../data/econobizAPI';
import UrlParser from '../../routes/url-parser';
import { detailProductTemplate } from '../card';

const DetailProduct = {
  async render() {
    return `
      <div id="detail-product" class="aspect-4/3 m-4 lg:grid lg:grid-cols-2 lg:gap-2 lg:m-auto">
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataProduct = await EconobizAPI.getDetailProduct(url.id);
    const detailProduct = document.querySelector('#detail-product');
    detailProduct.innerHTML = '';

    dataProduct.forEach((product) => {
      const updatedProduct = { ...product };
      const descriptionText = updatedProduct.potentials.replace(/\n/g, '<br>');
      updatedProduct.potentials = descriptionText;
      detailProduct.innerHTML += detailProductTemplate(updatedProduct);
    });
  },
};

export default DetailProduct;

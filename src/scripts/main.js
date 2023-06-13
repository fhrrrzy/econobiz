import data from '../DATA.json';
import { detailProductTemplate } from './templates/card';

const main = () => {
  const detailProduct = document.querySelector('#detail-product');
  const dataProduct = data.data.products;
  detailProduct.innerHTML = '';

  dataProduct.forEach((product) => {
    const updatedProduct = { ...product };
    const descriptionText = updatedProduct.potentials.replace(/\n/g, '<br>');
    updatedProduct.potentials = descriptionText;
    detailProduct.innerHTML += detailProductTemplate(updatedProduct);
  });
};

export default main;

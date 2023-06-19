import Swiper from 'swiper';
import EconobizAPI from './data/econobizAPI';
import { productCardTemplate, feedbackCardTemplate } from './templates/card';
import LoginUtils from './utils/login-utils';

const main = async () => {
  window.addEventListener('click', () => {
    const backdropElements = document.querySelectorAll('[drawer-backdrop=""]');

    backdropElements.forEach((backdropElement) => {
      const clonedElement = backdropElement.cloneNode(true);
      backdropElement.parentNode.replaceChild(clonedElement, backdropElement);
    });
  });

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    LoginUtils.sendLogin();
  });

  const productList = document.querySelector('#container-list');
  const reviewList = document.querySelector('#review-card');
  const searchInput = document.getElementById('simple-search');
  const categorySelect = document.getElementById('category');
  const locationSelect = document.getElementById('location');
  const priceSelect = document.getElementById('price');

  const displayProduct = (products) => {
    console.log(products);
    productList.innerHTML = '';

    if (products.length === 0) {
      productList.innerHTML = '<h2 class="text-center sm:col-span-2 md:col-span-3 xl:col-span-4">Opps! Produk yang Anda cari tidak ditemukan</h2>';
      return;
    }

    products.forEach((product) => {
      productList.innerHTML += productCardTemplate(product);
    });
  };

  const displayFeedback = (feedbacks) => {
    reviewList.innerHTML = '';

    feedbacks.forEach((feedback) => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add(
        'swiper-slide',
        'relative',
        'max-w-sm',
        'p-6',
        'bg-white',
        'border',
        'border-gray-200',
        'rounded-lg',
        'shadow-lg',
        'w-72',
      );
      reviewItem.innerHTML = feedbackCardTemplate(feedback);

      reviewList.appendChild(reviewItem);
    });
  };

  const handleSearch = async () => {
    const searchname = searchInput.value;
    const category = categorySelect.value;
    const location = locationSelect.value;
    const pricesort = priceSelect.value;

    return {
      searchname,
      category,
      location,
      pricesort,
    };
  };

  const searchAndDisplayProduct = async () => {
    const searchParams = await handleSearch();
    const filterProduct = await EconobizAPI.filterProduct(
      searchParams.searchname,
      searchParams.category,
      searchParams.location,
      searchParams.pricesort,
    );
    displayProduct(filterProduct.products);
  };

  searchInput.addEventListener('keyup', searchAndDisplayProduct);
  categorySelect.addEventListener('change', searchAndDisplayProduct);
  locationSelect.addEventListener('change', searchAndDisplayProduct);
  priceSelect.addEventListener('change', searchAndDisplayProduct);

  const dataProducts = await EconobizAPI.getAllProduct();
  displayProduct(dataProducts.products);

  const review = await EconobizAPI.getAllFeedback();
  const reviewData = review.feedbacks;
  displayFeedback(reviewData);

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    mousewheel: true,
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
  });
};

export default main;

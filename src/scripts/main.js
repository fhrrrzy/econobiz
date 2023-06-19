import { initFlowbite } from 'flowbite';
import Swiper from 'swiper';
import EconobizAPI from './data/econobizAPI';
import { productCardTemplate, feedbackCardTemplate } from './templates/card';

const main = async () => {
  initFlowbite();

  window.addEventListener('click', () => {
    const backdropElements = document.querySelectorAll('[drawer-backdrop=""]');

    backdropElements.forEach((backdropElement) => {
      const clonedElement = backdropElement.cloneNode(true);
      backdropElement.parentNode.replaceChild(clonedElement, backdropElement);
    });
  });

  const productList = document.querySelector('#container-list');
  const dataProducts = await EconobizAPI.getAllProduct();
  const arrayDataProducts = dataProducts.products;
  const itemsPerPage = 12;
  let currentPage = 1;

  const displayProduct = (arrayDataProducts) => {
    productList.innerHTML = '';
    arrayDataProducts.forEach((product) => {
      productList.innerHTML += productCardTemplate(product);
    });
  };

  const renderPagination = () => {
    const totalItems = arrayDataProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbersContainer = document.querySelector('#page-number');
    pageNumbersContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement('div');
      pageNumber.classList.add(
        'page-number-item',
        'rounded-full',
        'flex',
        'p-2',
        'mx-1',
        'w-10',
        'h-10',
        'justify-center',
        'items-center',
        'md:p-3',
        'lg:p-4',
      );
      pageNumber.textContent = i;

      if (i === currentPage) {
        pageNumber.classList.add('active', 'bg-greenbase', 'text-white');
      }

      pageNumber.addEventListener('click', () => {
        currentPage = i;
        renderPagination();
        renderProductList();
      });

      pageNumbersContainer.appendChild(pageNumber);
    }

    const prevButton = document.querySelector('#prev button');
    const nextButton = document.querySelector('#next button');

    if (currentPage === 1) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentPage === totalPages) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };

  const renderProductList = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const displayedData = arrayDataProducts.slice(start, end);
    displayProduct(displayedData);
    renderPagination();
  };

  const prevButton = document.querySelector('#prev');
  const nextButton = document.querySelector('#next');

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPagination();
      renderProductList();
    }
  });

  nextButton.addEventListener('click', () => {
    const totalItems = arrayDataProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage < totalPages) {
      currentPage++;
      renderPagination();
      renderProductList();
    }
  });

  const reviewList = document.querySelector('#review-card');
  const review = await EconobizAPI.getAllFeedback();
  const reviewData = review.feedbacks;

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

  const renderFeedback = () => {
    displayFeedback(reviewData);
  };

  renderProductList();
  renderFeedback();

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    // centeredSlides: true,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    mousewheel: true,
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
  });

  const selectElement = document.querySelector('#category');
  selectElement.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    console.log(selectedCategory);
    filterProduct(selectedCategory);
    console.log(filterProduct(selectedCategory));
  });
};

export default main;

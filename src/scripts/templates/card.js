const productCardTemplate = (product) => `
  <div class="aspect-square rounded-3xl w-full relative bg-greenbgimage text-white">
    <div class="absolute top-0 p-2 lg:p-3 z-10">
        <a href="#" id="profile" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 lg:w-[36px] lg:h-[36px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="ml-1 capitalize">
                <p class="text-sm lg:text-lg mb-0">${product.umkm_name}</p>
                <p class="text-sm lg:text-base">${product.province}</p>
            </div>
        </a>
    </div>
    <a href="/detail/${product.id}" id="product" class="w-full h-full block">
        <div class="w-full h-full flex items-center justify-center"">
            <img src="${product.photo}" alt="background" class="rounded-3xl object-cover w-full h-full filter brightness-50">
            <div class="absolute top-0 p-2 right-0 lg:p-3 normal-case">
            <p class="bg-slate-900 rounded-full px-4 py-2 text-xs">${product.category}</p>
        </div>
        </div>
        <div class="absolute p-4 bottom-0 lg:[18px] capitalize">
            <h2 class="font-medium">${product.name}</h2>
            <p class="font-medium text-gray-300">Rp ${Number(product.price).toLocaleString('id-ID')}</p>
        </div>
    </a>
  </div>
`;

const ratingsElement = (rating) => {
  const filledStar = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block stroke-[1px] stroke-yellow-300 fill-yellow-300"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> </svg>';
  const emptyStar = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block stroke-[1px] stroke-yellow-300"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> </svg>';

  const ratingStars = filledStar.repeat(rating) + emptyStar.repeat(5 - rating);

  return ratingStars;
};

const feedbackCardTemplate = (feedback) => `
    <img src="./image/quote.png" alt="quote" class="absolute -top-0 right-0">
    <div class="flex flex-row gap-5 mb-4">
    <img src="${feedback.photo}" alt="profile reviewer" class="rounded-full w-14 h-14">
    <div>
        <p class="break-words text-md font-sans font-semibold mb-1 max-w-[10rem]">${feedback.full_name}</p>
        <div class="star">${ratingsElement(feedback.rating)}</div>
    </div>
    </div>
    <div class="text-justify">
    <q class="text-slate-700 font-sans break-all text-sm">${feedback.review}</q>
    </div>
`;

const detailProductTemplate = (product) => `
<div class="relative">
<img src="${product.photo}" alt="${product.name}" class="rounded-3xl w-full filter brightness-90" tabindex="0">
<p class="bg-slate-300 rounded-tr-3xl rounded-bl-3xl p-4 py-2 absolute top-0 right-0 lg:p-3 normal-case lg:text-lg" tabindex="0">${product.category}</p>
<h2 class="font-bold text-2xl px-4 pt-4 capitalize md:text-[26px]" tabindex="0">${product.name}</h2>
<p class="font-semibold text-3xl px-4 pb-2 md:text-[34px]" tabindex="0">Rp ${product.price}</p>

<div class="p-4 capitalize flex items-center justify-between">
    <a href="#" class="flex items-center">
        <img src="https://source.unsplash.com/400x400?people" alt="profil" class="rounded-full h-12 w-12">
        <div class="ml-2 capitalize">
            <p class="text-lg md:text-xl">${product.user_name}</p>
            <p class="text-sm md:text-base">${product.province}</p>
            <p class="text-xs md:text-sm">Joined ${product.join_date}</p>
        </div>
    </a>
    <button class="bg-greenbase rounded-full p-2 shadow-lg md:p-3 md: text-lg">Hubungi Penjual</button>
</div>        
</div>

<div class="px-4 md:text-lg">
<div class="flex items-center py-2 capitalize font-bold">
    <h2 tabindex="0">Deskripsi</h2>
    <div class="border-r-[8rem] border-black h-1 ml-4 lg:border-r-[12rem]"></div>
</div>
<p class="text-justify pb-2" tabindex="0">${product.description}</p>

<div class="flex items-center py-2 capitalize font-bold">
    <h2 tabindex="0">Potensi penggunaan/pengolahan lebih lanjut</h2>
    <div class="border-r-[8rem] border-black h-1 ml-4 lg:border-r-[12rem]"></div>
</div>
<p class="text-justify pb-2" tabindex="0">${product.potentials}</p>
</div>
`;

export {
  productCardTemplate,
  feedbackCardTemplate,
  detailProductTemplate,
};

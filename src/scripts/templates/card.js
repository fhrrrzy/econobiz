const productCardTemplate = (product) => `
  <div class="aspect=[4/3] rounded-3xl relative bg-greenbgimage text-white">
    <div class="absolute top-0 p-2 lg:p-3 z-10">
        <a href="#" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 lg:w-[44px] lg:h-[44px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="ml-2 capitalize">
                <p class="text-lg lg:text-xl">${product.user_name}</p>
                <p class="text-sm lg:text-base">${product.province}</p>
            </div>
        </a>
    </div>
    <a href="#">
        <img src="${product.photo}" alt="background" class="rounded-3xl w-full filter brightness-50">
        <div class="absolute top-0 p-2 right-0 lg:p-3 normal-case">
            <p class="bg-slate-900 rounded-full px-4 py-2 lg:text-lg">${product.category}</p>
        </div>
        <div class="absolute p-4 bottom-0 lg:[18px] capitalize">
            <h2 class="font-bold text-4xl lg:text-[40px]">${product.name}</h2>
            <p class="font-semibold text-xl lg:text-[22px]">Rp ${product.price}</p>
        </div>
    </a>
  </div>
`;

export { productCardTemplate };

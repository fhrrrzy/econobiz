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

export { detailProductTemplate };

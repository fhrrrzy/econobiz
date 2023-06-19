export const filterElement = () => `<section class="p-10 lg:px-20">
<div class="pt-3 mb-[37px] flex flex-wrap md:flex-nowrap items-center justify-between">
    <div class="flex items-center">
        <h1 class="pr-4 font-extrabold text-2xl">Waste List</h1>
        <hr class="h-1 w-20 bg-greenbgimage" />
    </div>
    <button data-modal-target="add-product-modal" data-modal-toggle="add-product-modal"
        class="block text-white bg-greenbase hover:bg-greenbgimage focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center"
        type="button">
        Add Product
    </button>
</div>
<div
    class="md:grid-cols-4 bg-white border grid grid-cols-1 gap-3 border-slate-200 rounded-xl shadow-md p-5">
    <div>
        <h1 class="font-bold text-base">Search</h1>
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input type="text" id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari Produk" required />
        </div>
    </div>

    <div>
        <h1 class="font-bold text-base">Category</h1>
        <div class="mb-2 bg-[#F1F1F1] divide-y divide-gray-100 rounded-lg shadow">
            <select name="category" id="category"
                class="text-[#6F6F6F] bg-white border border-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center w-full">
                <option value="">Pilih Kategori</option>
                <option value="Organik">Organik</option>
                <option value="Non-Organik">Non-Organik</option>
                <option value="Kimia">Kimia</option>
            </select>
        </div>
    </div>

    <div>
        <h1 class="font-bold text-base">Location</h1>
        <div class="mb-2 bg-[#F1F1F1] divide-y divide-gray-100 rounded-lg shadow">
            <select id="location"
                class="text-[#6F6F6F] bg-white border border-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center w-full">
                <option value="">Pilih Provinsi</option>
                <option value="Nanggroe Aceh Darussalam">Nanggroe Aceh Darussalam</option>
                <option value="Sumatera Utara">Sumatera Utara</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
                <option value="Sumatera Barat">Sumatera Barat</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Jambi">Jambi</option>
                <option value="Lampung">Lampung</option>
                <option value="Bangka Belitung">Bangka Belitung</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Banten">Banten</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Daerah Istimewa Yogyakarta">Daerah Istimewa Yogyakarta</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="Bali">Bali</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Sulawesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Maluku ">Maluku</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua">Papua</option>
                <option value="Papua Tengah">Papua Tengah</option>
                <option value="Papua Pegunungan">Papua Pegunungan</option>
                <option value="Papua Selatan">Papua Selatan</option>
                <option value="Papua Barat Daya">Papua Barat Daya</option>
            </select>
        </div>
    </div>

    <div>
        <h1 class="font-bold text-base">Price</h1>
        <div class="mb-2 bg-[#F1F1F1] divide-y divide-gray-100 rounded-lg shadow">
            <select name="price" id="price"
                class="text-[#6F6F6F] bg-white border border-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 flex items-center w-full">
                <option value="">Harga</option>
                <option value="lowest">Harga : Rendah ke Tinggi</option>
                <option value="highest">Harga : Tinggi ke Rendah</option>
            </select>
        </div>
    </div>
</div>
</section>`;

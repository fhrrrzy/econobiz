export const navbarElement = () => `
    <nav class="flex justify-between bg-white p-5 md:m-10 md:rounded-full md:px-10">
            <button class="md:hidden" type="button" id="open-drawer-button"
                data-drawer-target="drawer-disable-body-scrolling" data-drawer-show="drawer-disable-body-scrolling"
                data-drawer-body-scrolling="false" aria-controls="drawer-disable-body-scrolling">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <div class="">
                <img src="./image/icon/logo.svg" alt="" />
            </div>

            <ul class="gap-5 items-center hidden md:flex">
                <li><a href="javascript:void(0)" class="text-greenbase font-semibold">Home</a></li>
                <li><a href="javascript:void(0)" class="text-gray-500 font-semibold">About us</a></li>
                <li><a href="javascript:void(0)" class="text-gray-500 font-semibold">Our Team</a></li>
                <li><a href="javascript:void(0)" class="text-gray-500 font-semibold">Mitra</a></li>
            </ul>
            <!-- <button class="px-10 py-3 font-semibold rounded-full text-greenbase shadow-lg border border-greenbase shadow-greenbgimage/20">
                    login
                </button> -->
            <button class="flex items-center gap-3" id="dropdown-trigger" data-dropdown-toggle="dropdown-menu">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" class="w-8 aspect-square rounded-full" />
                <div class="font-bold hidden md:block">Halo, dicoding !</div>
            </button>

            <div id="dropdown-menu"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-trigger">
                    <li class="md:hidden block px-4 py-2 font-bold">Halo, dicoding 👋</li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profil
                            saya</a>
                    </li>
                    <hr class="my-2">
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                            out</a>
                    </li>
                </ul>
            </div>
        </nav>`;

class LoginPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ` <!-- Modal toggle -->
    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center type="button">
  Toggle modal
</button>

    <!-- Main modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" 
        class="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] hidden max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 justify-center items-center backdrop-blur-sm">
        <div class="relative max-h-full w-full max-w-md md:max-w-xl" tabindex="0">
            <!-- Modal content -->
            <div class="relative rounded-lg bg-white shadow">
                <button type="button" tabindex="0"
                    class="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                    data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-3xl font-medium text-slate-700 md:mb-0" tabindex="0">
                        Masuk
                    </h3>
                    <p class="my-5 text-sm text-slate-500 md:max-w-sm md:my-7" tabindex="0">
                        Input your username and password, Unlock the Full Experience and
                        Stay Connected
                    </p>
                    <form class="space-y-6" action="#">
                        <div>
                            <input type="text" name="username" id="username" tabindex="0"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                                placeholder="Username" required />
                        </div>
                        <div class="flex">
                            <input type="password" id="password" name="password" tabindex="0"
                                class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                                placeholder="Password">
                            <span id="password-toggle" tabindex="0"
                                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md cursor-pointer">
                                <svg id="open-eye" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                                <svg id="closed-eye" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <button type="submit" tabindex="0"
                            class="w-full rounded-lg bg-greenbase px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-greenbgimage focus:outline-none focus:ring-4 focus:ring-blue-300">
                            Login
                        </button>
                        <div class="text-sm text-gray-500 text-center" tabindex="0">
                            Belum punya akun?
                            <a href="./register.html" class="text-greenbase hover:underline" tabindex="0" data-modal-target="authentication-modal">Daftar disini</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>`
    }
}

customElements.define('login', LoginPage);
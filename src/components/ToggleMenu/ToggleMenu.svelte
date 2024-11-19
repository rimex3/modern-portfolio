<script>
    export let pathname;
    let menuVisible = false;

    const toggleMenu = () => {
        menuVisible = !menuVisible;
    };
</script>

<div>
    <button class="lg:hidden flex flex-col gap-[4px] p-2 focus:outline-none bg-transparent border-none cursor-pointer" on:click={toggleMenu} aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class={`size-10 text-white hover:text-third transition-all`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </button>

    <ul
        class="flex-col lg:flex-row items-center max-lg:w-[150px] max-lg:justify-center z-10 gap-2 text-white font-bold text-[1.1rem] list-none lg:flex max-lg:absolute max-lg:bg-[#212731] max-lg:rounded-lg max-lg:text-[0.9rem] max-lg:-right-[14px]"
        class:hidden={!menuVisible}
    >
        <li class="active:scale-90 transition-all max-lg:flex items-center justify-center">
            <a class="cursor-pointer z-10 p-2 w-[100px] text-white text-center h-[50px] flex items-center justify-center relative overflow-hidden group rounded-md" href="/">
                <span class="relative z-10">Home</span>
                <span class={`absolute inset-0 bg-bg-primary transform scale-0 group-hover:scale-110 transition-all duration-300 ease-in-out rounded-md`}></span>
                <span
                    class={`absolute inset-x-0 bottom-0 right-1/2 left-1/2 -translate-x-1/2 h-[2px] bg-third transform scale-x-0 transition-all duration-300 ease-in-out w-[50px] ${pathname === "/" ? "scale-x-100" : ""}`}
                ></span>
            </a>
        </li>
        <li class="active:scale-90 transition-all max-lg:flex items-center justify-center">
            <a class="cursor-pointer z-10 p-2 w-[100px] text-white text-center h-[50px] flex items-center justify-center relative overflow-hidden group rounded-md" href="/projects">
                <span class="relative z-10">Projects</span>
                <span class={`absolute inset-0 bg-bg-primary transform scale-0 group-hover:scale-110 transition-all duration-300 ease-in-out rounded-md`}></span>
                <span
                    class={`absolute inset-x-0 bottom-0 right-1/2 left-1/2 -translate-x-1/2 h-[2px] bg-third transform scale-x-0 transition-all duration-300 ease-in-out w-[50px] ${pathname === "/projects/" ? "scale-x-100" : ""}`}
                ></span>
            </a>
        </li>
        <li class="active:scale-90 transition-all max-lg:flex items-center justify-center">
            <a class="cursor-pointer z-10 p-2 w-[100px] text-white text-center h-[50px] flex items-center justify-center relative overflow-hidden group rounded-md" href="/blogs">
                <span class="relative z-10">Blogs</span>
                <span class={`absolute inset-0 bg-bg-primary transform scale-0 group-hover:scale-110 transition-all duration-300 ease-in-out rounded-md`}></span>
                <span
                    class={`absolute inset-x-0 bottom-0 right-1/2 left-1/2 -translate-x-1/2 h-[2px] bg-third transform scale-x-0 transition-all duration-300 ease-in-out w-[50px] ${pathname === "/blogs/" ? "scale-x-100" : ""}`}
                ></span>
            </a>
        </li>
        <li class="active:scale-90 transition-all max-lg:flex items-center justify-center">
            <a class="cursor-pointer z-10 p-2 w-[100px] text-white text-center h-[50px] flex items-center justify-center relative overflow-hidden group rounded-md" href="/about">
                <span class="relative z-10">About</span>
                <span class={`absolute inset-0 bg-bg-primary transform scale-0 group-hover:scale-110 transition-all duration-300 ease-in-out rounded-md`}></span>
                <span
                    class={`absolute inset-x-0 bottom-0 right-1/2 left-1/2 -translate-x-1/2 h-[2px] bg-third transform scale-x-0 transition-all duration-300 ease-in-out w-[50px] ${pathname === "/about/" ? "scale-x-100" : ""}`}
                ></span>
            </a>
        </li>
    </ul>
</div>

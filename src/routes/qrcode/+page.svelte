<script lang="ts">
    import qrcode from '$lib/assets/VoucherQrCode.png'
    import redeemedqrcode from '$lib/assets/RedeemedQrCode.png'
    import { sum, redeemed} from '$lib/stores.js';
	import { onDestroy, onMount } from 'svelte';
    // let redeemed = false;
    let timeout: number;
    onMount(() => {

        timeout = setTimeout(() => {
            $redeemed = true
        }, 5000)
    })
    onDestroy(() => {
        clearTimeout(timeout)
    })
</script>

<body class=" w-screen h-screen text-white bg-blue">
    <a href="/" class="flex flex-row items-center ml-3 pt-3"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9.27415 12.0006L16.2842 4.99053C16.4795 4.79527 16.4795 4.47868 16.2842 4.28342L15.7185 3.71774C15.5232 3.52247 15.2067 3.52247 15.0114 3.71774L7.08212 11.647C6.88685 11.8423 6.88685 12.1589 7.08212 12.3541L15.0114 20.2834C15.2067 20.4787 15.5232 20.4787 15.7185 20.2834L16.2842 19.7177C16.4795 19.5225 16.4795 19.2059 16.2842 19.0106L9.27415 12.0006Z" fill="white"/>
        </svg></span>
        <div class="ml-1 font-medium">Back</div>
    </a>
    <div class="text-2xl font-medium mt-10 ml-3">Climate vouchers</div>
        <div class="w-screen bg-white mt-5 rounded-3xl p-5 pb-28 flex flex-col items-center">
            <svg width="300" height="469" viewBox="0 0 324 469" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_48)">
                <path d="M3.09067 8.08881L2.52136 99.3795C18.1 104.606 18.7642 117.207 2.37601 122.688L2.37601 452.5C2.14513 457.768 4.94319 465.47 13.3213 465.5L306.482 465.5C317.88 465.514 320.003 457.53 320.249 452.5L320.249 122.688C303.83 117.489 302.351 104.154 320.395 99.3795L320.395 8.08883C320.319 2.28502 316.912 1.83981 306.482 1.90405L13.3213 1.35411C6.1438 1.5228 2.58169 2.52614 3.09067 8.08881Z" fill="white" stroke="black" stroke-opacity="0.05"/>
                <path d="M26 111H295" stroke="black" stroke-opacity="0.05" stroke-width="3" stroke-dasharray="8 8"/>
                </g>
                <defs>
                <filter id="filter0_d_20_48" x="0.862915" y="0.853943" width="321.032" height="468.146" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_48"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_48" result="shape"/>
                </filter>
                </defs>
            </svg>
            <div class="absolute top-48 left-11 flex flex-col items-center">
                <div class="flex flex-row items-center justify-between text-dark-blue w-64 font-bold">
                    <div class="text-2xl">Show to shop</div>
                    <div class="text-4xl flex flex-row items-center"><span class="text-lg">$</span>{$sum}</div>
                </div>
                <div class="mt-10"><img src={!$redeemed ? qrcode: redeemedqrcode} alt="" class="w-72 h-72"></div>
                <div class="text-black text-xs font-medium">Valid until 31 Dec 2027</div>
            </div>

      </div>

</body>
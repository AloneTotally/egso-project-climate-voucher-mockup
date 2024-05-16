<script>
    export let value;
    export let selected = false;
    // export let redeemed = false;
    $: activeClass = selected ? "" : "border border-2 border-black"
</script>
<!-- 
<div class=" ticket">
    testing
</div> -->

<!-- <div class="relative bg-white border border-red flex items-center justify-center"> -->
<!-- <button class="relative flex items-center justify-center transition-all" on:click={() => selected = !selected}> -->
    <button class="relative flex items-center justify-center transition-all" on:click>

    <!-- {#if !selected} -->
        <svg class="transition-all" width="170" height="83" viewBox="0 0 170 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_26_63)">
            <path d="M164.5 1.00542H117.5C114.691 7.76291 108.257 7.62622 105.5 1.00542H5.50007C2.78716 0.956826 1.98886 1.43632 2.00012 3.49211L2.00007 75.5054C2.02947 78.3022 2.90957 78.9527 5.50007 79.0054H105.5C107.702 71.3969 114.54 70.8274 117.5 79.0054H164.5C167.488 78.9779 168.067 78.0644 168 75.5054L168 4.99213C167.89 3.23123 167.362 0.872013 164.5 1.00542Z" class="{!selected ? "fill-white": "fill-blue"} transition-colors" stroke="black" stroke-opacity="0.19"/>
            <path d="M111 7.99213V71.9921" stroke={!selected ? "black": "white"} stroke-opacity={!selected ? "0.19" : "1"} stroke-dasharray="2 2"/>
            </g>
            <defs>
                <filter id="filter0_d_26_63" x="0.5" y="0.5" width="169.005" height="82.0054" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_63"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_63" result="shape"/>
                </filter>
            </defs>
        </svg>
<!--         
    {:else}
        <svg width="170" height="83" viewBox="0 0 176 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_26_84)">
            <path d="M167.5 3.0133H120.5C117.691 9.77079 111.257 9.6341 108.5 3.0133H8.50011C5.7872 2.96471 4.98886 3.9442 5.00012 5.99999L5.00011 77.5133C5.02951 80.3101 5.9095 80.9606 8.5 81.0133H108.5C110.702 73.4048 117.54 72.8353 120.5 81.0133H167.5C170.488 80.9858 171.067 80.0723 171 77.5133V7.5C170.89 5.7391 170.362 2.87989 167.5 3.0133Z" fill="#4F5798" />
            <path d="M115 9V73" stroke="white" stroke-dasharray="2 2"/>
            </g>
            <defs>
            <filter id="filter0_d_26_84" x="0.5" y="0.508789" width="175.005" height="87.0045" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_84"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_84" result="shape"/>
            </filter>
            </defs>
        </svg>
    {/if} -->
    <div class="w-6 h-6 bg-white rounded-full flex justify-center items-center absolute top-1/2 right-4 tick {activeClass}">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.74997 12.4491L4.12497 9.75948C3.83247 9.45978 3.36747 9.45978 3.07497 9.75948C2.78247 10.0592 2.78247 10.5356 3.07497 10.8353L6.21747 14.0552C6.50997 14.3549 6.98247 14.3549 7.27497 14.0552L15.225 5.91717C15.5175 5.61747 15.5175 5.14102 15.225 4.84132C14.9325 4.54162 14.4675 4.54162 14.175 4.84132L6.74997 12.4491Z" fill={!selected ? "#fff": "#4F5798"}/>
        </svg> 
        
    </div>
    <div class="absolute flex flex-row top-1/2 left-3 items-center gap-1" style="transform: translateY(-57%);">
        <div class="font-medium text-lg transition-colors" class:text-dark-dark-blue={!selected}>$</div>
        <div class="font-bold text-4xl transition-colors" class:text-dark-dark-blue={!selected}>{value}</div>
    </div>
</button>


<style>
    .tick {
        transform: translateY(-57%);
    }
/* .ticket:after {
    content: "";
    position: absolute !important;
    z-index: 100;
    top: 0;
    left: 0;
    border-right: #fff 7px solid;
    border-bottom: #fff 7px solid;
    -moz-border-radius: 0 0 20px 0;
    -webkit-border-radius: 0 0 20px 0;
    border-radius: 0 0 20px 0;
}
.ticket:before {
    content: "";
    position: absolute !important;
    z-index: 100;
    top: 0;
    right: 0;
    border-left: #fff 7px solid;
    border-bottom: #fff 7px solid;
    -moz-border-radius: 0 0 0 20px;
    -webkit-border-radius: 0 0 0 20px;
    border-radius: 0 0 0 20px;
} */
</style>
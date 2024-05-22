<!-- <h1>Welcome to SvelteKit</h1>
<p class="text-5xl">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<script lang="ts">
    // import svelteLogo from './assets/svelte.svg'
    // import viteLogo from '/vite.svg'
    import logo from '$lib/assets/ClimateVoucherLogo.png'
    import { sum, selected, redeemed } from '$lib/stores.js';
    import Ticket from '$lib/Ticket.svelte';
    let values: Array<number> = [2, 2, 2, 2, 2, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 50, 50, 50]
    // let selected: Array<boolean> = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    
    
  
    const updateTicket = (i: number) => {
        $selected[i]=!$selected[i];
        // console.log(selected);
        
        $sum = sumValues($selected)
    }

  const sumValues = (selectArray : Array<boolean>) : number => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      if (selectArray[i]) {
        sum += values[i]
      }
    }
    // console.log(sum);
    
    return sum;
  }
</script>

<body class=" w-screen h-screen">
    {#if $sum > 0}
      <a href="/qrcode" class="fixed w-5/6 bottom-10 rounded-lg bg-dark-dark-blue left-1/2 z-20 h-20 flex flex-row items-center justify-between px-5 text-white" style="transform: translateX(-50%)">
        <div class="flex flex-row items-center gap-1">
          <div class="font-medium text-lg transition-colors">$</div>
          <div class="font-bold text-4xl transition-colors">{$sum}</div>
        </div>
        <div class="text-lg">Show voucher &#8594;</div>
    </a>
    {/if}
    <main style=" background-color: #222757" class=" w-full h-full text-white">
    <div class="p-5">
      <div class="flex flex-row items-center justify-between">
        <img src={logo}  alt="">
        <div class="flex flex-row border bg-dark-blue px-2 py-2 rounded-lg gap-2" style="border: 2px solid #35376E;">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4904 1.91669C6.20038 1.91669 1.91663 6.21002 1.91663 11.5C1.91663 16.79 6.20038 21.0834 11.4904 21.0834C16.79 21.0834 21.0833 16.79 21.0833 11.5C21.0833 6.21002 16.79 1.91669 11.4904 1.91669ZM18.1316 7.66669H15.3045C14.9979 6.46877 14.557 5.31877 13.982 4.25502C15.7454 4.85877 17.2116 6.08544 18.1316 7.66669ZM11.5 3.87169C12.2954 5.02169 12.9183 6.29627 13.3304 7.66669H9.66954C10.0816 6.29627 10.7045 5.02169 11.5 3.87169ZM4.08246 13.4167C3.92913 12.8034 3.83329 12.1613 3.83329 11.5C3.83329 10.8388 3.92913 10.1967 4.08246 9.58335H7.32163C7.24496 10.2159 7.18746 10.8484 7.18746 11.5C7.18746 12.1517 7.24496 12.7842 7.32163 13.4167H4.08246ZM4.86829 15.3334H7.69538C8.00204 16.5313 8.44288 17.6813 9.01788 18.745C7.25454 18.1413 5.78829 16.9242 4.86829 15.3334ZM7.69538 7.66669H4.86829C5.78829 6.07585 7.25454 4.85877 9.01788 4.25502C8.44288 5.31877 8.00204 6.46877 7.69538 7.66669ZM11.5 19.1284C10.7045 17.9784 10.0816 16.7038 9.66954 15.3334H13.3304C12.9183 16.7038 12.2954 17.9784 11.5 19.1284ZM13.7425 13.4167H9.25746C9.17121 12.7842 9.10413 12.1517 9.10413 11.5C9.10413 10.8484 9.17121 10.2063 9.25746 9.58335H13.7425C13.8287 10.2063 13.8958 10.8484 13.8958 11.5C13.8958 12.1517 13.8287 12.7842 13.7425 13.4167ZM13.982 18.745C14.557 17.6813 14.9979 16.5313 15.3045 15.3334H18.1316C17.2116 16.9146 15.7454 18.1413 13.982 18.745ZM15.6783 13.4167C15.755 12.7842 15.8125 12.1517 15.8125 11.5C15.8125 10.8484 15.755 10.2159 15.6783 9.58335H18.9175C19.0708 10.1967 19.1666 10.8388 19.1666 11.5C19.1666 12.1613 19.0708 12.8034 18.9175 13.4167H15.6783Z" fill="white"/>
            </svg>
            <div class="mr-3">English</div>
           
          
          <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.175 7.15833L10 10.975L13.825 7.15833L15 8.33333L10 13.3333L5 8.33333L6.175 7.15833Z" fill="white"/>
          </svg></span></div>
      </div>
      <div class="flex-col flex items-start gap-1 mt-5">
        <div class="text-2xl font-bold">Climate vouchers</div>
        <div class="mt-3 flex flex-row"><span class="mr-1"><svg width="30" height="30" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.2284 10.1721C30.8914 10.1721 9.56409 31.547 9.56409 57.8841C9.56409 84.2211 30.8914 105.596 57.2284 105.596C83.6132 105.596 104.988 84.2211 104.988 57.8841C104.988 31.547 83.6132 10.1721 57.2284 10.1721ZM57.2761 96.0537C36.1874 96.0537 19.1065 78.9728 19.1065 57.8841C19.1065 36.7954 36.1874 19.7145 57.2761 19.7145C78.3648 19.7145 95.4457 36.7954 95.4457 57.8841C95.4457 78.9728 78.3648 96.0537 57.2761 96.0537ZM56.2265 34.0281H55.9402C54.0317 34.0281 52.5049 35.5549 52.5049 37.4633V59.9834C52.5049 61.6533 53.3637 63.2278 54.8428 64.0867L74.6433 75.9669C76.2655 76.9212 78.3648 76.4441 79.3191 74.8219C80.321 73.1997 79.7962 71.0526 78.1263 70.0984L59.6617 59.1246V37.4633C59.6617 35.5549 58.1349 34.0281 56.2265 34.0281Z" fill="white"/>
            </svg>
            </span>Use by 31 Dec 2027</div>
        <div class=" text-left flex flex-row"><span><svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.6491C3 10.3253 3 10.1633 3.02583 10.0042C3.05165 9.84505 3.10286 9.69143 3.20527 9.3842L3.42164 8.73509C3.86165 7.41505 4.08166 6.75503 4.60543 6.37752C5.12921 6 5.82493 6 7.21637 6H8.78363C10.1751 6 10.8708 6 11.3946 6.37752C11.9183 6.75503 12.1384 7.41505 12.5784 8.73509L12.7947 9.3842C12.8971 9.69143 12.9484 9.84505 12.9742 10.0042C13 10.1633 13 10.3253 13 10.6491V22C13 23.8856 13 24.8284 12.4142 25.4142C11.8284 26 10.8856 26 9 26H7C5.11438 26 4.17157 26 3.58579 25.4142C3 24.8284 3 23.8856 3 22V10.6491Z" stroke="white"/>
            <path d="M3 10H13" stroke="white" stroke-linecap="round"/>
            <rect x="5" y="12" width="2" height="2" fill="white"/>
            <rect x="9" y="12" width="2" height="2" fill="white"/>
            <rect x="5" y="16" width="2" height="2" fill="white"/>
            <rect x="9" y="16" width="2" height="2" fill="white"/>
            <rect x="5" y="20" width="2" height="2" fill="white"/>
            <rect x="9" y="20" width="2" height="2" fill="white"/>
            <path d="M19 22V25.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.2212 19.5141L13.8433 19.1866L13.8433 19.1866L14.2212 19.5141ZM17.7 15.5V15C17.555 15 17.4172 15.063 17.3222 15.1725L17.7 15.5ZM23.7789 19.5141L23.4011 19.8415L23.4011 19.8415L23.7789 19.5141ZM20.3 15.5L20.6779 15.1725C20.5829 15.063 20.445 15 20.3 15V15.5ZM14.599 19.8415L18.0779 15.8275L17.3222 15.1725L13.8433 19.1866L14.599 19.8415ZM15.128 21C14.5281 21 14.2061 20.2948 14.599 19.8415L13.8433 19.1866C12.8892 20.2875 13.6712 22 15.128 22V21ZM22.8721 21H15.128V22H22.8721V21ZM23.4011 19.8415C23.7939 20.2948 23.4719 21 22.8721 21V22C24.3288 22 25.1108 20.2875 24.1567 19.1866L23.4011 19.8415ZM19.9222 15.8275L23.4011 19.8415L24.1567 19.1866L20.6779 15.1725L19.9222 15.8275ZM20.3 15H17.7V16H20.3V15Z" fill="white"/>
            <path d="M15.3433 13.4891L18.2628 10.3042C18.6592 9.8718 19.3408 9.8718 19.7372 10.3042L22.6567 13.4891C23.3622 14.2588 22.8162 15.5 21.7721 15.5H16.2279C15.1838 15.5 14.6378 14.2588 15.3433 13.4891Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>Blk 1234, #01-01, XYZ Road Singapore 123456</div>
        <div class="flex flex-row gap-2 mt-5">
          <div class="rounded-full bg-blue w-40 h-10 text-center items-center flex justify-center">
            <span class="mr-2"><svg width="20" height="20" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.4462 5.24097C21.3048 5.24097 13.1026 13.4432 13.1026 23.5846C13.1026 37.3422 31.4462 57.6512 31.4462 57.6512C31.4462 57.6512 49.7897 37.3422 49.7897 23.5846C49.7897 13.4432 41.5875 5.24097 31.4462 5.24097ZM18.3436 23.5846C18.3436 16.3519 24.2135 10.482 31.4462 10.482C38.6788 10.482 44.5487 16.3519 44.5487 23.5846C44.5487 31.1316 37.0016 42.426 31.4462 49.4752C25.9955 42.4784 18.3436 31.053 18.3436 23.5846Z" fill="white"/>
              <path d="M31.4462 30.1359C35.0644 30.1359 37.9975 27.2028 37.9975 23.5846C37.9975 19.9664 35.0644 17.0333 31.4462 17.0333C27.828 17.0333 24.8949 19.9664 24.8949 23.5846C24.8949 27.2028 27.828 30.1359 31.4462 30.1359Z" fill="white"/>
              </svg>
              </span>
            Where to use
          </div>
          <div class="rounded-full bg-blue w-40 h-10 text-center items-center flex justify-center gap-1">
            <span><div class="h-4 w-4 border border-white flex items-center justify-center rounded-full font-light text-xs">?</div></span>
            Info & Help
          </div>
        </div>
      </div>
    </div>
  
        <div class="grid grid-cols-2 w-screen bg-white mt-5 rounded-3xl p-5 pb-28">
          {#each values as value, i}
            {#if $redeemed}  
              <Ticket {value} selected={$selected[i]}/>
            {:else}
              <Ticket {value} selected={$selected[i]} on:click={() => updateTicket(i)}/>
            {/if}
            
          {/each}
        </div>
      
      </main>
  </body>
  
  
  
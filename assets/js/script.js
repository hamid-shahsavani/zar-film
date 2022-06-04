 
//! element selector 

function $(e) {
  return document.querySelectorAll(e);
}

//! object for add cards to dom

const cards = {
   mobileSliderCard: {
     one: {
       type: 'sub',
       image: 'assets/img/slider-card-1.jpg',
     },
     two: {
      type: 'dub',
      image: 'assets/img/slider-card-2.jpg',
    },
    tree: {
      type: 'sub',
      image: 'assets/img/slider-card-3.jpg',
    },
    four: {
      type: 'dub',
      image: 'assets/img/slider-card-4.jpg',
    },
  },
  desktopSliderCard: {
    one: {
      type: 'sub',
      image: 'assets/img/slider-card-1.jpg',
      title: 'memory',
    },
    two: {
     type: 'dub',
     image: 'assets/img/slider-card-2.jpg',
     title: 'the morthman',
   },
   tree: {
     type: 'sub',
     image: 'assets/img/slider-card-3.jpg',
     title: 'bad guys',
   },
   four: {
     type: 'dub',
     image: 'assets/img/slider-card-4.jpg',
     title: 'morbius',
   },
  },
  lastView: {
    one: {
      title: 'attack on titan',
      image: 'assets/img/view-card-4.jpg'
    },
    two: {
      title: 'the end game',
      image: 'assets/img/view-card-3.jpg'
    },
    tree: {
      title: 'boruto: naruto next generations',
      image: 'assets/img/view-card-2.jpg'
    },
    four: {
      title: 'family guys',
      image: 'assets/img/view-card-1.jpg'
    },
  },
  lastUpdate: {
    one: {
      title: 'family guys',
      image: 'assets/img/view-card-1.jpg'
    },
    two: {
      title: 'boruto: naruto next generations',
      image: 'assets/img/view-card-2.jpg'
    },
    tree: {
      title: 'the end game',
      image: 'assets/img/view-card-3.jpg'
    },
    four: {
      title: 'attack on titan',
      image: 'assets/img/view-card-4.jpg'
    },
    five: {
      title: 'attack on titan',
      image: 'assets/img/view-card-4.jpg'
    },
    six: {
      title: 'the end game',
      image: 'assets/img/view-card-3.jpg'
    },
    seven: {
      title: 'boruto: naruto next generations',
      image: 'assets/img/view-card-2.jpg'
    },
    eight: {
      title: 'family guys',
      image: 'assets/img/view-card-1.jpg'
    },
  },
  animation: {
    one: {
      type: 'sub',
      title: 'memory',
      image : 'assets/img/slider-card-1.jpg',
    },
    two: {
      type: 'dub',
      title: 'the morthman',
      image : 'assets/img/slider-card-2.jpg',
    },
    tree: {
      type: 'sub',
      title: 'bad guys',
      image : 'assets/img/slider-card-3.jpg',
    },
    four: {
      type: 'dub',
      title: 'morbius',
      image : 'assets/img/slider-card-4.jpg',
    },
    five: {
      type: 'sub',
      title: 'attack on titan',
      image : 'assets/img/slider-card-5.jpg',
    },
    six: {
      type: 'dub',
      title: 'chip dale',
      image : 'assets/img/slider-card-6.jpg',
    },
    seven: {
      type: 'sub',
      title: 'sonic 2',
      image : 'assets/img/slider-card-7.jpg',
    },
  },
  subTitleMovie: {
    one: {
      title: 'memory',
      image : 'assets/img/slider-card-1.jpg',
    },
    two: {
      title: 'the morthman',
      image : 'assets/img/slider-card-2.jpg',
    },
    tree: {
      title: 'bad guys',
      image : 'assets/img/slider-card-3.jpg',
    },
    four: {
      title: 'morbius',
      image : 'assets/img/slider-card-4.jpg',
    },
    five: {
      title: 'attack on titan',
      image : 'assets/img/slider-card-5.jpg',
    },
    six: {
      title: 'chip dale',
      image : 'assets/img/slider-card-6.jpg',
    },
    seven: {
      title: 'sonic 2',
      image : 'assets/img/slider-card-7.jpg',
    },
  },
  dubbedMovie: {
    one: {
      title: 'memory',
      image : 'assets/img/slider-card-1.jpg',
    },
    two: {
      title: 'the morthman',
      image : 'assets/img/slider-card-2.jpg',
    },
    tree: {
      title: 'bad guys',
      image : 'assets/img/slider-card-3.jpg',
    },
    four: {
      title: 'morbius',
      image : 'assets/img/slider-card-4.jpg',
    },
    five: {
      title: 'attack on titan',
      image : 'assets/img/slider-card-5.jpg',
    },
    six: {
      title: 'chip dale',
      image : 'assets/img/slider-card-6.jpg',
    },
  },
}

//? add mobile slider cards to dom
Object.keys(cards.mobileSliderCard).forEach(function(key) {
  tag = `<a href="javascript:void(0)" class="w-full">
  <div class="w-[200px] relative">
    <!-- img -->
    <img class="w-full rounded-xl overflow-hidden" src="${cards.mobileSliderCard[key].image}" alt="">
    <!-- top -->
    <div href="javascript:void(0);" class="flex justify-center">
    ${cards.mobileSliderCard[key].type === 'dub' ? `<div class="absolute -top-3 bg-[#279A2D] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">دوبله</div>` : ''}
    ${cards.mobileSliderCard[key].type === 'sub' ? `<div class="absolute -top-3 bg-[#EB8307] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">زیرنویس</div>` : ''}
    </div>
    <!-- rate user -->
    <div class="relative w-full flex justify-between text-white px-2.5 bottom-12">
      <div class="h-10 flex justify-center items-center gap-2 p-3 bg-black backdrop-blur-xl bg-opacity-80 rounded-xl">
        <div class="text-[#ffad49] font-light h-10 flex items-center pt-2">86%</div>
        <div>
          <svg class="w-6 h-6" fill="none" stroke="#ffad49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
        </div>
      </div>
      <!-- rate imdb -->
      <div class="flex justify-center items-center gap-1 pt-2">
        <div class="font-normal">7.5</div>
        <div>
          <svg class="mb-2.5 w-5 h-5 fill-[#D97706]"w xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
        </div>
      </div>
    </div>
  </div>
  </a>`;
  const divTag = document.createElement('div');
  divTag.classList.add(... ['swiper-slide','w-full']);
  divTag.innerHTML = tag;
  $('#mobile-card-slider')[0].appendChild(divTag);
});

//? add desktop slider cards to dom
Object.keys(cards.desktopSliderCard).forEach(function(key) {
  tag = `<p class="hidden card-title">${cards.desktopSliderCard[key].title}</p>
  <a href="javascript:void(0)" class="w-full flex justify-center">
    <div class="w-[200px] relative">
      <!-- img -->
      <img class="w-full rounded-xl overflow-hidden" src="${cards.desktopSliderCard[key].image}" alt="">
      <!-- top -->
      <div href="javascript:void(0);" class="flex justify-center">
      ${cards.mobileSliderCard[key].type === 'dub' ? `<div class="absolute -top-3 bg-[#279A2D] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">دوبله</div>` : ''}
      ${cards.mobileSliderCard[key].type === 'sub' ? `<div class="absolute -top-3 bg-[#EB8307] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">زیرنویس</div>` : ''}
      </div>
      <!-- rate user -->
      <div class="relative w-full flex justify-between text-white px-2.5 bottom-12">
        <div class="h-10 flex justify-center items-center gap-2 p-3 bg-black backdrop-blur-xl bg-opacity-80 rounded-xl">
          <div class="text-[#ffad49] font-light h-10 flex items-center pt-2">86%</div>
          <div>
            <svg class="w-6 h-6" fill="none" stroke="#ffad49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          </div>
        </div>
        <!-- rate imdb -->
        <div class="flex justify-center items-center gap-1 pt-2">
          <div class="font-normal">7.5</div>
          <div>
            <svg class="mb-2.5 w-5 h-5 fill-[#D97706]"w xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
          </div>
        </div>
      </div>
    </div>
  </a>`;
  const divTag = document.createElement('div');
  divTag.classList.add(... ['swiper-slide','w-1/3','swiper-slide-desktop']);
  divTag.innerHTML = tag;
  $('#desktop-card-slider')[0].appendChild(divTag);
});

//? add last view card to dom
Object.keys(cards.lastView).forEach(function(key) {
  tag = `<div class="p-3.5 rounded-full border bg-black bg-opacity-30 absolute top-[36%] left-[44%] z-10">
  <svg class="fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM64.69 52.7C54.81 46.66 42.44 46.43 32.35 52.09C22.25 57.75 16 68.42 16 80V432C16 443.6 22.25 454.2 32.35 459.9C42.44 465.6 54.81 465.3 64.69 459.3L352.7 283.3C362.2 277.5 368 267.1 368 256C368 244.9 362.2 234.5 352.7 228.7L64.69 52.7z"/></svg>
</div>
<div href="javascript:void(0);" class="relative w-[280px] md:w-[95%] rounded-2xl overflow-hidden">
  <!-- img -->
  <img class="transition-transform duration-500 hover:scale-110 w-full h-[190px] object-cover" src="${cards.lastView[key].image}" alt="">
</div>
<!-- text -->
<div class="absolute bottom-[3px] left-[30px] text-white font-light">
  <span>${cards.lastView[key].title}</span>
</div>`;
  const newTag = document.createElement('a');
  newTag.setAttribute('href', "javascript:void(0)");
  newTag.classList.add(... ['view-card','relative', 'overflow-hidden', 'flex', 'justify-center']);
  newTag.innerHTML = tag;
  $('#last-view')[0].appendChild(newTag);
});
$('.view-card:last-child')[0].classList.add(... ['lg:hidden','xl:flex']);

//? add last update card to dom
Object.keys(cards.lastUpdate).forEach(function(key) {
  tag = `<div href="javascript:void(0);" class="relative w-[280px] md:w-[95%] rounded-2xl overflow-hidden">
  <!-- img -->
  <img class="md:w-full md:h-[190px]  transition-all duration-500 hover:brightness-50 md:object-cover" src="${cards.lastUpdate[key].image}" alt="">
  <!-- user rate -->
  <div class="flex items-center gap-1 px-2 rounded-md absolute bottom-2 left-2 bg-black bg-opacity-60 backdrop-blur-md">
    <div>
      <svg class="w-5 h-5" fill="none" stroke="#ffad49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
    </div>
    <div class="text-[#ffad49] font-light text-sm h-8 flex items-center pt-2">86%</div>
  </div>
</div>
<!-- info -->
<div class="absolute flex items-center gap-2 rounded-lg -bottom-3 right-2 md:right-6 z-10 ring-1 ring-[#080808] border-[5px] bg-black border-black">
  <div class="text-white text-sm bg-[#DE8214] p-1.5 rounded-lg">+ قسمت ۹</div>
  <span class="text-white text-sm pl-1">فصل ۳</span>
</div>
<!-- text -->
<div class="absolute -bottom-9 md:-bottom-9 left-3 md:left-7 text-white font-light">
  <span>${cards.lastUpdate[key].title}</span>
</div>`;
  const newTag = document.createElement('a');
  newTag.setAttribute('href', "javascript:void(0)");
  newTag.classList.add(... ['update-card','relative','mb-10','flex','justify-center']);
  newTag.innerHTML = tag;
  $('#last-update')[0].appendChild(newTag);
});
for(let i = 5; i<= 6; i++){
  $(`.update-card:nth-child(${i})`)[0].classList.add(... ['md:hidden','xl:flex']);
}
for(let i = 7; i <= 8; i++){
  $(`.update-card:nth-child(${i})`)[0].classList.add(... ['md:hidden','lg:flex']);
}

//? add animation card to dom
Object.keys(cards.animation).forEach(function(key) {
  tag = `<!-- image , rate user , rate imdb , mark , top-text -->
  <div class="w-full relative">
    <!-- img -->
    <img class="w-[170px] md:w-full rounded-xl overflow-hidden" src="${cards.animation[key].image}" alt="">
    <!-- top -->
    <div href="javascript:void(0);" class="flex justify-center z-20 absolute top-0 left-1/2">
    ${cards.animation[key].type === 'sub' ? '<div class="absolute -top-3 bg-[#EB8307] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">زیرنویس</div> ' : ''}
    ${cards.animation[key].type === 'dub' ? '<div class="absolute -top-3 bg-[#279a2d] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">دوبله</div> ' : ''}    
    </div>
    <!-- rate -->
    <div class="relative w-full flex justify-between text-white px-1 bottom-10">
      <!-- rate user -->
      <div class="h-9 flex justify-center items-center gap-2 p-2 bg-black backdrop-blur-xl bg-opacity-80 rounded-xl">
        <div class="text-[#ffad49] font-light h-6 flex items-center pt-2">86%</div>
        <div>
          <svg class="w-5 h-5" fill="none" stroke="#ffad49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
        </div>
      </div>
      <!-- rate imdb -->
      <div class="flex justify-center items-center gap-1 pt-2">
        <div class="font-normal">7.5</div>
        <div>
          <svg class="mb-2.5 w-5 h-5 fill-[#D97706]"w xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <!-- category [default hide]-->
  <div class="absolute w-full h-[87%] flex justify-center items-center opacity-0 transition-all duration-500 hover:opacity-100 rounded-xl bg-black bg-opacity-60 backdrop-blur-[2px]">
    <div class="mt-10 py-10 h-full flex flex-col justify-between items-center">
      <span class="text-white font-light">WEBDL 1080p</span>
      <div class="flex flex-wrap justify-center gap-3 lg:gap-x-5 2xl:gap-x-7">
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">اکشن</div>
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">درام</div>
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">تخیلی</div>
      </div>
      <span class="text-white font-extralight">(2022)</span>
    </div>
  </div>
  <!-- bottom-text -->
  <span class="absolute w-full text-center bottom-2 text-white transition-all duration-300 hover:text-[#eb8308]">${cards.animation[key].title}</span>`;
  const newTag = document.createElement('a');
  newTag.setAttribute('href', "javascript:void(0)");
  newTag.classList.add(... ['animation-card', 'relative', 'pt-3', 'flex', 'min-w-[170px]']);
  newTag.innerHTML = tag;
  $('#animation-movie')[0].appendChild(newTag);
});
$(`.animation-card:nth-child(5)`)[0].classList.add(... ['md:hidden','lg:flex']);
$(`.animation-card:nth-child(6)`)[0].classList.add(... ['md:hidden','xl:flex']);
$(`.animation-card:nth-child(7)`)[0].classList.add(... ['md:hidden','2xl:flex']);

//? add persian subtitle movie card to dom
Object.keys(cards.subTitleMovie).forEach(function(key) {
  tag = `<!-- image , rate user , rate imdb , mark , top-text -->
  <div class="w-full relative">
    <!-- img -->
    <img class="w-[170px] md:w-full rounded-xl overflow-hidden" src="${cards.subTitleMovie[key].image}" alt="">
    <!-- top -->
    <div href="javascript:void(0);" class="flex justify-center z-20 absolute top-0 left-1/2">
      <div class="absolute -top-3 bg-[#EB8307] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">زیرنویس</div> 
    </div>
    <!-- rate -->
    <div class="relative w-full flex justify-between text-white px-1 bottom-10">
      <!-- rate user -->
      <div class="h-9 flex justify-center items-center gap-2 p-2 bg-black backdrop-blur-xl bg-opacity-80 rounded-xl">
        <div class="text-[#ffad49] font-light h-6 flex items-center pt-2">86%</div>
        <div>
          <svg class="w-5 h-5" fill="none" stroke="#ffad49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
        </div>
      </div>
      <!-- rate imdb -->
      <div class="flex justify-center items-center gap-1 pt-2">
        <div class="font-normal">7.5</div>
        <div>
          <svg class="mb-2.5 w-5 h-5 fill-[#D97706]"w xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <!-- category [default hide]-->
  <div class="absolute w-full h-[87%] flex justify-center items-center opacity-0 transition-all duration-500 hover:opacity-100 rounded-xl bg-black bg-opacity-60 backdrop-blur-[2px]">
    <div class="mt-10 py-10 h-full flex flex-col justify-between items-center">
      <span class="text-white font-light">WEBDL 1080p</span>
      <div class="flex flex-wrap justify-center gap-3 lg:gap-x-5 2xl:gap-x-7">
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">اکشن</div>
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">درام</div>
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">تخیلی</div>
      </div>
      <span class="text-white font-extralight">(2022)</span>
    </div>
  </div>
  <!-- bottom-text -->
  <span class="absolute w-full text-center bottom-2 text-white transition-all duration-300 hover:text-[#eb8308]">${cards.subTitleMovie[key].title}</span>`;
  const newTag = document.createElement('a');
  newTag.setAttribute('href', "javascript:void(0)");
  newTag.classList.add(... ['persian-movie-sub-card', 'relative', 'pt-3', 'flex', 'min-w-[170px]']);
  newTag.innerHTML = tag;
  $('#subtitle-movie')[0].appendChild(newTag);
});
$(`.persian-movie-sub-card:nth-child(5)`)[0].classList.add(... ['md:hidden','lg:flex']);
$(`.persian-movie-sub-card:nth-child(6)`)[0].classList.add(... ['md:hidden','xl:flex']);
$(`.persian-movie-sub-card:nth-child(7)`)[0].classList.add(... ['md:hidden','2xl:flex']);

//? add persian dubbed movie card to dom
Object.keys(cards.dubbedMovie).forEach(function(key) {
  tag = `<!-- image , rate user , rate imdb , mark , top-text -->
  <div class="w-full relative">
    <!-- img -->
    <img class="w-[170px] md:w-full rounded-xl overflow-hidden" src="${cards.dubbedMovie[key].image}" alt="">
    <!-- top -->
    <div href="javascript:void(0);" class="flex justify-center z-20 absolute top-0 left-1/2">
      <div class="absolute -top-3 bg-[#279A2D] text-white font-extralight text-sm px-4 py-0.5 ring-[5px] ring-black rounded-full">دوبله</div> 
    </div>
    <!-- rate -->
    <div class="relative w-full flex justify-between text-white px-1 bottom-10">
      <!-- rate user -->
      <div class="h-9 flex justify-center items-center gap-2 p-2 bg-black backdrop-blur-xl bg-opacity-80 rounded-xl">
        <div class="text-[#ffad49] font-light h-6 flex items-center pt-2">86%</div>
        <div>
          <svg class="w-5 h-5" fill="none" stroke="#ffad49" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
        </div>
      </div>
      <!-- rate imdb -->
      <div class="flex justify-center items-center gap-1 pt-2">
        <div class="font-normal">7.5</div>
        <div>
          <svg class="mb-2.5 w-5 h-5 fill-[#D97706]"w xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <!-- category [default hide]-->
  <div class="absolute w-full h-[87%] flex justify-center items-center opacity-0 transition-all duration-500 hover:opacity-100 rounded-xl bg-black bg-opacity-60 backdrop-blur-[2px]">
    <div class="mt-10 py-10 h-full flex flex-col justify-between items-center">
      <span class="text-white font-light">WEBDL 1080p</span>
      <div class="flex flex-wrap justify-center gap-3 lg:gap-x-5 2xl:gap-x-7">
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">اکشن</div>
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">درام</div>
        <div class="border border-gray-300 px-2 py-0.5 rounded-xl text-[#e5e5e5] font-light transition-all duration-500 hover:text-[#eb8307] hover:border-[#eb8307]">تخیلی</div>
      </div>
      <span class="text-white font-extralight">(2022)</span>
    </div>
  </div>
  <!-- bottom-text -->
  <span class="absolute w-full text-center bottom-2 text-white transition-all duration-300 hover:text-[#eb8308]">${cards.dubbedMovie[key].title}</span>`;
  const newTag = document.createElement('a');
  newTag.setAttribute('href', "javascript:void(0)");
  newTag.classList.add(... ['persian-movie-dub-card', 'relative', 'pt-3', 'flex', 'min-w-[170px]']);
  newTag.innerHTML = tag;
  $('#dubbed-movie')[0].appendChild(newTag);
});
$(`.persian-movie-dub-card:nth-child(4)`)[0].classList.add(... ['md:hidden','lg:flex']);
$(`.persian-movie-dub-card:nth-child(5)`)[0].classList.add(... ['md:hidden','xl:flex']);
$(`.persian-movie-dub-card:nth-child(6)`)[0].classList.add(... ['md:hidden','2xl:flex']);

//! show alert dom loaded

if (matchMedia("(min-width: 1001px)").matches) {
  swal({
    title: "یک لحضه وایسا ...",
    text: "اینجا صرفا یک صفحه غیر رسمی از وب سایت زرفیلم هست!",
    icon: "warning",
    button: "بزن بریم!",
  });
}

//! toggle switch change theme

toggleAddClassWithBtnClick('#toggle-change-theme','#toggle-switch-circle',['toggle-to-moon']);
toggleAddClassWithBtnClick('#toggle-change-theme','html',['dark']);

//! change logo with theme status

function logoImage(){
  if(document.documentElement.classList.contains('dark')){
    $('#logo')[0].src = 'assets/img/logo-light.png';
    if (matchMedia("(min-width: 1001px)").matches) {
      swal({
        title: "همم , یه چیزی ...",
        text: "راستش حسش نبود استایل های حالت لایت مود رو واسه کل سایت بزنم فقط واسه هدر حالت لایت مود زدم!",
        icon: "warning",
        button: "بزن بریم!",
      });
    }
  } else {
    logo.src = 'assets/img/logo-dark.png';
  }
};

$('#toggle-change-theme')[0].addEventListener('click',()=>{
  logoImage();
});

//! custom functions

//? add style with click
function addStyleWithClick(id,style){
  const select = Array.from($(id));
  const handleClick = (e) => {
    select.forEach(i => {
      i.classList.remove(style);
    });
    e.currentTarget.classList.add(style);
  }
  select.forEach(i => {
    i.addEventListener('click', handleClick)
  });
}

//? active tab and show tab content
function activeTabAndContentWithClick(tab,content){
  const selectTab = Array.from($(tab));
  const selectContent = Array.from($(content));
  selectTab.forEach(i => {
    i.addEventListener('mouseenter', (e) => {
      selectTab.forEach(i => {
        i.classList.remove('active');
      });
      selectContent.forEach(i => {
        i.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
      $(`#${e.currentTarget.id.replace('tab','content')}`)[0].classList.add('active');
    });
  });
}

//? show and hide menu button click 
function toggleAddClassWithBtnClick(btn,menu,style) {
  $(btn)[0].addEventListener('click',()=>{
    style.forEach((i)=>{
      $(menu)[0].classList.toggle(i);
    });
  });
}

//! for mobile advanced search

//? show and hide mobile advanced search menu
const advancedSerachMenuMobile = ['#advanced-search-menu-btn-mobile','#advanced-search-menu-mobile-close-btn-top','#advanced-search-menu-mobile-close-btn-bottom'];
advancedSerachMenuMobile.forEach((i)=> {
  toggleAddClassWithBtnClick(i,'#advanced-search-menu-mobile',['!visible','!opacity-100']);
});

//? mobile advancedSearchMenu toggleSwitch persianDub
toggleAddClassWithBtnClick('#xtw', '#xtwBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#xtw', '#xtwCircle',['circle-to-r','circle-bg']);

//? mobile advancedSearchMenu toggleSwitch subTitle
toggleAddClassWithBtnClick('#rhp', '#rhpBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#rhp', '#rhpCircle',['circle-to-r','circle-bg']);

//! for mobile header bottom

//? show and hide mobile bottom menu
const showAndHideBottomMenu = ['#myn-btn', '#myn-close-btn'];
showAndHideBottomMenu.forEach((i)=>{
  toggleAddClassWithBtnClick(i,'#myn-btn',['!space-y-[10px]']);
  toggleAddClassWithBtnClick(i,'#myn-icon-one',['!stroke-[#eb8307]']);
  toggleAddClassWithBtnClick(i,'#myn-text',['hidden']);
  toggleAddClassWithBtnClick(i,'#myn-icon-two',['hidden']);
  toggleAddClassWithBtnClick(i,'#myn',['!right-0','!opacity-100']);
});

//? mobile bottom menu show sub menu
toggleAddClassWithBtnClick('#myn-show-sub-btn','#myn-chevron',['!rotate-180']);
toggleAddClassWithBtnClick('#myn-show-sub-btn','#myn-sub-menu',['space-y-3','mt-5','mb-2','!h-auto']);

//? show mobie bottom menu item list
for(let i = 1; i <= 3; i++){
  toggleAddClassWithBtnClick(`.myn-item-${i}-btn`,`.myn-item-${i}-list`,['!space-y-3','!mb-2','!mt-4','!h-auto','!opacity-100']);
  toggleAddClassWithBtnClick(`.myn-item-${i}-btn`,`.myn-item-${i}-chevron`,['!rotate-180']);
}

//! for advanced search desktop

//? desktop advancedSearchMenu toggleSwitch subTitle
toggleAddClassWithBtnClick('#sfr', '#sfrBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#sfr', '#sfrCircle',['circle-to-r','circle-bg']);

//? desktop advancedSearchMenu toggleSwitch persian dub
toggleAddClassWithBtnClick('#sxa', '#sxaBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#sxa', '#sxaCircle',['circle-to-r','circle-bg']);

//? desktop advancedSearchMenu toggleSwitch online play
toggleAddClassWithBtnClick('#umk', '#umkBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#umk', '#umkCircle',['circle-to-r','circle-bg']);

//! for advanced filter desktop

//? desktop advancedfilterMenu toggleSwitch online play
toggleAddClassWithBtnClick('#rja', '#rjaBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#rja', '#rjaCircle',['circle-to-r','circle-bg']);

//? desktop advancedSearchMenu toggleSwitch subTitle
toggleAddClassWithBtnClick('#kil', '#kilBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#kil', '#kilCircle',['circle-to-r','circle-bg']);

//? desktop advancedSearchMenu toggleSwitch persian dub
toggleAddClassWithBtnClick('#qwj', '#qwjBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#qwj', '#qwjCircle',['circle-to-r','circle-bg']);

//? desktop advancedSearchMenu toggleSwitch persian dub
toggleAddClassWithBtnClick('#vix', '#vixBorder',['toggle-active-bg' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#vix', '#vixCircle',['circle-to-r','circle-bg']);

//? add bg yellow with click advanced search base tab
addStyleWithClick('#advanced-category-base > button','bg-[#EA8308]');

//? show and hide advanced filter desktop menu
toggleAddClassWithBtnClick('#ias-btn','#ias-menu-desktop',['!visible','!opacity-100']);

//? show desktop category menu with click button
toggleAddClassWithBtnClick('.desktop-category-button','.desktop-category-menu',['!visible','!opacity-100']);

//! for desktop category menu

//? active category menu desktop item with click
activeTabAndContentWithClick('#desktop-category-tab div','#desktop-category-content div');

//! for desktop top message

//? hide top-message with click close btn
addStyleWithClick('#top-message','hidden');

//! advanced dropDown

//? search select items drop-down
function advancedDropDown() {
  let x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);  
}
advancedDropDown();

//! card slider

//? intro slider
function cardSlider() {
  if(window.innerWidth < 768 ){
    //? for mobile 
    new Swiper(".swiper-mobile", {
      effect: 'cards',
      grabCursor: true,
      keyboard: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      autoplay: {
          delay: 2000,
      },
    });
  } else {
    //? for desktop
    const swiperDesktop = new Swiper('.swiper-desktop', {
      loop: true,
      autoplay: true,
      slidesPerView: 'auto',
      allowTouchMove: true,
      allowSlidePrev: false,
      disableOnInteraction: true,
      speed: 500,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });

    //? desktop change slide and change background
    swiperDesktop.on('slideChange',() => {
      // get active card image src
      let cardActiveImgSrc = $('.swiper-slide-active img')[0].src.split('/');
      cardActiveImgSrc = cardActiveImgSrc[cardActiveImgSrc.length - 1];
      cardActiveImgSrc = cardActiveImgSrc.replace('slider-card-','');
      cardSlideActiveNumber = cardActiveImgSrc.replace('.jpg','');
      // change intro bg image
      $('#intro-bg-img')[0].src = `assets/img/slider-background-${cardSlideActiveNumber}.jpg`;
      // change intro card title
      const cardTitle = $('.swiper-slide-active .card-title')[0].innerHTML;
      $('#card-slider-desktop-title')[0].innerHTML = cardTitle;
    });
  }
};
cardSlider();
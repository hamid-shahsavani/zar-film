
//* func - add active tab with click

function activeTabWithClick(id,style){
  let select = Array.from(document.querySelectorAll(id));
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

//* func - show and hide menu button click 

function showAndHideMenuBtnClick(btn,menu) {
  let selectId = document.querySelector(btn,menu);
  let menuSelect = document.querySelector(menu);
  selectId.addEventListener('click',()=>{
    if((menuSelect.classList.contains('!opacity-100')) && (menuSelect.classList.contains('!visible'))){
      menuSelect.classList.remove('!opacity-100');
      menuSelect.classList.remove('!visible');
    } else {
      menuSelect.classList.add('!opacity-100');
      menuSelect.classList.add('!visible');
    }
  });
}

//? advanced search select items drop-down

let x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
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

//? reload with resize
window.onresize = function(){location.reload();}

//? intro slider
document.addEventListener('DOMContentLoaded',()=> {
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

  //? for desktop
  let swiperDesktop = new Swiper('.swiper-desktop', {
    loop: true,
    autoplay: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
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
    let cardActiveImgSrc = document.querySelector('.swiper-slide-active img').src.split('/');
    cardActiveImgSrc = cardActiveImgSrc[cardActiveImgSrc.length - 1];
    cardActiveImgSrc = cardActiveImgSrc.replace('slider-card-','');
    cardSlideActiveNumber = cardActiveImgSrc.replace('.jpg','');
    // change intro bg image
    let backgroundImgSrc = document.querySelector('#intro-bg-img');

    backgroundImgSrc.src = `assets/img/slider-background-${cardSlideActiveNumber}.jpg`;

    // change intro card title
    let cardTitle = document.querySelector('.swiper-slide-active .card-title').innerHTML;
    document.querySelector('#card-slider-desktop-title').innerHTML = cardTitle;
  });
});

//? filter card in media quary

function filterCardInMediaQuary(id){
  let cardSelect = document.querySelectorAll(id);
  let currentWidth = window.innerWidth;
  if ((currentWidth > 768) && currentWidth < 1023) {
    if (id === '.view-card'){
      cardSelect[2].classList.add('hidden');
      cardSelect[3].classList.add('hidden');
    } else if(id === '.update-card'){
      cardSelect[7].classList.add('hidden');
      cardSelect[6].classList.add('hidden');
      cardSelect[5].classList.add('hidden');
      cardSelect[4].classList.add('hidden');
    } else if(id === '.persian-movie-dub-card'){
    cardSelect[3].classList.add('hidden');
    cardSelect[4].classList.add('hidden');
    cardSelect[5].classList.add('hidden');
  } else if((id === '.animation-card') || (id === '.persian-movie-sub-card')){
      cardSelect[6].classList.add('hidden');
      cardSelect[5].classList.add('hidden');
      cardSelect[4].classList.add('hidden');
    }
  } else if((currentWidth > 1024) && (currentWidth < 1279)) {
    if (id === '.view-card'){
      cardSelect[3].classList.add('hidden');
    } else if(id === '.update-card'){
      cardSelect.forEach((e)=>{
        e.classList.remove('hidden');
      });
      cardSelect[7].classList.add('hidden');
      cardSelect[6].classList.add('hidden');
    } else if(id === '.persian-movie-dub-card'){
      cardSelect[4].classList.add('hidden');
      cardSelect[5].classList.add('hidden');
    } else if((id === '.persian-movie-sub-card') ||(id === '.animation-card')){
      cardSelect.forEach((e)=>{
        e.classList.remove('hidden');
      });
      cardSelect[6].classList.add('hidden');
      cardSelect[5].classList.add('hidden');
    }
  } else if((currentWidth > 1280) && currentWidth < 1535) {
    if(id === '.update-card'){
      cardSelect.forEach((e)=>{
        e.classList.remove('hidden');
      });
    } else if(id === '.persian-movie-dub-card'){
      cardSelect[5].classList.add('hidden');
    } else if((id === '.persian-movie-sub-card') ||(id === '.animation-card')){
      cardSelect.forEach((e)=>{
        e.classList.remove('hidden');
      });
      cardSelect[6].classList.add('hidden');
    }
  }
}

document.addEventListener('DOMContentLoaded',filterCardInMediaQuary('.view-card'));
document.addEventListener('DOMContentLoaded',filterCardInMediaQuary('.update-card'));
document.addEventListener('DOMContentLoaded',filterCardInMediaQuary('.animation-card'));
document.addEventListener('DOMContentLoaded',filterCardInMediaQuary('.persian-movie-sub-card'));
document.addEventListener('DOMContentLoaded',filterCardInMediaQuary('.persian-movie-dub-card'));

//? active active search desktop tab

activeTabWithClick('#advanced-category-base > button','bg-[#EA8308]');

//? show and hide advanced filter desktop menu

showAndHideMenuBtnClick('#advanced-filter-btn','.advanced-filter-menu');

//* base object for for-loop

let base = {
  desktopCategoryTab: {
    appendTo: '#desktop-category-tab',
    repeat: 3,
    tag: `<button class="flex justify-center gap-2 items-center p-3"> 
    <svg class='w-7 h-7 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M208 320h-128C71.16 320 64 327.2 64 336S71.16 352 80 352h128c8.838 0 16-7.164 16-16S216.8 320 208 320zM304 224h-224C71.16 224 64 231.2 64 240S71.16 256 80 256h224C312.8 256 320 248.8 320 240S312.8 224 304 224zM304 128h-224C71.16 128 64 135.2 64 144S71.16 160 80 160h224C312.8 160 320 152.8 320 144S312.8 128 304 128z"/><path class="fa-secondary" d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM208 352h-128C71.16 352 64 344.8 64 336S71.16 320 80 320h128c8.838 0 16 7.164 16 16S216.8 352 208 352zM304 256h-224C71.16 256 64 248.8 64 240S71.16 224 80 224h224C312.8 224 320 231.2 320 240S312.8 256 304 256zM304 160h-224C71.16 160 64 152.8 64 144S71.16 128 80 128h224C312.8 128 320 135.2 320 144S312.8 160 304 160z"/></svg>
    <span class="text-white text-lg font-light">بخش ها</span>
    </button>`,
  },
  desktopCategoryContent: {
    one : {
      appendTo: '#desktop-category-content-1',
      repeat: 12,
      tag: `<a class="border-r-2 border-[#eb8307] pr-2 mr-1" href="javascript:void(0);">
      <span class="text-sm text-white transition-all duration-500 hover:text-[#eb8307] hover:pr-1">فیلم ها (135,32)</span>
      </a>`,
    }
  }
}

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

//* func - active tab and show tab content

function activeTabAndContentWithClick(tab,content){
  let selectTab = Array.from(document.querySelectorAll(tab));
  let selectContent = Array.from(document.querySelectorAll(content));
  selectTab.forEach(i => {
    i.addEventListener('mouseenter', (e) => {
      selectTab.forEach(i => {
        i.classList.remove('active');
      });
      selectContent.forEach(i => {
        i.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
      document.querySelector(`#${e.currentTarget.id.replace('tab','content')}`).classList.add('active');
    });
  });
}

//* func - show and hide menu button click 

function showAndHideMenuBtnClick(btn,menu) {
  let selectId = document.querySelector(btn);
  let menuSelect = document.querySelector(menu);
  selectId.addEventListener('click',()=>{
    menuSelect.classList.toggle('show');
  });
}

//* func - append element to dom

function appendElementToDom(parent,repeat,tag){
  for(let i = 0; i<repeat;i++){  
    let parentForAppend = document.querySelector(parent);
    let divTag = document.createElement('div');
    divTag.innerHTML = tag;
    parentForAppend.appendChild(divTag);
  }
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

//? active active search desktop tab

activeTabWithClick('#advanced-category-base > button','bg-[#EA8308]');

//? show and hide advanced filter desktop menu

showAndHideMenuBtnClick('#advanced-filter-btn','#advanced-filter-menu-desktop');

//? show desktop category menu with click button

showAndHideMenuBtnClick('.desktop-category-button','.desktop-category-menu');

//? desktop category tab append to dom

for(let i = 1; i<=base.desktopCategoryTab.repeat; i++) {
  let parentForAppend = document.querySelector(base.desktopCategoryTab.appendTo);
  let divTag = document.createElement('div');
  divTag.classList.add(... ['rounded-xl','w-[90%]']);
  divTag.id = `desktop-category-tab-${i}`;
  divTag.innerHTML = base.desktopCategoryTab.tag;
  parentForAppend.appendChild(divTag);
  i === 1 ? document.querySelector('#desktop-category-tab-1').classList.add('active') : '';
}

//? active category menu desktop item with click

activeTabAndContentWithClick('#desktop-category-tab div','#desktop-category-content div');

//? desktop category tab-1 content 

appendElementToDom(base.desktopCategoryContent.one.appendTo,base.desktopCategoryContent.one.repeat,base.desktopCategoryContent.one.tag);

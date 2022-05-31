//! reload with resize

window.onresize = function(){location.reload();}

//! custom functions

//? add style with click
function addStyleWithClick(id,style){
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

//? active tab and show tab content
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

//? show and hide menu button click 
function toggleAddClassWithBtnClick(btn,menu,style) {
  let selectId = document.querySelector(btn);
  let menuSelect = document.querySelector(menu);
  selectId.addEventListener('click',()=>{
    style.forEach((i)=>{
      menuSelect.classList.toggle(i);
    });
  });
}

//! for mobile advanced search

//? show and hide mobile advanced search menu
let advancedSerachMenuMobile = ['#advanced-search-menu-btn-mobile','#advanced-search-menu-mobile-close-btn-top','#advanced-search-menu-mobile-close-btn-bottom'];
advancedSerachMenuMobile.forEach((i)=> {
  toggleAddClassWithBtnClick(i,'#advanced-search-menu-mobile',['!visible','!opacity-100']);
});

//? mobile advancedSearchMenu toggleSwitch persianDub
toggleAddClassWithBtnClick('#mobileAdvancedSearchMenuToggleSwitchPersianDub', '#mobileAdvancedSearchMenuToggleSwitchPersianDubBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#mobileAdvancedSearchMenuToggleSwitchPersianDub', '#mobileAdvancedSearchMenuToggleSwitchPersianDubCircle',['!right-[3px]','!bg-black']);

//? mobile advancedSearchMenu toggleSwitch subTitle
toggleAddClassWithBtnClick('#mobileAdvancedSearchMenuToggleSwitchSubTitle', '#mobileAdvancedSearchMenuToggleSwitchSubTitleBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#mobileAdvancedSearchMenuToggleSwitchSubTitle', '#mobileAdvancedSearchMenuToggleSwitchSubTitleCircle',['!right-[3px]','!bg-black']);

//! for mobile header bottom

//? show and hide mobile bottom menu
let showAndHideBottomMenu = ['#mobile-bottom-menu-btn', '#mobile-bottom-menu-close-btn'];
showAndHideBottomMenu.forEach((i)=>{
  toggleAddClassWithBtnClick(i,'#mobile-bottom-menu-btn',['!space-y-[10px]']);
  toggleAddClassWithBtnClick(i,'#mobile-bottom-menu-icon-one',['!stroke-[#eb8307]']);
  toggleAddClassWithBtnClick(i,'#mobile-bottom-menu-text',['hidden']);
  toggleAddClassWithBtnClick(i,'#mobile-bottom-menu-icon-two',['hidden']);
  toggleAddClassWithBtnClick(i,'#mobile-bottom-menu',['!right-0','!opacity-100']);
});

//? mobile bottom menu show sub menu
toggleAddClassWithBtnClick('#mobile-bottom-menu-show-sub-btn','#mobile-bottom-menu-chevron',['!rotate-180']);
toggleAddClassWithBtnClick('#mobile-bottom-menu-show-sub-btn','#mobile-bottom-menu-sub-menu',['space-y-3','mt-5','mb-2','!h-auto']);

//? show mobie bottom menu item list
for(let i = 1; i <= 3; i++){
  toggleAddClassWithBtnClick(`.mobile-bottom-menu-item-${i}-btn`,`.mobile-bottom-menu-item-${i}-list`,['!space-y-3','!mb-2','!mt-4','!h-auto','!opacity-100']);
  toggleAddClassWithBtnClick(`.mobile-bottom-menu-item-${i}-btn`,`.mobile-bottom-menu-item-${i}-chevron`,['!rotate-180']);
}

//! for advanced search desktop

//? desktop advancedSearchMenu toggleSwitch subTitle
toggleAddClassWithBtnClick('#desktopAdvancedSearchMenuToggleSwitchSubTitle', '#desktopAdvancedSearchMenuToggleSwitchSubTitleBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedSearchMenuToggleSwitchSubTitle', '#desktopAdvancedSearchMenuToggleSwitchSubTitleCircle',['!right-[3px]','!bg-black']);

//? desktop advancedSearchMenu toggleSwitch persian dub
toggleAddClassWithBtnClick('#desktopAdvancedSearchMenuToggleSwitchPersianDub', '#desktopAdvancedSearchMenuToggleSwitchPersianDubBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedSearchMenuToggleSwitchPersianDub', '#desktopAdvancedSearchMenuToggleSwitchPersianDubCircle',['!right-[3px]','!bg-black']);

//? desktop advancedSearchMenu toggleSwitch online play
toggleAddClassWithBtnClick('#desktopAdvancedSearchMenuToggleSwitchOnlinePlay', '#desktopAdvancedSearchMenuToggleSwitchOnlinePlayBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedSearchMenuToggleSwitchOnlinePlay', '#desktopAdvancedSearchMenuToggleSwitchOnlinePlayCircle',['!right-[3px]','!bg-black']);

//! for advanced filter desktop

//? desktop advancedfilterMenu toggleSwitch online play
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchOnlinePlay', '#desktopAdvancedFilterMenuToggleSwitchOnlinePlayBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchOnlinePlay', '#desktopAdvancedFilterMenuToggleSwitchOnlinePlayCircle',['!right-[3px]','!bg-black']);

//? desktop advancedSearchMenu toggleSwitch subTitle
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchSubTitle', '#desktopAdvancedFilterMenuToggleSwitchSubTitleBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchSubTitle', '#desktopAdvancedFilterMenuToggleSwitchSubTitleCircle',['!right-[3px]','!bg-black']);

//? desktop advancedSearchMenu toggleSwitch persian dub
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchPersianDub', '#desktopAdvancedFilterMenuToggleSwitchPersianDubBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchPersianDub', '#desktopAdvancedFilterMenuToggleSwitchPersianDubCircle',['!right-[3px]','!bg-black']);

//? desktop advancedSearchMenu toggleSwitch persian dub
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchTop', '#desktopAdvancedFilterMenuToggleSwitchTopBorder',['!bg-[#E88209]' ,'!border-[#E88209]']);
toggleAddClassWithBtnClick('#desktopAdvancedFilterMenuToggleSwitchTop', '#desktopAdvancedFilterMenuToggleSwitchTopCircle',['!right-[3px]','!bg-black']);


//? add bg yellow with click advanced search base tab
addStyleWithClick('#advanced-category-base > button','bg-[#EA8308]');

//? show and hide advanced filter desktop menu
toggleAddClassWithBtnClick('#advanced-filter-btn','#advanced-filter-menu-desktop',['!visible','!opacity-100']);

//? toggle change theme btn
toggleAddClassWithBtnClick('#toggle-change-theme','#toggle-switch-circle',['!right-[58px]']);
toggleAddClassWithBtnClick('#toggle-change-theme','html',['dark']);


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
  }
};
cardSlider();

//? reload with resize

window.onresize = function(){location.reload();}

//? intro slider

var swiper = new Swiper(".swiper", {
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

//? mobile advanced search select items 

var x, i, j, l, ll, selElmnt, a, b, c;
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

//? for view-card

document.addEventListener('DOMContentLoaded',function() {
  let viewCard = document.querySelectorAll('#view-card');
  let currentWidth = window.innerWidth;
  if ((currentWidth > 768) && currentWidth < 1023) {
    viewCard.forEach((e)=>{
      e.classList.add('w-1/2');
    });
    viewCard[2].classList.add('hidden');
    viewCard[3].classList.add('hidden');
  } else if((currentWidth > 1024) && (currentWidth < 1279)) {
    viewCard.forEach((e)=>{
      e.classList.add('w-1/3');
      e.classList.remove('hidden');
    });
    viewCard[3].classList.add('hidden');
  } else if(currentWidth > 1280) {
    viewCard.forEach((e)=>{
      e.classList.add('w-1/4');
      e.classList.remove('hidden');
    });
  }
});

//? for update-card

document.addEventListener('DOMContentLoaded',function() {
  let updateCard = document.querySelectorAll('#update-card');
  let currentWidth = window.innerWidth;
  if ((currentWidth > 768) && currentWidth < 1023) {
    updateCard[7].classList.add('hidden');
    updateCard[6].classList.add('hidden');
    updateCard[5].classList.add('hidden');
    updateCard[4].classList.add('hidden');
  } else if((currentWidth > 1024) && (currentWidth < 1279)) {
    updateCard.forEach((e)=>{
      e.classList.remove('hidden');
    });
    updateCard[7].classList.add('hidden');
    updateCard[6].classList.add('hidden');
  } else if(currentWidth > 1280) {
    updateCard.forEach((e)=>{
      e.classList.remove('hidden');
    });
  }
});

//? for movie-card

document.addEventListener('DOMContentLoaded',function() {
  let movieCard = document.querySelectorAll('#movie-card');
  let currentWidth = window.innerWidth;
  if ((currentWidth > 768) && currentWidth < 1023) {
    movieCard[6].classList.add('hidden');
    movieCard[5].classList.add('hidden');
    movieCard[4].classList.add('hidden');
  } else if((currentWidth > 1024) && (currentWidth < 1279)) {
    movieCard.forEach((e)=>{
      e.classList.remove('hidden');
    });
    movieCard[6].classList.add('hidden');
    movieCard[5].classList.add('hidden');
  } else if((currentWidth > 1280) && (currentWidth < 1535)) {
    movieCard.forEach((e)=>{
      e.classList.remove('hidden');
    });
  }
});

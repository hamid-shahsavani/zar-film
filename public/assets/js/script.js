
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

const galeryCounter = document.querySelector('.content__counter');

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.querySelectorAll('.gallery .image');
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = 'none';
  }
  x[slideIndex-1].style.display = 'flex';
  galeryCounter.innerHTML = slideIndex + ' / ' + x.length;
}

const galleryBtn = document.querySelector('.gallery button');
galleryBtn.addEventListener('click', ()=> {
  plusDivs(1);
});


const popupIndexCloseBtn = document.querySelector('.popup__close-btn');
const popupIndex = document.querySelector('.popup__index');
const indexBtn = document.querySelector('.index');
const popupNote = document.querySelector('.popup__note');
const popupNoteCloseBtn = document.querySelector('.popup__note-close');



popupIndexCloseBtn.addEventListener('click', showPopupIndex);
indexBtn.addEventListener('click', showPopupIndex);
popupNoteCloseBtn.addEventListener('click', showPopupNote);


function showPopupIndex() {
  popupIndex.classList.toggle('popup__index_opened');
}
function showPopupNote() {
  popupNote.classList.toggle('popup__note-close_opened');
}




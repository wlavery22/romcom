// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector('.random-cover-button');
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var bookCaption1 = document.querySelector('.tagline-1');
var bookCaption2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var controls = document.querySelector('.controls');
var viewHomeView = document.querySelector('.home-view');
var mainCover = document.querySelector('.main-cover');
var viewSavedView = document.querySelector('.saved-view');
var viewFormView = document.querySelector('.form-view');
var createNewBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section'); 
var userCover = document.getElementById('cover');
var userTitle = document.getElementById('title');
var userDescriptor1 = document.getElementById('descriptor1');
var userDescriptor2 = document.getElementById('descriptor2');
var miniCoverIcons = document.querySelectorAll('.mini-cover-icons');

// We've provided a few variables below
var savedCovers = [];
var currentCover; 

// We've provided two functions to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', showRandomCover);
window.onload = showRandomCover();
makeNewButton.addEventListener('click', displayForm);
viewSavedButton.addEventListener('click', displaySavedCovers);
homeButton.addEventListener('click', goToHome);
createNewBookButton.addEventListener('click', function(e) {
  e.preventDefault()
  makeNewBook()
  pushUserCover()
});
window.addEventListener('load', function() {
  homeButton.classList.add('hidden');
});
saveCoverButton.addEventListener('click', saveCover);
viewSavedView.addEventListener("dblclick", deleteSavedCover);

// Create your event handlers and other functions here 👇

function showRandomCover() {
  bookCover.src = covers[getRandomIndex(covers)]; 
  bookTitle.innerText = titles[getRandomIndex(titles)];
  bookCaption1.innerText = descriptors[getRandomIndex(descriptors)];
  bookCaption2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = createCover(bookCover.src, bookTitle.innerText, bookCaption1.innerText, bookCaption2.innerText);
};

function goToHome() {
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewHomeView.classList.remove('hidden');
  viewFormView.classList.add('hidden');
  viewSavedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  makeNewButton.classList.remove('hidden');
};

function displayForm() {
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewHomeView.classList.add('hidden');
  viewFormView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  viewSavedView.classList.add('hidden');
};

function displaySavedCovers() {
  viewSavedView.classList.remove('hidden');
  viewFormView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewHomeView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
  
  var savedCoversGrid = `<section class='saved-view saved-covers-section'>`; 
    for (var i = 0; i < savedCovers.length; i++) {
      savedCoversGrid += `<section class='mini-cover mini-cover-icons'>
      <img class='mini-cover' src='${savedCovers[i].coverImg}' id=${savedCovers[i].id} />
      <h2 class='cover-title'>${savedCovers[i].title}</h2>
      <h3 class='tagline'>
      A tale of <span>${savedCovers[i].tagline1}</span> and
      <span>${savedCovers[i].tagline2}</span>
      </h3>
      <img class='price-tag' src='./assets/price.png' />
      <img class='overlay' src='./assets/overlay.png' />
  </section>`;
  }
  savedCoversGrid += `</section>`; 
  viewSavedView.innerHTML = savedCoversGrid;
};

function saveCover() {
  var isDuplicate = false;
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      isDuplicate = true;
    }
  }
    if (!isDuplicate)
      savedCovers.push(currentCover)
      console.log(savedCovers);
    };

function deleteSavedCover() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == element.target.id) {
      savedCovers.splice(i, 1);
    }
  }
};

function makeNewBook() {
  currentCover = createCover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value);
  bookCover.src = currentCover.coverImg; 
  bookTitle.innerText = currentCover.title;
  bookCaption1.innerText = currentCover.tagline1;
  bookCaption2.innerText = currentCover.tagline2;

  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewHomeView.classList.remove('hidden');
  viewFormView.classList.add('hidden');
  homeButton.classList.add('hidden');
};
  
function pushUserCover() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
  console.log(covers)
  console.log(titles)
  console.log(descriptors)
};

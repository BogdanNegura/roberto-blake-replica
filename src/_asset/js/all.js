let iframeList = Array.from(document.querySelectorAll('iframe'));

// load any youtube that hasn't been loaded on initial page scroll
let handlerFunction = () => {
  //- set the src attribute value to be the value of data-src
  iframeList
  // remove the movies that have been already loaded
  .filter(iframe => !iframe.src)
  .map(iframe => {
    iframe.src = iframe.dataset.src;
  });
  document.removeEventListener('scroll', handlerFunction);
};
let scrollListener = document.addEventListener('scroll', handlerFunction);
// load any youtube that is in view on page load
(() => {
  iframeList.map(iframe => {
    if (iframe.getBoundingClientRect().top < window.innerHeight) {
      iframe.src = iframe.dataset.src;
    }
  })
})();

// hide Roberto's email
let bookSpeakerList = Array.from(document.querySelectorAll('.book-me'));
bookSpeakerList.map(bookSpeaker => bookSpeaker.addEventListener('click', e => {
  bookSpeaker.href = 'mai' + 'lto:booking' + '@robertoblake.com' + '?Subject=' + 'Bookng%20Speaking' + '%20Session';

}));
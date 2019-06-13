let iframeList = Array.from(document.querySelectorAll('iframe'));
let handlerFunction = () => {
  //- set the src attribute value to be the value of data-src
  iframeList.map(iframe => {
    iframe.src = iframe.dataset.src;
  });
  document.removeEventListener('scroll', handlerFunction);
};
let scrollListener = document.addEventListener('scroll', handlerFunction);

let bookSpeakerList = Array.from(document.querySelectorAll('.book-me'));
bookSpeakerList.map(bookSpeaker => bookSpeaker.addEventListener('click', e => {
  bookSpeaker.href = 'mai' + 'lto:booking' + '@robertoblake.com' + '?Subject=' + 'Bookng%20Speaking' + '%20Session';

}))
const overallPrizes = document.querySelector('.overall-prizes');
const swagsForAll = document.querySelector('.swags-for-all');
// const trackPrizes = document.querySelector('.track-prizes');
const overallTitle = document.querySelector('.overall');
const swagsTitle = document.querySelector('.swags');
const tracksTitle = document.querySelector('.tracks');

overallTitle.addEventListener('click', () => {
    swagsTitle.classList.remove('active');
    tracksTitle.classList.remove('active');
    overallTitle.classList.add('active');
    
    swagsForAll.classList.remove('show-grid');
    // trackPrizes.classList.remove('show-grid');
    overallPrizes.classList.add('show-flexbox');
})

swagsTitle.addEventListener('click', () => {
    tracksTitle.classList.remove('active');
    overallTitle.classList.remove('active');
    swagsTitle.classList.add('active');
    
    overallPrizes.classList.remove('show-flexbox');
    // trackPrizes.classList.remove('show-grid');
    swagsForAll.classList.add('show-grid');
})
tracksTitle.addEventListener('click', () => {
    swagsTitle.classList.remove('active');
    overallTitle.classList.remove('active');
    tracksTitle.classList.add('active');
    
    swagsForAll.classList.remove('show-grid');
    // trackPrizes.classList.remove('show-grid');
    overallPrizes.classList.remove('show-flexbox');
})
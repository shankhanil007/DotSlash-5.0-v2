const overallPrizes = document.querySelector('.overall-prizes');
const sponseredTracks = document.querySelector('.sponsered-tracks');
const swagsForAll = document.querySelector('.swags-for-all');
const overallTitle = document.querySelector('.overall');
const sponseredTitle = document.querySelector('.tracks');
// const swagsTitle = document.querySelector('.swags');

overallTitle.addEventListener('click', () => {
    sponseredTitle.classList.remove('active');
    // swagsTitle.classList.remove('active');
    overallTitle.classList.add('active');
    
    sponseredTracks.classList.remove('show-grid');
    // swagsForAll.classList.remove('show-grid');
    overallPrizes.classList.add('show-flexbox');
})

sponseredTitle.addEventListener('click', () => {
    // swagsTitle.classList.remove('active');
    overallTitle.classList.remove('active');
    sponseredTitle.classList.add('active');
    
    overallPrizes.classList.remove('show-flexbox');
    // swagsForAll.classList.remove('show-grid');
    sponseredTracks.classList.add('show-grid');
})
// swagsTitle.addEventListener('click', () => {
//     sponseredTitle.classList.remove('active');
//     overallTitle.classList.remove('active');
//     swagsTitle.classList.add('active');
    
//     sponseredTracks.classList.remove('show-grid');
//     // swagsForAll.classList.remove('show-grid');
//     overallPrizes.classList.remove('show-flexbox');
// })
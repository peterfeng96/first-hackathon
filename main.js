//use queryselectorall to grab node with class yt-core-image -> returns array of nodes
    // .src property gets the image source
    // have src array
const imgList = document.querySelectorAll('.yt-core-image')
const srcList = imgList.map(img => img.src)

// iterate through node list
    // replace src with a random element in src array
// const scrambledImgs = imgList.map(img => {
//     const randomIdx = Math.floor(Math.random() * imgList.length);
//     img.src = srcList[randomIdx];
// })

for (let i = 0; i < imgList.length; i++) {
    const randomIdx = Math.floor(Math.random() * imgList.length);
    imgList[i].src = srcList[randomIdx];
}
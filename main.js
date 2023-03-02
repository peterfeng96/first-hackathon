// document.addEventListener('DOMContentLoaded', () => {
//use queryselectorall to grab node with class yt-core-image -> returns array of nodes
    // .src property gets the image source
    // have src array

function randomize() {
    const imgList = document.querySelectorAll('.yt-core-image--fill-parent-height, .yt-core-image--fill-parent-width, .yt-core-image, .yt-core-image--content-mode-scale-aspect-fill, .yt-core-image--loaded')
    // const srcList = [];
    // for (let i = 0; i < imgList.length; i++) {
    //     // console.log(imgList[i].src.includes('data:image'));
    //     if (!imgList[i].src.includes('data:image')) {
    //         srcList.push(imgList[i].src);
    //     }
    // }
    // console.log("imgList", imgList)
    // console.log("srcList", srcList)

    // iterate through node list
        // replace src with a random element in src array
    // const scrambledImgs = imgList.map(img => {
    //     const randomIdx = Math.floor(Math.random() * imgList.length);
    //     img.src = srcList[randomIdx];
    // })

    for (let i = 0; i < imgList.length; i++) {
        // const randomIdx = Math.floor(Math.random() * srcList.length);
        imgList[i].src = getCats();
    }
}

function getCats() {
    const imgList = document.querySelectorAll('.yt-core-image--fill-parent-height, .yt-core-image--fill-parent-width, .yt-core-image, .yt-core-image--content-mode-scale-aspect-fill, .yt-core-image--loaded')
    for (let i = 0; i < imgList.length; i++) {    
        fetch('https://dog.ceo/api/breeds/image/random')
            // method: "GET",
            // headers: {
            //     "Content-Type": "image/png",
            // },
        // })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
            // for (let i = 0; i < imgList.length; i++) {
            imgList[i].src = response.message;
            //     imgList[i].src = response.message;
            // }
        })
        .catch(error => console.log(error))
    }
    // .then(res => res.blob())
    // .then(blob => console.log(blob))
}


setTimeout(getCats, 500);
    
document.addEventListener('click', getCats)



// })
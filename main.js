// document.addEventListener('DOMContentLoaded', () => {
//use queryselectorall to grab node with class yt-core-image -> returns array of nodes
    // .src property gets the image source
    // have src array

function getDogs() {
    const imgList = document.querySelectorAll('.yt-core-image--fill-parent-height, .yt-core-image--fill-parent-width, .yt-core-image, .yt-core-image--content-mode-scale-aspect-fill, .yt-core-image--loaded')
    for (let i = 0; i < imgList.length; i++) {   
        imgList[i].onload = function() {
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
        }
        
    //     fetch('https://dog.ceo/api/breeds/image/random')
    //         // method: "GET",
    //         // headers: {
    //         //     "Content-Type": "image/png",
    //         // },
    //     // })
    //     .then(response => response.json())
    //     // .then(response => console.log(response))
    //     .then(response => {
    //         // for (let i = 0; i < imgList.length; i++) {
    //         imgList[i].src = response.message;
    //         //     imgList[i].src = response.message;
    //         // }
    //     })
    //     .catch(error => console.log(error))
    // }
    // .then(res => res.blob())
    // .then(blob => console.log(blob))
}

getDogs();
// setTimeout(getDogs, 500);
    
document.addEventListener('click', getDogs)



// })
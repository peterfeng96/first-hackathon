// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       files: ['main.js']
//     });
//   });

let dogs = document.querySelector('#dogs');
let multiple = document.querySelector('#multiple');

dogs.addEventListener('click', () => {
    getCurrentTab = async () => {
        let queryOptions = { active: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }

    getCurrentTab().then((tab)=>{
        injectContentScript(tab);
    })

    injectContentScript = (tab) => {
        const {id, url} = tab;
        chrome.scripting.executeScript(
        {
            target: {tabId: id, allFrames: true},
            files: ['dogs.js']
        }
        )
    }
})
    

multiple.addEventListener('click', () => {
    getCurrentTab = async () => {
        let queryOptions = { active: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }
    
    getCurrentTab().then((tab)=>{
        injectContentScript(tab);
    })
    
    injectContentScript = (tab) => {
        const {id, url} = tab;
        chrome.scripting.executeScript(
          {
            target: {tabId: id, allFrames: true},
            files: ['multiple.js']
          }
        )
      }
})


// lit.addEventListener('click', () => {
//     let x = document.querySelectorAll('#thumbnail');
//     console.log(x);
//     const content = document.querySelector('#contents');
//     let y = content.parentElement;
//     // const contents = document.querySelectorAll('ytd-rich-grid-row');
//     // for (let i = 0; i < contents.length; i++) {
//     //     content.removeChild(contents[i]);
//     // }
//     y.removeChild(content);
//     let a = 1;
//     let b = document.createElement('div');
//     let c = document.createElement('div');

//     while (a < 5){
//         if (!x[a].href.includes('shorts')) {
//             let vid = document.createElement('iframe');
//             let z = x[a].href.slice(32);
//             vid.src = 'https://www.youtube.com/embed/' + z + '?autoplay=1';
//             vid.style.width = '25%';
//             // vid.style.height = '50%';
//             vid.style.border = '0';
//             b.appendChild(vid);
//             a++;
//         }
//     }

//     while (a < 9){
//         if (!x[a].href.includes('shorts')) {
//             let vid = document.createElement('iframe');
//             let z = x[a].href.slice(32);
//             vid.src = 'https://www.youtube.com/embed/' + z + '?autoplay=1';
//             vid.style.width = '25%';
//             // vid.style.height = '50%';
//             vid.style.border = '0';
//             c.appendChild(vid);
//             a++;
//         }
//     }

//     y.appendChild(b);
//     y.appendChild(c);
// })

// dogs.addEventListener('click', () => {
//     function getDogs() {
//         const imgList = document.querySelectorAll('.yt-core-image--fill-parent-height, .yt-core-image--fill-parent-width, .yt-core-image, .yt-core-image--content-mode-scale-aspect-fill, .yt-core-image--loaded')
//         // const imgList = document.querySelectorAll('img');
//         console.log(imgList);
//         for (let i = 0; i < imgList.length; i++) {   
//             fetch('https://dog.ceo/api/breeds/image/random')
//             .then(response => response.json())
//             .then(response => {
//                 imgList[i].src = response.message;
//             })
//             .catch(error => console.log(error))
//         }
//     }
    
    
//     const contents = document.getElementById('contents')
//     const thumbnail = document.querySelector('.yt-core-image')
    
//     let contentsObserver = new MutationObserver(getDogs);
//     contentsObserver.observe(contents, {childList: true})
    
//     let thumbnailObserver = new MutationObserver(getDogs);
//     thumbnailObserver.observe(thumbnail, {attributes: true})
    
//     getDogs();
// })
// document.addEventListener('DOMContentLoaded', () => {
//     // fetch('https://www.youtube.com/')
//     // .then(response => response.json())
//     // .then(response => {
//     //     console.log(response);
//     // })
//     // .catch(error => console.log(error))
    // console.log(document.querySelectorAll('img'));
// })

// setTimeout(() => {
    let x = document.querySelectorAll('#thumbnail');
    console.log(x);
    const content = document.querySelector('#contents');
    let y = content.parentElement;
    // const contents = document.querySelectorAll('ytd-rich-grid-row');
    // for (let i = 0; i < contents.length; i++) {
    //     content.removeChild(contents[i]);
    // }
    y.removeChild(content);
    let a = 1;
    let b = document.createElement('div');
    let c = document.createElement('div');
    let d = document.createElement('div');
    // let e = document.createElement('div');

    let k = document.querySelector('ytd-browse');
    
    while (a < 5){
        if (!x[a].href.includes('shorts')) {
            let vid = document.createElement('iframe');
            let z = x[a].href.slice(32);
            vid.src = 'https://www.youtube.com/embed/' + z + '?autoplay=1';
            vid.style.width = '25%';
            // vid.style.height = '50%';
            vid.style.border = '0';
            b.appendChild(vid);
            a++;
        }
    }
    
    while (a < 9){
        if (!x[a].href.includes('shorts')) {
            let vid = document.createElement('iframe');
            let z = x[a].href.slice(32);
            vid.src = 'https://www.youtube.com/embed/' + z + '?autoplay=1';
            vid.style.width = '25%';
            // vid.style.height = '50%';
            vid.style.border = '0';
            c.appendChild(vid);
            a++;
        }
    }

    // while (a < 13){
    //     if (!x[a].href.includes('shorts')) {
    //         let vid = document.createElement('iframe');
    //         let z = x[a].href.slice(32);
    //         vid.src = 'https://www.youtube.com/embed/' + z + '?autoplay=1';
    //         vid.style.width = '25%';
    //         // vid.style.height = '50%';
    //         vid.style.border = '0';
    //         d.appendChild(vid);
    //         a++;
    //     }
    // }

    // while (a < 17) {
    //     if (!x[a].href.includes('shorts')) {
    //         let vid = document.createElement('iframe');
    //         let z = x[a].href.slice(32);
    //         vid.src = 'https://www.youtube.com/embed/' + z + '?autoplay=1';
    //         vid.style.width = '25%';
    //         // vid.style.height = '50%';
    //         vid.style.border = '0';
    //         e.appendChild(vid);
    //         a++;
    //     }
    // }
    
    k.appendChild(b);
    k.appendChild(c);
    // k.appendChild(d);
    // y.appendChild(e);
    // }, 500)
    
    
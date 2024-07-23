// let imgBx = document.querySelectorAll('.imgBx')
// let contentBx = document.querySelectorAll('.contentBx')



// for (let i = 0; i < imgBx.length; i++) {
//     imgBx[i].addEventListener('mouseover', function () {
//         for (let i = 0; i < contentBx.length; i++) {
//             contentBx[i].className = 'contentBx'
//         }

//         let select = document.getElementById(this?.dataset?.id).className = 'contentBx active'

//         console.log("select is ", select)
//         for (let i = 0; i < imgBx.length; i++) {
//             imgBx[i].className = 'imgBx'
//         }
//         this.className = 'imgBx active'
//     })
// }


let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for (let i = 0; i < imgBx.length; i++) {
    imgBx[i].addEventListener('mouseover', function () {
        // Reset all contentBx elements to default class
        for (let j = 0; j < contentBx.length; j++) {
            contentBx[j].className = 'contentBx';
        }

        // Check if this dataset.id is defined
        if (this.dataset && this.dataset.id) {
            let selectedElement = document.getElementById(this.dataset.id);

            if (selectedElement) {
                selectedElement.className = 'contentBx active';
            } else {
                console.error("Element with ID " + this.dataset.id + " not found.");
            }
        }
        // else {
        //     console.error("data-id attribute is not set for this imgBx element.");
        // }

        // Reset all imgBx elements to default class
        for (let k = 0; k < imgBx.length; k++) {
            imgBx[k].className = 'imgBx';
        }

        // Set active class for the current imgBx element
        this.className = 'imgBx active';
    });
}

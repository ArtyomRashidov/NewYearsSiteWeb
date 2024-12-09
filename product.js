let product = [
    {
        id: 1,
        img: 'img/product1.png',
        work: 'For work',
        title: 'Console.log Guru',
        info: {
            reating: '3 3 3 3 3',
            country: 'Uzbekistan',
        }
    },
    {
        img: 'img/product1.png',
        work: 'For health',
        title: 'Hydration Bot',
        color: '#06A44F',
        info: {
            reating: '1 3 2 3 5',
            country: 'Azerbaijan',
        }

    },
    {
        img: 'img/product1.png',
        work: 'For work',
        title: 'Merge Master',
        info: {
            reating: '1 3 2 3 4',
            country: 'Argentina',
        }
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7',
        info: {
            reating: '5 5 5 5 5',
            country: 'Brazil',
        }
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },
    {
        img: 'img/product1.png',
        work: 'For harmony',
        title: 'Spontaneous Coding',
        color: '#FF43F7'
    },

];

let productHTML = '';
let productFore = product.slice(0, product.length - 8)

productFore.forEach((item, key) => {

    let infoCard = `
        <h1 class="cardReating">${item.info.reating}</h1>
        <h1 class="cardCounry">${item.info.country}</h1>
    `

    productHTML += `
    <div class="gift__item">
    <img src="${item.img}" alt="" width="310px" height="230px" class="img__cover" id="imga">
    <div class="gift__item__content">
        <p class="product__item__work" style="color:${item.color};">
        ${item.work}
        </p>
        <h4 class="product__item__name">
        ${item.title}
        </h4>
        <button class="productInfo">info</button>
        <div class="infoCardNone">${infoCard}</div>
    </div>
</div>
    `
})
document.querySelector('.gifts__inner').innerHTML = productHTML;


let infobtn = document.querySelectorAll('.productInfo');
infobtn.forEach((infoBtnA) => {
    infoBtnA.addEventListener('click', () => {
        let closectGiftItem = infoBtnA.closest('.gift__item');
        giftItem = {
            imgCard: closectGiftItem.querySelector('#imga').getAttribute('src'),
            workCard: closectGiftItem.querySelector('.product__item__work').innerText,
            nameCard: closectGiftItem.querySelector('.product__item__name').innerText,
            reatingCard: closectGiftItem.querySelector('.cardReating').innerText,
            countryCard: closectGiftItem.querySelector('.cardCounry').innerText,
        }


        let cardHTML = `
        <div class="cardImg">
        <img src="${giftItem.imgCard}" alt="">
        <h1 class="card__name card">${giftItem.workCard}</h1>
        <h1 class="card__work card">${giftItem.nameCard}</h1>
        <h1 class="card__work card">${giftItem.reatingCard}</h1>
        <h1 class="card__work card">${giftItem.countryCard}</h1>
        <button class="cardClose">X</button>
        </div>
        `
        let cardJsHtml = document.querySelector('.cardHTML');
        cardJsHtml.innerHTML = cardHTML

        cardJsHtml.classList.add('cardHTML-active')
        document.querySelector('.infoCardNone').style.display = 'block'
        document.querySelector('.cardClose').addEventListener('click', () => {
            cardJsHtml.classList.remove('cardHTML-active');
            document.querySelector('.infoCardNone').style.display = 'none'

        })
    })
})




let productAll = '';
product.forEach((itemAll) => {
    productAll += `
        <div class="gift__item">
        <img src="${itemAll.img}" alt="" width="310px" height="230px" class="img__cover">
        <div class="gift__item__content">
        <p class="product__item__work" style="color:${itemAll.color};">
        ${itemAll.work}
        </p>
        <h4 class="product__item__name">
        ${itemAll.title}
        </h4>
        </div>
        </div>`
})
document.querySelector('.gifts__product__inner').innerHTML = productAll;


let allBtn = document.getElementById('all');
allBtn.addEventListener('click', allFunction)
function allFunction() {
    let productAlla = '';
    product.forEach((itemAll) => {
        productAlla += `
        <div class="gift__item">
        <img src="${itemAll.img}" alt="" width="310px" height="230px" class="img__cover">
        <div class="gift__item__content">
        <p class="product__item__work" style="color:${itemAll.color};">
        ${itemAll.work}
        </p>
        <h4 class="product__item__name">
        ${itemAll.title}
        </h4>
        </div>
        </div>`
    })
    document.querySelector('.gifts__product__inner').innerHTML = productAlla;
}

let worlBtn = document.getElementById('work')
worlBtn.addEventListener('click', worlFunction)
function worlFunction() {
    let worlGifts = product.filter((workItem) => {
        return workItem.work === 'For work';
    });
    let workGiftHTML = '';
    worlGifts.forEach((workGidtItem) => {
        workGiftHTML += `    
         <div class="gift__item">
        <img src="${workGidtItem.img}" alt="" width="310px" height="230px" class="img__cover">
        <div class="gift__item__content">
            <p class="product__item__work">
            ${workGidtItem.work}
            </p>
            <h4 class="product__item__name">
            ${workGidtItem.title}
            </h4>
        </div>
    </div>`
    })
    document.querySelector('.gifts__product__inner').innerHTML = workGiftHTML;
}

let healthBtn = document.getElementById('health')
healthBtn.addEventListener('click', healthFunction)
function healthFunction() {
    let healthGifts = product.filter((healthItem) => {
        return healthItem.work === 'For health';
    });
    let healthGiftHTML = '';
    healthGifts.forEach((healthtItem) => {
        healthGiftHTML += `    
         <div class="gift__item">
        <img src="${healthtItem.img}" alt="" width="310px" height="230px" class="img__cover">
        <div class="gift__item__content">
            <p class="product__item__work">
            ${healthtItem.work}
            </p>
            <h4 class="product__item__name">
            ${healthtItem.title}
            </h4>
        </div>
    </div>`
    })
    document.querySelector('.gifts__product__inner').innerHTML = healthGiftHTML;
}

let harhBtn = document.getElementById('har')
harhBtn.addEventListener('click', harFunction)
function harFunction() {
    let harGifts = product.filter((harItem) => {
        return harItem.work === 'For harmony';
    });
    let harGiftHTML = '';
    harGifts.forEach((harItem) => {
        harGiftHTML += `    
         <div class="gift__item">
        <img src="${harItem.img}" alt="" width="310px" height="230px" class="img__cover">
        <div class="gift__item__content">
            <p class="product__item__work">
            ${harItem.work}
            </p>
            <h4 class="product__item__name">
            ${harItem.title}
            </h4>
        </div>
        <div class="product__info__block">
            ${harItem.title}
        </div>
    </div>`
    })

    document.querySelector('.gifts__product__inner').innerHTML = harGiftHTML;
}

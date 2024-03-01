'use strict'
document.addEventListener('DOMContentLoaded', ()=>{
    function createCard(number, img, tittle, text, link = ''){
        let flower = document.createElement('div');
        flower.classList.add('flower');

        let picturesBlock = document.createElement('div');
        picturesBlock.classList.add('pictures-block');
        flower.append(picturesBlock)


        let span = document.createElement('span');
        span.classList.add('numberFlower');
        span.innerHTML = number;
        picturesBlock.append(span);


        let img2 = document.createElement('img');
        img2.classList.add('pictureFlower');
        img2.setAttribute('src', img);
        picturesBlock.append(img2);

        let aboutFlower = document.createElement('div');
        aboutFlower.classList.add('about-flower');
        flower.append(aboutFlower);

        let nameFlower = document.createElement('span');
        nameFlower.classList.add('name-flower');
        nameFlower.innerHTML = tittle;
        aboutFlower.append(nameFlower);

        let desc = document.createElement('span');
        desc.classList.add('description');
        desc.innerHTML = text;
        aboutFlower.append(desc);

        let details = document.createElement('a');
        details.classList.add('details');
        details.innerHTML = 'Подробнее';
        details.setAttribute('href', link);
        flower.append(details);



        return flower
    }

    let Flowers = [];
    Flowers.push(createCard('2.4', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('3.1', 'imgs/2.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('1.2', 'imgs/3.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('1.4', 'imgs/4.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))


    Flowers.push(createCard('2.4', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('3.1', 'imgs/2.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('1.2', 'imgs/3.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('1.4', 'imgs/4.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))


    Flowers.push(createCard('2.4', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('3.1', 'imgs/2.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('1.2', 'imgs/3.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('1.4', 'imgs/4.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))





    let flowerBlocks = document.querySelector('.flower-blocks');
    for(let i = 0; i < Flowers.length; i++){
        flowerBlocks.append(Flowers[i]);
    }


    //-----------------------------------------------
    //НУЖНО ВЫПОЛНИТЬ РЕФАКТОРИНГ
    let counter = document.querySelector('.counterSlider');
    let buttonLeft = document.querySelector('.buttonLeft');
    let buttonRight = document.querySelector('.buttonRight');
    let slider = document.querySelector('.slider')

    let cnt = 1;
    let position = 0;
    flowerBlocks.style.left = position + 'px';
    let currentIdx = 0;

    //кол-во карточек которое по факту влезает в слайдер
    let cardsCnt = Math.trunc(slider.offsetWidth / Flowers[0].offsetWidth);
    //количество слайдов
    let slidesCtn = Flowers.length / cardsCnt;
    //Суммурный margin всех карточек
    let freeSpace = slider.offsetWidth - Flowers[0].offsetWidth * cardsCnt;
    //отступ для трех карточек
    let cardMargin = freeSpace / (cardsCnt - 1);
    let slideShift = slider.offsetWidth + cardMargin;


    for(let i = 0; i < Flowers.length; i++){
        Flowers[i].style.marginRight = cardMargin + 'px';
    }

    counter.innerHTML = `${cnt} из ${slidesCtn}`;

    let listenerLeft = function(event){
        if(currentIdx < Flowers.length - cardsCnt){
            currentIdx += cardsCnt;
            position -= slideShift;
            flowerBlocks.style.left = position + 'px';

            cnt ++;
            counter.innerHTML = `${cnt} из ${slidesCtn}`;
        }
    } 

    let listenerRight = function(event){
        if(currentIdx > 0){
            currentIdx -= cardsCnt;
            position += slideShift;
            flowerBlocks.style.left = position + 'px';

            cnt --;
            counter.innerHTML = `${cnt} из ${slidesCtn}`;
        }
    }

    buttonLeft.addEventListener('click', listenerLeft);
    buttonRight.addEventListener('click', listenerRight);

    window.addEventListener('resize',()=>{
        if(window.innerWidth <= 580){
            cardsCnt = 1;
            slidesCtn = Flowers.length / cardsCnt;
            freeSpace = 0;
            cardMargin = 0;
            slideShift = slider.offsetWidth;

            for(let i = 0; i < Flowers.length; i++){
                Flowers[i].style.width = slider.offsetWidth + 'px';
            }
            flowerBlocks.style.width = slider.offsetWidth * Flowers.length + 'px';
        }

        else{
            cardsCnt = Math.trunc(slider.offsetWidth / Flowers[0].offsetWidth);
            slidesCtn = Flowers.length / cardsCnt;
            freeSpace = slider.offsetWidth - Flowers[0].offsetWidth * cardsCnt;
            cardMargin = freeSpace / (cardsCnt - 1);
            slideShift = slider.offsetWidth + cardMargin;


            flowerBlocks.style.width = '';
            for(let i = 0; i < Flowers.length; i++){
                Flowers[i].style.width = ''; // стираем предыдущие значения
                Flowers[i].style.marginRight = cardMargin + 'px';
            }
        }

        
        if(cnt != 1)
        {
            cnt = 1;
            currentIdx = 0;
            position = 0;
            flowerBlocks.style.left = position + 'px';
        }
        counter.innerHTML = `${cnt} из ${slidesCtn}`;

        buttonLeft.removeEventListener('click', listenerLeft);
        buttonRight.removeEventListener('click', listenerRight);


        listenerLeft = function(event){
            if(currentIdx < Flowers.length - cardsCnt){
                currentIdx += cardsCnt;
                position -= slideShift;
                flowerBlocks.style.left = position + 'px';
    
                cnt ++;
                counter.innerHTML = `${cnt} из ${slidesCtn}`;
            }
        } 
    
        listenerRight = function(event){
            if(currentIdx > 0){
                currentIdx -= cardsCnt;
                position += slideShift;
                flowerBlocks.style.left = position + 'px';
    
                cnt --;
                counter.innerHTML = `${cnt} из ${slidesCtn}`;
            }
        }
    
        buttonLeft.addEventListener('click', listenerLeft);
        buttonRight.addEventListener('click', listenerRight);

    });
    
});
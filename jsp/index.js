'use strict'
document.addEventListener('DOMContentLoaded', ()=>{
    function createCard(number, img, tittle, text, link = ''){
        let flower = document.createElement('div');
        flower.classList.add('flower');

        let picturesBlock = document.createElement('div');
        picturesBlock.classList.add('pictures-block');
        flower.append(picturesBlock)


        let img1 = document.createElement('img');
        img1.classList.add('numberFlower');
        img1.setAttribute('src', number);
        picturesBlock.append(img1);


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
    Flowers.push(createCard('imgs/2.4.png', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('imgs/2.4.png', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('imgs/2.4.png', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))

    Flowers.push(createCard('imgs/2.4.png', 'imgs/1.png','Fig. 1 (plant)', 
    'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.' ))


    let flowerBlocks = document.querySelector('.flower-blocks');
    for(let i = 0; i < Flowers.length; i++){
        flowerBlocks.append(Flowers[i]);
    }
    
})
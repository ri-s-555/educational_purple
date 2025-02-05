import '../css/style.css'
import {creatCard} from './card.js'

 // прилетает с сервера
const cards = [
    {
        color:'green',
        price:0,
        name:'',
        review:0
    },
    {
        color:'purpur',
        price:0,
        name:'',
        review:0
    },
    {
        color:'mint',
        price:0,
        name:'',
        review:0
    },
    {
        color:'green',
        price:0,
        name:'',
        review:0
    },
    {
        color:'purpur',
        price:0,
        name:'',
        review:0
    },
    {
        color:'mint',
        price:0,
        name:'',
        review:0
    },
    {
        color:'green',
        price:0,
        name:'',
        review:0
    },
    {
        color:'purpur',
        price:0,
        name:'',
        review:0
    },
    {
        color:'mint',
        price:0,
        name:'',
        review:0
    }

]

let cardsArray = []

cards.forEach(item=>{
    cardsArray.push( creatCard(item))
})

console.log(cardsArray)

const cardsWrapper = document.querySelector('.sellers-product__cards-wrapper')
console.log(cardsWrapper)

cardsArray.forEach(item =>{
    cardsWrapper.appendChild(item)
})
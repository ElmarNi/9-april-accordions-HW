"use strict" ;

//Exercise_1
/*
[...document.querySelectorAll('.acc-head')].forEach(head =>{
    head.addEventListener("click", function(){
        document.querySelector('.acc-head.active').classList.remove("active");
        this.classList.add("active");
    })
})
*/

//Exercise_2
/*
[...document.querySelectorAll('.tabs')].forEach(tab =>{
    tab.addEventListener("click", function(){
        document.querySelector('.tabs.active').classList.remove("active");
        this.classList.add("active");
        document.querySelector('.body.active').classList.remove('active');
        document.querySelector(`.body[data-id="${this.getAttribute("data-id")}"]`).classList.add('active')
    })
})
*/

//Exercise_3
/*
[...document.querySelectorAll('.color-tabs')].forEach(color =>{
    color.addEventListener("click", function() {
        document.querySelector(`.color-pallets[data-id="${this.getAttribute("data-id")}"]`).style.backgroundColor = getComputedStyle(this).backgroundColor;
        document.querySelector('.color-pallets.active').classList.remove('active');
        document.querySelector(`.color-pallets[data-id="${this.getAttribute("data-id")}"]`).classList.add('active')
    })
})
*/

//Exercise_4
/*
const nextBTN = document.querySelector(".next");
const previousBTN = document.querySelector(".previous");
[...document.querySelectorAll('.tabs')].forEach(tab =>{
    tab.addEventListener("click", function(){
        document.querySelector('.tabs.active').classList.remove("active");
        this.classList.add("active");
        document.querySelector('.body.active').classList.remove('active');
        document.querySelector(`.body[data-id="${this.getAttribute("data-id")}"]`).classList.add('active');
    })
})
nextBTN.addEventListener("click", function(){
    document.querySelector(".tabs.active").nextElementSibling.classList.add("active");
    document.querySelector(".tabs.active").classList.remove("active");
    document.querySelector(".body.active").nextElementSibling.classList.add("active");
    document.querySelector(".body.active").classList.remove("active");

})
previousBTN.addEventListener("click", function(){
    document.querySelector(".tabs.active").previousElementSibling.classList.add("active");
    document.querySelector(".tabs.active").nextElementSibling.classList.remove("active");
    document.querySelector(".body.active").previousElementSibling.classList.add("active");
    document.querySelector(".body.active").nextElementSibling.classList.remove("active");
})
*/
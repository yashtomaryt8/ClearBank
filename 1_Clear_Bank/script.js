//nav-bar scrolling

let lastScrollY = window.scrollY
const navBar = document.querySelector('nav')

window.addEventListener('scroll',()=>{
    if(window.scrollY > lastScrollY){
        navBar.classList.add('hidden')
    }
    else{
        navBar.classList.remove('hidden')
    }
    lastScrollY = window.scrollY
})

// navLinks())
function navLinks(){
    var pageBtns = document.querySelectorAll('.page-button')
    var pageContents = document.querySelectorAll('.page-content')
    var nav = document.querySelector('nav')
    
    var flag = 0
    
    pageBtns.forEach(function(button){
        button.addEventListener('click',function(){
    
            var targetId = button.id.toLowerCase() + '-page'
            var targetContent = document.getElementById(targetId)
    
            pageContents.forEach(content => content.style.display = 'none') 
            pageBtns.forEach(btn => btn.classList.remove('border-b-[1px]'))
    
            var isVisible = targetContent.style.display === 'flex'
    
            if(isVisible || flag === 0){
                targetContent.style.display = 'flex'
                button.classList.add('border-b-[1px]')
                nav.style.backdropFilter = 'blur(0px)'
                document.body.style.overflow = 'hidden'
                flag = 1
            }
            else {
                targetContent.style.display = 'none'
                nav.style.backdropFilter = 'blur(18px)'
                document.body.style.overflow = 'auto'
                flag = 0
            }
        })
    })
    
    
}
navLinks()

// moving-banner
gsap.to("#child-scroll",{
    transform:'translateX(-100%)',
    duration:80,
    ease:'none',
    repeat:-1   //infinite
})

// 3 product thing
var productText = document.querySelectorAll("#product-text")

var selectedVideo = document.querySelector('#selected-video')
var video = ''

var selectedPara = document.querySelector('#selected-para')

var productNumber = document.querySelector('h3 span:first-child')

productText.forEach(function(elem, index){
    elem.addEventListener('mouseenter',function(){
        video = elem.getAttribute('product-video')
        if(selectedVideo.getAttribute('src') !== video){
            selectedVideo.setAttribute('src', video)
        }
        
        para = elem.getAttribute('product-para')
        selectedPara.textContent = para

        productNumber.textContent = `0${index + 1}`
    })
})

// swiper

var swiperSlides = document.querySelectorAll('.swiper-slide')

var swiperNumber = document.querySelector('h2 span:first-child')

swiperSlides.forEach(function(elem, index){
    elem.addEventListener('mouseenter', ()=>{
        swiperNumber.textContent = `0${index + 1}`
    })

    elem.addEventListener('mouseleave', ()=>{
        swiperNumber.textContent = "01"
    })
})


var swiper = new Swiper(".swiper", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    direction: 'horizontal', 
    mousewheel: {
        enabled: true,
        sensitivity: 0.7, 
        releaseOnEdges: true, 
    },
    freeMode: true, 
    speed: 600, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  })


// var productBtn = document.querySelector('#Product')
// var productDiv = document.querySelector('#product-page')

// var flag = 0
// productBtn.addEventListener('click',function(){
//     if(flag == 0){
//         productDiv.style.display = 'flex'
//         productBtn.classList.add('border-b-[1px]')
//         productBtn.classList.add('hover:border-b-[#3B9BA2]')
//         document.querySelector('nav').style.backdropFilter = 'blur(0px)'
//         flag = 1
//     }
//     else {
//         productDiv.style.display = 'none'
//         productBtn.classList.remove('border-b-[1px]')
//         document.querySelector('nav').style.backdropFilter = 'blur(18px)';        
//         flag = 0
//     }
// })


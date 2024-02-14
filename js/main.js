$(document).ready(ready = () => {
    //Carousel
    $('.next').on('click', next = () => {
        let currentImg = $('.active')
        let nextImg = currentImg.next()

        if(nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10)
            nextImg.addClass('active').css('z-index', 10)
        }

        let currentTxt = $('.active-text')
        let nextTxt = currentTxt.next()

        if(nextTxt.length) {
            currentTxt.removeClass('active-text').css('z-index', -10)
            nextTxt.addClass('active-text').css('z-index', 10)
        }
    })

    $('.prev').on('click', prev = () => {
        let currentImg = $('.active')
        let prevImg = currentImg.prev()

        if(prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10)
            prevImg.addClass('active').css('z-index', 10)
        }

        let currentTxt = $('.active-text')
        let prevTxt = currentTxt.prev()

        if(prevTxt.length) {
            console.log(prevTxt.length)
            currentTxt.removeClass('active-text').css('z-index', -10)
            prevTxt.addClass('active-text').css('z-index', 10)
        }
    })
    
    //Close out
    $('#x-heart-container1').on('click', close = () => {
        $('#memories-container').css('display', 'none')
    })

    //Open up
    $('#polaroids-container').on('click', open = () => {
        $('#memories-container').css('display', 'flex')
    })

    //gif close out
    $('#x-heart-container2').on('click', close = () => {
        $('#gif-container').css('display', 'none')
        $('#cards-container').removeClass('blur')
    })

})
$(document).ready(ready = () => {
    console.log('ready')
    $('.envelope').on('click', async function () {
        $('#flap').css({
            'border-bottom': '150px solid rgb(254, 207, 0)',
            'border-top': '150px solid transparent',
            'top': '-254px',
            'z-index': 0
        })
        $('.confetti').css({
            'display': 'inline'
        })
        $('.image-wrapper').addClass('animate')

        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('waited')
        $('#msg-container').css({
            'display': 'inline'
        })

        await new Promise(resolve => setTimeout(resolve, 1000))
        $('.confetti').css({
            'display': 'none'
        })

        await new Promise(resolve => setTimeout(resolve, 400))
        $('#msg').css({
            'display': 'inline'
        })
    })
})
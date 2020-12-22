$(function () {
    $('#close').click(event => {
        $('#banners')[0].style.display = 'none'
        console.log($('#banners'))
    })

    $('#app-list').click(event => {
        console.log(event.target)
    })
})
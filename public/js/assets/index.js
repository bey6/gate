$(function () {
    $('#file-list').click(function (event) {
        let t = event.target,
            path = '',
            type = '',
            pref = ''
        if (!t.dataset || !t.dataset.name) return

        path = t.dataset.name ? t.dataset.name : ''
        type = t.dataset.type
        pref = t.dataset.prefix + '/'

        if (type === 'folder') window.location = `/assets?path=${pref + path}`
        else $().toast('copied')
    })
    $('#img-plus').click(() => {
        $('#btn-input-upload').click()
    })
})
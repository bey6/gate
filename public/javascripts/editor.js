$(function () {
  let article = {
    name: '',
    content: '',
  },
    firstLoad = true
  const mdeditor = new SimpleMDE({
    element: $('#view-area')[0], autofocus: true, autosave: {
      enabled: true,
      uniqueId: 'uniqueid',
      delay: 1000,
    },
  })
  mdeditor.codemirror.on('change', _.debounce(() => {
    if (firstLoad) {
      firstLoad = false
      return
    }
    article.content = mdeditor.value()
    $.post('/editor/article', article, (res, status) => {
      console.log(status, res)
    }, 'json')
  }, 1000))
  $('#file-list').click(e => {
    if (e.target.nodeName === 'PRE') {
      firstLoad = true
      article.name = e.target.dataset.articleName
      mdeditor.value(e.target.textContent)
    }
  })
})

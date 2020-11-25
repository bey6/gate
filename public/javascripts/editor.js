$(function () {
  const mdeditor = new SimpleMDE({ element: $('#view-area')[0] })
  $('#file-list').click(e => {
    if (e.target.nodeName==='PRE')
      mdeditor.value(e.target.textContent)
  })
})

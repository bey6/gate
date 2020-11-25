$(function () {
  const mdeditor = new SimpleMDE({ element: $('#view-area')[0] })
  $('#file-list').click(e => {
    console.log(e.target)
    if (e.target.nodeName==='PRE')
      mdeditor.value(e.target.textContent)
  })
})

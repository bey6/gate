$(function () {
  hljs.initHighlightingOnLoad()

  $('article>h2').each((idx, ele) => {
    let li = $(
      `<li><a href="#${ele.id}">${idx + 1}. ${ele.textContent}</a></li>`
    )
    $('#outline__root').append(li)
    // console.log($(`article>#${ele.id}`))
    // if ($(`article>#${ele.id}>h3`).length > 0) {
    //   let ol = $('<ol></ol>')
    //   $(`article>#${ele.id}>h3`).each((h3idx, h3ele) => {
    //     let h3li = $(
    //       `<li><a href="#${h3ele.id}">${idx + 1}. ${h3ele.textContent}</a></li>`
    //     )
    //     ol.append(h3li)
    //   })
    //   $('#outline__root').append(ol)
    // }
  })
})

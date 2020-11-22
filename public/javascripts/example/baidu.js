$(function () {
  function search() {
    let keyword = $('#kw')[0].value
    $('#imglist').html('')
    $.get(
      `/baidu/search/acjson?tn=resultjson_com&logid=10872627269418468640&ipn=rj&ct=201326592&is=&fp=result&queryWord=动漫头像&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word=${keyword}&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&cg=head&pn=180&rn=30&gsm=b4&1606034880681=`,
      function (res) {
        console.log(res.data)
        if (res.data)
          res.data.forEach((v) => {
            $('#imglist').append(
              $(
                `<li><a href=${v.middleURL} target='preview'><img src=${v.thumbURL}/></a></li>`
              )
            )
          })
      }
    )
  }

  $('#rq').click(search)
  $('#kw').keydown(function (event) {
    if (event.key === 'Enter') search()
  })
})

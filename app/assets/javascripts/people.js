$(function() {
  $('form.edit_person').fileupload({
    progressall: function (e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
      $('#progress .bar').css(
          'width',
          progress + '%'
      );
    }
  });
})

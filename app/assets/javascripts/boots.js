$('document').ready(function(){
  if(window.location.pathname.indexOf('boots') < 0){return};
  console.log('boots recognized')
  $('form').on('change', boots.formHandler)
  $('form').on('submit', boots.submitHandler)
})

var boots =(function(){
  var API = {}
  API.formHandler = function(event){
    var $target = $(event.target)
    var $collision = $('select[value='+$target.val()+']')
    if(!!$collision.length){
      API.swap($target, $collision)
    }
    $target.attr('value', $target.val())
  }
  API.swap = function($new, $old){
    var upColor = '#0f0'
    var downColor = '#f00'
    var neutral = '#fff'
    var deltaNew = 1*$new.val() - 1*$new.attr('value')
    var deltaOld = -1*deltaNew
    $new.parent().css(
      'background-color', deltaNew < 0 ? upColor : downColor
      )
    $old.parent().css(
      'background-color', deltaOld < 0 ? upColor : downColor
      )
    $old.val(1*$old.val()+deltaOld)
    $old.attr('value', $old.val())
    setTimeout(function(){
      $new.parent().css('background-color', neutral)
      $old.parent().css('background-color', neutral)
    }, 800)
  };
  API.submitHandler = function(event){
    event.preventDefault()
    var call = $.ajax({
      data: $(event.target).serialize(),
      url: window.location.href + '/vote',
      type: 'post'
    })
    call.done(function(response){
      console.log(response)
    })
  }
  return API
})()

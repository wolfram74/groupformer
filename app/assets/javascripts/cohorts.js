$('document').ready(function(){
  if(window.location.pathname.indexOf('cohorts') < 0){return};
  console.log('cohorts recognized')
  $('form').on('change keyup', cohort.formHandler)
  $('.newEntry').on('click', cohort.buttonHandler)
})

var cohort = (function(){
  var API = {}
  API.formHandler = function(event){
    var $form = $(event.target).closest('form')
    console.log($form)
    var formString = $form.serializeArray()
    console.log(formString)
    // console.log($.parseJSON(formString) )
    // debugger
  };
  API.buttonHandler = function(event){
    console.log('more things')
    API[$(event.target).attr('id')]()
  };
  API.addBoot = function(){
    var $template = $('#bootTemplate')
    var $copy = $template.clone()
    $copy.attr('class', '')
    $copy.attr('id', '')
    $('#bootList').append($copy)
  }
  API.addProject = function(event){
    var $template = $('#projectTemplate')
    var $copy = $template.clone()
    $copy.attr('class', '')
    $copy.attr('id', '')
    $('#projectList').append($copy)
  }
  return API
  })()

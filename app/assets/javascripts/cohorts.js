$('document').ready(function(){
  if(window.location.pathname.indexOf('cohorts') < 0){return}
  $('form').on('change', cohort.formHandler )
})

var cohort = (function(){
  var API = {}
  API.formHandler = function(event){
    console.log(event.target)
  }
  return API
  })

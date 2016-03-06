$('document').ready(function(){
  if(window.location.pathname.indexOf('cohorts') < 0){return};
  console.log('cohorts recognized')
  $('form').on('change keyup', cohort.formHandler)
  $('.newEntry').on('click', cohort.buttonHandler)
  $('form').on('submit', cohort.submitHandler)
})

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

var cohort = (function(){
  var API = {}
  API.formCache = {
    instructorEmail : '',
    boots : [],
    projects : []
  }
  API.formHandler = function(event){
    var $form = $(event.target).closest('form')
    var formArray = $form.serializeArray()
    API.resetCache()
    API.fillCache(formArray)
    API.renderCache()
  };
  API.resetCache = function(){
    API.formCache = {
      instructorEmail : '',
      boots : [],
      projects : []
    }
  }
  API.fillCache= function(formData){
    var boot = []
    var project = []
    for(var i=0; i < formData.length; i++){
      if(formData[i].name.match(/boot\d/)){
        boot.push(formData[i].value.trim())
        if( boot.length ==2){
          API.formCache.boots.push(boot)
          boot =[]
        }
      }else if(formData[i].name.match(/project\d/)){
        project.push(formData[i].value.trim())
        if( project.length ==3){
          API.formCache.projects.push(project)
          project =[]
        }
      }else if(formData[i].name.match(/bootBulk/)){
        API.formCache.boots = API.formCache.boots.concat(
          API.csvParser(formData[i].value)
          )
      }else if(formData[i].name.match(/projectBulk/)){
        API.formCache.projects =API.formCache.projects.concat(
          API.csvParser(formData[i].value)
          )
      }else if(formData[i].name.match(/instructor_email/)){
        API.formCache.instructorEmail=formData[i].value
      }
    }
  }
  API.csvParser = function(string){
    var lines = string.split('\n')
    for(var i = 0; i< lines.length; i++){
      lines[i] = lines[i].split(',')
      for(var j =0; j<lines[i].length; j++){
        lines[i][j] = lines[i][j].trim()
      }
    }
    return lines
  }
  API.buttonHandler = function(event){
    console.log('more things')
    API[$(event.target).attr('id')]()
  };
  API.addBoot = function(){
    var $template = $('#bootTemplate')
    var $copy = $template.clone()
    $copy.attr('class', '')
    $copy.attr('id', '')
    var prefix = 'boot'+ $('#bootList').find('li').length
    $copy.find('input').eq(0).attr('name', prefix+'[email]')
    $copy.find('input').eq(1).attr('name', prefix+'[name]')
    $('#bootList').append($copy)
  }
  API.addProject = function(event){
    var $template = $('#projectTemplate')
    var $copy = $template.clone()
    $copy.attr('class', '')
    $copy.attr('id', '')
    var prefix = 'project'+ $('#projectList').find('li').length
    $copy.find('input').eq(0).attr('name', prefix+'[name]')
    $copy.find('input').eq(1).attr('name', prefix+'[proposer]')
    $copy.find('input').eq(2).attr('name', prefix+'[description]')
    $('#projectList').append($copy)
  }
  API.renderCache = function(){
    $('#instructorState').find('span').text(API.formCache.instructorEmail)
    var $boots = $('#bootState').find('ul')
    $boots.empty()
    for(var bid = 0; bid < API.formCache.boots.length; bid++){
      $boots.append(
        $('<li></li>').text(API.formCache.boots[bid].join(', '))
        )
    }
    var $projects = $('#projectState').find('ul')
    $projects.empty()
    for(var bid = 0; bid < API.formCache.projects.length; bid++){
      $projects.append(
        $('<li></li>').text(API.formCache.projects[bid].join(', '))
        )
    }
  }
  API.submitHandler = function(event){
    event.preventDefault()
    console.log(API.formCache);
    // $(event.target)
    // debugger
    var request = $.ajax({
      url: '/cohorts',
      type: 'post',
      data: API.formCache
    })
    request.done(function(response){
      console.log('success')
      console.log(response)
    })
  };
  return API
  })()

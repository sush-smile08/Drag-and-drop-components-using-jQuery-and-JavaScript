$.app = $.app || {};

$.app.uiDraggable = {
  init: function() {
    var _self = this;
    _self.dragElements = [];

    $(".toolbox [draggable=true]").each(function() {
      $(this).on("dragstart", function() {
        _self.currentDragItem = $("#js-templates")
          .find('[data-label="' + $(this).data("template") + '"]')
          .clone()
          .html();
      });
    });
       

    this.resetHandleEvents();
  },
  resetHandleEvents: function() {
    var _self = this;
    $("[data-handle]").each(function(e) {
      var _this = this;
      $(this)
        .unbind("drop dragdrop dragover dragover dragleave")
        .on("drop dragdrop", function(e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).append(_self.currentDragItem);
          setTimeout(function() {
            _self.resetHandleEvents();
          }, 0);
        })
        .on("dragover dragenter", function(e) {
          e.preventDefault();
        })
        .on("dragover", function(e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).addClass("hover");
        })
        .on("dragleave drop dragdrop", function() {
          $("[data-handle]").removeClass("hover");
        });
    });
  },
  addTooltip: function(container){
    $('.canvas').append($('#js-tooltip').clone().html());
  }
};

$(function() {
  $.app.uiDraggable.init();
});


// $('#trash').droppable({
//   drop: function (event, ui) {
//       if(!ui.connected-sortable.hasClass('content')) return false;
//       ui.connected-sortable.remove();
//   }
// });

$('.droppable-area1').sortable({
  stop: function (event, ui) {
      ui.item.addClass('dropped');
  }
});

$(".toolbox ul li").draggable({
  connectToSortable: '.droppable',
  helper: 'clone'
});

$('#trash').droppable({
  drop: function (event, ui) {
      if(!ui.droppable-area1.hasClass('dropped')) return false;
      ui.draggable.remove();
  }
});






function add(button) {
  var button = document.createElement("button");
  button.classList.add("btn-danger");
  button.innerHTML = "Delete";

  var containerwrapper = document.getElementById("content");
  var deletewrapper = document.getElementsByClassName("content-wrapper");
  var TotalSection = deletewrapper.length;
  console.log(TotalSection);

  for(var i = 0; i <= TotalSection; i++){
    button.setAttribute("id", "deleteButton"+[i]);
  }
  //button.setAttribute("id", "deleteButton");


  containerwrapper.appendChild(button);
}

document.getElementById("undo").onclick = function(){
  add("button");
}

var deleteButton = document.getElementById('deleteButton');


$(document).ready(function() {
  $( '#content' ).on( 'click', 'button#deleteButton', function (){
    var componentsWrapper = document.getElementsByClassName("content-wrapper");
    for(var i = 0; i <= componentsWrapper.length; i++){
      var componentsWrapperNew = componentsWrapper[i];
      $(componentsWrapperNew ).remove();
    }
    $( "#deleteButton" ).remove();
  });
});


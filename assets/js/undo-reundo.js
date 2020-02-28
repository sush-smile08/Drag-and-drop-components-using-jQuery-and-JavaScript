// Edite content
var editBtn = document.getElementById('editBtn');
var editables = document.querySelectorAll(' #content');

if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('title') !== null) {
    editables[0].innerHTML = localStorage.getItem('title');
  }
}

editBtn.addEventListener('click', function(e) {
  if (!editables[0].isContentEditable) {
    editables[0].contentEditable = 'true';
    editBtn.innerHTML = 'Save Changes';
    editBtn.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables[0].contentEditable = 'false';
    // Change Button Text and Color
    editBtn.innerHTML = 'Enable Editing';
    editBtn.style.backgroundColor = '#F96';
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});

setInterval(function() {
  for (var i = 0; i < editables.length; i++) {
    localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
  }
}, 5000);


// Rearrange
$( init );

function init() {
  $( ".droppable-area1, .droppable-area2" ).sortable({
      connectWith: ".connected-sortable",
      stack: '.connected-sortable ul',
      contentEditable: 'True'
    });
}


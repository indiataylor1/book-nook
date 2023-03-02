var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheBook);

var myList = [];
var myListArea = document.getElementById("wishList");

function addTheBook() {
  var addBook = document.getElementById("iWant");

  addToTheList(addBook);
  resetInput(addBook);
}

function addToTheList(thingToAdd) {
  myList.push(thingToAdd.value);
  var newListItem = document.createElement("li");
  newListItem.innerHTML = myList[myList.length - 1];

  myListArea.appendChild(newListItem);
}

function resetInput(inputToReset) {
  inputToReset.value = "";
}

function printView() {
  var listPage = document.getElementById("listPage");
  var formArea = document.getElementById("formArea");

  formArea.style.display = "none";
  listPage.className = "print";
  myListArea.innerHTML = "";
  myList.sort();

  for (var i = 0; i < myList.length; i++) {
    wishList.innerHTML += "<li>" + myList[i] + "</li>";
  }

var event

/// button actions
  Ul.addEventListener("click", (event)) => {
    if (event.target.tagName === 'BUTTON'){
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if(button.textContent === 'remove'){
        ul.removeChild(li);
      } else if (button.textContent === 'edit'){
        const span = li.firstElementChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span)
        li.removeChild(span);
        button.textContent = 'save';
      }else if (button.textContent === 'save'){
        const input = li.firstElementChild;
        const span = document.createElement('span')
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent  = 'edit';


        }

      }
    }
  }
  //window.print();


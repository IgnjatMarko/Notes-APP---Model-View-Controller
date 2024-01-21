let control = function (model, view) {
  let setupListener = function () {
    document.querySelector("#submity").addEventListener("click", ctrlAddItem);
  };

  let ctrlAddItem = function () {
    let uneto = view.getInput();
    let novi = model.addNote(uneto.desc);
    view.addItemToView(novi);
  };

  let renderLocalStorage = function () {
    let stored = JSON.parse(localStorage.getItem("Listed"));

    stored.forEach((item) => {
      let novi = model.addNote(item.desc);
      view.addItemToView(novi);
    });
  };

  let modifyItem = function () {
    
    let stored = document.querySelectorAll('[contenteditable]');

    const storedList = [];

    stored.forEach(function(item) {

      const id = item.dataset.id;
      const desc = item.textContent;

      storedList.push({id: id, desc: desc});

      item.addEventListener('input', modifyItem);

    });

    localStorage.setItem("Listed", JSON.stringify(storedList));

  };

  let deleteItem = function () {
    let deleteButtons = document.querySelectorAll(".icon");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function (event) {

        event.preventDefault();

        let listItem = event.target.parentNode;

        let id = listItem.dataset.id;

        let data = JSON.parse(localStorage.getItem("Listed"));

        let index = data.findIndex(item => item.id === id);

        if (index !== -1) {
          data.splice(index, 1);
        }
        //console.log(listItem.dataset.id)
        localStorage.setItem("Listed", JSON.stringify(data));

        listItem.parentElement.removeChild(listItem);
      });
    });
  }

  return {
    init: function () {
      setupListener();
      if (!localStorage.getItem("Listed")) {
        console.log("No items saved in localStorage.")
      } else {
        renderLocalStorage();
      };
      modifyItem();
      deleteItem();
    },
  };
};

export default control;

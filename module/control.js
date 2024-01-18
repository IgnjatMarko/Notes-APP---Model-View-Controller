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
    },
  };
};

export default control;

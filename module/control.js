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

  return {
    init: function () {
      setupListener();
      if (!localStorage.getItem("Listed")) {
        
      } else {
        renderLocalStorage();
      }
    },
  };
};

export default control;

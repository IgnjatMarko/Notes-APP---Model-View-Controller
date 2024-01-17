let control = function (model, view) {

    let setupListener = function () {
        document.querySelector('#submity').addEventListener("click", ctrlAddItem);
    }

    let ctrlAddItem = function () {
        let uneto = view.getInput();
        let novi = model.addNote(uneto.desc);
        view.addItemToView(novi, uneto.desc);
    }

    return {

        init: function () {

            setupListener();
        }
    }
}

export default control;
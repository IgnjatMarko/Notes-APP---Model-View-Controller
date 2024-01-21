const view = (function () {
  
  return {
    getInput: function () {
      return {
        desc: document.querySelector("#inputy").value,
      };
    },
    addItemToView: function (list) {
      let html = ``;

      for (let i = 0; i < list.length; i++) {

        html = `<li data-id="${list[i].id}" contenteditable="true">${list[i].desc}<i class="icon fa-solid fa-rectangle-xmark"></i></li>`;
        
      }
      document.querySelector("#listy").innerHTML += html;
      // console.log(list);
      
    }
  };

})();

export default view;

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

        html = `<li data-id="${list[i].id}" contenteditable="true"><i class="fa-solid fa-rectangle-xmark icon"></i>${list[i].desc}</li>`;
        
      }
      document.querySelector("#listy").innerHTML += html;
      // console.log(list);
      
    }
  };

})();

export default view;

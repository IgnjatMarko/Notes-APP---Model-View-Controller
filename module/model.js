const model=(function(){

    const Note = function(id, desc){
        this.id=id;
        this.desc=desc;
    }

    let list = [];

    return {
        addNote: function(desc){
            let item;
            let id = list.length;

            item = new Note(id, desc);

            list.push(item);

            localStorage.setItem("Listed", JSON.stringify(list));

            return list;
        },
        updateLocalStorage: function(){
            localStorage.setItem("Listed", JSON.stringify(list));
        }
    }

})();


export default model;
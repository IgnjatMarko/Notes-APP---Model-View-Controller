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

            return list;
        }
    }

})();


export default model;
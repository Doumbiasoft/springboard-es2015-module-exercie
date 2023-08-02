
const choice = (items) =>{
    const random_index = Math.floor(Math.random()* items.length);
    return items[random_index]
}
const remove = (items, item) =>{
    const index = items.indexOf(item);
    if(index !== -1){
        const elt = items.splice(index, 1);
        if(elt.length){
            return elt;
        }else{
            return undefined;
        }
    }
    return undefined
}

export {choice, remove}; 

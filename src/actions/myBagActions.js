export function addToMyBag(item) {
    return {
        type: 'ADD',
        item: item
    };
  }
  
  export function removeFromMyBag(item) {
    return {
        type: 'REMOVE',
        item: item
    };
  }

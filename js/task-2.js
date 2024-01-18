'use strict';

class Storage {

  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {

    
    // перший спосіб
    const getIndex = this.#items.indexOf(itemToRemove);
    if (getIndex > 0) {
      this.#items.splice(getIndex, 1)
    } else {
      console.log("This item do not exist")
    }
    

    //  другий спосіб
    // const newArray = this.#items.filter(item => item !== itemToRemove)
    // this.#items = newArray;
    

    // третій спосіб
    //   const newArray = [];
    //   for (let i = 0; i < this.#items.length; i++) {
    //     if (this.#items[i] !== itemToRemove) {
    //       newArray.push(this.#items[i])
    //     }
    //   }
    //   this.#items = newArray;
    // }

  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
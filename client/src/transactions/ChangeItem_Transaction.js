// import App from "../App.js";
import jsTPS_Transaction from "../common/jsTPS.js"

/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that updates the text
 * for a given item. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(store, id, initOldText, initNewText) {
        super();
        this.store = store;
        this.id = id;
        this.oldText = initOldText;
        this.newText = initNewText;
    }

    doTransaction() {
        this.store.changeItem(this.id, this.newText);
    }
    
    undoTransaction() {
        this.store.changeItem(this.id, this.oldText);
    }
}
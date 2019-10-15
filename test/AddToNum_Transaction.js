// package demo;

// import jtps.jTPS_Transaction;

/**
 * AddToNum_Transaction.java
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class AddToNum_Transaction extends jsTPS_Transaction {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    // private Num num;
    
    // AMOUNT TO ADD/REMOVE FOR NUM
    // private int amountToAdd;

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    constructor(initNum, initAmountToAdd) {
        super();
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
        // KEEP THESE FOR LATER
        // num = initNum;
        // amountToAdd = initAmountToAdd;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    // @Override
    doTransaction() {
        var oldNum = this.num.getNum();
        var newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    // @Override
    undoTransaction() {
        var oldNum = this.num.getNum();
        var newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    // @Override
    toString() {
        return "Add " + this.amountToAdd;
    }
}
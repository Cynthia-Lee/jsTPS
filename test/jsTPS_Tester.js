// package demo;

// import java.io.PrintStream;
// import java.util.Scanner;
// import jtps.jTPS;
// import jtps.jTPS_Transaction;

/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class jsTPS_Tester {
    // HERE'S OUR TRANSACTION PROCESSING SYSTEM
    // static jTPS tps = new jTPS();

    // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
    // static Num num = new Num();

    constructor() {
        this.tps = new jsTPS();
        this.num = new Num();

        let a = document.getElementById("unit_tests");
        let b = document.getElementById("dynamic_tests");
        a.style.float = "left";

        // SETUP ALL THE EVENT HANDLERS FOR EXISTING CONTROLS,
        // MEANING THE ONES THAT ARE DECLARED IN index.html

        // add transaction
        this.registerEventHandler("add_transaction_submit_button", "click", this["processAddTransaction"].bind(this));

        // undo transaction
        this.registerEventHandler("undo_transaction_submit_button", "click", this["processUndoTransaction"].bind(this));

        // redo transaction
        this.registerEventHandler("redo_transaction_submit_button", "click", this["processRedoTransaction"].bind(this));

        // clear transactions
        this.registerEventHandler("clear_transactions_submit_button", "click", this["processClearTransactions"].bind(this));

        // reset transactions
        this.registerEventHandler("reset_transactions_submit_button", "click", this["processResetTransactions"].bind(this));
    }

    /**
     * This function helps the constructor setup the event handlers for all controls.
     * 
     * @param {TodoGUIId} id Unique identifier for the HTML control on which to
     * listen for events.
     * @param {TodoHTML} eventName The type of control for which to respond.
     * @param {TodoCallback} callback The callback function to be executed when
     * the event occurs.
     */
    registerEventHandler(id, eventName, callback) {
        // GET THE CONTROL IN THE GUI WITH THE CORRESPONDING id
        let control = document.getElementById(id);

        // AND SETUP THE CALLBACK FOR THE SPECIFIED EVENT TYPE
        control.addEventListener(eventName, callback);
    }

    /*
    processReadAddInput() {
        let addTextField = document.getElementById("add_transaction_textfield");
        let newAdd = ownerTextField.value;
        return newAdd;
    }
    */

    // ADD AND EXECUTE A TRANSACTION
    processAddTransaction() {
        // get amount to add from textbox
        /*
        if (entry.startsWith("1")) {
            System.out.print("\nEnter an amount to add: ");
            entry = input.nextLine();
            int amountToAdd = Integer.parseInt(entry);
            jTPS_Transaction transaction = new AddToNum_Transaction(num, amountToAdd);
            tps.addTransaction(transaction);
        }
        */
        /*
        let ownerTextField = document.getElementById(TodoGUIId.LIST_OWNER_TEXTFIELD);
        let newOwner = ownerTextField.value;
        let listBeingEdited = window.todo.model.listToEdit;
        window.todo.model.updateListOwner(listBeingEdited, newOwner);
        */
        let addTextField = document.getElementById("add_transaction_textfield");
        let entry = addTextField.value;
        if (isNaN(entry) | entry.trim() == "") {
            console.log("need number value");
        } else {
            let amountToAdd = Number(entry);
            let transaction = new AddToNum_Transaction(this.num, amountToAdd);
            console.log(transaction);
            this.tps.addTransaction(transaction);
            console.log(this.num);
            console.log(this.tps);
            console.log("Stack has undo transaction = " + this.tps.hasTransactionToUndo());
            console.log("Stack has redo transaction = " + this.tps.hasTransactionToRedo());
            console.log("Num = " + this.num.getNum());
            console.log("Stack size = " + this.tps.getSize());
            console.log("Redo size = " + this.tps.getRedoSize());
            console.log("Undo size = " + this.tps.getUndoSize());
        }

    }


    // UNDO A TRANSACTION
    processUndoTransaction() {
        /*
        else if(entry.startsWith("2")) {
            tps.undoTransaction();
        } 
        */
        this.tps.undoTransaction();
        console.log(this.num);
        console.log(this.tps);
        console.log("Stack has undo transaction = " + this.tps.hasTransactionToUndo());
        console.log("Stack has redo transaction = " + this.tps.hasTransactionToRedo());
        console.log("Num = " + this.num.getNum());
        console.log("Stack size = " + this.tps.getSize());
        console.log("Redo size = " + this.tps.getRedoSize());
        console.log("Undo size = " + this.tps.getUndoSize());
    }

    // REDO A TRANSACTION
    processRedoTransaction() {
        /*
        else if (entry.startsWith("3")) {
        tps.doTransaction();
        }
        */
        this.tps.doTransaction();
        console.log(this.num);
        console.log(this.tps);
        console.log("Stack has undo transaction = " + this.tps.hasTransactionToUndo());
        console.log("Stack has redo transaction = " + this.tps.hasTransactionToRedo());
        console.log("Num = " + this.num.getNum());
        console.log("Stack size = " + this.tps.getSize());
        console.log("Redo size = " + this.tps.getRedoSize());
        console.log("Undo size = " + this.tps.getUndoSize());
    }


    // CLEAR ALL TRANSACTIONS
    processClearTransactions() {
        /*
        else if (entry.startsWith("4")) {
            tps.clearAllTransactions();
        }
        */
        this.tps.clearAllTransactions();
        console.log(this.num);
        console.log(this.tps);
        // console.log("Stack has undo transaction = " + this.tps.hasTransactionToUndo());
        // console.log("Stack has redo transaction = " + this.tps.hasTransactionToRedo());
        console.log("Num = " + this.num.getNum());
        console.log("Stack size = " + this.tps.getSize());
        console.log("Redo size = " + this.tps.getRedoSize());
        console.log("Undo size = " + this.tps.getUndoSize());
    }

    // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
    processResetTransactions() {
        /*
        else if (entry.startsWith("5")) {
            tps.clearAllTransactions();
            num.setNum(0);
        }
        */
        this.tps.clearAllTransactions();
        this.num.setNum(0);
        console.log(this.num);
        console.log(this.tps);
        console.log("Stack has undo transaction = " + this.tps.hasTransactionToUndo());
        console.log("Stack has redo transaction = " + this.tps.hasTransactionToRedo());
        console.log("Num = " + this.num.getNum());
        console.log("Stack size = " + this.tps.getSize());
        console.log("Redo size = " + this.tps.getRedoSize());
        console.log("Undo size = " + this.tps.getUndoSize());
    }

    /*
    // THESE ARE TO HELP WITH I/O
    static Scanner input = new Scanner(System.in);
    static PrintStream out = System.out;

    /**
     * This runs our demo program. Note that it presents a 
     * menu, retrieves the input, and executes the selected
     * behavior.
     * 
     * @param args Not used in this demo.
     */
    /*
    public static void main(String[] args) {
        // LOOP FLAG VARIABLE
        boolean keepGoing = true;
        while (keepGoing) {
            // DISPLAY THE CURRENT TPS
            out.println("CURRENT jTPS:");
            out.println(tps);
            out.println();

            // DISPLAY NUM
            out.println("num is " + num.getNum());
            out.println();

            // DISPLAY THE MENU
            out.println("ENTER A SELECTION");
            out.println("1) Add a Transaction");
            out.println("2) Undo a Transaction");
            out.println("3) Redo a Transaction");
            out.println("4) Clear All Transactions");
            out.println("5) Reset Num and Transactions");
            out.print("-");

            // GET THE USER SELECTION
            String entry = input.nextLine();

            // ADD AND EXECUTE A TRANSACTION
            if (entry.startsWith("1")) {
                System.out.print("\nEnter an amount to add: ");
                entry = input.nextLine();
                int amountToAdd = Integer.parseInt(entry);
                jTPS_Transaction transaction = new AddToNum_Transaction(num, amountToAdd);
                tps.addTransaction(transaction);
            }
            // UNDO A TRANSACTION
            else if (entry.startsWith("2")) {
                tps.undoTransaction();
            }
            // REDO A TRANSACTION
            else if (entry.startsWith("3")) {
                tps.doTransaction();
            }
            // CLEAR ALL TRANSACTIONS
            else if (entry.startsWith("4")) {
                tps.clearAllTransactions();
            }
            // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
            else if (entry.startsWith("5")) {
                tps.clearAllTransactions();
                num.setNum(0);
            }
            // QUIT
            else if (entry.startsWith("Q")) {
                keepGoing = false;
            }
        }
        System.out.println("GOODBYE");
    }
    */
}
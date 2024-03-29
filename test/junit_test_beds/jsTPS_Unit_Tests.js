// package junit_test_beds;

// import demo.AddToNum_Transaction;
// import AddToNum_Transaction from '../AddToNum_Transaction';
// import demo.AndMask_Transaction;
// import AndMask_Transaction from '../AndMask_Transaction';
// import demo.Num;
// import Num from '../Num';
// import jtps.jTPS;
// import org.junit.Assert;
// import org.junit.Test;

/**
 * jsTPS_Unit_Tests.js
 * 
 * This file provides a test bed for the jaTPS framework.
 * 
 * @author McKilla Gorilla
 * @version 2.0
 */
class jsTPS_Unit_Tests {
    // like java
    assertEquals(a, b) {
        return a == b;
    }

    stringAssertEquals(a, b, varA) {
        return varA + " is equal to " + b + ": " + this.assertEquals(a, b);
    }

    assertFalse(a) {
        return !a;
    }

    stringAssertFalse(a, varA) {
        return varA + " is false: " + this.assertFalse(a);
    }

    assertTrue(a) {
        return a;
    }

    stringAssertTrue(a, varA) {
        return varA + " is true: " + this.assertTrue(a);
    }

    /*
    stringAssertEquals(varNameA, varNameB, assertEquals) {
        return varNameA + " is equal to " + varNameB + ": " + assertEquals;
    }
    */

    /**
     * This JUnit test is for testing the adding of transactions.
     */
    // @Test
    testAdd() {
        let parent = document.getElementById("unit_tests");
        let testDiv = document.createElement("div")
        testDiv.id = "test_add";
        parent.appendChild(testDiv);
        testDiv.innerHTML = "<h2>Test Add:</h2>";
        var test0 = document.createElement("p");
        testDiv.appendChild(test0);

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        var t0 = document.createTextNode(
            this.stringAssertEquals(0, num.getNum(), "Num")
        );
        test0.appendChild(t0);
        // this.assertEquals(0, num.num); // Assert.assertEquals(0, num.getNum());
        // ---

        let test1 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        var t1 =
            "<strong>Add 5 Transaction</strong><br>" +
            this.stringAssertEquals(5, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(1, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(1, tps.getUndoSize(), "Undo size")
            ;
        test1.innerHTML = t1;
        testDiv.appendChild(test1);
        /*
        // ADD 5 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        this.assertEquals(5, num.getNum());
        this.assertEquals(1, tps.getSize());
        this.assertEquals(0, tps.getRedoSize());
        this.assertEquals(1, tps.getUndoSize());
        */

        let test2 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        var t2 =
            "<strong>Add 10 Transaction</strong><br>" +
            this.stringAssertEquals(15, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(2, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(2, tps.getUndoSize(), "Undo size")
            ;
        test2.innerHTML = t2;
        testDiv.appendChild(test2);
        /*
        // ADD 10 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        Assert.assertEquals(15, num.getNum());
        Assert.assertEquals(2, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(2, tps.getUndoSize());
        */

        let test3 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        var t3 =
            "<strong>Add 20 Transaction</strong><br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test3.innerHTML = t3;
        testDiv.appendChild(test3);
        /*
        // ADD 15 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */
    }

    /**
     * 
     */
    // @Test
    testAndMask() {
        let parent = document.getElementById("unit_tests");
        let testDiv = document.createElement("div")
        testDiv.id = "test_andMask";
        parent.appendChild(testDiv);
        testDiv.innerHTML = "<h2>Test AndMask:</h2>";
        var test0 = document.createElement("p");
        testDiv.appendChild(test0);

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        var t0 = document.createTextNode(
            this.stringAssertEquals(0, num.getNum(), "Num")
        );
        test0.appendChild(t0);
        /*
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(0, num.getNum());
        */

        let test1 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 12));
        tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));
        var t1 =
            "<strong>Add 12 Transaction, AddMask 4 Transaction</strong><br>" +
            this.stringAssertEquals(4, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(2, tps.getSize(), "Stack size")
            ;
        test1.innerHTML = t1;
        testDiv.appendChild(test1);
        /*
        // ADD 5 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 12));
        tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));
        Assert.assertEquals(4, num.getNum());
        Assert.assertEquals(2, tps.getSize());
        */

        let test2 = document.createElement("p");
        tps.undoTransaction();
        var t2 =
            "<strong>Undo Transaction</strong><br>" +
            this.stringAssertEquals(12, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(2, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(1, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(1, tps.getUndoSize(), "Undo size")
            ;
        test2.innerHTML = t2;
        testDiv.appendChild(test2);
        /*
        tps.undoTransaction();
        Assert.assertEquals(12, num.getNum());
        Assert.assertEquals(2, tps.getSize());
        Assert.assertEquals(1, tps.getRedoSize());
        Assert.assertEquals(1, tps.getUndoSize());
        */
    }

    testOrMask() {
        // this test was originally empty

        let parent = document.getElementById("unit_tests");
        let testDiv = document.createElement("div")
        testDiv.id = "test_orMask";
        parent.appendChild(testDiv);
        testDiv.innerHTML = "<h2>Test OrMask:</h2>";
        var test0 = document.createElement("p");
        testDiv.appendChild(test0);

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        var t0 = document.createTextNode(
            this.stringAssertEquals(0, num.getNum(), "Num")
        );
        test0.appendChild(t0);
        /*
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(0, num.getNum());
        */

        let test1 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 16));
        tps.addTransaction(new OrMask_Transaction(num, num.getNum(), 7));
        var t1 =
            "<strong>Add 16 Transaction, OrMask 7 Transaction</strong><br>" +
            this.stringAssertEquals(23, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(2, tps.getSize(), "Stack size")
            ;
        test1.innerHTML = t1;
        testDiv.appendChild(test1);
        /*
        15 bit or 7 = 23
        */

        let test2 = document.createElement("p");
        tps.undoTransaction();
        var t2 =
            "<strong>Undo Transaction</strong><br>" +
            this.stringAssertEquals(16, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(2, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(1, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(1, tps.getUndoSize(), "Undo size")
            ;
        test2.innerHTML = t2;
        testDiv.appendChild(test2);
        /*
        tps.undoTransaction();
        Assert.assertEquals(12, num.getNum());
        Assert.assertEquals(2, tps.getSize());
        Assert.assertEquals(1, tps.getRedoSize());
        Assert.assertEquals(1, tps.getUndoSize());
        */
    }

    /**
     * This JUnit test is for testing the undoing of transactions.
     */
    // @Test
    testUndo() {
        let parent = document.getElementById("unit_tests");
        let testDiv = document.createElement("div")
        testDiv.id = "test_undo";
        parent.appendChild(testDiv);
        testDiv.innerHTML = "<h2>Test Undo:</h2>";
        // var test0 = document.createElement("p");
        // testDiv.appendChild(test0);

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        let test0 = document.createElement("p");
        var t0 =
            this.stringAssertEquals(0, num.getNum(), "Num") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has a redo transaction")
            ;
        test0.innerHTML = t0;
        testDiv.appendChild(test0);
        /*
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(num.getNum(), 0);
        Assert.assertFalse(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        */

        let test1 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        var t1 =
            "<strong>Add 5 Transaction, Add 10 Transaction, Add 20 Transaction</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test1.innerHTML = t1;
        testDiv.appendChild(test1);
        /*
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test2 = document.createElement("p");
        tps.undoTransaction();
        var t2 =
            "<strong>Undo Transaction</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertTrue(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(15, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(1, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(2, tps.getUndoSize(), "Undo size")
            ;
        test2.innerHTML = t2;
        testDiv.appendChild(test2);
        /*
        // UNDO A TRANSACTION
        tps.undoTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(15, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(1, tps.getRedoSize());
        Assert.assertEquals(2, tps.getUndoSize());
        */

        let test3 = document.createElement("p");
        tps.undoTransaction();
        var t3 =
            "<strong>Undo Transaction</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertTrue(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(5, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(2, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(1, tps.getUndoSize(), "Undo size")
            ;
        test3.innerHTML = t3;
        testDiv.appendChild(test3);
        /*
        // UNDO ANOTHER
        tps.undoTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(5, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(2, tps.getRedoSize());
        Assert.assertEquals(1, tps.getUndoSize());
        */

        let test4 = document.createElement("p");
        tps.undoTransaction();
        var t4 =
            "<strong>Undo Transaction</strong><br>" +
            this.stringAssertFalse(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertTrue(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(0, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(3, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(0, tps.getUndoSize(), "Undo size")
            ;
        test4.innerHTML = t4;
        testDiv.appendChild(test4);
        /*
        // AND ANOTHER
        tps.undoTransaction();
        Assert.assertFalse(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(0, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(3, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());
        */

        let test5 = document.createElement("p");
        tps.undoTransaction();
        var t5 =
            "<strong>Undo Transaction</strong><br>" +
            this.stringAssertFalse(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertTrue(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(0, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(3, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(0, tps.getUndoSize(), "Undo size")
            ;
        test5.innerHTML = t5;
        testDiv.appendChild(test5);
        /*
         // WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING
         tps.undoTransaction();
         Assert.assertFalse(tps.hasTransactionToUndo());
         Assert.assertTrue(tps.hasTransactionToRedo());
         Assert.assertEquals(0, num.getNum());
         Assert.assertEquals(3, tps.getSize());
         Assert.assertEquals(3, tps.getRedoSize());
         Assert.assertEquals(0, tps.getUndoSize());
         */
    }

    /**
     * This JUnit test is for testing the redoing of transactions.
     */
    // @Test
    testRedo() {
        let parent = document.getElementById("unit_tests");
        let testDiv = document.createElement("div")
        testDiv.id = "test_redo";
        parent.appendChild(testDiv);
        testDiv.innerHTML = "<h2>Test Redo:</h2>";
        // var test0 = document.createElement("p");
        // testDiv.appendChild(test0);

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        let test0 = document.createElement("p");
        var t0 = this.stringAssertEquals(0, num.getNum(), "Num");
        test0.innerHTML = t0;
        testDiv.appendChild(test0);
        /*
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(num.getNum(), 0);
        */

        let test1 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        var t1 =
            "<strong>Add 5 Transaction, Add 10 Transaction, Add 20 Transaction</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test1.innerHTML = t1;
        testDiv.appendChild(test1);
        /*
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test2 = document.createElement("p");
        tps.undoTransaction();
        tps.doTransaction();
        var t2 =
            "<strong>Undo Transaction, Redo Transaction</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test2.innerHTML = t2;
        testDiv.appendChild(test2);
        /*
        // UNDO A TRANSACTION AND THEN REDO IT
        tps.undoTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test3 = document.createElement("p");
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        var t3 =
            "<strong>2 Undo Transactions, 2 Redo Transactions</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test3.innerHTML = t3;
        testDiv.appendChild(test3);
        /*
        // UNDO TWO TRANSACTIONS AND THEN REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test4 = document.createElement("p");
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        var t4 =
            "<strong>3 Undo Transactions, 3 Redo Transactions</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test4.innerHTML = t4;
        testDiv.appendChild(test4);
        /*
        // UNDO ALL THREE TRANSACTIONS AND REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test5 = document.createElement("p");
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        var t5 =
            "<strong>3 Undo Transactions, 2 Redo Transactions</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertTrue(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(15, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(1, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(2, tps.getUndoSize(), "Undo size")
            ;
        test5.innerHTML = t5;
        testDiv.appendChild(test5);
        /*
        // UNDO THREE TRANSACTIONS AND REDO TWO
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertTrue(tps.hasTransactionToRedo());
        Assert.assertEquals(15, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(1, tps.getRedoSize());
        Assert.assertEquals(2, tps.getUndoSize());
        */

        let test6 = document.createElement("p");
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        var t6 =
            "<strong>3 Undo Transactions, 4 Redo Transactions</strong><br>" +
            this.stringAssertTrue(tps.hasTransactionToUndo(), "Stack has an undo transaction") + "<br>" +
            this.stringAssertFalse(tps.hasTransactionToRedo(), "Stack has an redo transaction") + "<br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test6.innerHTML = t6;
        testDiv.appendChild(test6);
        /*
        // UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH
        // SHOULD NOT PRODUCE AN ERROR BUT THE LAST
        // REDO SHOULD DO NOTHING
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert.assertTrue(tps.hasTransactionToUndo());
        Assert.assertFalse(tps.hasTransactionToRedo());
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */
    }

    /**
     * This JUnit test is for testing clearing of transactions.
     */
    // @Test
    testClear() {
        let parent = document.getElementById("unit_tests");
        let testDiv = document.createElement("div")
        testDiv.id = "test_clear";
        parent.appendChild(testDiv);
        testDiv.innerHTML = "<h2>Test Clear:</h2>";
        // var test0 = document.createElement("p");
        // testDiv.appendChild(test0);

        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();

        let test0 = document.createElement("p");
        var t0 = this.stringAssertEquals(0, num.getNum(), "Num");
        test0.innerHTML = t0;
        testDiv.appendChild(test0);
        /*
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.assertEquals(num.getNum(), 0);
        */

        let test1 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        var t1 =
            "<strong>Add 5 Transaction, Add 10 Transaction, Add 20 Transaction</strong><br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test1.innerHTML = t1;
        testDiv.appendChild(test1);
        /*
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test2 = document.createElement("p");
        tps.clearAllTransactions();
        var t2 =
            "<strong>Clear Transaction</strong><br>" +
            this.stringAssertEquals(35, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(0, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(0, tps.getUndoSize(), "Undo size")
            ;
        test2.innerHTML = t2;
        testDiv.appendChild(test2);
        /*
        // CLEAR ALL THE TRANSACTIONS
        tps.clearAllTransactions();
        Assert.assertEquals(35, num.getNum());
        Assert.assertEquals(0, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());
        */

        let test3 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        var t3 =
            "<strong>Add 5 Transaction, Add 10 Transaction, Add 20 Transaction</strong><br>" +
            this.stringAssertEquals(70, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test3.innerHTML = t3;
        testDiv.appendChild(test3);
        /*
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(70, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */

        let test4 = document.createElement("p");
        tps.clearAllTransactions();
        var t4 =
            "<strong>Clear Transaction</strong><br>" +
            this.stringAssertEquals(70, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(0, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(0, tps.getUndoSize(), "Undo size")
            ;
        test4.innerHTML = t4;
        testDiv.appendChild(test4);
        /*
        // CLEAR THEM ALL OUT AGAIN
        tps.clearAllTransactions();
        Assert.assertEquals(70, num.getNum());
        Assert.assertEquals(0, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(0, tps.getUndoSize());
        */

        let test5 = document.createElement("p");
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        var t5 =
            "<strong>Add 5 Transaction, Add 10 Transaction, Add 20 Transaction</strong><br>" +
            this.stringAssertEquals(105, num.getNum(), "Num") + "<br>" +
            this.stringAssertEquals(3, tps.getSize(), "Stack size") + "<br>" +
            this.stringAssertEquals(0, tps.getRedoSize(), "Redo size") + "<br>" +
            this.stringAssertEquals(3, tps.getUndoSize(), "Undo size")
            ;
        test5.innerHTML = t5;
        testDiv.appendChild(test5);
        /*
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.assertEquals(105, num.getNum());
        Assert.assertEquals(3, tps.getSize());
        Assert.assertEquals(0, tps.getRedoSize());
        Assert.assertEquals(3, tps.getUndoSize());
        */
    }
}
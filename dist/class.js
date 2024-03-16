"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount entered");
        }
        this._balance = amount;
    }
    get_balance() {
        return this._balance;
    }
    set_balance(balance) {
        this._balance = balance;
    }
}
let account = new Account(1, "Rezwan", 0);
account.deposit(100000033);
let account2 = new Account(2, 'Natasa', 22001999);
account2.set_balance(22);
console.log(account2.get_balance());

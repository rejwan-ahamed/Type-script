"use strict";
class UserAccount {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    get_balance() {
        return this._balance;
    }
    set_balance(balance) {
        this._balance = balance;
    }
}
let user_account_1 = new UserAccount(1, 'REZWAN', 30099944);
user_account_1.name = 'A';
console.log(user_account_1.name);

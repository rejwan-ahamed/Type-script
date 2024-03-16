class UserAccount {
    constructor(public readonly id: number,
        public name: string,
        private _balance: number) {
    }

    get_balance(): number {
        return this._balance;
    }

    set_balance(balance: number): void {
        this._balance = balance;
    }
}

// creating an object
let user_account_1 = new UserAccount(1, 'REZWAN', 300_999_44)
user_account_1.name = 'A'
console.log(user_account_1.name)
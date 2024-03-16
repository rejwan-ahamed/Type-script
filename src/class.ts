// class in TS
class Account {
    id: number;
    owner: string;
    private _balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount entered");
        }
        this._balance = amount;
    }

    get_balance(): number {
        return this._balance
    }
    set_balance(balance: number): void {
        this._balance = balance
    }
}

// creating new object using the class

let account = new Account(1, "Rezwan", 0);
account.deposit(100_000033);

let account2 = new Account(2, 'Natasa', 22_001_999);
account2.set_balance(22);

console.log(account2.get_balance());
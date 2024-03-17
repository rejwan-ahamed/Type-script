/* 
make a class
use the class make a inheritance
static class
generic class
generic function
generic interface
*/


class User {
    constructor(public userId: number, public userName: string, private _balance: number) { }

    // getter
    get balance(): number {
        return this._balance;
    }

    set set_balance(balance: number) {
        this._balance = balance;
    }
}

// creating a user using the class
let user_1 = new User(1, 'REZWAN', 20_000_000);

// extending the class with inheritance
class BusinessAccount extends User {
    constructor(public business_name: string, public employee_number: number, public revenue: number, userId: number, userName: string, balance: number) {
        super(userId, userName, balance);
    }
}

let businessAccount_1 = new BusinessAccount('Hallo', 201, 200_999_213, 2, 'Histeria', 200_99);
console.log(businessAccount_1);

class Assets extends BusinessAccount {
    constructor(public assetsCounts: number, business_name: string, employee_number: number, revenue: number, userId: number, userName: string, balance: number) {
        super(business_name, employee_number, revenue, userId, userName, balance);
    }

}

// using static class
class Rides {
    private static _activeRides = 0;

    static get activeRides(): number {
        return this._activeRides;
    }

    start() {
        Rides._activeRides++;
    }

    stop() {
        Rides._activeRides--;
    }
}

let rider_1 = new Rides();
rider_1.start()
rider_1.start()
console.log(Rides.activeRides)


// generic class
class KeyValuePair<K, V>{
    constructor(public key: K, public value: V) { }
}

let pair1 = new KeyValuePair(1, 2);

// generic function
function concatenation<T, V>(value1: T, value2: V) {
    return (`${value1}+ ${value2}`);
}

let numberType = concatenation(1, 3);
let stringType = concatenation('r', 't');

// generic interface
interface Result<T> {
    data: T | null;
    error: string | null;
}

function dataFetch<T>(url: string, limit: number): Result<T> {
    return { data: null, error: null };
}

interface User {
    userName: string;
}

interface Product {
    userName: number;
}

let userResult = dataFetch<User>('google.com', 3);
console.log(userResult.data?.Username)








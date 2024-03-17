"use strict";
class User {
    constructor(userId, userName, _balance) {
        this.userId = userId;
        this.userName = userName;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set set_balance(balance) {
        this._balance = balance;
    }
}
let user_1 = new User(1, 'REZWAN', 20000000);
class BusinessAccount extends User {
    constructor(business_name, employee_number, revenue, userId, userName, balance) {
        super(userId, userName, balance);
        this.business_name = business_name;
        this.employee_number = employee_number;
        this.revenue = revenue;
    }
}
let businessAccount_1 = new BusinessAccount('Hallo', 201, 200999213, 2, 'Histeria', 20099);
console.log(businessAccount_1);
class Assets extends BusinessAccount {
    constructor(assetsCounts, business_name, employee_number, revenue, userId, userName, balance) {
        super(business_name, employee_number, revenue, userId, userName, balance);
        this.assetsCounts = assetsCounts;
    }
}
class Rides {
    static get activeRides() {
        return this._activeRides;
    }
    start() {
        Rides._activeRides++;
    }
    stop() {
        Rides._activeRides--;
    }
}
Rides._activeRides = 0;
let rider_1 = new Rides();
rider_1.start();
rider_1.start();
console.log(Rides.activeRides);

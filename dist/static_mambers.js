"use strict";
class Ride {
    start() {
        Ride._activeRides++;
    }
    end() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride;
ride1.start();
let ride2 = new Ride;
ride1.start();
ride2.end();
let ride3 = new Ride;
ride3.start();
let ride4 = new Ride;
ride4.start();
console.log(Ride.activeRides);

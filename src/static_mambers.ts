class Ride {
    /* here static is a special type of modifier in TS OOP that belongs to a class and use only one memory allocation 
    and it dose not create any references
    */
    private static _activeRides: number = 0;

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

let ride1 = new Ride;
ride1.start()

let ride2 = new Ride;
ride1.start()
ride2.end()

let ride3 = new Ride;
ride3.start()

let ride4 = new Ride;
ride4.start()


console.log(Ride.activeRides)
class EAppliance {
    constructor(name, volt) {
        this.name = name;
        this.volt = volt;
    }

    switcher(status) {
        if (status === "On") {
            status = "Off";
            console.log(this.name + " is " + status);
        }
        else
            status = "On";
        console.log(this.name + " is " + status);
    }

}

class Lamp extends EAppliance {
    constructor(name, volt, brand) {
        super(name, volt);
        this.brand = brand;
    }
}

class PC extends EAppliance {
    constructor(name, brand, volt) {
        super(name, volt);
        this.brand = brand;
    }
}

let tableLamp = new Lamp("Table lamp", "Apple", 12);

let homePC = new PC("home PC", "AMD", 120);

tableLamp.switcher();

homePC.switcher();

console.log(homePC)
console.log(tableLamp)

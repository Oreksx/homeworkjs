function EAppliance(name, volt) {
    this.name = name;
    this.volt = volt;
    this.status = "Off";
}

EAppliance.prototype.switcher = function(status) {
    if (status === "On") {
        status = "Off";
        console.log(this.name + " is " + status);
    }
    else
        status = "On";
        console.log(this.name + " is " + status);
}

function Lamp(name, brand, volt) {
    this.name = name;
    this.brand = brand;
    this.volt = volt;
}

Lamp.prototype = new EAppliance();

function PC(name, brand, volt) {
    this.name = name;
    this.brand = brand;
    this.volt = volt;
}

PC.prototype = new EAppliance();

let tableLamp = new Lamp("Table lamp", "Apple", 12);

let homePC = new PC("home PC", "AMD", 120);

tableLamp.switcher();

homePC.switcher();

console.log(homePC)
console.log(tableLamp)

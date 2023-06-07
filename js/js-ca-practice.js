

//moccamaster.js

const coffemaker = {
    brand: "moccamaster"
    volume: 1.25
    price: 2199
    weight: 3.9
    on: false
    color: ["black", "white", "green", "blue", "grey", "red"] 
    ignition: function () {
        coffemaker.on = !coffemaker.on
    }
}

//read.me # Coffemaker

//This object has the following properties:

// - Brand (string), is the manufactor of the object
// - Volume (number), is the capacity in litres
// - Price (number), is what the object costs in Norwegian kroners
// - Weight (number), is what the object weights in kilograms
// - On (boolian), when boolian "on" is false, the coffee maker is  not turned on
// - Color (array), is the different colours the coffee maker is made in
// - Ignition (function), the coffee maker can be turned on or off


const television = {
    brand: "samsung"
    size: 32
    weight: 
    on: false
    color: ["black", "silver", "white"]
    chanel: ["tv3", "tv2", "nrk", "disney", "discovery"]
    ignition: function () {
        television.on = !television.on
    }
}
// distanceConversions.js

const distanceConversions = {
    meters: {
        meters: 1,
        kilometers: 0.001,
        centimeters: 100,
        millimeters: 1000,
        miles: 0.000621371,
        yards: 1.09361,
        feet: 3.28084,
        nauticalMiles: 0.000539957,
        rods: 1.98
    },
    kilometers: {
        meters: 1000,
        kilometers: 1,
        centimeters: 100000,
        millimeters: 1000000,
        miles: 0.621371,
        yards: 1093.61,
        feet: 3280.84,
        nauticalMiles: 0.539957,
        rods: 1968.5
    },
    centimeters: {
        meters: 0.01,
        kilometers: 0.00001,
        centimeters: 1,
        millimeters: 10,
        miles: 0.00000621371,
        yards: 0.0109361,
        feet: 0.0328084,
        nauticalMiles: 0.00000539957,
        rods: 0.0198
    },
    millimeters: {
        meters: 0.001,
        kilometers: 0.000001,
        centimeters: 0.1,
        millimeters: 1,
        miles: 0.000000621371,
        yards: 0.00109361,
        feet: 0.00328084,
        nauticalMiles: 0.000000539957,
        rods: 0.00198
    },
    miles: {
        meters: 1609.34,
        kilometers: 1.60934,
        centimeters: 160934,
        millimeters: 1609344,
        miles: 1,
        yards: 1760,
        feet: 5280,
        nauticalMiles: 0.868976,
        rods: 3200.5
    },
    yards: {
        meters: 0.9144,
        kilometers: 0.0009144,
        centimeters: 91.44,
        millimeters: 914.4,
        miles: 0.000568182,
        yards: 1,
        feet: 3,
        nauticalMiles: 0.000293067,
        rods: 1.1
    },
    feet: {
        meters: 0.3048,
        kilometers: 0.0003048,
        centimeters: 30.48,
        millimeters: 304.8,
        miles: 0.000189394,
        yards: 0.333333,
        feet: 1,
        nauticalMiles: 0.000098804,
        rods: 0.366
    },
    nauticalMiles: {
        meters: 1852,
        kilometers: 1.852,
        centimeters: 185200,
        millimeters: 1852000,
        miles: 1.15078,
        yards: 2025.37,
        feet: 6076.12,
        rods: 4960
    },
    rods: {
        meters: 5.0292,
        kilometers: 0.0050292,
        centimeters: 502.92,
        millimeters: 5029.2,
        miles: 0.00314159,
        yards: 5.33333,
        feet: 16,
        nauticalMiles: 0.0027179
    }
};

module.exports = distanceConversions;

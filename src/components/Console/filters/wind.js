export default {
    direction: function (bearing) {
        const direction = [
            "NORTH",
            "NNE",
            "NE",
            "ENE",
            "EAST",
            "ESE",
            "SE",
            "SSE",
            "SOUTH",
            "SSW",
            "SW",
            "WSW",
            "WEST",
            "WNW",
            "NW",
            "NNW"
        ];
        const val = Math.floor((bearing / 22.5) + 0.5);
        return direction[(val % 16)];
    }
}
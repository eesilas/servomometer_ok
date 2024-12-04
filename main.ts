let temp = 0
basic.showIcon(IconNames.SmallHeart)
pins.servoWritePin(AnalogPin.P0, 0)
basic.pause(500)
pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    temp = input.temperature()
    if (temp < 20) {
        temp = 20
    } else if (temp > 40) {
        temp = 40
    } else {
        basic.showString("" + (input.temperature()))
        pins.servoWritePin(AnalogPin.P0, pins.map(
        temp,
        20,
        40,
        0,
        180
        ))
    }
})
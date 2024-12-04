let temp = 0
microIoT.microIoT_initDisplay()
basic.showIcon(IconNames.SmallHeart)
pins.servoWritePin(AnalogPin.P0, 0)
basic.pause(500)
pins.servoWritePin(AnalogPin.P0, 180)
let scale = 180
basic.forever(function () {
    temp = input.temperature()
    if (temp < 20) {
        temp = 20
    } else if (temp > 40) {
        temp = 40
    } else {
        basic.showString("" + (input.temperature()))
        microIoT.microIoT_showUserNumber(1, input.temperature())
        pins.servoWritePin(AnalogPin.P0, pins.map(
        temp,
        20,
        40,
        180,
        0
        ))
    }
})

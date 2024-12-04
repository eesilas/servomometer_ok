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
        microIoT.microIoT_showUserNumber(0, input.temperature())
        pins.servoWritePin(AnalogPin.P0, pins.map(
        temp,
        20,
        40,
        180,
        0
        ))
        if (input.temperature() >= 28) {
            microIoT.microIoT_setIndexColor(PIN.P15, 0, 3, 0xff0000)
        } else {
            microIoT.microIoT_setIndexColor(PIN.P15, 0, 3, 0x0000ff)
        }
    }
})

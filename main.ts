let stage_index = 0
let I5 = 0
let I4 = 0
let I3 = 0
let I2 = 0
let I1 = 0
led.enable(false)
let stage_list = [
"l",
"r",
"r",
"s",
"l",
"l",
"s",
"r",
"r",
"s",
"l",
"l",
"r",
"f"
]
basic.pause(10000)
basic.forever(function () {
    I1 = pins.digitalReadPin(DigitalPin.P1)
    I2 = pins.digitalReadPin(DigitalPin.P2)
    I3 = pins.digitalReadPin(DigitalPin.P3)
    I4 = pins.digitalReadPin(DigitalPin.P4)
    I5 = pins.digitalReadPin(DigitalPin.P5)
    if (stage_index == 13) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -150,
        SuperBit.enMotors.M3,
        -150
        )
        basic.pause(300)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
        game.pause()
    }
})
basic.forever(function () {
    if (stage_list[stage_index] == "l") {
        if (I1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            100,
            SuperBit.enMotors.M3,
            100
            )
            basic.pause(100)
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            0
            )
            basic.pause(600)
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -100,
            SuperBit.enMotors.M3,
            -100
            )
            basic.pause(100)
            stage_index = stage_index + 1
        } else if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -50
            )
            basic.pause(100)
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -50,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -150
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            150,
            SuperBit.enMotors.M3,
            150
            )
        }
    }
})
basic.forever(function () {
    if (stage_list[stage_index] == "r") {
        if (I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            100,
            SuperBit.enMotors.M3,
            100
            )
            basic.pause(100)
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -255
            )
            basic.pause(700)
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -100,
            SuperBit.enMotors.M3,
            -100
            )
            basic.pause(100)
            stage_index = stage_index + 1
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -50,
            SuperBit.enMotors.M3,
            -150
            )
            basic.pause(100)
        } else if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -50
            )
        } else if (I3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            0
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            150,
            SuperBit.enMotors.M3,
            150
            )
        }
    }
})
basic.forever(function () {
    if (stage_list[stage_index] == "s") {
        if (I1 == 0 && I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -150
            )
            basic.pause(150)
            stage_index = stage_index + 1
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -50,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -50
            )
        } else if (I3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            0
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            150,
            SuperBit.enMotors.M3,
            150
            )
        }
    }
})

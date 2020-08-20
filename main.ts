radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && player01 == 1) {
        basic.showString("DRAW")
        basic.pause(1000)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    player01 = 1
    radio.sendNumber(1)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    player01 = 0
})
input.onButtonPressed(Button.AB, function () {
    player01 = 3
    radio.sendNumber(3)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    player01 = 2
    radio.sendNumber(2)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let player01 = 0
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)

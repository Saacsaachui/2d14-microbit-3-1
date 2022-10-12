input.onButtonPressed(Button.A, function () {
    Bear = 9
    basic.showNumber(Bear)
    basic.pause(1000)
    while (Bear > 0) {
        Bear += -1
        basic.showNumber(Bear)
        basic.pause(1000)
    }
    if (Bear <= 0) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Bear = -1
})
let Bear = 0
basic.showString("2D14Isaac")

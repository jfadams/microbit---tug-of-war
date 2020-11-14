input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onGesture(Gesture.ScreenDown, function () {
    rope = 2
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 0
rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("A WINS!")
    } else if (rope > 4) {
        basic.showString("B WINS!")
    }
})

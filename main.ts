input.onGesture(Gesture.Shake, function () {
    if (number == 0) {
        basic.showString("YES")
    } else if (number == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
})
let number = 0
basic.showString("ASK A QUESTION")
number = randint(0, 2)
basic.forever(function () {
	
})

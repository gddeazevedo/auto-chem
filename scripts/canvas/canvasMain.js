// const PRE = 5
// const POS = 'simple'
//  const canvas = document.getElementById('canvas-screen')
//  drawCanvas(canvas.getContext('2d'))
function drawCanvas(pre) {

    ctx.beginPath();
    valueX = 50
    valueY = 200
    ctx.moveTo(valueX, valueY)
    for (let indexI = 0; indexI < pre - 1; indexI++) {
        if (indexI % 2 === 0)
            a = drawLineDown(ctx, valueX, valueY)
        else
            a = drawLineUp(ctx, a.x, a.y)

        valueX = a.x
        valueY = a.y

    }

    ctx.stroke()
    ctx.closePath()
}
function clearCanvas() {
    canvas = document.getElementById('canvas-screen')
    ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawLineDown(ctx, valueX, valueY) {
    valueX += 100
    valueY += 100
    ctx.lineTo(valueX, valueY)
    return {
        x: valueX,
        y: valueY
    }
}
function drawLineUp(ctx, valueX, valueY) {
    valueX += 100
    valueY -= 100
    ctx.lineTo(valueX, valueY)
    return {
        x: valueX,
        y: valueY
    }
}
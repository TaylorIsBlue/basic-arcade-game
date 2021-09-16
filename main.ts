
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, other) {
    info.changeScoreBy(1)
    other.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})

scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`h`, SpriteKind.Player)
controller.moveSprite(mySprite)
let pizza = sprites.create(assets.image`pizza`, SpriteKind.Food)
let cooldown = 10

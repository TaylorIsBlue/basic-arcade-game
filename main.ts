let cooldown = 10
let mySprite =sprites.create(assets.image`h`, SpriteKind.Player)
let cake = sprites.create(assets.image`pizza`, SpriteKind.Food)
controller.moveSprite(mySprite)
scene.setBackgroundColor(7)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, other) {
    info.changeScoreBy(1)
    music.powerUp.play(music.volume())
    if (info.score() == 15) scene.cameraShake()
    other.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(cooldown)
})






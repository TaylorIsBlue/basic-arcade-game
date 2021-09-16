
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, other) {
    info.changeScoreBy(1)
    music.baDing.play()
    other.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})

scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`h`, SpriteKind.Player)
controller.moveSprite(mySprite)
let cake = sprites.create(assets.image`pizza`, SpriteKind.Food)
let cooldown = 10

if(info.score() == 15) {
    scene.cameraShake()
}

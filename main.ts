let cooldown = 10
let mySprite = sprites.create(assets.image`h`, SpriteKind.Player)
let cake = sprites.create(assets.image`pizza`, SpriteKind.Food)

controller.moveSprite(mySprite)
createAnimations()
scene.setBackgroundColor(7)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, other) {
    info.changeScoreBy(1)
    music.powerUp.play(music.volume())
    if (info.score() == 15) scene.cameraShake()
    other.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(cooldown)
})


function createAnimations() {
    characterAnimations.loopFrames(
        mySprite,
        [assets.image`wa`, assets.image`waa`, assets.image`waaaaaaa`, assets.image`wwwwwwwwww`],
        100,
        characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
        mySprite,
        [assets.image`right`, assets.image`right2`],
        100,
        characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
        mySprite,
        [assets.image`front`, assets.image`front2`, assets.image`front3`, assets.image`front4`],
        100,
        characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
        mySprite,
        [assets.image`left1`, assets.image`left`],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
    )
}
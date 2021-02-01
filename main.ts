controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 9 . . . . . . . . . . . 
        6 9 . . . . . . . . . . . . . . 
        . . . . 9 9 9 6 6 9 . . . . . . 
        . 9 6 . 9 6 6 9 9 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 6 9 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Boom_fly, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeLifeBy(-1)
})
let USG: Sprite = null
let projectile: Sprite = null
let Boom_fly: Sprite = null
scene.setBackgroundColor(0)
Boom_fly = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    . 1 1 1 1 . . . . . . . . . . . 
    . 4 4 9 9 9 . . . . . . . . . . 
    . 4 4 4 6 6 9 . . . . . . . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    . 1 1 1 1 4 4 4 4 4 4 4 . . . . 
    . 1 1 1 1 . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    . 1 1 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Boom_fly.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(Boom_fly, 200, 200)
game.onUpdateInterval(500, function () {
    USG = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 9 . . . . . . . . . . . . . . 
        . 9 . f f f f f f f . . . . . . 
        . 9 . f 9 9 9 9 9 f . . . . . . 
        . 9 . f f f 9 f f f . . . . . . 
        . 9 . f f f 9 f f f . . . . . . 
        . 9 . f 9 9 f 9 9 f . . . . . . 
        . 9 . f 9 9 9 9 9 f . . . . . . 
        . 9 . f f f f f f f . . . . . . 
        6 9 6 . . f f f . . . . . . . . 
        . 6 . . f . f . f . . . . . . . 
        . 6 f f . . f . . f f . . . . . 
        . 6 . . . . f . . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . . f . . . f . . . . . . . 
        `, SpriteKind.Enemy)
    USG.setVelocity(-100, 0)
    USG.left = scene.screenWidth()
    USG.y = randint(0, scene.screenHeight())
    USG.setFlag(SpriteFlag.AutoDestroy, true)
})

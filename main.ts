controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    velocidad_proyectil_X = 0
    velocidad_proyectil_Y = 120
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon bajar`,
    500,
    false
    )
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon bajar`,
    500,
    true
    )
})
function intro () {
	
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    velocidad_proyectil_X = 120
    velocidad_proyectil_Y = 0
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon derecha`,
    500,
    false
    )
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon derecha`,
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    velocidad_proyectil_X = -120
    velocidad_proyectil_Y = 0
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon izquierda`,
    500,
    false
    )
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon izquierda`,
    500,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar.value > 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`bola de fuego`, DragonAzul, velocidad_proyectil_X, velocidad_proyectil_Y)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
        statusbar.value += -1
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    }
})
function inicio () {
    music.play(music.createSong(assets.song`Cancion intro`), music.PlaybackMode.LoopingInBackground)
    pause(5000)
    adventure.addToTextlog("you just woke up in a cave")
    pause(1000)
    adventure.addToTextlog("you scratch your wings with a rock")
    pause(1000)
    adventure.addToTextlog("your wings???")
    pause(1000)
    adventure.addToTextlog("yes because you are a dragon")
    pause(1000)
    adventure.addToTextlog("exactly a Blue Dragon: one of the best dragon espieces of the ancient Japan")
    pause(1000)
    adventure.addToTextlog("In a near rock this is written:")
    adventure.clearTextLog()
    pause(1000)
    adventure.addToTextlog("You have been sleeping for 1000 years ")
    pause(1000)
    adventure.addToTextlog("A good nap,huh?")
    pause(1000)
    adventure.addToTextlog("you were fighting against the red spirits that tried to extinguish your spice, the blue dragons")
    pause(1000)
    adventure.addToTextlog("then I decided to put you on a temporal sleep to protecting you")
    pause(1000)
    adventure.addToTextlog("but it lasted more than I expected")
    pause(1000)
    adventure.addToTextlog("I dont know when you are going to wake but I will be death for that moment")
    pause(1000)
    adventure.addToTextlog("I write this to you to show that there is one last hope ")
    pause(1000)
    adventure.addToTextlog("In the other side of the mountains, far away from this cave there are two baby blue dragons")
    pause(1000)
    adventure.addToTextlog("you need to save them of the hands of Dekaham, the king of the red spirits, which its only objecttive is to destroy the blue dragons")
    pause(1000)
    adventure.addToTextlog("now save your specie or wait till the end of you and the blue dragons")
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    velocidad_proyectil_X = 0
    velocidad_proyectil_Y = -120
    animation.runImageAnimation(
    DragonAzul,
    assets.animation`animacion dragon arriba`,
    500,
    true
    )
})
function inicio2 () {
    DragonAzul = sprites.create(assets.image`Dragon azul`, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`nivel1`)
    DragonAzul.setPosition(80, 60)
    Render.setViewMode(ViewMode.tilemapView)
    tiles.placeOnTile(DragonAzul, tiles.getTileLocation(17, 4))
    info.setLife(5)
    controller.moveSprite(DragonAzul, 100, 100)
    scene.cameraFollowSprite(DragonAzul)
    enemigo = sprites.create(assets.image`miImagen1`, SpriteKind.Enemy)
    enemigo.follow(DragonAzul, 30)
    enemigo.setVelocity(80, 80)
    animation.runImageAnimation(
    enemigo,
    assets.animation`animacion espiritu moviendos`,
    200,
    true
    )
    statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
    statusbar.setBarSize(20, 4)
    statusbar.attachToSprite(DragonAzul, -40, 0)
    statusbar.setColor(4, 15)
    statusbar.max = 5
    statusbar.value += 5
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    music.play(music.createSoundEffect(WaveShape.Noise, 2092, 860, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    enemigo,
    assets.animation`animacion espiritu quemandose`,
    600,
    false
    )
    pause(2000)
    sprites.destroy(enemigo)
    info.changeScoreBy(1)
})
let enemigo: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let DragonAzul: Sprite = null
let velocidad_proyectil_Y = 0
let velocidad_proyectil_X = 0
scene.setBackgroundImage(assets.image`miImagen`)
inicio2()
game.onUpdateInterval(5000, function () {
    statusbar.value += 1
})

enum ActionKind {
    Walking,
    Idle,
    Jumping,
    cursor_none,
    cursor_tilledsoil,
    cursor_seed1,
    cursor_seed2,
    cursor_seed3,
    cursor_seed4,
    cursor_fertilizer,
    cursor_seed5,
    cursor_seed6,
    cursor_seed7,
    cursor_seed8
}
namespace SpriteKind {
    export const Info = SpriteKind.create()
    export const Person = SpriteKind.create()
    export const Nothing = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        itemheld += 1
        if (itemheld == 1) {
            animation.setAction(mySprite, ActionKind.cursor_tilledsoil)
        } else if (itemheld == 2) {
            animation.setAction(mySprite, ActionKind.cursor_seed1)
        } else if (itemheld == 3) {
            animation.setAction(mySprite, ActionKind.cursor_seed2)
        } else if (itemheld == 4) {
            animation.setAction(mySprite, ActionKind.cursor_seed3)
        } else if (itemheld == 5) {
            animation.setAction(mySprite, ActionKind.cursor_seed4)
        } else if (itemheld == 6) {
            animation.setAction(mySprite, ActionKind.cursor_seed5)
        } else if (itemheld == 7) {
            animation.setAction(mySprite, ActionKind.cursor_seed6)
        } else if (itemheld == 8) {
            animation.setAction(mySprite, ActionKind.cursor_seed7)
        } else if (itemheld == 9) {
            animation.setAction(mySprite, ActionKind.cursor_seed8)
        } else if (itemheld == 10) {
            animation.setAction(mySprite, ActionKind.cursor_fertilizer)
        } else if (itemheld > 10) {
            itemheld = 0
            animation.setAction(mySprite, ActionKind.cursor_none)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        if (itemheld == 1) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
                if (blockSettings.readNumber("numofhoe") > 0) {
                    blockSettings.writeNumber("numofhoe", blockSettings.readNumber("numofhoe") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile2`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 2) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed1") > 0) {
                    blockSettings.writeNumber("numofseed1", blockSettings.readNumber("numofseed1") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile3`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 2)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 3) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed2") > 0) {
                    blockSettings.writeNumber("numofseed2", blockSettings.readNumber("numofseed2") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile11`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 3)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 4) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed3") > 0) {
                    blockSettings.writeNumber("numofseed3", blockSettings.readNumber("numofseed3") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile16`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 4)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 5) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed4") > 0) {
                    blockSettings.writeNumber("numofseed4", blockSettings.readNumber("numofseed4") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile23`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 5)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 6) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed5") > 0) {
                    blockSettings.writeNumber("numofseed5", blockSettings.readNumber("numofseed5") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile26`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 6)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 7) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed6") > 0) {
                    blockSettings.writeNumber("numofseed6", blockSettings.readNumber("numofseed6") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile39`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 6)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 8) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed7") > 0) {
                    blockSettings.writeNumber("numofseed7", blockSettings.readNumber("numofseed7") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile44`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 6)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 9) {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                if (blockSettings.readNumber("numofseed8") > 0) {
                    blockSettings.writeNumber("numofseed8", blockSettings.readNumber("numofseed8") - 1)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile52`)
                    blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 6)
                    blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
                }
            }
        } else if (itemheld == 10) {
            if (blockSettings.readNumber("numoffertilizer") > 0) {
                if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile11`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile23`))) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile14`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile19`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile24`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile37`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile39`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile40`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile44`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile45`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile52`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile53`))))))))))) {
                    blockSettings.writeNumber("numoffertilizer", blockSettings.readNumber("numoffertilizer") - 1)
                    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile11`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile16`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile23`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile39`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile44`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile52`)))))))) {
                        blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 2)
                        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile6`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile14`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile16`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile19`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile23`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile24`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile39`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile40`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile44`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile45`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile52`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile53`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile37`)
                        }
                    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile14`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile19`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile24`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile37`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile40`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile45`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile53`)))))))) {
                        blockSettings.writeNumber("growth at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 3)
                        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile8`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile14`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile15`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile21`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile24`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile25`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile37`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile38`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile40`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile43`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile45`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile46`)
                        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile53`)) {
                            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile54`)
                        }
                    }
                }
            }
        } else if (itemheld == 0) {
            blockSettings.writeNumber("soil at " + mySprite.tilemapLocation().column + ", " + mySprite.tilemapLocation().row, 1)
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
                blockSettings.writeNumber("wheat", blockSettings.readNumber("wheat") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
                blockSettings.writeNumber("egg", blockSettings.readNumber("egg") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
                blockSettings.writeNumber("bacon", blockSettings.readNumber("bacon") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile25`)) {
                blockSettings.writeNumber("milk", blockSettings.readNumber("milk") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile38`)) {
                blockSettings.writeNumber("sugar", blockSettings.readNumber("sugar") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile43`)) {
                blockSettings.writeNumber("strawberry", blockSettings.readNumber("strawberry") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile46`)) {
                blockSettings.writeNumber("blueberry", blockSettings.readNumber("blueberry") + 1)
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile54`)) {
                blockSettings.writeNumber("grape", blockSettings.readNumber("grape") + 1)
            }
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile2`)
        }
    } else if (menu == 2 || menu == 3) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile34`)) {
            game.splash("SEE WHICH RECIPE?", "Please enter the name of the recipe. (No caps or spaces)")
            see_recipe = game.askForString("See recipe:", 24)
            if (see_recipe == "toast") {
                game.splash("TOAST", "Needs: 1 wheat")
            } else if (see_recipe == "omelette") {
                game.splash("OMELETTE", "Needs: 1 egg")
            } else if (see_recipe == "eggsandbacon") {
                game.splash("EGGS AND BACON", "Needs: 1 egg, 1 bacon")
            } else if (see_recipe == "goldmineeggs") {
                game.splash("GOLD MINE EGGS", "Needs: 1 egg, 1 wheat")
            } else if (see_recipe == "scrambledegg") {
                game.splash("SCRAMBLED EGG", "Needs: 1 egg, 1 milk")
            } else if (see_recipe == "butterbread") {
                game.splash("BUTTER BREAD", "Needs: 1 wheat, 1 milk")
            } else if (see_recipe == "bagel") {
                game.splash("BAGEL", "Needs: 2 wheat")
            } else if (see_recipe == "bagelsandwich") {
                game.splash("BAGEL SANDWICH", "Needs: 2 wheat, 1 egg")
            } else if (see_recipe == "bagelsandwichdx") {
                game.splash("BAGEL SANDWICH DX", "Needs: 2 wheat, 1 egg, 1 bacon")
            } else if (see_recipe == "pancake") {
                game.splash("PANCAKE", "Needs: 2 batter")
            } else if (see_recipe == "batter") {
                game.splash("BATTER (x3)", "Needs: 1 wheat, 1 egg, 1 milk, 1 sugar")
            } else if (see_recipe == "pancakedx") {
                game.splash("PANCAKE DX", "Needs: 2 batter, 1 strawberry, 1 blueberry")
            } else if (see_recipe == "berrybowl") {
                game.splash("BERRY BOWL", "Needs: 1 strawberry, 1 blueberry, 1 grape")
            } else if (see_recipe == "frenchtoast") {
                game.splash("FRENCH TOAST", "Needs: 1 batter")
            } else if (see_recipe == "blueberrybread") {
                game.splash("BLUEBERRY BREAD", "Needs: 1 wheat, 1 blueberry, 1 sugar")
            } else if (see_recipe == "strawberrybread") {
                game.splash("STRAWBERRY BREAD", "Needs: 1 wheat, 1 strawberry, 1 sugar")
            } else if (see_recipe == "raisinbread") {
                game.splash("RAISIN BREAD", "Needs: 1 wheat, 1 grape, 1 sugar")
            } else {
                game.splash("\"" + see_recipe + "\" IS NOT A VALID RECIPE", "(remember: no caps or spaces)")
            }
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile9`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
            game.setDialogFrame(img`
                ..bbbbbbbbbbbbbbbbbbbb..
                .bd111111111111111111db.
                bd1dbbbbbbbbbbbbbbbbd1db
                b1dbbbbbbbbbbbbbbbbbbd1b
                b1bd1111111111111111db1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1b111111111111111111b1b
                b1bd1111111111111111db1b
                bd1bbbbbbbbbbbbbbbbbb1db
                bbd111111111111111111dbb
                .bbbbbbbbbbbbbbbbbbbbbb.
                ..bbbbbbbbbbbbbbbbbbbb..
                `)
            game.setDialogCursor(img`
                . . . . . . . . 
                . . . . . . . . 
                . . f f f f . . 
                . . f 1 1 f . . 
                . . f 1 1 f . . 
                . . f f f f . . 
                . . . . . . . . 
                . . . . . . . . 
                `)
            game.showLongText("All Ingredients: " + convertToText(blockSettings.readNumber("wheat")) + " wheat, " + convertToText(blockSettings.readNumber("egg")) + " egg, " + convertToText(blockSettings.readNumber("bacon")) + " bacon, " + convertToText(blockSettings.readNumber("milk")) + " milk, " + convertToText(blockSettings.readNumber("sugar")) + " sugar, " + convertToText(blockSettings.readNumber("strawberry")) + " strawberry, " + convertToText(blockSettings.readNumber("blueberry")) + " blueberry, " + convertToText(blockSettings.readNumber("grape")) + " grape, " + convertToText(blockSettings.readNumber("batter")) + " batter. ", DialogLayout.Full)
            game.showLongText("All Items: " + convertToText(blockSettings.readNumber("numofseed1")) + " wheat seed, " + convertToText(blockSettings.readNumber("numofseed2")) + " egg seed, " + convertToText(blockSettings.readNumber("numofseed3")) + " bacon seed, " + convertToText(blockSettings.readNumber("numofseed4")) + " milk seed, " + convertToText(blockSettings.readNumber("numofseed5")) + " sugar seed, " + convertToText(blockSettings.readNumber("numofseed6")) + " strawberry seed, " + convertToText(blockSettings.readNumber("numofseed7")) + " blueberry seed, " + convertToText(blockSettings.readNumber("numofseed8")) + " grape seed, " + convertToText(blockSettings.readNumber("numofhoe")) + " hoe, " + convertToText(blockSettings.readNumber("numoffertilizer")) + " fertilizer.", DialogLayout.Full)
        } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
            Cooking_Items = sprites.create(img`
                . 
                `, SpriteKind.Nothing)
            Reset_Cooking_Items()
            while (!(story.getLastAnswer().includes("Cook"))) {
                story.showPlayerChoices("Cook with " + convertToText(sprites.readDataNumber(Cooking_Items, "Wheat") + (sprites.readDataNumber(Cooking_Items, "Sugar") + sprites.readDataNumber(Cooking_Items, "Batter")) + (sprites.readDataNumber(Cooking_Items, "Bacon") + (sprites.readDataNumber(Cooking_Items, "Egg") + sprites.readDataNumber(Cooking_Items, "Milk")) + (sprites.readDataNumber(Cooking_Items, "Strawberry") + (sprites.readDataNumber(Cooking_Items, "Blueberry") + sprites.readDataNumber(Cooking_Items, "Grape"))))) + " items", "Basic Items", "From Animals", "Fruit And Veggie")
                if (story.checkLastAnswer("Basic Items")) {
                    story.showPlayerChoices("Wheat", "Sugar", "Batter")
                } else if (story.checkLastAnswer("From Animals")) {
                    story.showPlayerChoices("Bacon", "Egg", "Milk")
                } else if (story.checkLastAnswer("Fruit And Veggie")) {
                    story.showPlayerChoices("Small Fruits", "")
                    if (story.checkLastAnswer("Small Fruits")) {
                        story.showPlayerChoices("Strawberry", "Blueberry", "Grape")
                    }
                }
                if (!(story.getLastAnswer().includes("Cook"))) {
                    sprites.setDataNumber(Cooking_Items, story.getLastAnswer(), game.askForNumber("Use how much " + story.getLastAnswer() + "?", 1))
                    while (!(Input_1_Is_Between_Inputs_2_and_3(sprites.readDataNumber(Cooking_Items, story.getLastAnswer()), 0, Math.constrain(sprites.readDataNumber(Cooking_Items, "" + story.getLastAnswer() + "v"), 0, 9)))) {
                        game.splash("INVALID NUMBER", "You have either chosen an invalid number or want to use more than you have.")
                        sprites.setDataNumber(Cooking_Items, story.getLastAnswer(), game.askForNumber("Use how much " + story.getLastAnswer() + "?", 1))
                    }
                } else {
                    game.splash("COOK WITH " + convertToText(sprites.readDataNumber(Cooking_Items, "Wheat") + (sprites.readDataNumber(Cooking_Items, "Sugar") + sprites.readDataNumber(Cooking_Items, "Batter")) + (sprites.readDataNumber(Cooking_Items, "Bacon") + (sprites.readDataNumber(Cooking_Items, "Egg") + sprites.readDataNumber(Cooking_Items, "Milk")) + (sprites.readDataNumber(Cooking_Items, "Strawberry") + (sprites.readDataNumber(Cooking_Items, "Blueberry") + sprites.readDataNumber(Cooking_Items, "Grape"))))) + " ITEMS", "" + convertToText(sprites.readDataNumber(Cooking_Items, "Wheat")) + " Wheat, " + convertToText(sprites.readDataNumber(Cooking_Items, "Sugar")) + " Sugar, " + convertToText(sprites.readDataNumber(Cooking_Items, "Batter")) + " Batter, " + convertToText(sprites.readDataNumber(Cooking_Items, "Bacon")) + " Bacon, " + convertToText(sprites.readDataNumber(Cooking_Items, "Egg")) + " Egg, " + convertToText(sprites.readDataNumber(Cooking_Items, "Milk")) + " Milk, " + convertToText(sprites.readDataNumber(Cooking_Items, "Strawberry")) + " Strawberry, " + convertToText(sprites.readDataNumber(Cooking_Items, "Blueberry")) + " Blueberry, and " + convertToText(sprites.readDataNumber(Cooking_Items, "Grape")) + " Grape.")
                    if (game.ask("COMFIRM?", "Items used will be lost.")) {
                        blockSettings.writeNumber("wheat", blockSettings.readNumber("wheat") - sprites.readDataNumber(Cooking_Items, "Wheat"))
                        blockSettings.writeNumber("sugar", blockSettings.readNumber("sugar") - sprites.readDataNumber(Cooking_Items, "Sugar"))
                        blockSettings.writeNumber("batter", blockSettings.readNumber("batter") - sprites.readDataNumber(Cooking_Items, "Batter"))
                        blockSettings.writeNumber("bacon", blockSettings.readNumber("bacon") - sprites.readDataNumber(Cooking_Items, "Bacon"))
                        blockSettings.writeNumber("egg", blockSettings.readNumber("egg") - sprites.readDataNumber(Cooking_Items, "Egg"))
                        blockSettings.writeNumber("milk", blockSettings.readNumber("milk") - sprites.readDataNumber(Cooking_Items, "Milk"))
                        blockSettings.writeNumber("strawberry", blockSettings.readNumber("strawberry") - sprites.readDataNumber(Cooking_Items, "Strawberry"))
                        blockSettings.writeNumber("blueberry", blockSettings.readNumber("blueberry") - sprites.readDataNumber(Cooking_Items, "Blueberry"))
                        blockSettings.writeNumber("grape", blockSettings.readNumber("grape") - sprites.readDataNumber(Cooking_Items, "Grape"))
                        if (Cooking_Items__Recipe(1, 0, 0, 0, 0, 0, 0, 0, 0)) {
                            Food_Item = sprites.create(img`
                                . f f . . f f . 
                                f e e f f e e f 
                                f e e e e e e f 
                                . f e e e e f . 
                                . f e e e e f . 
                                . f e e e e f . 
                                . f e e e e f . 
                                . . f f f f . . 
                                `, SpriteKind.Food)
                            sprites.setDataString(Food_Item, "Type", "toast")
                        } else {
                            Wrong_Combination = 1
                        }
                        if (!(Wrong_Combination == 1)) {
                            tiles.placeOnRandomTile(Food_Item, assets.tile`myTile17`)
                        } else {
                            game.splash("THIS FOOD DOESN'T LOOK RIGHT...", "Whatever food you just made probably isn't edible. Try checking the recipes to the left of the fridge.")
                        }
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info, function (sprite, otherSprite) {
    grid.place(mySprite, tiles.getTileLocation(10, 7))
    if (menu == 1) {
        if (game.ask("See farming tutorial?")) {
            if (blockSettings.readNumber("Computer") == 1) {
                textSprite.sayText("Move with WASD or the arrow keys.")
            } else {
                textSprite.sayText("Move with the D-pad")
            }
            pause(1000)
            while (!(controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed())))) {
                pause(100)
            }
            if (blockSettings.readNumber("Computer") == 1) {
                textSprite.sayText("Swap the item you're using with the X key.")
            } else {
                textSprite.sayText("Swap the item you're using with the B button.")
            }
            pause(1000)
            while (!(controller.B.isPressed())) {
                pause(100)
            }
            if (blockSettings.readNumber("Computer") == 1) {
                textSprite.sayText("Try tilling soil - use the item you're holding with the Z key or space bar.")
            } else {
                textSprite.sayText("Try tilling soil - use the item you're holding with the A button")
            }
        }
        pause(1000)
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`))) {
            pause(100)
        }
        textSprite.sayText("Place wheat seeds on the tilled soil.")
        pause(1000)
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`))) {
            pause(100)
        }
        textSprite.sayText("Usually, your plants will take 2 days to grow, but we need that wheat now.")
        pause(4000)
        textSprite.sayText("Why don't you use some fertilizer?")
        pause(1000)
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`))) {
            pause(100)
        }
        textSprite.sayText("Use it again!")
        pause(1000)
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile8`))) {
            pause(100)
        }
        textSprite.sayText("Now it's ready to harvest! Use the harvest item on it.")
        pause(1000)
        while (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`))) {
            pause(100)
        }
        textSprite.sayText("Done! Now you can use it in your restaurant!")
        pause(4000)
        if (blockSettings.readNumber("Computer") == 1) {
            textSprite.sayText("Click the menu button when you're ready to go to the restaurant.", 5000, false)
        } else {
            textSprite.sayText("Press the menu button when you're ready to go to the restaurant.", 5000, false)
        }
    }
})
function Cooking_Items__Recipe (wheat: number, sugar: number, batter: number, bacon: number, egg: number, milk: number, strawberry: number, blueberry: number, grape: number) {
    return sprites.readDataNumber(Cooking_Items, "Wheat") == wheat && (sprites.readDataNumber(Cooking_Items, "Sugar") == sugar && sprites.readDataNumber(Cooking_Items, "Batter") == batter) && (sprites.readDataNumber(Cooking_Items, "Bacon") == bacon && (sprites.readDataNumber(Cooking_Items, "Egg") == egg && sprites.readDataNumber(Cooking_Items, "Milk") == milk) && (sprites.readDataNumber(Cooking_Items, "Strawberry") == strawberry && (sprites.readDataNumber(Cooking_Items, "Blueberry") == blueberry && sprites.readDataNumber(Cooking_Items, "Grape") == grape)))
}
function Input_1_Is_Between_Inputs_2_and_3 (num: number, num2: number, num3: number) {
    if (num2 > num3) {
        return num >= num3 && num <= num2
    } else {
        return num >= num2 && num <= num3
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        if (game.ask("GO TO RESTAURANT?", "A = Confirm B = Cancel")) {
            menu = 2
            textSprite.destroy()
            itemheld = 0
            scene.setBackgroundImage(img`
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            if (blockSettings.readNumber("nextlevel") == 1) {
                tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level22`))
                numofspots = 1
            }
        }
    } else if (menu == 2) {
        if (game.ask("OPEN RESTAURANT?", "A = Confirm B = Cancel")) {
            numofemptyspots = numofspots
            menu = 3
        }
    }
})
function Reset_Cooking_Items () {
    sprites.setDataNumber(Cooking_Items, "Wheat", 0)
    sprites.setDataNumber(Cooking_Items, "Sugar", 0)
    sprites.setDataNumber(Cooking_Items, "Batter", 0)
    sprites.setDataNumber(Cooking_Items, "Bacon", 0)
    sprites.setDataNumber(Cooking_Items, "Egg", 0)
    sprites.setDataNumber(Cooking_Items, "Milk", 0)
    sprites.setDataNumber(Cooking_Items, "Strawberry", 0)
    sprites.setDataNumber(Cooking_Items, "Blueberry", 0)
    sprites.setDataNumber(Cooking_Items, "Grape", 0)
    sprites.setDataNumber(Cooking_Items, "Wheatv", blockSettings.readNumber("wheat"))
    sprites.setDataNumber(Cooking_Items, "Sugarv", blockSettings.readNumber("sugar"))
    sprites.setDataNumber(Cooking_Items, "Batterv", blockSettings.readNumber("batter"))
    sprites.setDataNumber(Cooking_Items, "Baconv", blockSettings.readNumber("bacon"))
    sprites.setDataNumber(Cooking_Items, "Eggv", blockSettings.readNumber("egg"))
    sprites.setDataNumber(Cooking_Items, "Milkv", blockSettings.readNumber("milk"))
    sprites.setDataNumber(Cooking_Items, "Strawberryv", blockSettings.readNumber("strawberry"))
    sprites.setDataNumber(Cooking_Items, "Blueberryv", blockSettings.readNumber("blueberry"))
    sprites.setDataNumber(Cooking_Items, "Grapev", blockSettings.readNumber("grape"))
}
let heldnum = 0
let heldstring = ""
let Person: Sprite = null
let personimg: Image = null
let persontype = 0
let numofemptyspots = 0
let Wrong_Combination = 0
let Food_Item: Sprite = null
let Cooking_Items: Sprite = null
let see_recipe = ""
let itemheld = 0
let textSprite: TextSprite = null
let mySprite: Sprite = null
let numofspots = 0
let menu = 0
menu = 0
numofspots = 1
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
    9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
    999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
    9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
    99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
    99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
    99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
    99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
    999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
    9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
    9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
    999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
    99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
    99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
    99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
    999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
    999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
    999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
    99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
    99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
    9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
    999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
    9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
    999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
    999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
    999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
    99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
    999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
    99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
    999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
    99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
    99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
let LoadCol = 1
let LoadRow = 8
for (let index = 0; index < 6; index++) {
    for (let index = 0; index < 18; index++) {
        if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 0) {
            tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile1`)
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 1) {
            tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile2`)
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 2) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile3`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile6`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile8`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 3) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile11`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile14`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile15`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 4) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile16`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile19`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile21`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 5) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile23`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile24`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile25`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 6) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile39`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile40`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile43`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 7) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile26`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile37`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile38`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 8) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile44`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile45`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile46`)
            }
        } else if (blockSettings.readNumber("soil at " + LoadCol + ", " + LoadRow) == 9) {
            if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 1) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile52`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 2) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile53`)
            } else if (blockSettings.readNumber("growth at " + LoadCol + ", " + LoadRow) == 3) {
                tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile54`)
            }
        }
        LoadCol += 1
    }
    LoadCol = 1
    LoadRow += 1
}
if (blockSettings.exists("Played Before")) {
    story.showPlayerChoices("Continue", "New Game", "Reset Game")
} else {
    if (game.ask("Playing on computer?", "A = Computer B = Handheld")) {
        blockSettings.writeNumber("Computer", 1)
    } else {
        blockSettings.writeNumber("Computer", 0)
    }
    story.showPlayerChoices("New Game", "")
}
if (story.checkLastAnswer("Continue")) {
	
} else if (story.checkLastAnswer("New Game")) {
    blockSettings.clear()
    blockSettings.writeNumber("Played Before", 1)
    blockSettings.writeNumber("numofhoe", 9)
    blockSettings.writeNumber("numofseed1", 3)
    blockSettings.writeNumber("numofseed2", 3)
    blockSettings.writeNumber("numofseed3", 3)
    blockSettings.writeNumber("numofseed4", 0)
    blockSettings.writeNumber("numofseed5", 0)
    blockSettings.writeNumber("numofseed6", 0)
    blockSettings.writeNumber("numofseed7", 0)
    blockSettings.writeNumber("numofseed8", 0)
    blockSettings.writeNumber("numoffertilizer", 18)
    blockSettings.writeNumber("wheat", 0)
    blockSettings.writeNumber("egg", 0)
    blockSettings.writeNumber("bacon", 0)
    blockSettings.writeNumber("milk", 0)
    blockSettings.writeNumber("batter", 0)
    blockSettings.writeNumber("strawberry", 0)
    blockSettings.writeNumber("blueberry", 0)
    blockSettings.writeNumber("grape", 0)
    blockSettings.writeNumber("sugar", 0)
    blockSettings.writeNumber("nextlevel", 1)
    blockSettings.writeNumber("money", 0)
    LoadCol = 1
    LoadRow = 8
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 18; index++) {
            blockSettings.writeNumber("soil at " + LoadCol + ", " + LoadRow, 0)
            tiles.setTileAt(tiles.getTileLocation(LoadCol, LoadRow), assets.tile`myTile1`)
            LoadCol += 1
        }
        LoadCol = 1
        LoadRow += 1
    }
} else if (story.checkLastAnswer("Reset Game")) {
    if (game.ask("DELETE ALL DATA", "Are you sure?")) {
        blockSettings.clear()
    }
    game.reset()
}
mySprite = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.Player)
let anim = animation.createAnimation(ActionKind.cursor_none, 1000)
anim.addAnimationFrame(img`
    . . . . . . . . 
    . . . . . . . . 
    . . f f f f . . 
    . . f 1 1 f . . 
    . . f 1 1 f . . 
    . . f f f f . . 
    . . . . . . . . 
    . . . . . . . . 
    `)
animation.attachAnimation(mySprite, anim)
let anim2 = animation.createAnimation(ActionKind.cursor_tilledsoil, 500)
anim2.addAnimationFrame(img`
    . f f f f f f . 
    . f e b b b f . 
    . f e f f b f . 
    . f e f . f f . 
    . f e f . . . . 
    . f e f . . . . 
    . f e f . . . . 
    . f f f . . . . 
    `)
anim2.addAnimationFrame(img`
    . . . f f f f . 
    . . f e b b f . 
    . . f e b b b f 
    . f e f f b f . 
    . f e f . f . . 
    f e f . . . . . 
    f e f . . . . . 
    f f f . . . . . 
    `)
animation.attachAnimation(mySprite, anim2)
let anim3 = animation.createAnimation(ActionKind.cursor_seed1, 1000)
anim3.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 6 6 d f . 
    . f 6 d 6 5 f . 
    . f 6 5 6 d f . 
    . f 6 d 6 5 f . 
    . f 6 5 6 5 f . 
    . f 6 5 6 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim3)
let anim4 = animation.createAnimation(ActionKind.cursor_seed2, 1000)
anim4.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 1 1 6 f . 
    . f 6 1 1 6 f . 
    . f 1 1 1 1 f . 
    . f 1 1 1 1 f . 
    . f 1 1 1 1 f . 
    . f 6 1 1 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim4)
let anim5 = animation.createAnimation(ActionKind.cursor_seed3, 1000)
anim5.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 6 2 4 f . 
    . f 6 2 4 6 f . 
    . f 6 2 4 6 f . 
    . f 6 6 2 4 f . 
    . f 6 6 2 4 f . 
    . f 6 2 4 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim5)
let anim6 = animation.createAnimation(ActionKind.cursor_seed4, 1000)
anim6.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 c c 6 f . 
    . f c 1 1 c f . 
    . f c 1 1 c f . 
    . f b c c b f . 
    . f b b b b f . 
    . f 6 b b 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim6)
let anim8 = animation.createAnimation(ActionKind.cursor_seed5, 1000)
anim8.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 6 6 1 f . 
    . f 6 1 6 7 f . 
    . f 6 7 6 1 f . 
    . f 6 1 6 7 f . 
    . f 6 7 6 7 f . 
    . f 6 7 6 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim8)
let anim9 = animation.createAnimation(ActionKind.cursor_seed6, 1000)
anim9.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 6 6 6 f . 
    . f 7 7 7 2 f . 
    . f 2 7 7 7 f . 
    . f 7 7 2 7 f . 
    . f 7 7 7 7 f . 
    . f 6 6 6 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim9)
let anim10 = animation.createAnimation(ActionKind.cursor_seed7, 1000)
anim10.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 6 6 6 f . 
    . f 7 7 7 8 f . 
    . f 8 7 7 7 f . 
    . f 7 7 8 7 f . 
    . f 7 7 7 7 f . 
    . f 6 6 6 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim10)
let anim11 = animation.createAnimation(ActionKind.cursor_seed8, 1000)
anim11.addAnimationFrame(img`
    . f f f f f f . 
    . f 6 6 6 6 f . 
    . f 7 7 7 a f . 
    . f a 7 7 7 f . 
    . f 7 7 a 7 f . 
    . f 7 7 7 7 f . 
    . f 6 6 6 6 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim11)
let anim7 = animation.createAnimation(ActionKind.cursor_fertilizer, 1000)
anim7.addAnimationFrame(img`
    . f f f f f f . 
    . f 5 7 7 5 f . 
    . f 7 5 5 7 f . 
    . f 7 5 5 5 f . 
    . f 7 5 7 7 f . 
    . f 7 5 5 7 f . 
    . f 5 7 7 5 f . 
    . f f f f f f . 
    `)
animation.attachAnimation(mySprite, anim7)
animation.setAction(mySprite, ActionKind.cursor_none)
let InfoSprite = sprites.create(img`
    . f 1 1 1 1 f . 
    f 1 1 1 1 1 1 f 
    f 1 1 f f 1 1 f 
    f f f f 1 1 1 f 
    f f f 1 1 1 f f 
    f f f 1 1 f f f 
    f f f f f f f f 
    . f f 1 1 f f . 
    `, SpriteKind.Info)
tiles.placeOnRandomTile(InfoSprite, assets.tile`myTile`)
textSprite = textsprite.create("Nothing", 15, 1)
grid.snap(textSprite)
grid.snap(mySprite)
grid.moveWithButtons(mySprite)
itemheld = 0
menu = 1
game.onUpdateInterval(randint(5000 / numofspots, 20000 / numofspots), function () {
    if (menu == 3) {
        if (numofemptyspots > 0) {
            persontype = randint(1, 4)
            if (persontype == 1) {
                personimg = img`
                    . . 2 2 2 2 . . 
                    . . d f d f . . 
                    . . d d d d . . 
                    . 2 2 2 2 2 2 . 
                    . d 2 2 2 2 d . 
                    . d 2 2 2 2 d . 
                    . . 8 8 8 8 . . 
                    . . 8 . . 8 . . 
                    `
            } else if (persontype == 2) {
                personimg = img`
                    . . 5 5 5 5 . . 
                    . . d f d f . . 
                    . . d d d d . . 
                    . 5 5 5 5 5 5 . 
                    . d 5 5 5 5 d . 
                    . d 5 5 5 5 d . 
                    . . 6 6 6 6 . . 
                    . . 6 . . 6 . . 
                    `
            } else if (persontype == 3) {
                personimg = img`
                    . . 4 4 4 4 . . 
                    . . d f d f . . 
                    . . d d d d . . 
                    . 4 4 4 4 4 4 . 
                    . d 4 4 4 4 d . 
                    . d 4 4 4 4 d . 
                    . . c c c c . . 
                    . . c . . c . . 
                    `
            } else if (persontype == 4) {
                personimg = img`
                    . . 3 3 3 3 . . 
                    . . d f d f . . 
                    . . d d d d . . 
                    . 3 3 3 3 3 3 . 
                    . d 3 3 3 3 d . 
                    . d 3 3 3 3 d . 
                    . . b b b b . . 
                    . . b . . b . . 
                    `
            }
            Person = sprites.create(personimg, SpriteKind.Person)
            tiles.placeOnRandomTile(Person, assets.tile`myTile32`)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (menu == 1) {
        grid.place(textSprite, tiles.getTileLocation(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).column, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row))
        if (itemheld == 0) {
            heldstring = "Harvest"
            heldnum = 0
        } else if (itemheld == 1) {
            heldstring = "Hoe"
            heldnum = blockSettings.readNumber("numofhoe")
        } else if (itemheld == 2) {
            heldstring = "Wheat"
            heldnum = blockSettings.readNumber("numofseed1")
        } else if (itemheld == 3) {
            heldstring = "Egg"
            heldnum = blockSettings.readNumber("numofseed2")
        } else if (itemheld == 4) {
            heldstring = "Bacon"
            heldnum = blockSettings.readNumber("numofseed3")
        } else if (itemheld == 5) {
            heldstring = "Milk"
            heldnum = blockSettings.readNumber("numofseed4")
        } else if (itemheld == 6) {
            heldstring = "Sugar"
            heldnum = blockSettings.readNumber("numofseed5")
        } else if (itemheld == 7) {
            heldstring = "Strawberry"
            heldnum = blockSettings.readNumber("numofseed6")
        } else if (itemheld == 8) {
            heldstring = "Blueberry"
            heldnum = blockSettings.readNumber("numofseed7")
        } else if (itemheld == 9) {
            heldstring = "Grape"
            heldnum = blockSettings.readNumber("numofseed8")
        } else if (itemheld == 10) {
            heldstring = "Fertilizer"
            heldnum = blockSettings.readNumber("numoffertilizer")
        }
        textSprite.setText("" + convertToText(heldnum) + " " + heldstring)
    }
})

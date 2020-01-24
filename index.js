var game = new Phaser.Game(800, 600, Phaser.WEBGL_MULTI, "phaser-example", {
    preload: preload,
    create: create,
  });
  
  function preload() {
    game.load.atlas(
      "button",
      "./button_texture_atlas.png",
      "./button_texture_atlas.json"
    );
    game.load.atlas(
        "button1",
        "./button_texture_atlas1.png",
        "./button_texture_atlas.json"
      );
      game.load.atlas(
        "button2",
        "./button_texture_atlas2.png",
        "./button_texture_atlas.json"
      );
    game.load.image("background", "./starfield.jpg");
  }
  
  var button;
  var background;
  
  function create() {
    game.stage.backgroundColor = "#182d3b";
  
    background = game.add.tileSprite(0, 0, 800, 600, "background");
  
    button = game.add.button(
        game.world.centerX - 95,
        400,
        "button",
        actionOnClick,
        this,
        "over",
        "out",
        "down"
    );

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    button = game.add.button(
        game.world.centerX - 95,
        300,
        "button1",
        actionOnClick,
        this,
        "over",
        "out",
        "down"
    );

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    button = game.add.button(
        game.world.centerX - 95,
        200,
        "button2",
        actionOnClick,
        this,
        "over",
        "out",
        "down"
    );

    
    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    this.game.renderer.setTexturePriority(['button', 'button1', 'button2']);
  }
  
  function over() {
    console.log("button over");
  }
  
  function out() {
    console.log("button out");
  }
  
  function actionOnClick() {
    console.log("button down");
  }
  
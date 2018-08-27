var gm = gm||{};
gm.scene = {};

(function(){
  function load(callback){
		const loader = new PIXI.loaders.Loader();
    loader.add('res/character.json')
		  .add('res/land.png')
		  .load((loader, resources) => {
          PIXI.loader.resources = resources;
			     callback();
		  });
	};
  function initMap(){
    let land = PIXI.Sprite.fromImage('res/land.png');
    land.anchor.set(0.5);
    land.scale.set(1.5);
    gm.scene.root.addChild(land);
  }
  function initCharacter(){
    let sheet = PIXI.loader.resources['res/character.json'].spritesheet;

    //animations
    let dir = 'S';
    let keysPressed = [false, false, false, false]; //left, up, right, down
    let frame = 0;
    let totalFrames = 39;
    let walking = false;
    let walkSpeed = 0;
    let stayFrameSet = false;
    let getframe = function(){
      frame = ++frame%totalFrames
      let val = frame < 10 ? '0' + frame : frame;
      return `woman_walk_def_${dir}_00${val}.png`
    }

    //child
    let character = new PIXI.Sprite(sheet.textures[getframe()]);
    gm.scene.root.addChild(character);

    gm.app.ticker.add(function() {
      walkSpeed = CosineInterpolate(walkSpeed, walking ? 1 : 0, 0.3);
      if(!walking) {
        if(!stayFrameSet){
          stayFrameSet = true;
          frame = 24;
          character.texture = sheet.textures[getframe()]
        }
        return;
      }
      else if(stayFrameSet) stayFrameSet = false;

      dir = '';

      if(keysPressed[1] && !keysPressed[3])
      {
        dir = 'N';
        character.position.y -= walkSpeed;
      }
      else if(!keysPressed[1] && keysPressed[3])
      {
        dir = 'S';
        character.position.y += walkSpeed;
      }

      if(keysPressed[0] && !keysPressed[2])
      {
        dir += 'W';
        character.position.x -= walkSpeed*1.75;
      }
      else if(!keysPressed[0] && keysPressed[2])
      {
        dir += 'E';
        character.position.x += walkSpeed*1.75;
      }

      if(dir == '')
        dir = 'S';

      character.texture = sheet.textures[getframe()]
    });

    //input
    function dirSet(index) {
      return function(pressed){
        keysPressed[index] = pressed;

        //disable walking if nothing pressed
        for(var i in keysPressed){
          if(keysPressed[i]) {
            walking = true;
            return;
          }
        }
        //else
        walking = false;
      };
    }
    gm.input = {};
    gm.input.left = dirSet(0);
    gm.input.up = dirSet(1);
    gm.input.right = dirSet(2);
    gm.input.down = dirSet(3);

    function keyEventFunc(press){
      return function(key){
        // W Key is 87
        // Up arrow is 87
        if (key.keyCode === 87 || key.keyCode === 38) {
          gm.input.up(press);
        }
        // S Key is 83
        // Down arrow is 40
        else if (key.keyCode === 83 || key.keyCode === 40) {
          gm.input.down(press);
        }
        // A Key is 65
        // Left arrow is 37
        else if (key.keyCode === 65 || key.keyCode === 37) {
          gm.input.left(press);
        }
        // D Key is 68
        // Right arrow is 39
        else if (key.keyCode === 68 || key.keyCode === 39) {
          gm.input.right(press);
        }
      }
    }

    document.addEventListener('keydown', keyEventFunc(true));
    document.addEventListener('keyup', keyEventFunc(false));
  };
  function initScene(){
    var container = new PIXI.Container();
		gm.app.stage.addChild(container);
    gm.scene.root = container;

    container.position.set(gm.app.screen.width/2, gm.app.screen.height/2);
  }
  gm.scene.init = function(){
    load(()=>{
      initScene();
      initMap();
      initCharacter();
    });
  };

  }())

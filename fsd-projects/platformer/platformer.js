$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(190, 620, 310, 120);
    createPlatform(1000, 620, 500, 120);
    createPlatform(700, 520, 100, 220);
    createPlatform(1040, 500, 180, 20);
    createPlatform(1040, 300, 20, 200);
    createPlatform(1250, 370, 290, 20);
    createPlatform(1390, 0, 20, 700);
    createPlatform(690, 300, 120, 20);
    createPlatform(150, 260, 350, 20);
    createPlatform(150, 0, 20, 280);
    createPlatform(150, 170, 150, 90);
    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 110, 0, 0.7);
    createCollectable("diamond", 730, 430, 0, 0.7);
    createCollectable("diamond", 1200, 410, 0, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 530, 800);
    createCannon("bottom", 550, 800);
    createCannon("bottom", 850, 750);
    createCannon("bottom", 830, 750);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6c276a38-05fb-485d-8653-89dea3fae9f4","2b432017-4543-43a1-a0c9-1e73e71f0da5","46182158-8e8b-4911-b952-a09d9e12eb93"],"propsByKey":{"6c276a38-05fb-485d-8653-89dea3fae9f4":{"name":"pescado","sourceUrl":null,"frameSize":{"x":30,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"tqDv8MdEFHPhmIgVeVOvbOGZgK6f2yQ0","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":19},"rootRelativePath":"assets/6c276a38-05fb-485d-8653-89dea3fae9f4.png"},"2b432017-4543-43a1-a0c9-1e73e71f0da5":{"name":"crab_1","sourceUrl":null,"frameSize":{"x":999,"y":699},"frameCount":1,"looping":true,"frameDelay":12,"version":"x.tX4QuIb9udwCIsDqKLiAmS_HEHkXLD","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":999,"y":699},"rootRelativePath":"assets/2b432017-4543-43a1-a0c9-1e73e71f0da5.png"},"46182158-8e8b-4911-b952-a09d9e12eb93":{"name":"crab","sourceUrl":null,"frameSize":{"x":30,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"bQWyJhZ73HDO8cX_fpLxsj0XPDJu8S55","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":20},"rootRelativePath":"assets/46182158-8e8b-4911-b952-a09d9e12eb93.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  sam.setAnimation("pescado");
  car1.setAnimation("crab");
  car3.setAnimation("crab");
  car4.setAnimation("crab");
  car2.setAnimation("crab");
  
  car1.velocityY = 4;
  car2.velocityY = 4;
  car3.velocityY = -4;
  car4.velocityY = -4;
 

function draw() {
  background("lightblue");
  text("muertes: " + life,200,100);
  strokeWeight(0);
  fill("blue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 10;
  }
  if(keyDown("left")){
    sam.x = sam.x - 10;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

# Infiltrate The Ufo
This game is built using HTML, CSS and JavaScript on VSC.
# Table of Contents

1. [ Description ](#desc)
2. [ Canvas Creation ](#canvas)
3. [ Classes Creation ](#classescreation)
* [Player Creation](#playercreation)
* [Platform Creation](#platformcreation)
* [Moving Platform Creation](#movingplatformcreation)
* [Boulder Creation](#bouldercreation)
* [Background Creation](#backgroundcreation)


<a name="desc"></a>
## 1. Game Description
This is jumping game that allow players to navigate through an obstacle course while testing their reflexes and skills. Players must make their way to the top of the castle where the UFO awaits.

Today, a mysterious unidentified object was sighted entering our atmosphere...You are tasked by King Desmond to infiltrate the foreign spacecraft! The presence of this gigantic UFO was accompanied by a massive earthquake! Avoid falling debris and reach the top as fast as you can! Conquer the earthquake and find the UFO.

<a name="canvas"></a>
## 2. Canvas Creation

The canvas is the foundation for this game. Over here the following properties must be set and adhered to before proceeding with the rest of the game creation:
<li>Canvas Width</li>
<li>Canvas Height</li>
<br>
These properties are the dimensions of the canvas that will be used to draw the game. The canvas is directly linked to the HTML page.


<a name="classescreation"></a>
## 3. Classes Creation
<p>Classes Creation are used to define the building blocks of the games. Some of these include:</p>
<li>Player Classes</li>
<li>Platform Classes</li>
<li>Moving Platform Classes</li>
<li>Boulder Classes</li>
<li>Background Classes</li>

<a name="playercreation"></a>
<h3>1. Player Creation</h3>
<p>The Player is created using the Class keyword followed by the method constructor(). An example of creating the player class is shown here:

```
class Player {
  constructor() {
    this.speed = 6;                             //player's speed
    this.speedY = 10;
    this.position = {                           //player's starting position
      x: 0,
      y: 480,
    };
    this.width = 66;                            //player's width and height
    this.height = 120;
    this.velocity = {                           //player's velocity
      x: 0,
      y: 0,
    };
```

<p>The player's properties such as velocity, starting position on the canvas, width and height are defined within.</p>

<p>The second part of the player class dictates the drawing method that will be used for the player.</p>

```
draw() {
    //If you define a function called "draw" in your code, then that function will get called repeatedly, about 60 times per second.
    c.drawImage(
      this.image,
      200 * this.frames, //flipping image through a sprite sheet, 200px per frame
      0,
      200, //cropping image from sprite sheet
      400, //cropping image from sprite sheet
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    //updating player's y position with gravity on the canvas
    this.draw();
    // this.frames += 1;
    // if (this.frames > 19) this.frames = 0;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity; //acceleration to "gravity"
    }
  }
  ```

<a name="platformcreation"></a>
<h3>2. Platform Creation</h3>

<p>The Platform is created using the Class keyword followed by the method constructor(). An example of creating the platform class is shown here:

```
class Platform {
  //platform's properties
  constructor({ x, y, image }) {
    //platform's starting position (object)
    this.position = {
      x: x,
      y: y,
    };

    this.image = image;

    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
```

<p>The platform's properties such as starting position on the canvas, width and height and "image to use" are defined within.</p>


<a name="movingplatformcreation"></a>
<h3>3. Moving Platform Creation</h3>

sometext

<a name="bouldercreation"></a>
<h3>4. Boulder Creation</h3>

sometext

<a name="backgroundcreation"></a>
<h3>5. Background Creation</h3>

sometext

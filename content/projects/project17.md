---
title: "Avalanche of Goodness"
date: 
tags: 
summary: "art and computer, a pair like lightning and thunder"
---

*A generative art project about finding beauty in chaos*

## The Concept

I initially created this project in 2022 for a speculative Design class, using Processing to share a concept of a **storm that is good**! The idea is that even (especially) when there is chaos under the heavens, goodness is possible. Sometimes the most beautiful things emerge from apparent disorder - like snowflakes in an avalanche, each one unique and magnificent. How can I infuse a program with this spirit, while creating a simple animation to showcase it further?

## The Code as Art

One of the unique aspects of this project is that the code itself is designed to visually represent an "avalanche." Each line of code is intentionally longer than the previous one, creating a cascading visual effect when you look at the source. The comments at the end of each line form their own poem, weaving together the technical and the poetic.

![Code structure showing avalanche pattern](code-avalanche-screenshot.png)
*The code structure itself mirrors an avalanche, with lines growing progressively longer*

## From Processing to Web

With the assitance of an AI, helped me:
- Convert Processing's Java-like syntax to p5.js JavaScript
- Handle the canvas creation and DOM integration
- Fix array initialization and loop syntax
- Preserve all the poetic structure and comments

## The Animation

<div id="p5-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
<script>
// an
// avalanche
// of goodness
// awaits you and me
// a single snowflake
// turns into 2, then 3
let above_you_see = 3;
//: the sky, moon, and stars
let the_magnificent_massive_sky = 1;
// stretching far and wide infinitely
let growing_slowly_over_time = 1; //////
let starships = 600;
let galaxies = 800;
let beyond_this_mighty_sky = starships * galaxies; ///
let snowflakeplacesX = [];
let snowflakeplacesY = [];

function setup() { // yet another surprise on this mountain /////
  let canvas = createCanvas(galaxies, starships);
  canvas.parent('p5-container');
  // Initialize arrays
  for (let init = 0; init < beyond_this_mighty_sky; init++) {
    snowflakeplacesX[init] = -beyond_this_mighty_sky; /////////////
    snowflakeplacesY[init] = int(random(height/2)); /////////////////
  }// our canvas is as large as all of what is beyond_the_mighty_sky
}//////////////////////////////////////////// so many slashes, sigh!

function draw() { // perhaps the unexpected is actually also the expected
  background(146, 234, 217); // oh, an ethereal color like steven universe
  let the_mysterious_yet_majestic_and_also_mighty_moooooooooooooooon = 2;
  // our moon shines mainly during darkness yet it affects us all the time
  // from afar, the snowballs in the avalanche look spherical, with dents like the moon
  let the_spectacular_showstopping_sacred_shiny_spacious_stunning_cool_hot_cool_hot_stars = 3;
  // zooming in on the snowflakes, their shapes are so unique, like each a star holding power of their own
  // bubbling and teeming with life, each wind-packed snowflake exhibiting a creative energy unlike anything else
  // now we have made the 1, 2, 3. that's how the avalanche starts simple, just a few snowflakes, falling while furiously free
  if (growing_slowly_over_time % 5 == 0) { /// more and more and more and more and more and less and more and more and more and
    for (let snowflake = 0; snowflake < growing_slowly_over_time; snowflake++) { // the new snowflakes starting to flow /////////
      let index = snowflake + int(growing_slowly_over_time * (growing_slowly_over_time - 1) / 2);
      if (index < beyond_this_mighty_sky) {
        snowflakeplacesX[index] = 1; ////////////////////////////////
      }
    }
  } // one by one they fall, upon a mountain with an unknown destiny, but with a glorious goodness that we can all so clearly see
  for (let snowflake = 0; snowflake < beyond_this_mighty_sky; snowflake++) { // showing them all as they fall, forming the avalanche
    if (snowflakeplacesX[snowflake] > 0) {
      snowflakeplacesY[snowflake] += 1;
      drawSnowflake(snowflakeplacesX[snowflake], snowflakeplacesY[snowflake]);
    }
    snowflakeplacesX[snowflake] += 2;
  }
  growing_slowly_over_time += 1;
} // one bit of goodness, turns two and then two four, then finally into a million more!

function drawSnowflake(xposition, yposition) { ////////// difference and sameness, creation and destruction, beginnings and end - it's all in relation.
  fill(random(255), random(255), random(255));
  circle(xposition, yposition, 20);
} // continuous transformation - when the only constant is change, can we call that a constant at all?
// growing and flowing, until this avalanche of goodness, this marvelous storm of wonders, will reach our hearts and touch us all, covering us like a blanket of love. could this be liberation?
</script>

<br>

Watch as colorful snowflakes cascade across the ethereal background, each one unique in color, growing from a single flake to thousands. The avalanche builds slowly, then accelerates - a metaphor for how goodness can multiply and spread.

## What's Next?

Revisiting this experience is inspiring me to see how I can take this animation further. Maybe in collaboration with AI this time? I am thinking about how to make this actually look like a website. The concept in my mind right now is the following: Imagine an animation that is interactive, in that every time the user clicks, a snowball rolls down a mountain. This snowball is a small . 

## Technical Details

- **Original**: Processing (Java-based)
- **Web Version**: p5.js (JavaScript)
- **Philosophy**: Code as poetry, chaos as beauty


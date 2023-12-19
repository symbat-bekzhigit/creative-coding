# Love Yourself

In this project, I tried to utilize the typography concepts in combination with WebGL (Web Graphics Library), to create an interactive generative text.

**Link to the work:** https://editor.p5js.org/symbatb/sketches/T9kB3_M0D

**Concept:**

I’m into typography and generative text art, so I particularly enjoyed working on this assignment. I was surfing though Pinterest for inspiration, and was inspired by the works below. Unable to choose between those two works, I decided to combine them.
The concept of this work is self-love and simplicity. I like setting these kind of photos as my phone wallpaper as a reminder to not compare my journey with others' journey, because it’s hard to forget about it when it’s right in front of my nose. Therefore,  I decided to create my own wallpaper using the code.
Since the concept is “self-love”, I relied on the colors associated with love, such as red, white and black (as they’re basic colors). I also played around with the opacity of the text, and created a fade-away effect for the text as it progresses down the row.

***
![](bin/img1.png)

***
![](bin/img2.png)


**Code:**

The major highlights of my code are the sine-wave text and heart made of the word “love”. First, I created a sine-wave by using by displaying the string character by character and using sin() function to make y-value dependent on the x-value of the text.
To draw the heart, I used the mathematical formula based on the polar coordinates which is described in this video. However, I adapted the formula used there to my code so that instead of the vertices, my shape will consist of  the words “love”. I used beginShape() and endShape() to connect the words together to form a heart shape, and I used push() and pop() to limit the rotation only to the heart. To make the rotation effect, I utilized the rotateY() function of the WEBGL library, which allows us to rotate the shape around the y-axis.
I also tried to integrate some interactivity to this work: the user would be able to change the “mode” of the artwork from bright to dark by pressing the mouse (when the mode changes, the main text also changes). Also, the user can control the rotation by stopping or continuing it through the key “s”.

**Future Improvements:**
ne of the suggestions for further improvement would be using more heart shapes of different size and making them rotate in different pace and direction to emulate the heart-shaped medallion. Also, playing around with the color of the text and applying different colors to different rows or characters is also one suggestion.

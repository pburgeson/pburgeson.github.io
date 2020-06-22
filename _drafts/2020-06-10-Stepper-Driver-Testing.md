---
layout: post
title: "Stepper Driver Testing"
date: 2020-06-10
---
It's been many years since I drove a stepper motor from an arduino.  In order to get back into the saddle, I made a simple arduino sketch for making a motor rotate.  The goal is to simply have the arduino get a stepper motor to drive using the step and direction pins on a silent step stick with a TMC2208 from trinamic on it.  The trinamic stepper motor drives are a project requirement.

The sketch can be found in the software folder in my github for the project.  the first sketch was justinng using arduino delays to manually drive the step pin high and low.  It seemed to work but the motor would randomly stop working.  I started with a 12 V wall wart power supply.  I connected the step pin to my newly acquired oscilloscope to see if the step or enable pins were toggling.  They were not.  I thought the issue might be the 12V so I connected the trinamic driver up to my adjustable power supply.  I found the higher the voltage, the more current the trinamic stepper was sinking.  The optiminal seemed around 12 V.  

**Video of stepper motor moving**

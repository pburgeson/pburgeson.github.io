---
layout: post
title: "Stepper Driver Current Reduction"
date: 2020-06-28
---
After some additional digging into the Trinamic's documentation, I found the root of my high current issue.  The original post on Amazon was unhelpful as it just recommended "adding a fan".  This is an indicator that this is a knockoff board and the vendor has no idea how it works.  Trinamic has a [helpful application note](https://www.trinamic.com/fileadmin/assets/Support/Appnotes/AN045-How_to_replace_Allegro_A4988_with_TMC2208_01.pdf) on replacing the Allegro A4988 with this chip, the TMC 2208.  The extra help came because the application note was written around the type of board the TMC 22808 was embedded on.  It gave an explanation of the potiometer on the board.  It adjusts the analog reference voltage for the current measurement.  If this is too far out of adjustment, bad things happen on the board because the 2208 can't accurately sense the currents running through it.  

I fiddled with the potentiometer and found a point where the current load during a simple static speed test (according to my cheap power supply) dropped by an order of magnitude: 0.5 A down to 0.09 A.  Also interestingly, as I increased voltage, the current dropped which is consistent with my intuition on the relationship of power, voltage, and current.  There is a point where the adjustment has gone too far and not enough current is supplied to drive the motor.

I also discovered during my testing the arduino board limits the speed of the stepper motor.  Each step is called inside the loop portion of the arduino.  Since arduino is not a fast implementation, it is significantly limited.  I gone to the trouble to measure this speed limit since I don't own a tactometer.  I could get creative and use a strobe light or try to a fourier transform on the audio or vibration.  Those would be more work than it's worth since the application does not require any significant speed.

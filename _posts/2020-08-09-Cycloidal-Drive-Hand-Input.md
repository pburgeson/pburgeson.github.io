---
layout: post
title: "Cycloidal Drive Hand Input"
date: 2020-08-09
---
After some to work to find a reasonable set of equations to create the cycloidal disc, I was able to find a working set.  It was based off a [paper defining and analyzing the clearances in a cycloidal drive](https://www.semanticscholar.org/paper/Determination-of-Real-Clearances-Between-Cycloidal-Kosti%C4%87-Blagojevi%C4%87/5781a00b76689620e057e46ad19a25e0a0c33896).  While it would probably be worthwhile for me to read and learn the entire paper, I have opted to stop just after the disc definintions.

Using these equations, I played with the parameters until I found I disc that I could get to fit inside of a NEMA 34 frame.  In this case, that means a base radius of about 30 mm resulting in an overall diameter of about 64 mm.  I tried to maximize the gear ratio, but given the limitation of the precision of a 3D printer, I decided to limit it to 20:1 which will still make a huge difference in the performance of the go kart.  I found a neat little web app that allows you to graph parametric equations.  [This I used to define the parameters of the cycloidal disc](https://www.desmos.com/calculator/xkpccbidkv).  Here, b is the radius of the base circle, a is the radius of the generating circle, c is the eccentricity, and q is the ring gear pin diameter.

I [modeled the system in Fusion 360](https://a360.co/2CluaLq).  It is meant to only test the tolerance of my 3D printer for this design.  It will be turned by hand rather than by the Teknic motor.  This is a first pass, demonstartion piece.  A future update will cover the construction and testing.  I took wild guess at the tolerances needed for my 3D printer ranging from 0.25 mm to 0.5 mm.  We will see how construction and testing goes.
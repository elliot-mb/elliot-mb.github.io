# The event

My university decided to host a new event this term; an art contest called the "ArtHack". The intention was contestants would ptry to produce some piece of interactive media/sculpture/website etc. within 24 hours, during the weekend. \
There were something like 5 £100 prises up for grabs, all with their own winning categories. Furthermore there were themes *Order and Chaos* and *Dreams and Sleep* which contestants were suggested to base their ideas around. 

I however just decided to build what I wanted and tack the theme on later. Could this be a reason why what I made didn't win **any** catagories? Maybe...

## What I decided to make

As you may be aware from the title, I produced some sort of binary adder? What is that exactly? 

Conceptually a binary adder is fairly self-explanator; that which is able to add two binary numbers together and output the result. 

Making this mechanically sounded challenging, so I decided to see if anyone had done anything similar before. I found an extremely elegant design on [YouTube](https://youtu.be/GcDshWmhF4A) made from plywood and nails.
Since I prefer to have a machine do as much work for me as possible, I created mine in a way that used lasercutting and 3D-printing as much as possible. 

All of this manufacturing was made possible by my faculty's free-to-use facilities (you don't even pay for the filament!)

<img src="https://cdn.discordapp.com/attachments/1077003372600774686/1077577261215121478/image.png" alt="picture" style="width: calc(min(30rem, 80vw);"/>

Pictured above are the parts I started the event with, which were designed and manufactured by me during the week. 

## Documentation

### Binary representation

This machine uses marbles to present data; a register position populated with a marble corresponds to a 1, and with no marble it corresponds to a 0.

### Components by label:

- INPUT: (the register) where marbles are placed on the machine, serves as the ***************input register*************** to which numbers are provided 6-bit in Two’s Complement.
- MEMORY: summing mechanism for those numbers given via INPUT
- OUT(PUT): (the register) where marbles are collected once an addition is finished. The value can be read off in Two’s Complement from the inscriptions below the register.
- DISCARD: where any marbles that MEMORY discards during addition end up.

<img src="https://cdn.discordapp.com/attachments/1077003372600774686/1077574597412663326/image.png" alt="picture" style="width: calc(min(30rem, 80vw);"/>

## Instructions for use

1. Reset the machine:
    1. reset MEMORY by sliding the white handle (in the top right) down and to the left diagonally, the pull it back up all the way 
    2. and slide the OUTPUT register to the right.
2. Slide the INPUT register to the left. 
3. Place the desired number in INPUT, making sure no marbles fall down into MEMORY.
4. Slide INPUT to the right, observe the marbles fall into memory. **The first time you do this** marbles should stay in memory at this point.
5. Repeat steps 2 through 4, choosing a new number to add. NB to subtract the number, simply add the negative of that number. ******************************************************************************Negating a number in Two’s Complement****************************************************************************** is done by ************************************flipping all bits************************************ then ****************adding 1****************, e.g. \
   `` 0110(6) -> 1001 -> 1010(-6) ``\
   `` 0001(1) -> 1110 -> 1111(-1) ``
    
6. Once you complete the summation, the following steps (in order) apply to read the result:
    1. slide the OUTPUT register to the left (observe the slots on this register visibly close),
    2. and set all toggles in MEMORY to their left position (observe any marbles not discarded will fall into OUTPUT)
    
    OUTPUT is then read as described in **Components by label**.
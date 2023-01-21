# _Mr. Roger's Equation_

#### By _**Kai Clausen **_

#### _This application takes input from a user, puts it through an equation and displays the result._

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_

## Description

_This application was created to show knowledge of and the ability to apply arrays, loops, branching statements, and TDD within an application utilizing HTMl, CSS, and JavaScript. The prompt was to write a program that would take a user's input and count up to that number from 0 in increments of 1. It should then replace any number containing the digit '1' with "Beep!" unless that number also contains a '2' which would output "Boop!" and finally, if **any** number includes a '3' it would be replaced with "Won't you be my neighbor?". Then it should output that list of numbers and phrases._

## Tests


### Description: returnInput()

Test: "It should return an inputted number."
Code:
const input = "1"
Expected Output: 1

# Describe: countUpTo()

Test: "It should count up to a given number from 0 by increments of one."
Code:
const input = "5"
Expected output: 0 1 2 3 4 5.

# Describe: isNumber3()

Test: "It should recognize the number 3."
Code:
const input = "3"
Expected Output: true


# Describe: isNumber2()

Test: "It should recognize the number 2."
Code: 
const input = "2"
Expected Output: true

# Describe: isNumber1()

Test: "It should recognize the number 1."
Code: 
const input = "1"
Expected Output: true

# Describe: isSingleDigit()

Test: "It should recognize numbers < 10."
Code: 
const input = 10
Expected Output: false

Test: "It should only recognize numbers >= 0 and numbers < 10."
Code: 
let input = -1
Expected Output: false
let input = 5
Expected Output: true

# Describe: isNegative()
Test: "It should return "Please Enter a Number Greater than 0."
Code: 
const input = "-1"
Expected Output: "Please Enter a Number Greater than 0."
# Describe: mrRogersEquation()

Test: "It should output 'Won't you be my neighbor?' if the number is a 3."
Code:
const input = "3"
Expected Output: "Won't you be my neighbor?"

Test: "It should output 'Boop!' if the number is a 2."
Code: 
const input = "2"
Expected Output: "Boop!"

Test: "It should output 'Beep!' if the number is a 1."
Code:
const input = "1"
Expected Output: "Beep!"

Test: "It should look for 3, 2, or 1 in an array."

# Describe: theNeighborhood()

Test: "It should take an array of numbers that increase by one from 0 to 9 and replace numbers 1, 2, and 3 with their corresponding values in mrRogersEquation().
Code: theNeighborhood("9")
Expected Output: [0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9]

Test: "It should take any number > 9 and output an array with a number of elements equal to the number of digits in the number. 
Code:
let input = 123;
Expected Output: [1, 2, 3]
let input = 14;
Expected Output: [1, 4]

Test: "It should output 'Won't you be my neighbor?' if a digit > 9 includes a '3'."
Code:
let input = "13"
Expected Output: 'Won't you be my neighbor?'
let input = "32"
Expected Output: Won't you be my neighbor?'

Test: "It should output 'Boop!' if a digit > 9 includes a '2' and no '3'."
Code:
let input = "12"
Expected Output: "Boop!"
let input = "21"
Expected Output: "Boop!"

Test: "It should output 'Beep!' if a digit > 9 includes a '1' and no '2' or '3'."
Code: 
let input = "14"
Expected Output: "Beep!"
let input = "41"
Expected Output: "Beep!"

# Describe: numberArray()

Test: "It should take a number and turn it into an array."
Code:
const input = "12"
Expected Output: [1, 2]

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top directory._
* _Open index.html._
* _Interact with the webpage._
* _Alternatively visit the deployment of this application on github pages._


## Known Bugs

* _No Known Bugs_

## License

_MIT - Should any problems arise, feel free to fix them yourself, or contact Kai at kaiclausen123@gmail.com_

Copyright (c) _2023_ _Kai Clausen_
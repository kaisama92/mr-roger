# Description: returnInput()

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

# Describe: numberArray()

Test: "It should take a number and turn it into an array."
Code:
const input = "12"
Expected Output: [1, 2]
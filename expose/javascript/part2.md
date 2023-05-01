# Expose Part 2 #
## Question 1 ##
At line 12, 3 will be printed to the console, because after the for loop ends i is incremented to 3 and is printed out.

## Question 2 ##
At line 13, 150 is printed to the console, because discountedPrice is updated to 300 * (1-0.5)=150 during the last iteration of for loop.

## Question 3 ##
At line 14, 150 is printed to the console, because finalPrice is updated to Math.round(150 * 100)/100 = 150 during the last iteration of for loop.

## Question 4 ##
The function will return [50,100,150], because the discounted prices are pushed into the array discounted, which is returned by the function.

## Question 5 ##
At line 12 an error happens, because the variable i is defined using let and can only be accessed in the range of the for block. Thus, line 12 is out of the scope of variable i and will return an error.

## Question 6 ##
At line 13 an error happens, because the variable discountedPrice is defined using let and can only be accessed in the range of the for block. Thus, line 12 is out of the scope of variable discountedPrice and will return an error.

## Question 7 ##
At line 14, 150 is printed to the console, because the variable finalPrice is defined within the range of the function discountPrices and line 14 is also within this range.

## Question 8 ##
This function will return [50, 100, 150], which is the value of the discounted array calculated in function discountPrices.

## Question 9 ##
At line 11 an error happens, because the variable i is defined using let and can only be accessed in the range of the for block. Thus, line 11 is out of the scope of variable i and will return an error.

## Question 10 ##
At line 12, 3 is printed because the variable length = prices.length = 3, and since length is assigned by const, its value doesn't change and can be accessed in the range of the function discountPrices. Since line 12 is also in the range of this function, it can get access to length and print it successfully.

## Question 11 ##
This function will return [50, 100, 150], which is the value of the array discounted calculated by the function discountPrices. Although the array discounted is assigned as a constant variable, we can still push new variables into the array and make changes inside the array, so the function will return the discounted prices successfully.

## Question 12 ##
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

## Question 13 ##
A. '32', because integers map to their exact string representation, so '3'+'2'='32'
B. 1, because the - sign is considered as math operation, so '3'-2 = 3-2 = 1
C. 3, because null is counted as 0, so 3+0=3
D. '3null', because '3' and 'null' are considered as strings and attached together
E. 4, because true is interpretated as 1
F. 0, because both false and null map to 0.
G. '3undefined', because 'undefined' maps to its string expression.
H. NaN, because we're trying to using integer 3 minus an undefined value, which results in undefined.

## Question 14 ##
A. True, because '2' is recognized as integer 2, which is larger than 1.
B. False, because for both string when comparing them the first number would be compared first, which is '2' compared with '1', which results as false
C. True, because '2' maps to 2, which have equivalent values
D. False, because '2' is string while 2 is integer, which are different data types.
E. False, because true maps to 1, which doesn't equal to 2.
F. True, because Boolean(2) corresponds to true.

## Question 15 ##
While == only compares whether the values of two variables are equivalent, === also requires them to be the same data type.

## Question 16 ##
Based on file part2-question16.js, printed values should be 21, 45, 5, 2.

## Question 17 ##
The result will be [2,4,6], as in the for loop, we go through each value of the original array and pass it into the function doSomething, which returns num*2 for each of the values.

## Question 18 ##
Based on file part2-question18.js, time is printed out every second.

## Question 19 ##
The out put is 1432.
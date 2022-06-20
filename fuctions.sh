#!/bin/sh

#Define function

Hello()
{
	echo "Hello Ginu"
}

#Invoke function
Hello

Hello_With_Params()
{
	echo "Hello $1 $2 "
	return 10
}

#Invoke function with params
Hello_With_Params Ginu George

#Capture value returned previously
ret=$?
echo "Return value is $ret"

number_one()
{
	echo "Alpha online...over"
	number_two
}

number_two()
{
	echo "Beta online...over"
}

number_one

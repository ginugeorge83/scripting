#!/bin/sh

#variable_name=variable_value

NAME="Ginu George"
echo $NAME

# readonly variable
NAME_TWO="name2"
readonly NAME_TWO
NAME_TWO="upasana"

# unset variable
VAR_ONE="variable one"
unset VAR_ONE
echo $VAR_ONE

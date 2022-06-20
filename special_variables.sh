#!/bin/sh

#special varaiables
# $0 : 
# $1....9 : position of the argument

# $# : provide the number of arguments supplied to the script
# $* : provide all the arguments which are double quoted
# $@ : gives you all the arguments which are individually double quoted
# $? : exit status of the last command which you have executed
# $$ : give you the process number of the current shell

echo "File name: $0"
echo "First parameter: $1"
echo "Second parameter: $2"
echo "Quoted values: $@"
echo "Quoted values: $*"
echo "No of Parameters: $#"

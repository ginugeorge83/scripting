#!/bin/bash

for i in $@
do
	ping -c 1 $1 &> /dev/null

if [ $? -ne 0 ]; then
	echo "`date`: ping failed, $i host is down!" | mail -s "$i host is down!" xxxxxxxx@gmail.com

fi
done

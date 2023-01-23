#!/bin/bash
RESULT="'wget -qO- http://192.168.0.18:3001'"
wget -q 192.168.0.18:3001
if [ $? -eq 0 ]; then
	echo 'ok - serviço no ar!'
elif [[ $RESULT == *Pokedex* ]]; then
	echo 'ok - serviço encontrado!'
	echo $RESULT
else
	echo 'failed - serviço não encontrado!'
	exit 1
fi

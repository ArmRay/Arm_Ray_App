#!/bin/bash

cd search && sudo docker build -t armray-search .
cd ..
cd modify && sudo docker build -t armray-modify .
cd ..
cd retrieve && sudo docker build -t armray-retrieve .




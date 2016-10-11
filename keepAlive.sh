#!/bin/bash

#if [ `docker ps | grep armray-modify | wc -l` == 0 ]; then 
#    docker run -p 1152:1152 armray-modify &
#fi
#
#if [ `docker ps | grep armray-retrieve | wc -l` == 0 ]; then
#    docker run -p 1151:1151 armray-retrieve &
#fi
#
#if [ `docker ps | grep armray-modify | wc -l` == 0 ]; then
#    docker run -p 1150:1150 armray-search &
#fi

if [ `docker ps | grep armray-api | wc -l` == 0 ]; then
    docker run -p 1150:8080 armray-search &
fi


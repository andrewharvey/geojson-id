#!/usr/bin/env node

var fs = require('fs');
var featureEach = require('@turf/meta').featureEach;
var featureCollection = require('@turf/helpers').featureCollection;

var features = JSON.parse(fs.readFileSync('/dev/stdin').toString())

var resultFeatures = [];
featureEach(features, function (feature, index) {
    feature.id = index;
    resultFeatures.push(feature);
});

var result = featureCollection(resultFeatures);
console.log(JSON.stringify(result));

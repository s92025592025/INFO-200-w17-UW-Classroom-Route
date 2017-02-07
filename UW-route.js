// @Author: Daniel Wang (JIUN-CHENG WANG)
// @Description: This module is mainly used to analysis the location relationship on campus
// 2017/01/31
'use strict';
/* For testing and reference purpose */
const fs = require('file-system');

var UWRoute = function (apiKey){
	this._apiKey = apiKey;
	this.BASE = 'https://maps.googleapis.com/maps/api/';
	this.buildingList = JSON.parse(__dirname + '/data/testing')
};


// pre: should give abbr the abbreviation of the building(without classroom num)
// post: will return a set of absolution in json format {lat, lng}
UWRoute.prototype.getAbsoluteLocation = function (abbr){
	for(var i = 0; i < buildingList.features.length; i++){
		if(buildingList.features[i].attributes.faccode == abbr){
			return buildingList.features[i].geometry.coordinates;
		}
	}
}

// export
module.exports = UWRoute;
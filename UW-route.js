// @Author: Daniel Wang (JIUN-CHENG WANG)
// @Description: This module is mainly contains geographical data on campus
// 2017/01/31
'use strict';
/* For testing and reference purpose */
const fs = require('file-system');

var UWRoute = function (apiKey){
	this._apiKey = apiKey;
	this.BASE = 'https://maps.googleapis.com/maps/api/';
	this.buildingList = JSON.parse(fs.readFileSync(__dirname + '/data/testing_building_list.json'));
};


// pre: should give abbr the abbreviation of the building(without classroom num)
// post: will return a set of absolution in json format {lat, lng}
UWRoute.prototype.getAbsoluteLocation = function (abbr){
	for(var i = 0; i < this.buildingList.features.length; i++){
		if(this.buildingList.features[i].attributes.faccode == abbr){
			if(this.buildingList.features[i].geometry.hasOwnProperty('coordinates')){
				return this.buildingList.features[i].geometry.coordinates;
			}
		}
	}

	return "Not yet updated";
};

// export
module.exports = UWRoute;
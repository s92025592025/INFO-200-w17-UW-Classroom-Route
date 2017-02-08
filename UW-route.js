// @Author: Daniel Wang (JIUN-CHENG WANG)
// @Description: This module is mainly contains geographical data on campus
// 2017/01/31
'use strict';
/* For testing and reference purpose */
const fs = require('file-system');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var UWRoute = function (apiKey){
	this._apiKey = apiKey;
	this.BASE = 'https://maps.googleapis.com/maps/api/';
	this.buildingList = JSON.parse(fs.readFileSync(__dirname + '/data/testing_building_list.json'));
};


// pre: should give abbr the abbreviation of the building(without classroom num)
// post: will return a set of absolution in json format {lat, lng}
UWRoute.prototype.getAbsoluteLocation = function (abbr){
	for(var i = 0; i < this.buildingList.features.length; i++){
		if(this.buildingList.features[i].attributes.faccode == abbr.toUpperCase()){
			if(this.buildingList.features[i].geometry.hasOwnProperty('coordinates')){
				return this.buildingList.features[i].geometry.coordinates;
			}
		}
	}

	return "Not yet updated";
};

// pre: should give abbr the abbreviation of the building(without classroom num)
// post: will return a address of the building
UWRoute.prototype.getAddress = function (abbr){
	var absolute = this.getAbsoluteLocation(abbr);
	var address = "No Result";
	if(absolute == "Not yet updated"){
		return absolute;
	}

	var response = new XMLHttpRequest();
	response.open('GET', this.BASE + 'geocode/json' + 
					'?key=' + this._apiKey + 
					'&latlng=' + absolute.lat + ',' + absolute.lng, false);
	response.onload = function(){
		var response = JSON.parse(this.responseText);
		if(response.results.length > 0){
			address = response.results[0].formatted_address;
		}
	};

	response.send();

	return address;
}

// export
module.exports = UWRoute;
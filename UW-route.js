// @Author: Daniel Wang (JIUN-CHENG WANG)
// @Description: This module is mainly used to analysis the location relationship on campus
// 2017/01/31

/* For testing and reference purpose */


var UWRoute = function (apiKey){
	this._apiKey = apiKey;
	this.BASE = 'https://maps.googleapis.com/maps/api/';
};


// pre: should give abbr the abbreviation of the building(without classroom num)
// post: will return a set of absolution in json format {lat, lng}
UWRoute.prototype.getAbsoluteLocation = function (abbr){}

// export
module.exports = UWRoute;
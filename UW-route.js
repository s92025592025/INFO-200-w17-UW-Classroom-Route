// @Author: Daniel Wang (JIUN-CHENG WANG)
// @Description: This module is mainly used to analysis the location relationship on campus
// 2017/01/31

var UWRoute = function (name){
	this.name = name;
};

UWRoute.prototype.testing1 = function (age){
	console.log('Hi!, my name is ' + this.name + 'and I\'m ' +
				age + ' years old');
}


module.exports = UWRoute;
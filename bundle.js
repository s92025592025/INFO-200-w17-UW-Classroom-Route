(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// @Author: Daniel Wang (JIUN-CHENG WANG)
// @Description: This module is mainly used to analysis the location relationship on campus
// 2017/01/31

var UWRoute = function (name){
	this.name = name;
};

UWRoute.prototype.testing1 = function (name){
	console.log('Hi!, my name is ' + this.name + 'and I\'m ' +
				age + ' years old');
}


module.exports = UWRoute;
},{}],2:[function(require,module,exports){
var UWRoute = require('./UW-route.js')

var testing = new UWRoute('Daniel');

testing.testing1(19);
},{"./UW-route.js":1}]},{},[2]);

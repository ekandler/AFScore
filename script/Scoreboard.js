var Scoreboard = function(){
};



Scoreboard.prototype = {
	initialize: function() {
		this.visible = false;
		this.pointsHome = 0;
		this.pointsGuests = 0;
		this.down = 0; // 0 = unknown/hide
		this.distance = 10; // distance to next first down
		this.timeoutsHome = 3; // remaining timeouts home
		this.timeoutsGuests = 3; // remaining timeouts guests
	},
	
	setVisibility: function (visible) {
		visible = (typeof visible === "undefined") ? false : visible;
		
		this.visible = (typeof visible === "boolean") ? visible : false;
	},
	toggleVisibility: function () {
		this.visible = (this.visible === false) ? true : false;
	},
	isVisible: function () {
		return this.visible;
	},
	
	setPointsHome: function (pointsHome) {
		if (typeof pointsHome === "undefined") return;
		if (pointsHome < 0) pointsHome = 0;
		
		this.pointsHome = pointsHome;
		},
	getPointsHome: function () {
		return this.pointsHome;
	},
	
	setPointsGuests: function (pointsGuests) {
		if (typeof pointsGuests === "undefined") return;
		if (pointsGuests < 0) pointsGuests = 0;
		
		this.pointsGuests = pointsGuests;
		},
	getPointsGuests: function () {
		return this.pointsGuests;
	},
	
		
	setDown: function (down) {
		down = (typeof down === "undefined") ? 0 : down;
		if (down < 0 || down > 4) down = 0;
		
		this.down = down;
		},
	getDown: function () { // ^^ if you know what i mean
		return this.down;
	},
	
	setDistance: function (distance) {
		distance = (typeof distance === "undefined") ? 0 : distance;
		if (distance < 0) distance = 10;
		
		this.distance = distance;
		},
	getDistance: function () {
		return this.distance;
	},	
	
	getTimeoutsHome: function (timeoutsHome) {
		if (typeof timeoutsHome === "undefined") return;
		if (timeoutsHome < 0) timeoutsHome = 0;
		
		this.timeoutsHome = timeoutsHome;
		},
	setTimeoutsHome: function () {
		return this.timeoutsHome;
	},	
	
	getTimeoutsGuests: function (timeoutsGuests) {
		if (typeof timeoutsGuests === "undefined") return;
		if (timeoutsGuests < 0) timeoutsGuests = 0;
		
		this.timeoutsGuests = timeoutsGuests;
		},
	setTimeoutsGuests: function () {
		return this.timeoutsGuests;
	},
	
	
};

var scoreboard = new Scoreboard();
scoreboard.initialize();

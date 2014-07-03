var Game_Time = function(){
};



Game_Time.prototype = {
	initialize: function() {
		this.quarter = 0;
		this.time_seconds = 0;
		this.running = false;
		this.visible = false;
		this.info = "NOINFO";
	},
  
	RESETTIME: 720,
	tick: function() {
		if (this.running === true && this.time_seconds > 0) {
			this.time_seconds = this.time_seconds - 1;
			return true;
		}
		if (this.running === true && this.time_seconds <= 0) {
			this.running = false;
			return true;
		}
		return false;
	},
  
	setTimeSeconds: function (time)  {
		time = (typeof time === "undefined") ? this.RESETTIME : time;
		if (time > this.RESETTIME) {
			time = this.RESETTIME;
		}

		this.time_seconds = time;
	},
	getTimeSeconds: function ()  {
		return this.time_seconds;
	},
	
	setQuarter: function (quarter) {
		quarter = (typeof quarter === "undefined") ? 1 : quarter;
		if (quarter < 1) quarter = 1;
		// > 4 meaning overtime
		
		this.quarter = quarter;
	},
	incQuarter: function () {
		this.setQuarter(this.quarter + 1);
	},
	decQuarter: function () {
		this.setQuarter(this.quarter - 1);
	},
	getQuarter: function () {
		return this.quarter;
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
	
	setTimeRunning: function (running) {
		running = (typeof running === "undefined") ? false : running;
		
		this.running = (typeof running === "boolean") ? running : false;
	},
	toggleTimeRunning: function () {
		this.running = (this.running === false) ? true : false;
	},
	isTimeRunning: function () {
		return this.running;
	},
	
	InfoEnum: {
	  NOINFO : "NOINFO",
	  FLAG : "FLAG",
	  THOME : "THOME",
	  TGUESTS : "TGUESTS",
	  TOFFICIALS : "TOFFICIALS",
	  MERCY : "MERCY",
	},
	setInfo: function(info) {
		info = (typeof info === "undefined") ? self.prototype.InfoEnum.NOINFO : info;		
		this.info = info;
	},
	getInfo: function() {
		return this.info;
	}
	
	
};

var game_time = new Game_Time();
game_time.initialize();

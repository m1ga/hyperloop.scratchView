var ScratchView = require("com.clock.scratch.ScratchView");
var LayoutParams = require('android.widget.FrameLayout.LayoutParams');
var Gravity = require('android.view.Gravity');
var sv = new ScratchView(Ti.Android.currentActivity, "#FF6600");
var clbPer = null;
var clbCompleted = null;

sv.setEraseStatusListener(new ScratchView.EraseStatusListener({
	onProgress: function(percent) {
		if (clbPer) {
			clbPer(percent);
		}
	},
	onCompleted: function() {
		if (clbCompleted) {
			clbCompleted();
		}
	}
}));

exports.setMaxPercent = function(percent) {
	sv.setMaxPercent(percent);
}

exports.onProgress = function(funct) {
	clbPer = funct;
}
exports.onCompleted = function(funct) {
	clbCompleted = funct;
}
exports.setEraserSize = function(size) {
	sv.setEraserSize(size);
}
exports.clear = function(size) {
	sv.clear();
}
exports.reset = function(size) {
	sv.reset();
}
exports.getView = function(opts) {
	return sv;
}

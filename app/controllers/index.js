var scratchview = require("/scratchview");
scratchview.setEraserSize(30);
scratchview.setMaxPercent(30);
scratchview.onProgress(function(percent){
	$.lbl.text = Math.floor(percent);
})
scratchview.onCompleted(function(){
	scratchview.clear();
})
$.v.add(scratchview.getView());

$.btn.addEventListener("click",function(){
	scratchview.clear();
})
$.btn2.addEventListener("click",function(){
	scratchview.reset();
})
$.index.open();

var gm = gm||{};
gm.settings = {};
gm.settings.data = {};

(function(){
	let stt = gm.settings;

	stt.data.canvasSize = {
		width:1400,
		height:800
	}

	stt.fitCanvasToScreen = function(){
		let ws = window.innerWidth/stt.data.canvasSize.width;
		let hs = window.innerHeight/stt.data.canvasSize.height;
		let refs = 1;

		refs = ws < hs ? ws : hs;

		let w = (stt.data.canvasSize.width*refs).toFixed(2);
		let h = (stt.data.canvasSize.height*refs).toFixed(2);
		gm.app.view.style.width = w + "px";
		gm.app.view.style.height = h + "px";

		gm.app.view.style.marginLeft = (window.innerWidth-w)/2 + "px";
		gm.app.view.style.marginTop = (window.innerHeight-h)/2 + "px";
	}
}());

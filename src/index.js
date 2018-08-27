var gm = gm||{};

function main(){
	initPIXI();
	init();
}
function initPIXI(){
	gm.app = new PIXI.Application(gm.settings.data.canvasSize.width, gm.settings.data.canvasSize.height, { antialias: true });
	document.body.appendChild(gm.app.view);

	gm.app.stage.interactive = true;

	gm.settings.fitCanvasToScreen();

	gm.scene.init();
}
function init(){
	window.addEventListener('resize', function(event){
		gm.settings.fitCanvasToScreen();
	});
}

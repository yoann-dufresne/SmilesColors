
function ImageLoader () {
	this.numLoading = 0;
	this.timeOut = 3;

	this.queue = new Array();
	this.urls = {};
};



ImageLoader.prototype.lanchEvent = function (name) {
	var event = new CustomEvent(
		name, 
		{
			detail: {
				time: new Date(),
			},
			bubbles: true,
			cancelable: true
		}
	);
	document.dispatchEvent(event);
}

ImageLoader.prototype.load = function () {
	if (imgLoader.numLoading == 0) {
		if (imgLoader.timeOut < 3) {
			imgLoader.timeOut += 1;
			setTimeout(imgLoader.load, 1000);
		}
	} else
		imgLoader.loadImage();
}

ImageLoader.prototype.addImageToLoad = function (entry, element, name) {
	this.numLoading += 1;

	var task = {
		entry: entry,
		element: element
	};
	if (name != undefined)
		task.name = name;
	this.queue.push (task);

	if (this.timeOut == 3) {
		this.timeOut = 0;
		this.lanchEvent("loadImages");
	}
}

ImageLoader.prototype.loadImage = function () {
	var task = imgLoader.queue.pop();
	imgLoader.numLoading -= 1;

	loading.getEntryFile (task.entry, "Blob",
		function (url) {
			task.element.src = url;
			if (task.name != undefined)
				imgLoader.urls[task.name] = url;
			imgLoader.lanchEvent("loadImages");
		},
		function (){}
	);
}


var imgLoader = new ImageLoader ();
document.addEventListener ("loadImages", imgLoader.load, false);

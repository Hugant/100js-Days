class BlockMap {
	constructor(map, mapParams, blockParams) {
		this.map = [];

		var mapWidth = Math.floor(canvas.width / 
			(blockParams.width + blockParams.margin.left + blockParams.margin.right));

		var mapHeight = Math.floor((canvas.height - (canvas.height * 0.4)) /
			(blockParams.height + blockParams.margin.top + blockParams.margin.bottom));

		var marginToCenter = (canvas.width - 
			(mapWidth * (blockParams.width + blockParams.margin.left + blockParams.margin.right))) / 2;

		var paddingTop = 4 + statusBoard.height;

		if (map.length > mapHeight) {
			throw ("Number of lines should less then " + mapWidth);
		}

		for (var i in map) {
			if (map[i].length != mapWidth) {
				throw ("Number of block in line should be equal " + mapWidth);
			} else {		
				for (var j in map[i]) {
					if (mapParams[map[i][j]].width != 0 || mapParams[map[i][j]].height != 0) {
						this.map.push(new Block({
							x: (j * blockParams.width)  + (j * (blockParams.margin.right 	+ blockParams.margin.left)) + blockParams.margin.left + marginToCenter,
							y: (i * blockParams.height) + (i * (blockParams.margin.bottom + blockParams.margin.top)) 	+ blockParams.margin.top 	+ paddingTop,
							hp: mapParams[map[i][j]].hp ? mapParams[map[i][j]].hp : 1,
							width: blockParams.width,
							height: blockParams.height,
							color: mapParams[map[i][j]].color ? mapParams[map[i][j]].color : blockParams.color 
						}));
					}
				}
			}
		}
	}

	draw() {
		for (var block in this.map) {
			this.map[block].draw();
		}
	}

	isEmpty() {
		return this.map.length == 0;
	}
}
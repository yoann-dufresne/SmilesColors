
function Model () {
	this.files = new Array();
	this.filesByCoverage = {};

	this.originalMonomers = {};
	this.residues = {};
	this.matchedMols = {};

	this.monomers = new Array();
	this.peptides = new Array();
	this.others = new Array();
};

Model.prototype.meanRatio = function (covs) {
	var acu = 0;
	for (var i=0 ; i<covs.length ; i++)
		acu += covs[i].ratio;
	return Math.round(1000*acu/covs.length)/1000;
}

Model.prototype.sortByCoverage = function (a, b) {
	if (a.graph.monos.length != b.graph.monos.length)
		return b.graph.monos.length - a.graph.monos.length;

	return b.ratio - a.ratio;
}



function ZipFile (name) {
	this.name = name;
	this.entries = {};
	this.jsons = {};

	this.coverages = {};
	this.coveragesIdx = new Array();
};

ZipFile.prototype.addEntry = function (entry) {
	this.entries[entry.filename] = entry;
}



var model = new Model ();

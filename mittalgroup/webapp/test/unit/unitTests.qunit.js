/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zy_mg_pro_sk_printout/mittalgroup/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

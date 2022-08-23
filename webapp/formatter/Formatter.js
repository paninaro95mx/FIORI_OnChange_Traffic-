sap.ui.define(function() {
	"use strict";

	var Formatter = {

		weightState :  function (fMeasure, sUnit) {
			// Boarder values for different status of weight
			var fMaxWeightSuccess = 1;
			var fMaxWeightWarning = 5;
			var fAdjustedMeasure = parseFloat(fMeasure);

			// if the value of fMeasure is not a number, no status will be set
			if (isNaN(fAdjustedMeasure)) {
				return "None";
			} else {

				if (sUnit === "G") {
					fAdjustedMeasure = fMeasure / 1000;
				}

				if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "Success";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "Warning";
				} else {
					return "Error";
				}
			}
		},

		bindTable: function() {
			var _oData = {
				"results": [{
					"color": "1"
				}, {
					"color": "2"
				}]
			};
			var oModel = new sap.ui.model.json.JSONModel(_oData);
			this._oTable.setModel(oModel);
		},

		formatIcon: function (fMeasure, sUnit){
			// Boarder values for different status of weight
			var fMaxWeightSuccess = 1;
			var fMaxWeightWarning = 5;
			var fAdjustedMeasure = parseFloat(fMeasure);

			// if the value of fMeasure is not a number, no status will be set
			if (isNaN(fAdjustedMeasure)) {
				return "None";
			} else {

				if (sUnit === "G") {
					fAdjustedMeasure = fMeasure / 1000;
				}

				if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "sap-icon://sys-enter-2";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "sap-icon://busy";
				} else {
					return "sap-icon://sys-cancel-2";
				}
			}
		}
	};

	return Formatter;

}, /* bExport= */ true);

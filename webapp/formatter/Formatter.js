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

		getColor: function (fMeasure, sUnit){
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
						return "GREEN";
					} else if (fAdjustedMeasure < fMaxWeightWarning) {
						return "YELLOW";
					} else {
						return "RED";
					}
				}
		},

		colorGreenVisible: function (Quantity){
			var fQuantity = parseInt(Quantity);
			if (fQuantity >= 90) {
				return true;
			} else {
				return false;
			}
 		},

		 colorYellowVisible: function (Quantity){
			var fQuantity = parseInt(Quantity);
			if (fQuantity >= 60 && fQuantity < 90) {
				return true;
			} else {
				return false;
			}
 		},

		 colorRedVisible: function (Quantity){
			var fQuantity = parseInt(Quantity);
			if (fQuantity < 60) {
				return true;
			} else {
				return false;
			}
 		},

		getToggleColor: function (Quantity){
			var fQuantity = parseInt(Quantity);
				if (fQuantity > 100) {
					return "None";
				} else if (fQuantity === 100 ) {
					return "GREEN";
				} else if (fQuantity > 90 && fQuantity < 100) {
					return "YELLOW";
				} else {
					return "RED";
				}
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
				}else{
					return "sap-icon://circle-task-2";
				}
				

				/*if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "sap-icon://sys-enter-2";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "sap-icon://busy";
				} else {
					return "sap-icon://sys-cancel-2";
				}*/
			}
		}
	};

	return Formatter;

}, /* bExport= */ true);

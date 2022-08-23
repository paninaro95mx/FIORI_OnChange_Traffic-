sap.ui.define(['sap/ui/core/mvc/Controller',
               'sap/ui/model/json/JSONModel',
			   'sap/m/library',
			   'assembler/com/mx/onchangetraffic/formatter/Formatter'
			],
	function(Controller, JSONModel, mobileLibrary, Formatter) {
	"use strict";

	var PopinLayout = mobileLibrary.PopinLayout;

	return Controller.extend("assembler.com.mx.onchangetraffic.controller.Master", {

		
//			   
		onInit: function () {
			console.log("onInit() of controller called...");
            var oProductModel = new sap.ui.model.json.JSONModel();
            oProductModel.loadData("./model/Products.json");
			this.getView().setModel(oProductModel);
		},

		onPopinLayoutChanged: function() {
			var oTable = this.byId("mvcAppComponent---idMasterView--idProductsTable");
			console.log(oTable);
			var oComboBox = this.byId("idPopinLayout");
			var sPopinLayout = oComboBox.getSelectedKey();
			console.log(sPopinLayout);
			switch (sPopinLayout) {
				case "Block":
					oTable.setPopinLayout(PopinLayout.Block);
					break;
				case "GridLarge":
					oTable.setPopinLayout(PopinLayout.GridLarge);
					break;
				case "GridSmall":
					oTable.setPopinLayout(PopinLayout.GridSmall);
					break;
				default:
					oTable.setPopinLayout(PopinLayout.Block);
					break;
			}
		},

		onSelect: function(oEvent) {
			var bSelected = oEvent.getParameter("selected"),
				sText = oEvent.getSource().getText(),
				oTable = this.byId("mvcAppComponent---idMasterView--idProductsTable"),
				aSticky = oTable.getSticky() || [];

			if (bSelected) {
				aSticky.push(sText);
			} else if (aSticky.length) {
				var iElementIndex = aSticky.indexOf(sText);
				aSticky.splice(iElementIndex, 1);
			}

			oTable.setSticky(aSticky);
		},

		onToggleInfoToolbar: function(oEvent) {
			var oTable = this.byId("idProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
		}
			
	});
});
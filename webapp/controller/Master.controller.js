sap.ui.define(['sap/ui/core/mvc/Controller',
               'sap/ui/model/json/JSONModel',
			   'sap/m/library',
			   'assembler/com/mx/onchangetraffic/formatter/Formatter'
			],
	function(Controller, JSONModel, mobileLibrary, Formatter) {
	"use strict";

	var PopinLayout = mobileLibrary.PopinLayout;

	return Controller.extend("assembler.com.mx.onchangetraffic.controller.Master", {

		onInit: function () {
			console.log("onInit() of controller called...");
            var oProductModel = new sap.ui.model.json.JSONModel();
            oProductModel.loadData("./model/Products.json");
			this.getView().setModel(oProductModel);

			this._oTable = this.byId("idProductsTable");
           // this.bindTable();

		   /*
			this._oTable.onAfterRendering = function() {
				if (sap.m.Table.prototype.onAfterRendering) {
					sap.m.Table.prototype.onAfterRendering.apply(this, arguments);
				}
	
			var oItems = this.getItems();
				for (var i = 0; i < oItems.length; i++) {
					var oItem = oItems[i];
					var obj = oItem.getBindingContext().getObject();
					var sWeightMeasure = obj.WeightMeasure;
					var sWeightUnit = obj.WeightUnit;
					var color = Formatter.getColor(sWeightMeasure,sWeightUnit);
					if (color === 'GREEN') {
						oItem.$().find('.sapUiIcon').addClass('greenIcon');
					} else if (color === 'YELLOW')  {
						oItem.$().find('.sapUiIcon').addClass('yellowIcon');
					}else if (color === 'RED')  {
						oItem.$().find('.sapUiIcon').addClass('redIcon');
					}
				}
				
			}
			*/
		},

		onLiveChange: function (oEvent) {
			var sNewValue = oEvent.getParameter("value");
			this.byId("getValue").setText(sNewValue);
		},

		onFielTableLiveChange: function (oEvent) {
			//var oTable = this._oTable.getItems();
			//var oRow = oTable[0];
			
			var oColumnListItem = oEvent.getSource();
			var oItem = oColumnListItem.getParent();
			var bContext = oItem.getBindingContext();
			var obj = oItem.getBindingContext().getObject();
			console.log(obj.Quantity);
			//oItem.$().find('.sapUiIcon').toggleClass('redIcon');
            //var color = Formatter.getToggleColor(obj.Quantity);
 			//console.log(color); 
			 /*

			if (color === 'GREEN') {
				//oItem.$().find('.sapUiIcon').addClass('greenIcon');
				//oRow.$().find('.sapUiIcon').removeClass();
				oItem.$().find('.sapUiIcon').toggleClass('greenIcon');
				//console.log(oItem.$().find('.sapUiIcon').toggleClass('greenIcon'));
			} else if (color === 'YELLOW')  {
				//oItem.$().find('.sapUiIcon').removeClass();
				//oItem.$().find('.sapUiIcon').addClass('yellowIcon');
				oItem.$().find('.sapUiIcon').toggleClass('yellowIcon');
				//console.log(oItem.$().find('.sapUiIcon').toggleClass('yellowIcon'));
			}else if (color === 'RED')  {
				//oItem.$().find('.sapUiIcon').removeClass();
				//oItem.$().find('.sapUiIcon').addClass('redIcon');
				oItem.$().find('.sapUiIcon').toggleClass('redIcon');
				//console.log(oItem.$().find('.sapUiIcon').toggleClass('redIcon'));
			}else{
				oItem.$().find('.sapUiIcon').removeClass();
			}
			
			*/
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
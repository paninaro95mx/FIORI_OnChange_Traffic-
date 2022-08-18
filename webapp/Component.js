sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "assembler/com/mx/onchangetraffic/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("assembler.com.mx.onchangetraffic.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
				// set the device model
				this.setModel(models.createDeviceModel(), "device");
				// set the FLP model
				this.setModel(models.createFLPModel(), "FLP");

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();
            }
        });
    }
);
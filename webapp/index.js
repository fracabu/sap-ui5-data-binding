// Questo è un codice Javascript che utilizza il framework
// SAPUI5 per creare un'interfaccia utente. In particolare,
// il codice richiede tre moduli: JSONModel, XMLView
// e ResourceModel. 

// La funzione anonima è attaccata all'evento 'init' di
// SAPUI5 utilizzando la funzione attachInit di
// sap.ui.getCore(). 

// Successivamente, viene creato un oggetto JSONModel 
//contenente alcune proprietà, come nome, cognome,
// indirizzo e importo delle vendite. Questo oggetto
// viene assegnato al core di SAPUI5 utilizzando la
// funzione setModel.

// Viene anche creato un oggetto ResourceModel con il
// nome del bundle delle risorse e le lingue supportate,
// e viene assegnato al core di SAPUI5 utilizzando la
// funzione setModel.

// Viene infine creato un oggetto XMLView che rappresenta
// la vista 'App'. La vista viene registrata con il message
// manager di SAPUI5 e viene inserita nel DOM utilizzando
// la funzione placeAt.

sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");


        var oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            address: {
                street: "Dietmar-Hopp-Allee 16",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 12345.6789,
            priceThreshold: 20,
            currencyCode: "EUR"
        });

        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);

        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "de"],
            fallbackLocale: ""
        });

        sap.ui.getCore().setModel(oResourceModel, "i18n");

        // Display the XML view called "App"
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        });

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);


        // Insert the view into the DOM
        oView.placeAt("content");
    });
});



define([
    "dojo/i18n!js/config/nls/local",
    "esri/layers/FeatureLayer",
    'esri/dijit/PopupTemplate'

], function (i18n, FeatureLayer, PopupTemplate) {

    return {
        _layers: [],
        initLayers() {
            this._layers = [
                new FeatureLayer('https://10.6.99.187:6443/arcgis/rest/services/OufokLocatorServices/BatiLocator/GeocodeServer', {
                    title: i18n.algeria,
                    id: i18n.algeria,
                    mode: FeatureLayer.MODE_SNAPSHOT,
                    outFields: ["*"],
                    // infoTemplate: new PopupTemplate({
                    //     title: "{FIRST_NAME}",
                    //     description: "{FIRST_NAME}"
                    // })
                }),
                new FeatureLayer('https://10.6.99.187:6443/arcgis/rest/services/OufokLocatorServices/RouteOSM/GeocodeServer', {
                title: "Noms de Routes/Rues",
                mode: FeatureLayer.MODE_SNAPSHOT,
                outFields: ["*"],
                }),
                new FeatureLayer('https://10.6.99.187:6443/arcgis/rest/services/OufokLocatorServices/Commune/GeocodeServer', {
                title: "Communes d'Algérie",
                mode: FeatureLayer.MODE_SNAPSHOT,
                outFields: ["*"],
                }),
                new FeatureLayer('https://10.6.99.187:6443/arcgis/rest/services/OufokLocatorServices/PostesDD/GeocodeServer', {
                title: "Postes HTA/BT",
                mode: FeatureLayer.MODE_SNAPSHOT,
                outFields: ["*"],
                }),
            ]
            return this._layers;
        },
        getLayers() {
            return this._layers;
        }


    }
});
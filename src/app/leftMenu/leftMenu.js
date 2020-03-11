define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!app/leftMenu/leftMenu.html",
    // "dojo/i18n!app/header/nls/local"

],
function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    template,
    // i18n,
    // user
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        // i18n: i18n,
        startup: function () {

            

        },
       
    });
});
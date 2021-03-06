/// <reference path="../../typings/node.d.ts" />
'use strict';
function autoUpdate(app) {
    console.error("********");
    var ds = app.dataSources.postgres;
    var appModels = ['user'];
    ds.isActual(appModels, function (err, actual) {
        if (!actual) {
            ds.autoupdate(appModels, function (err) {
                if (err) {
                    throw (err);
                }
            });
        }
    });
    console.log("Migrated: " + appModels.join());
}
;
module.exports = autoUpdate;
//# sourceMappingURL=autoupdate.js.map
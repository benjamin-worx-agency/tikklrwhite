function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "demo/shot";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.demoYou = Ti.UI.createView({
        top: "0",
        layout: "vertical",
        width: "100%",
        height: "100%",
        id: "demoYou"
    });
    $.__views.demoYou && $.addTopLevelView($.__views.demoYou);
    $.__views.__alloyId350 = Ti.UI.createView({
        height: "200",
        backgroundColor: "transparent",
        layout: "vertical",
        zIndex: 100,
        id: "__alloyId350"
    });
    $.__views.demoYou.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createView({
        top: "5",
        width: "164",
        height: "162",
        backgroundImage: "shootDemo.png",
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createView({
        height: 60,
        backgroundColor: "transparent",
        layout: "vertical",
        zIndex: 100,
        top: -20,
        id: "__alloyId352"
    });
    $.__views.demoYou.add($.__views.__alloyId352);
    $.__views.__alloyId353 = Ti.UI.createLabel({
        font: {
            fontSize: "14pt",
            fontFamiliy: "Substance-Medium"
        },
        color: Alloy.Globals.TikklrGreen,
        textAlign: "center",
        text: "Create beautiful, crazy,\nfunny and inspiring content\nand share it with the world",
        id: "__alloyId353"
    });
    $.__views.__alloyId352.add($.__views.__alloyId353);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
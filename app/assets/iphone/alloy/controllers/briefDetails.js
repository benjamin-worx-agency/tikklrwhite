function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId61(e) {
        if (e && e.fromAdapter) return;
        __alloyId61.opts || {};
        var models = __alloyId60.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = briefTransform(__alloyId6);
            var __alloyId8 = Ti.UI.createTableViewRow({
                layout: "vertical",
                backgroundColor: Alloy.Globals.TikklrBriefBackground,
                selectionStyle: "none"
            });
            rows.push(__alloyId8);
            var __alloyId10 = Ti.UI.createView({
                left: 0,
                top: 0,
                width: Ti.UI.FILL,
                height: "180",
                backgroundImage: "finger-background.png"
            });
            __alloyId8.add(__alloyId10);
            var __alloyId11 = Alloy.createWidget("com.baboonmedia.remoteimage", "widget", {
                left: 0,
                top: 0,
                width: Ti.UI.FILL,
                height: "180",
                image: _.template("{m.thumb}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                }),
                $model: __alloyId6,
                __parentSymbol: __alloyId10
            });
            __alloyId11.setParent(__alloyId10);
            var __alloyId13 = Ti.UI.createView({
                top: 0,
                width: Ti.UI.FILL,
                backgroundColor: Alloy.Globals.TikklrGray,
                height: Ti.UI.SIZE
            });
            __alloyId8.add(__alloyId13);
            var __alloyId15 = Ti.UI.createLabel({
                color: Alloy.Globals.TikklrGreen,
                left: "10",
                top: "0",
                height: "40",
                right: "10",
                font: {
                    fontSize: "18pt",
                    fontFamily: "Substance-ExtraBold"
                },
                text: _.template("{m.titleUpperCase}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId13.add(__alloyId15);
            var __alloyId16 = Ti.UI.createView({
                top: "-40",
                left: Ti.Platform.displayCaps.platformWidth,
                width: Ti.Platform.displayCaps.platformWidth,
                backgroundColor: Alloy.Globals.TikklrBlack,
                height: "40",
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId16);
            var __alloyId17 = Ti.UI.createView({
                top: 0,
                left: 0,
                width: "40",
                height: "40",
                backgroundImage: "cancel-white.png",
                backgroundColor: Alloy.Globals.TikklrRed
            });
            __alloyId16.add(__alloyId17);
            closeShareBox ? $.addListener(__alloyId17, "click", closeShareBox) : __defers["__alloyId17!click!closeShareBox"] = true;
            var __alloyId18 = Ti.UI.createView({
                left: "30",
                width: "40",
                height: "40",
                backgroundImage: "facebook.png"
            });
            __alloyId16.add(__alloyId18);
            shareClicked ? $.addListener(__alloyId18, "click", shareClicked) : __defers["__alloyId18!click!shareClicked"] = true;
            var __alloyId19 = Ti.UI.createView({
                left: "30",
                width: "40",
                height: "40",
                backgroundImage: "twitter.png"
            });
            __alloyId16.add(__alloyId19);
            shareClicked ? $.addListener(__alloyId19, "click", shareClicked) : __defers["__alloyId19!click!shareClicked"] = true;
            var __alloyId20 = Ti.UI.createView({
                left: "30",
                width: "40",
                height: "40",
                backgroundImage: "linkedIn.png"
            });
            __alloyId16.add(__alloyId20);
            shareClicked ? $.addListener(__alloyId20, "click", shareClicked) : __defers["__alloyId20!click!shareClicked"] = true;
            var __alloyId21 = Ti.UI.createView({
                top: 0,
                left: "30",
                width: "40",
                height: "40",
                backgroundImage: "approve-red.png",
                backgroundColor: Alloy.Globals.TikklrWhite
            });
            __alloyId16.add(__alloyId21);
            closeShareBox ? $.addListener(__alloyId21, "click", closeShareBox) : __defers["__alloyId21!click!closeShareBox"] = true;
            var __alloyId23 = Ti.UI.createView({
                top: 0,
                width: Ti.UI.FILL,
                backgroundColor: Alloy.Globals.TikklrGray,
                height: Ti.UI.SIZE
            });
            __alloyId8.add(__alloyId23);
            var __alloyId25 = Ti.UI.createView({
                top: 5,
                left: 5,
                right: 5,
                height: Ti.UI.SIZE,
                backgroundColor: "transparent"
            });
            __alloyId23.add(__alloyId25);
            var __alloyId26 = Alloy.createWidget("com.baboonmedia.remoteimage", "widget", {
                left: 5,
                top: 0,
                width: 50,
                height: 50,
                bottom: 5,
                image: _.template("{m.brandLogoUrl}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                }),
                $model: __alloyId6,
                __parentSymbol: __alloyId25
            });
            __alloyId26.setParent(__alloyId25);
            var __alloyId28 = Ti.UI.createView({
                top: 0,
                height: Ti.UI.SIZE,
                left: 60,
                width: 170,
                layout: "vertical"
            });
            __alloyId25.add(__alloyId28);
            var __alloyId30 = Ti.UI.createLabel({
                left: 5,
                top: 0,
                font: {
                    fontSize: "12pt",
                    fontFamily: "Substance-ExtraBold"
                },
                color: Alloy.Globals.TikklrGreen,
                text: _.template("{m.brandName}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId28.add(__alloyId30);
            var __alloyId32 = Ti.UI.createLabel({
                left: 5,
                font: {
                    fontSize: "10pt",
                    fontFamily: "Substance-Regular"
                },
                color: Alloy.Globals.TikklrGreen,
                text: _.template("{m.available}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId28.add(__alloyId32);
            var __alloyId34 = Ti.UI.createView({
                right: "22",
                top: "5",
                height: "40",
                width: "40",
                backgroundImage: _.template("{m.categoryImage}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId25.add(__alloyId34);
            var __alloyId35 = Ti.UI.createView({
                height: "53",
                top: "0",
                left: "0",
                right: "0",
                backgroundColor: Alloy.Globals.TikklrLightGreen,
                layout: "horizontal"
            });
            __alloyId8.add(__alloyId35);
            var __alloyId36 = Ti.UI.createView({
                left: "0",
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                layout: "horizontal",
                backgroundColor: Alloy.Globals.TikklrGreen,
                page: "create"
            });
            __alloyId35.add(__alloyId36);
            handleClick ? $.addListener(__alloyId36, "click", handleClick) : __defers["__alloyId36!click!handleClick"] = true;
            var __alloyId37 = Ti.UI.createView({
                width: "53",
                height: "53",
                backgroundImage: _.template("{m.isVideoImage}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId36.add(__alloyId37);
            var __alloyId38 = Ti.UI.createView({
                width: "53",
                height: "53",
                backgroundImage: _.template("{m.thumbAllowedImage}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId36.add(__alloyId38);
            var __alloyId39 = Ti.UI.createView({
                width: "53",
                height: "53",
                backgroundImage: _.template("{m.selfieImage}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId36.add(__alloyId39);
            var __alloyId41 = Ti.UI.createView({
                left: "10",
                top: "0",
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                layout: "horizontal",
                backgroundColor: Alloy.Globals.TikklrLightGreen
            });
            __alloyId35.add(__alloyId41);
            var __alloyId43 = Alloy.createWidget("com.baboonmedia.remoteimage", "widget", {
                left: "15",
                width: "40",
                height: "40",
                image: _.template("{m.voucher_image}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                }),
                $model: __alloyId6,
                __parentSymbol: __alloyId41
            });
            __alloyId43.setParent(__alloyId41);
            var __alloyId45 = Ti.UI.createLabel({
                left: "0",
                color: Alloy.Globals.TikklrGreen,
                font: {
                    fontSize: "25pt",
                    fontFamily: "Substance-ExtraBold"
                },
                width: "80",
                height: "53",
                textAlign: "center",
                text: _.template("{m.voucherPercent}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId41.add(__alloyId45);
            var __alloyId47 = Ti.UI.createView({
                top: "5",
                height: "50",
                left: "5",
                right: "5",
                backgroundColor: Alloy.Globals.TikklrGray,
                color: Alloy.Globals.TikklrSettingsText,
                font: {
                    fontSize: "15pt",
                    fontFamily: "Substance-Medium"
                }
            });
            __alloyId8.add(__alloyId47);
            var __alloyId49 = Ti.UI.createLabel({
                backgroundColor: Alloy.Globals.TikklrGray,
                color: Alloy.Globals.TikklrSettingsText,
                font: {
                    fontSize: "15pt",
                    fontFamily: "Substance-Medium"
                },
                text: _.template("{m.briefSummary}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId47.add(__alloyId49);
            var __alloyId51 = Ti.UI.createView({
                top: "5",
                height: Ti.UI.SIZE,
                left: "5",
                right: "5",
                backgroundColor: Alloy.Globals.TikklrGray,
                color: Alloy.Globals.TikklrSettingsText,
                font: {
                    fontSize: "15pt",
                    fontFamily: "Substance-Regular"
                }
            });
            __alloyId8.add(__alloyId51);
            var __alloyId53 = Ti.UI.createLabel({
                backgroundColor: Alloy.Globals.TikklrGray,
                color: Alloy.Globals.TikklrSettingsText,
                font: {
                    fontSize: "15pt",
                    fontFamily: "Substance-Regular"
                },
                text: _.template("{m.briefFull}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId51.add(__alloyId53);
            var __alloyId55 = Ti.UI.createView({
                top: "5",
                height: "95",
                left: "5",
                right: "5",
                backgroundColor: Alloy.Globals.TikklrGray
            });
            __alloyId8.add(__alloyId55);
            var __alloyId57 = Ti.UI.createView({
                backgroundImage: "hourglass-green.png",
                left: "5",
                width: "50",
                height: "50"
            });
            __alloyId55.add(__alloyId57);
            var __alloyId59 = Ti.UI.createLabel({
                right: "5",
                backgroundColor: Alloy.Globals.TikklrGray,
                color: Alloy.Globals.TikklrSettingsText,
                font: {
                    fontSize: "15pt",
                    fontFamily: "Substance-Regular"
                },
                text: _.template("{m.endDate}", {
                    m: __alloyId6.__transform
                }, {
                    interpolate: /\{([\s\S]+?)\}/g
                })
            });
            __alloyId55.add(__alloyId59);
        }
        $.__views.justForScroll.setData(rows);
    }
    function seeCurrentTiks() {
        var title = Alloy.Models.currentNode.get("title");
        args = {
            search: title,
            loadGallery: true,
            searchBy: "kaltura_tags"
        };
        Ti.App.fireEvent("attachWindow", {
            page: "search/hash",
            arguments: args
        });
    }
    function closeShareBox() {
        var animation = Ti.UI.createAnimation({
            left: Ti.Platform.displayCaps.platformWidth
        });
        $.shareRow.animate(animation);
        $.shareRow.toggle = false;
    }
    function makeShareActive(source) {
        "facebook" == source.id ? source.backgroundImage = "facebook-fill.png" : "twitter" == source.id ? source.backgroundImage = "twitter-fill.png" : "linkedIn" == source.id && (source.backgroundImage = "linkedIn-fill.png");
    }
    function makeShareNonActive(source) {
        "facebook" == source.id ? source.backgroundImage = "facebook.png" : "twitter" == source.id ? source.backgroundImage = "twitter.png" : "linkedIn" == source.id && (source.backgroundImage = "linkedIn.png");
    }
    function shareClicked(e) {
        if (false == e.source.toggle || "undefined" == typeof e.source.toggle) {
            makeShareActive(e.source);
            e.source.toggle = true;
        } else {
            makeShareNonActive(e.source);
            e.source.toggle = false;
        }
    }
    function handleClick(e) {
        var rewardId = "";
        "undefined" != typeof Alloy.Models.currentNode.get("reward") && (rewardId = Alloy.Models.currentNode.get("reward").id);
        args = {
            type: e.source.type,
            title: "",
            tags: Alloy.Models.currentNode.get("title"),
            category: Alloy.Models.currentNode.get("category"),
            rewardId: rewardId
        };
        Ti.App.fireEvent("attachWindow", {
            page: "create",
            arguments: args
        });
    }
    require("alloy/controllers/tikkGallery").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefDetails";
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
    var __defers = {};
    $.currentNode = Alloy.createModel("Node");
    $.currentNodeList = Alloy.createCollection("Node");
    $.__views.briefDetailsView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: Alloy.Globals.TikklrBriefBackground,
        id: "briefDetailsView"
    });
    $.__views.briefDetailsView && $.addTopLevelView($.__views.briefDetailsView);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: 0,
        width: Ti.Platform.displayCaps.platformWidth,
        backgroundColor: Alloy.Globals.TikklrBlack,
        height: "40",
        id: "__alloyId3"
    });
    $.__views.briefDetailsView.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        left: "20",
        width: "40",
        height: "40",
        backgroundColor: "transparent",
        backgroundImage: "back.png",
        selectedBackgroundImage: "back-pressed.png",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    backClicked ? $.addListener($.__views.__alloyId4, "click", backClicked) : __defers["$.__views.__alloyId4!click!backClicked"] = true;
    $.__views.__alloyId5 = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: Alloy.Globals.TikklrGreen,
        font: {
            fontSize: "20pt",
            fontFamily: "Substance-ExtraBold"
        },
        height: 35,
        zIndex: 1e3,
        text: "BRIEF",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.justForScroll = Ti.UI.createTableView({
        layout: "vertical",
        backgroundColor: Alloy.Globals.TikklrBriefBackground,
        height: "475",
        id: "justForScroll"
    });
    $.__views.briefDetailsView.add($.__views.justForScroll);
    var __alloyId60 = Alloy.Collections["currentNodeList"] || currentNodeList;
    __alloyId60.on("fetch destroy change add remove reset", __alloyId61);
    $.__views.__alloyId62 = Ti.UI.createButton({
        bottom: "0",
        height: "50",
        backgroundColor: Alloy.Globals.TikklrBriefBackground,
        color: Alloy.Globals.TikklrGreen,
        font: {
            fontSize: "20pt",
            fontFamily: "Substance-ExtraBold"
        },
        title: "SEE CURRENT TIKKS",
        id: "__alloyId62"
    });
    $.__views.briefDetailsView.add($.__views.__alloyId62);
    seeCurrentTiks ? $.addListener($.__views.__alloyId62, "click", seeCurrentTiks) : __defers["$.__views.__alloyId62!click!seeCurrentTiks"] = true;
    exports.destroy = function() {
        __alloyId60 && __alloyId60.off("fetch destroy change add remove reset", __alloyId61);
    };
    _.extend($, $.__views);
    exports.baseController = "tikkGallery";
    require("alloy/animation");
    arguments[0];
    var args = arguments[0] || null;
    0 == Alloy.Collections.currentNodeList.length && Alloy.Collections.currentNodeList.add(Alloy.Models.currentNode);
    exports.clean = function() {
        Alloy.Collections.currentNodeList.reset();
        $.destroy();
        $.off();
    };
    __defers["$.__views.__alloyId4!click!backClicked"] && $.addListener($.__views.__alloyId4, "click", backClicked);
    __defers["__alloyId17!click!closeShareBox"] && $.addListener(__alloyId17, "click", closeShareBox);
    __defers["__alloyId18!click!shareClicked"] && $.addListener(__alloyId18, "click", shareClicked);
    __defers["__alloyId19!click!shareClicked"] && $.addListener(__alloyId19, "click", shareClicked);
    __defers["__alloyId20!click!shareClicked"] && $.addListener(__alloyId20, "click", shareClicked);
    __defers["__alloyId21!click!closeShareBox"] && $.addListener(__alloyId21, "click", closeShareBox);
    __defers["__alloyId36!click!handleClick"] && $.addListener(__alloyId36, "click", handleClick);
    __defers["$.__views.__alloyId62!click!seeCurrentTiks"] && $.addListener($.__views.__alloyId62, "click", seeCurrentTiks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
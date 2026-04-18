gdjs.blackCode = {};
gdjs.blackCode.localVariables = [];
gdjs.blackCode.idToCallbackMap = new Map();


gdjs.blackCode.eventsList0 = function(runtimeScene) {

};

gdjs.blackCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.blackCode.eventsList0(runtimeScene);


return;

}

gdjs['blackCode'] = gdjs.blackCode;

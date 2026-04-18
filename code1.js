gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDIntroObjects1= [];
gdjs.IntroCode.GDIntroObjects2= [];


gdjs.IntroCode.asyncCallback16617828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "black", false);
}
gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.idToCallbackMap.set(16617828, gdjs.IntroCode.asyncCallback16617828);
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(22.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback16617828(runtimeScene, asyncObjectsList)), 16617828, asyncObjectsList);
}
}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.IntroCode.GDIntroObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntroObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntroObjects1[i].play();
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;

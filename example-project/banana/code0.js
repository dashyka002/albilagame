gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDbg1Objects1= [];
gdjs.startCode.GDbg1Objects2= [];
gdjs.startCode.GDstarttextObjects1= [];
gdjs.startCode.GDstarttextObjects2= [];
gdjs.startCode.GDsTextObjects1= [];
gdjs.startCode.GDsTextObjects2= [];
gdjs.startCode.GDStartButtonObjects1= [];
gdjs.startCode.GDStartButtonObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.startCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDStartButtonObjects1[k] = gdjs.startCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "banana", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDbg1Objects1.length = 0;
gdjs.startCode.GDbg1Objects2.length = 0;
gdjs.startCode.GDstarttextObjects1.length = 0;
gdjs.startCode.GDstarttextObjects2.length = 0;
gdjs.startCode.GDsTextObjects1.length = 0;
gdjs.startCode.GDsTextObjects2.length = 0;
gdjs.startCode.GDStartButtonObjects1.length = 0;
gdjs.startCode.GDStartButtonObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDbg1Objects1.length = 0;
gdjs.startCode.GDbg1Objects2.length = 0;
gdjs.startCode.GDstarttextObjects1.length = 0;
gdjs.startCode.GDstarttextObjects2.length = 0;
gdjs.startCode.GDsTextObjects1.length = 0;
gdjs.startCode.GDsTextObjects2.length = 0;
gdjs.startCode.GDStartButtonObjects1.length = 0;
gdjs.startCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;

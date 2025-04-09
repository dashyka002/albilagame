gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.GDbggObjects1= [];
gdjs._50Code.GDbggObjects2= [];
gdjs._50Code.GDwinObjects1= [];
gdjs._50Code.GDwinObjects2= [];
gdjs._50Code.GDRightArrowButtonObjects1= [];
gdjs._50Code.GDRightArrowButtonObjects2= [];


gdjs._50Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs._50Code.GDRightArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDRightArrowButtonObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDRightArrowButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDRightArrowButtonObjects1[k] = gdjs._50Code.GDRightArrowButtonObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDRightArrowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jungle", false);
}}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDbggObjects1.length = 0;
gdjs._50Code.GDbggObjects2.length = 0;
gdjs._50Code.GDwinObjects1.length = 0;
gdjs._50Code.GDwinObjects2.length = 0;
gdjs._50Code.GDRightArrowButtonObjects1.length = 0;
gdjs._50Code.GDRightArrowButtonObjects2.length = 0;

gdjs._50Code.eventsList0(runtimeScene);
gdjs._50Code.GDbggObjects1.length = 0;
gdjs._50Code.GDbggObjects2.length = 0;
gdjs._50Code.GDwinObjects1.length = 0;
gdjs._50Code.GDwinObjects2.length = 0;
gdjs._50Code.GDRightArrowButtonObjects1.length = 0;
gdjs._50Code.GDRightArrowButtonObjects2.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;

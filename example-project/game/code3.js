gdjs.jungleCode = {};
gdjs.jungleCode.localVariables = [];
gdjs.jungleCode.GDbg3Objects1= [];
gdjs.jungleCode.GDbg3Objects2= [];
gdjs.jungleCode.GDtigerObjects1= [];
gdjs.jungleCode.GDtigerObjects2= [];
gdjs.jungleCode.GDfloorObjects1= [];
gdjs.jungleCode.GDfloorObjects2= [];
gdjs.jungleCode.GDCoinObjects1= [];
gdjs.jungleCode.GDCoinObjects2= [];
gdjs.jungleCode.GDsccoreObjects1= [];
gdjs.jungleCode.GDsccoreObjects2= [];
gdjs.jungleCode.GDNewTextObjects1= [];
gdjs.jungleCode.GDNewTextObjects2= [];
gdjs.jungleCode.GD_95952Objects1= [];
gdjs.jungleCode.GD_95952Objects2= [];
gdjs.jungleCode.GDReturnObjects1= [];
gdjs.jungleCode.GDReturnObjects2= [];


gdjs.jungleCode.mapOfGDgdjs_9546jungleCode_9546GDtigerObjects1Objects = Hashtable.newFrom({"tiger": gdjs.jungleCode.GDtigerObjects1});
gdjs.jungleCode.mapOfGDgdjs_9546jungleCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.jungleCode.GDCoinObjects1});
gdjs.jungleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.jungleCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.jungleCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.jungleCode.GDNewTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tiger"), gdjs.jungleCode.GDtigerObjects1);
{for(var i = 0, len = gdjs.jungleCode.GDtigerObjects1.length ;i < len;++i) {
    gdjs.jungleCode.GDtigerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tiger"), gdjs.jungleCode.GDtigerObjects1);
{for(var i = 0, len = gdjs.jungleCode.GDtigerObjects1.length ;i < len;++i) {
    gdjs.jungleCode.GDtigerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("tiger"), gdjs.jungleCode.GDtigerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.jungleCode.GDtigerObjects1.length !== 0 ? gdjs.jungleCode.GDtigerObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("sccore"), gdjs.jungleCode.GDsccoreObjects1);
{for(var i = 0, len = gdjs.jungleCode.GDsccoreObjects1.length ;i < len;++i) {
    gdjs.jungleCode.GDsccoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.jungleCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("tiger"), gdjs.jungleCode.GDtigerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jungleCode.mapOfGDgdjs_9546jungleCode_9546GDtigerObjects1Objects, gdjs.jungleCode.mapOfGDgdjs_9546jungleCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9846996);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.jungleCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.jungleCode.GD_95952Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{for(var i = 0, len = gdjs.jungleCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.jungleCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.jungleCode.GD_95952Objects1.length ;i < len;++i) {
    gdjs.jungleCode.GD_95952Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 35);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.jungleCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.jungleCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.jungleCode.GDNewTextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.jungleCode.GD_95952Objects1);
{for(var i = 0, len = gdjs.jungleCode.GD_95952Objects1.length ;i < len;++i) {
    gdjs.jungleCode.GD_95952Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.jungleCode.GDReturnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jungleCode.GDReturnObjects1.length;i<l;++i) {
    if ( gdjs.jungleCode.GDReturnObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.jungleCode.GDReturnObjects1[k] = gdjs.jungleCode.GDReturnObjects1[i];
        ++k;
    }
}
gdjs.jungleCode.GDReturnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.jungleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jungleCode.GDbg3Objects1.length = 0;
gdjs.jungleCode.GDbg3Objects2.length = 0;
gdjs.jungleCode.GDtigerObjects1.length = 0;
gdjs.jungleCode.GDtigerObjects2.length = 0;
gdjs.jungleCode.GDfloorObjects1.length = 0;
gdjs.jungleCode.GDfloorObjects2.length = 0;
gdjs.jungleCode.GDCoinObjects1.length = 0;
gdjs.jungleCode.GDCoinObjects2.length = 0;
gdjs.jungleCode.GDsccoreObjects1.length = 0;
gdjs.jungleCode.GDsccoreObjects2.length = 0;
gdjs.jungleCode.GDNewTextObjects1.length = 0;
gdjs.jungleCode.GDNewTextObjects2.length = 0;
gdjs.jungleCode.GD_95952Objects1.length = 0;
gdjs.jungleCode.GD_95952Objects2.length = 0;
gdjs.jungleCode.GDReturnObjects1.length = 0;
gdjs.jungleCode.GDReturnObjects2.length = 0;

gdjs.jungleCode.eventsList0(runtimeScene);
gdjs.jungleCode.GDbg3Objects1.length = 0;
gdjs.jungleCode.GDbg3Objects2.length = 0;
gdjs.jungleCode.GDtigerObjects1.length = 0;
gdjs.jungleCode.GDtigerObjects2.length = 0;
gdjs.jungleCode.GDfloorObjects1.length = 0;
gdjs.jungleCode.GDfloorObjects2.length = 0;
gdjs.jungleCode.GDCoinObjects1.length = 0;
gdjs.jungleCode.GDCoinObjects2.length = 0;
gdjs.jungleCode.GDsccoreObjects1.length = 0;
gdjs.jungleCode.GDsccoreObjects2.length = 0;
gdjs.jungleCode.GDNewTextObjects1.length = 0;
gdjs.jungleCode.GDNewTextObjects2.length = 0;
gdjs.jungleCode.GD_95952Objects1.length = 0;
gdjs.jungleCode.GD_95952Objects2.length = 0;
gdjs.jungleCode.GDReturnObjects1.length = 0;
gdjs.jungleCode.GDReturnObjects2.length = 0;


return;

}

gdjs['jungleCode'] = gdjs.jungleCode;

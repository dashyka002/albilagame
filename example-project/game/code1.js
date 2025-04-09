gdjs.bananaCode = {};
gdjs.bananaCode.localVariables = [];
gdjs.bananaCode.GDbg2Objects1= [];
gdjs.bananaCode.GDbg2Objects2= [];
gdjs.bananaCode.GDmonkey2Objects1= [];
gdjs.bananaCode.GDmonkey2Objects2= [];
gdjs.bananaCode.GDplayer2Objects1= [];
gdjs.bananaCode.GDplayer2Objects2= [];
gdjs.bananaCode.GDbarrierObjects1= [];
gdjs.bananaCode.GDbarrierObjects2= [];
gdjs.bananaCode.GDBanana2Objects1= [];
gdjs.bananaCode.GDBanana2Objects2= [];
gdjs.bananaCode.GDBullet1Objects1= [];
gdjs.bananaCode.GDBullet1Objects2= [];
gdjs.bananaCode.GDmonkey1Objects1= [];
gdjs.bananaCode.GDmonkey1Objects2= [];


gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.bananaCode.GDBullet1Objects1});
gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDmonkey2Objects1Objects = Hashtable.newFrom({"monkey2": gdjs.bananaCode.GDmonkey2Objects1});
gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.bananaCode.GDBullet1Objects1});
gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDmonkey2Objects1ObjectsGDgdjs_9546bananaCode_9546GDmonkey1Objects1Objects = Hashtable.newFrom({"monkey2": gdjs.bananaCode.GDmonkey2Objects1, "monkey1": gdjs.bananaCode.GDmonkey1Objects1});
gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.bananaCode.GDbarrierObjects1});
gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.bananaCode.GDbarrierObjects1});
gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.bananaCode.GDbarrierObjects1});
gdjs.bananaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet1"), gdjs.bananaCode.GDBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("monkey2"), gdjs.bananaCode.GDmonkey2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDBullet1Objects1Objects, gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDmonkey2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.bananaCode.GDmonkey2Objects1 */
{for(var i = 0, len = gdjs.bananaCode.GDmonkey2Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDmonkey2Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Banana2"), gdjs.bananaCode.GDBanana2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.bananaCode.GDplayer2Objects1);
gdjs.bananaCode.GDBullet1Objects1.length = 0;

{for(var i = 0, len = gdjs.bananaCode.GDBanana2Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDBanana2Objects1[i].getBehavior("FireBullet").FireTowardPosition((( gdjs.bananaCode.GDplayer2Objects1.length === 0 ) ? 0 :gdjs.bananaCode.GDplayer2Objects1[0].getPointX("")), (( gdjs.bananaCode.GDplayer2Objects1.length === 0 ) ? 0 :gdjs.bananaCode.GDplayer2Objects1[0].getPointY("")), gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDBullet1Objects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Banana2"), gdjs.bananaCode.GDBanana2Objects1);
{for(var i = 0, len = gdjs.bananaCode.GDBanana2Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDBanana2Objects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 540, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.bananaCode.GDbarrierObjects1);
gdjs.copyArray(runtimeScene.getObjects("monkey1"), gdjs.bananaCode.GDmonkey1Objects1);
gdjs.copyArray(runtimeScene.getObjects("monkey2"), gdjs.bananaCode.GDmonkey2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDmonkey2Objects1ObjectsGDgdjs_9546bananaCode_9546GDmonkey1Objects1Objects, gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDbarrierObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.bananaCode.GDbarrierObjects1 */
/* Reuse gdjs.bananaCode.GDmonkey1Objects1 */
/* Reuse gdjs.bananaCode.GDmonkey2Objects1 */
{for(var i = 0, len = gdjs.bananaCode.GDmonkey2Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDmonkey2Objects1[i].getBehavior("Bounce").BounceOff(gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDbarrierObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.bananaCode.GDmonkey1Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDmonkey1Objects1[i].getBehavior("Bounce").BounceOff(gdjs.bananaCode.mapOfGDgdjs_9546bananaCode_9546GDbarrierObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("monkey1"), gdjs.bananaCode.GDmonkey1Objects1);
gdjs.copyArray(runtimeScene.getObjects("monkey2"), gdjs.bananaCode.GDmonkey2Objects1);
{for(var i = 0, len = gdjs.bananaCode.GDmonkey2Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDmonkey2Objects1[i].addForceTowardPosition(gdjs.random(720), gdjs.random(720), 100, 1);
}
for(var i = 0, len = gdjs.bananaCode.GDmonkey1Objects1.length ;i < len;++i) {
    gdjs.bananaCode.GDmonkey1Objects1[i].addForceTowardPosition(gdjs.random(720), gdjs.random(720), 100, 1);
}
}}

}


};

gdjs.bananaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bananaCode.GDbg2Objects1.length = 0;
gdjs.bananaCode.GDbg2Objects2.length = 0;
gdjs.bananaCode.GDmonkey2Objects1.length = 0;
gdjs.bananaCode.GDmonkey2Objects2.length = 0;
gdjs.bananaCode.GDplayer2Objects1.length = 0;
gdjs.bananaCode.GDplayer2Objects2.length = 0;
gdjs.bananaCode.GDbarrierObjects1.length = 0;
gdjs.bananaCode.GDbarrierObjects2.length = 0;
gdjs.bananaCode.GDBanana2Objects1.length = 0;
gdjs.bananaCode.GDBanana2Objects2.length = 0;
gdjs.bananaCode.GDBullet1Objects1.length = 0;
gdjs.bananaCode.GDBullet1Objects2.length = 0;
gdjs.bananaCode.GDmonkey1Objects1.length = 0;
gdjs.bananaCode.GDmonkey1Objects2.length = 0;

gdjs.bananaCode.eventsList0(runtimeScene);
gdjs.bananaCode.GDbg2Objects1.length = 0;
gdjs.bananaCode.GDbg2Objects2.length = 0;
gdjs.bananaCode.GDmonkey2Objects1.length = 0;
gdjs.bananaCode.GDmonkey2Objects2.length = 0;
gdjs.bananaCode.GDplayer2Objects1.length = 0;
gdjs.bananaCode.GDplayer2Objects2.length = 0;
gdjs.bananaCode.GDbarrierObjects1.length = 0;
gdjs.bananaCode.GDbarrierObjects2.length = 0;
gdjs.bananaCode.GDBanana2Objects1.length = 0;
gdjs.bananaCode.GDBanana2Objects2.length = 0;
gdjs.bananaCode.GDBullet1Objects1.length = 0;
gdjs.bananaCode.GDBullet1Objects2.length = 0;
gdjs.bananaCode.GDmonkey1Objects1.length = 0;
gdjs.bananaCode.GDmonkey1Objects2.length = 0;


return;

}

gdjs['bananaCode'] = gdjs.bananaCode;

/**
 * Created by Piers on 06/07/2016.
 */
/**
 * @fileOverview Screeps module. Task move object.
 * @author Piers Shepperson
 */
"use strict";
var gc = require("gc");
var TaskActions = require("task.actions")
var tasks = require("tasks");

/**
 * Task move object. Used when we need to find the object to move to.
 * @module tasksHarvest
 */

function TaskMoveXY (x, y) {
    this.taskType = gc.TASK_MOVE_XY;
    this.conflicts = gc.MOVE;
    this.x = x;
    this.y = y;
    this.loop = true;
    this.pickup = true;
}

TaskMoveXY.prototype.doTask = function(creep, task, actions) {
    task.loop = true;
  //  console.log(creep,"In taskmovexy xpos",creep.pos.x , task.x , "ypos" ,creep.pos.y , task.y);
    var result = creep.moveTo(task.x,task.y);
    creep.say(result);
    switch (result) {
        case OK:    	            //0	The operation has been scheduled successfully.
           // task.loop = false;
            console.log(creep, "In after move xpos",creep.pos.x , task.x , "ypos" ,creep.pos.y , task.y);
            if (creep.pos.x == task.x &&  creep.pos.y == task.y) {
                console.log(creep,"About to set task.loop to false");
                task.loop = false;

                console.log(creep,"Move to x y got there");
                return gc.RESULT_FINISHED;
            } else {
                return gc.RESULT_UNFINISHED;
            }
        case ERR_TIRED:             //-11	The fatigue indicator of the creep is non-zero.
            return gc.RESULT_UNFINISHED;
        case ERR_NOT_OWNER:	        //-1	You are not the owner of this creep.
        case ERR_BUSY:	            //-4	The creep is still being spawned.
        case ERR_NO_BODYPART:	    //-12	There are no MOVE body parts in this creep’s body.
        case ERR_INVALID_TARGET:	//-7	The target provided is invalid.
        case ERR_NO_PATH:	        //-2	No path to the target could be found.
        default:
            return gc.RESULT_UNFINISHED;
    }
};


module.exports = TaskMoveXY;


























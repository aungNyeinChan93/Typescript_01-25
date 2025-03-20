"use strict";
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
    Status[Status["Failed"] = 3] = "Failed";
    Status[Status["reject"] = 4] = "reject";
})(Status || (Status = {}));
let taskStatus = Status.InProgress;
console.log(Status[4]);
console.log(taskStatus);
console.log(Status[taskStatus]);
const pending = Status[0];
const failed = Status.Failed;
console.log(pending);
console.log(failed);
"🤷‍♂️🤷‍♂️🤷‍♂️ ok 👇";
var Drive;
(function (Drive) {
    Drive["s"] = "stop";
    Drive["m"] = "move";
    Drive["l"] = "left";
    Drive["r"] = "right";
    Drive["t"] = "up";
    Drive["b"] = "down";
})(Drive || (Drive = {}));
const drive = Drive.m;
console.log(drive);
var Direction;
(function (Direction) {
    Direction[Direction["forward"] = 0] = "forward";
    Direction[Direction["back"] = 1] = "back";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
const move = (direction) => {
    if (direction == Direction.forward) {
        console.log('go to forward');
    }
    else if (direction == Direction.back) {
        console.log('go to back');
    }
    else if (direction == Direction.left) {
        console.log('go to left');
    }
    else if (direction == Direction.right) {
        console.log('go to right');
    }
};
move(0);
move(1);
move(2);
move(3);
move(Direction.left);
move(Direction.back);
"👌👌👌👌";

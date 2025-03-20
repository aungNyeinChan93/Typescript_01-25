enum Status {
    Pending,   // 0
    InProgress, // 1
    Completed,  // 2
    Failed,     // 3
    reject
}

let taskStatus: Status = Status.InProgress;

console.log(Status[4]);

console.log(taskStatus); // Output: 1
console.log(Status[taskStatus]);

const pending = Status[0]
const failed = Status.Failed

console.log(pending);
console.log(failed);

"🤷‍♂️🤷‍♂️🤷‍♂️ ok 👇"

enum Drive {
    s = 'stop',
    m = 'move',
    l = 'left',
    r = 'right',
    t = 'up',
    b = 'down'
}

const drive: Drive = Drive.m;

console.log(drive);


type direction = 0 | 1 | 2 | 3;

enum Direction {
    forward,
    back,
    left,
    right
}

const move = (direction: direction) => {
    if (direction == Direction.forward) {
        console.log('go to forward');
    } else if (direction == Direction.back) {
        console.log('go to back');
    } else if (direction == Direction.left) {
        console.log('go to left');
    } else if (direction == Direction.right) {
        console.log('go to right');
    }
}
move(0)
move(1)
move(2)
move(3)
// move(10) error
move(Direction.left)
move(Direction.back)

// console.log(Direction[2]);
// console.log(Direction.left);

"👌👌👌👌"



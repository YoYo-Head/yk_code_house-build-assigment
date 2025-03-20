let test = 1
function isEven(num: number): boolean {
    let even: boolean;
    let ans = num % 2
    if (ans == 0) {
        even = true
    } else {
        even = false
    }
    
    return even
}

function listChecker(lister: any, targetItem: any, totalItems: any): boolean {
    let itemNum: number;
    let item: any;
    let inList: boolean;
    for (let itemTest = 0; itemTest < totalItems; itemTest++) {
        itemNum = itemTest + 1
        item = lister[itemNum]
        if (item == targetItem) {
            inList = true
            break
        } else if (totalItems == itemNum) {
            inList = false
        } else {
            continue
        }
        
    }
    return inList
}

function on_chat_woodFrame() {
    console.log("work here next")
}

player.onChat("floor", function on_chat_floor() {
    let testing: Position;
    let xfloorM: any;
    let zfloorM: any;
    let turn: boolean;
    let Xpos = 22
    let Ypos = -60
    let Zpos = 12
    let repeat = 1
    agent.teleport(world(Xpos, Ypos, Zpos), NORTH)
    agent.setSlot(1)
    let xfloorCoords = [Xpos + 1, Xpos + 2, Xpos + 3, Xpos + 4, Xpos + 5, Xpos + 6, Xpos + 7, Xpos + 8, Xpos + 9, Xpos + 10, Xpos + 11, Xpos + 12, Xpos + 13, Xpos + 14, Xpos + 15, Xpos + 16, Xpos + 17, Xpos + 18, Xpos + 19, Xpos + 20, Xpos + 21, Xpos + 22]
    let zfloorCoords = [Zpos - 4, Zpos - 5, Zpos - 6, Zpos - 7, Zpos - 8, Zpos - 9, Zpos - 10, Zpos - 11, Zpos - 12, Zpos - 13, Zpos - 14, Zpos - 15, Zpos - 16, Zpos - 17, Zpos - 18, Zpos - 19, Zpos - 20, Zpos - 21, Zpos - 22, Zpos - 23]
    for (let x = 0; x < 24; x++) {
        testing = agent.getPosition()
        xfloorM = xfloorCoords.indexOf(Xpos) >= 0
        zfloorM = zfloorCoords.indexOf(Zpos) >= 0
        turn = isEven(x)
        for (let y = 0; y < 24; y++) {
            if (xfloorM == true && zfloorM == true) {
                agent.destroy(DOWN)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            } else {
                agent.move(FORWARD, 1)
            }
            
        }
        if (turn == true) {
            agent.move(RIGHT, 1)
            agent.turn(LEFT)
            agent.turn(LEFT)
        } else if (turn == false) {
            agent.move(LEFT, 1)
            agent.turn(LEFT)
            agent.turn(LEFT)
        }
        
    }
})

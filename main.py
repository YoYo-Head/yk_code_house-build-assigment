test = 1

def isEven(num):
    ans = num % 2

    if ans == 0:
        even = True

    else:
        even = False

    return even

def listChecker(lister, targetItem, totalItems):
    for itemTest in range(totalItems):
        itemNum = itemTest + 1


        item = lister[itemNum]

        if item == targetItem:
            inList = True
            break

        elif totalItems == itemNum:
            inList = False

        else:
            continue

    return inList



def on_chat_floor():
    Xpos = 22
    Ypos = -60
    Zpos = 12
    repeat = 1
    agent.teleport(world(Xpos, Ypos, Zpos), NORTH)
    agent.set_slot(1)
    xfloorCoords = [Xpos + 1, Xpos + 2, Xpos + 3, Xpos + 4, Xpos + 5, Xpos + 6, Xpos + 7, Xpos + 8, Xpos + 9, Xpos + 10, Xpos + 11, Xpos + 12, Xpos + 13, Xpos + 14, Xpos + 15, Xpos + 16, Xpos + 17, Xpos + 18, Xpos + 19, Xpos + 20, Xpos + 21, Xpos + 22]
    zfloorCoords = [Zpos - 4, Zpos - 5, Zpos - 6, Zpos - 7, Zpos - 8, Zpos - 9, Zpos - 10, Zpos - 11, Zpos - 12, Zpos - 13, Zpos - 14, Zpos - 15, Zpos - 16, Zpos - 17, Zpos - 18, Zpos - 19, Zpos - 20, Zpos - 21, Zpos - 22, Zpos - 23]

    for x in range(24):
        testing = agent.get_position()
        xfloorM = Xpos in xfloorCoords
        zfloorM = Zpos in zfloorCoords
        agent_location = agent.position # Get the position of the agent
        currentXpos = agent_

        
        turn = isEven(x)

        for y in range(24):
            if xfloorM == True and zfloorM == True:
                agent.destroy(DOWN)
                agent.place(DOWN)
                agent.move(FORWARD, 1)

            else:
                agent.move(FORWARD, 1)

        if turn == True:
            agent.move(RIGHT, 1)
            agent.turn(LEFT)
            agent.turn(LEFT)

        elif turn == False:
            agent.move(LEFT, 1)
            agent.turn(LEFT)
            agent.turn(LEFT)

def on_chat_woodFrame():
    print("work here next")


player.on_chat("floor", on_chat_floor)


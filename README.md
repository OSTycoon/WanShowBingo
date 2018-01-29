# WanShowBingo
The source code for the wan show bingo client.


## Client

The client works by picking random squares from an array.

As of right now, there is no right sqaures / wrong squares logic, but I want to add a way to moderate that in the (nearterm) future. That would involve tracking each game from the server side.

## Server

The server sidde is really just a websocket counter and some data logging to see how many players are online at what times, and to track some fun stats for me (public once I build a stats page)

##Pull Requests

Feel free to make pull requests for squares. If they make sense, I'll add them (and take out some of my squares to keep the pool healthy)

Once the server is up, I'll review and consider all pull requests. I want this project to be part of the LTT community and having other join in the fun would be great. I don't want it to become some overly complicated application though. It's already more complicated than it need to be hosting wise.

##Short Term ToDos

1. Implement a TwitchBot for commands !bingo to give the link, !stats for last weeks stats link,  and !brag to show the world you got a bingo during the live show
2. Crowdsourced square verification. If 120 people have a square, and >50% select that square, it's a winning square. Since people play along after the live show, I think I might use the live show players to determine the winning and losing squares, and then they just become the gold standard for the future.


You can support this project by contributing and by donating with LateCoin*

*Once someone creates LateCoin that is

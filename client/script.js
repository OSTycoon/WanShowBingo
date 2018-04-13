$(function() {

  //WEB SOCKETS?!?!?!?!
      const socket = io('http://socket.wanshowbingo.com');

      socket.on("updateCount", function (msg) {
        document.getElementById('playerCount').innerHTML = msg
      });
  //Populate
  const entries = [
    "Linus Hosts",
    "Linus ignores luke to change the topic",
    "Luke Hosts",
    "James Hosts",
    "CHAT NO",
    "Linus Facepalms",
    "Intro/Outro run accidentally",
    "The microphone gets hit",
    "'Wow. I feel old...'",
    "Camera Not Focused",
    "Luke was Wrong",
    "Linus Was Wrong",
    "Luke Quit / Fired joke",
    "Linus Drops Something",
    "A Wild LTT'r Appears!",
    "Special Guest (non-ltt)",
    "Intro / Outro too loud",
    "Savage Jerky!",
    "Synergy 2!",
    "Squarespace!",
    "Spectrum Glasses!",
    "'Okay Google / Alexa / Siri' trolling'",
    "'PRERECORDED'",
    "No outro",
    "No intro",
    "Mac Weldon",
    "James saying Frecschbuuks",
    "Linus eats hot jerky",
    "Floatplane Preview!",
    "Nvidia News!",
    "AMD News!",
    "Intel News!",
    "Apple News!",
    "New Sponsor!",
    "Linus shows his man nipples",
    "Luke Pokemon Facts",
    "Stream Dies",
    "No Audio",
    "Audio Clipping!",
    "Literally one super topic until sponsor spot",
    "Linus leaves the other host alone for a while",
    "News comes from the forums! Heck yeah!",
    "Video output not connected to laptop",
    "Console Topic for the peasantry",
    "Luke Laughs REALLY hard about something",
    "Luke 'Thats Hilarious!'",
    "Linus has 2 phones on his person",
    "Someone messes with the set",
    "Linus: 'We've got a great show for you today!'",
    "Audio suddenly too quiet/loud",
    "Jerky-stealing drama",
    "No actual news before sponsor spot"
  ];
  let spaces = [];
  for (let i = 0; i < 25; i++) {
    if (i === 12) {
      spaces[i] = "***Free Space*** \n\n Late";
    } else {
      const choice = Math.floor(Math.random() * entries.length);
      spaces[i] = entries[choice];
      entries.splice(choice, 1);
    }
  }
    // Draw the board
    const board = $("#board");
    for (let i = 0; i < spaces.length; i++) {
        const boardTile = document.createElement('div');
        boardTile.classList.add('item');
        const tileText = document.createElement('p');
        tileText.innerText = spaces[i];
        boardTile.appendChild(tileText);
        if (i === 12) {
            boardTile.classList.add('clicked');
        }
        board.append(boardTile);
    }
  //hide / unhide twitch
  $("#hideTwitch").click(function() {
    $("#stream").toggle();
    $("#game").toggleClass("toggledWide");
    if($("#hideTwitch").html() === "Hide Twitch") {
      $(this).html("Show Twitch");
    } else {
      $(this).html("Hide Twitch");
    }
  });

  //Change the Color

  $(".item").click(function() {
    $(this).toggleClass("clicked");
      //Just watching some data for a bit. I'm working on a way to detect actual players from trolls and need some sample data.
      const msg = $(this).children().html() + " : " + $(this).hasClass("clicked");
      socket.emit('dataSend', msg);

    //check for winner! There is probably an algo for this...
      const check = $("#board").children();

      function checkTiles(numbers) {
          let count = 0;
          // ... spreads the numbers from the array to be individual parameters
          numbers.forEach(function (currentNumber) {
              if ($(check[currentNumber]).hasClass("clicked")) {
                  count++;
              }
          });
          if (count === numbers.length) {
            debugger;
              return true;
          }
          return false;
      }

      //ROWS
      if (checkTiles([0, 1, 2, 3, 4])) {
          winner();
      } else if (checkTiles([5, 6, 7, 8, 9])) {
          winner();
      } else if (checkTiles([10, 11, 12, 13, 14])) {
          winner();
      } else if (checkTiles([15, 16, 17, 18, 19])) {
          winner();
      } else if (checkTiles([20, 21, 22, 23, 24])) {
          winner();
      }
      //COLUMNS!
      else if (checkTiles([0, 5, 10, 15, 20])) {
          winner();
      } else if (checkTiles([1, 6, 11, 16, 21])) {
          winner();
      } else if (checkTiles([2, 7, 12, 17, 22])) {
          winner();
      } else if (checkTiles([3, 8, 13, 18, 21])) {
          winner();
      } else if (checkTiles([4, 9, 14, 19, 24])) {
          winner();
      }
      //CRISS CROSS
      else if (checkTiles([0, 6, 12, 18, 24])) {
          winner();
      } else if (checkTiles([4, 8, 12, 16, 20])) {
          winner();
      } else {
          loser();
      }
  });

  function loser() {
    $("#winner").addClass("hidden");
  }

  function winner() {
    $("#winner").removeClass("hidden");
  }

});

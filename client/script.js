$(function() {

  //WEB SOCKETS?!?!?!?!
      var socket = io('http://socket.wanshowbingo.com');

      socket.on("updateCount", function (msg) {
        document.getElementById('playerCount').innerHTML = msg
      })

  var spaces = [];

  //Populate
  var entries = [
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
    "Linus: 'We've got a great show for you today!'"
  ];
  var freeSpace = "***Free Space*** <br /><br /> Late";

  for (var i = 0; i < 25; i++) {
    if (i == 12) {
      spaces[i] = freeSpace;
    } else {
      var choice = Math.floor(Math.random() * entries.length);
      console.log(choice);
      spaces[i] = entries[choice];
      entries.splice(choice, 1);
    }
  }
  for (var i = 0; i < spaces.length; i++) {
    if (i == 12) {
      $(board).append("<div class='item clicked'><p>" + spaces[i] + "</p></div>");
    } else {
      $(board).append("<div class='item'><p>" + spaces[i] + "</p></div>");
    }
  }
  //hide / unhide twitch
  $("#hideTwitch").click(function() {
    $("#stream").toggle();
    $("#game").toggleClass("toggledWide");
    if($("#hideTwitch").html() == "Hide Twitch") {
      $(this).html("Show Twitch");
    } else {
      $(this).html("Hide Twitch");
    }
  });

  //Change the Color

  $(".item").click(function() {
    $(this).toggleClass("clicked");
      //Just watching some data for a bit. I'm working on a way to detect actual players from trolls and need some sample data.
      var msg = $(this).children().html() + " : " + $(this).hasClass("clicked")
      socket.emit('dataSend', msg)

    //check for winnar! There is probably an algo for this...
    var check = $(board).children();

    //ROWS

    if ($(check[0]).hasClass("clicked") &&
    $(check[1]).hasClass("clicked") &&
    $(check[2]).hasClass("clicked") &&
    $(check[3]).hasClass("clicked") &&
    $(check[4]).hasClass("clicked")) {
      winner();
    } else

    if ($(check[5]).hasClass("clicked") &&
    $(check[6]).hasClass("clicked") &&
    $(check[7]).hasClass("clicked") &&
    $(check[8]).hasClass("clicked") &&
    $(check[9]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[10]).hasClass("clicked") &&
    $(check[11]).hasClass("clicked") &&
    $(check[12]).hasClass("clicked") &&
    $(check[13]).hasClass("clicked") &&
    $(check[14]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[15]).hasClass("clicked") &&
    $(check[16]).hasClass("clicked") &&
    $(check[17]).hasClass("clicked") &&
    $(check[18]).hasClass("clicked") &&
    $(check[19]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[20]).hasClass("clicked") &&
    $(check[21]).hasClass("clicked") &&
    $(check[22]).hasClass("clicked") &&
    $(check[23]).hasClass("clicked") &&
    $(check[24]).hasClass("clicked")
    ) {
      winner();
    } else

    //COLUMNS!

    if ($(check[0]).hasClass("clicked") &&
    $(check[5]).hasClass("clicked") &&
    $(check[10]).hasClass("clicked") &&
    $(check[15]).hasClass("clicked") &&
    $(check[20]).hasClass("clicked")) {
      winner();
    } else

    if ($(check[1]).hasClass("clicked") &&
    $(check[6]).hasClass("clicked") &&
    $(check[11]).hasClass("clicked") &&
    $(check[16]).hasClass("clicked") &&
    $(check[21]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[2]).hasClass("clicked") &&
    $(check[7]).hasClass("clicked") &&
    $(check[12]).hasClass("clicked") &&
    $(check[17]).hasClass("clicked") &&
    $(check[22]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[3]).hasClass("clicked") &&
    $(check[8]).hasClass("clicked") &&
    $(check[13]).hasClass("clicked") &&
    $(check[18]).hasClass("clicked") &&
    $(check[23]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[4]).hasClass("clicked") &&
    $(check[9]).hasClass("clicked") &&
    $(check[14]).hasClass("clicked") &&
    $(check[19]).hasClass("clicked") &&
    $(check[24]).hasClass("clicked")
    ) {
      winner();
    } else

    //CRISS CROSS
    if ($(check[0]).hasClass("clicked") &&
    $(check[6]).hasClass("clicked") &&
    $(check[12]).hasClass("clicked") &&
    $(check[18]).hasClass("clicked") &&
    $(check[24]).hasClass("clicked")
    ) {
      winner();
    } else

    if ($(check[4]).hasClass("clicked") &&
    $(check[8]).hasClass("clicked") &&
    $(check[12]).hasClass("clicked") &&
    $(check[16]).hasClass("clicked") &&
    $(check[20]).hasClass("clicked")
    ) {
      winner();
    } else {
      loser();
    }


  });
  function loser() {
    $("#winner").addClass("hidden");
  }

  function winner() {
    console.log("Winner!");
    $("#winner").removeClass("hidden");
  }

});

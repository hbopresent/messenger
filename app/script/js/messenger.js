(function() {
  var messageArray = ["trumpMessage1", "tomMessage1", "trumpMessage2", "tomMessage2", "trumpMessage3", "tomMessage3"];
  var messageContentArray = ["tomMessage1Content", "trumpMessage3Content"];
  var messageArrayIndex = 0;
  var messageContentIndex = 0;
  var timeMinute = document.getElementById("timeMinute");

  // create waiting animation tag
  function createAnimationTag() {
    var waitingObj = document.createElement("div");
    waitingObj.classList.add("message__waitingAnimation");
    waitingObj.setAttribute("id", "waitingObj");
    for(var i = 0 ; i < 3 ; i++) {
      var waitingBall = document.createElement("div");
      waitingBall.classList.add("waitingBall");
      waitingObj.appendChild(waitingBall);
    }
    return waitingObj;
  };


  function showMessage() {
    if(messageArrayIndex < 6) {
      document.getElementById(messageArray[messageArrayIndex]).style.animation = "showMessage 0.3s ease forwards";
      messageArrayIndex += 1;

      // display waiting animation
      if(messageArrayIndex == 1 || messageArrayIndex == 4) {
        setTimeout(handleWaitingAnimation, 1000);
      }
      else {
        setTimeout(showMessage, 1000);
      }
    }
  }

  // waiting animation handler
  function handleWaitingAnimation() {
    document.getElementById(messageContentArray[messageContentIndex]).style.display = "none";
    timeMinute.value = parseInt(timeMinute.value) + 1;
    var wiatingAnimationTag = createAnimationTag();

    document.getElementById(messageArray[messageArrayIndex]).appendChild(wiatingAnimationTag);
    document.getElementById(messageArray[messageArrayIndex]).style.animation = "showMessage 0.3s ease forwards";
    setTimeout(function() {
      wiatingAnimationTag.parentNode.removeChild(wiatingAnimationTag);
      document.getElementById(messageContentArray[messageContentIndex]).style.display = "block";
      messageContentIndex += 1;
      showMessage();
    }, 3000);
  }

  showMessage();
})();

// Function used for open chat bot
var botController = (function () {})();

var uiController = (function () {})();
var controller = (function (botCntr, uiCntr) {
  var $chatCircle,
    $chatBox,
    $chatBoxClose,
    $chatBoxWelcome,
    $chatWraper,
    $submitBtn,
    $chatInput,
    $msg;

  /*toggle*/
  function hideCircle(evt) {
    evt.preventDefault();
    $chatCircle.hide("scale");
    $chatBox.show("scale");
    $chatBoxWelcome.show("scale");
  }

  function chatBoxCl(evt) {
    evt.preventDefault();
    $chatCircle.show("scale");
    $chatBox.hide("scale");
    $chatBoxWelcome.hide("scale");
    $chatWraper.hide("scale");
  }

  function chatOpenMessage(evt) {
    evt.preventDefault();
    $chatBoxWelcome.hide();
    $chatWraper.show();
  }

  function init() {
    $chatCircle = $("#chat-circle");
    $chatBox = $(".chat-box");
    $chatBoxClose = $(".chat-box-toggle");
    $chatBoxWelcome = $(".chat-box-welcome__header");
    $chatWraper = $("#chat-box__wraper");

    //1. call toggle
    $chatCircle.on("click", hideCircle);
    $chatBoxClose.on("click", chatBoxCl);
  }

  return {
    init: init,
  };
})(botController, uiController);
$(document).ready(controller.init);

$("button").click(function () {
  $chatBoxClose.on("click", location.reload(true));
});
function iris() {
  document.querySelector(
    "#container"
  ).innerHTML = `<p class="containerTop" id="h12ide">Frequently Asked Questions
                                    <span><i class='fas fa-question'></i></span>
                                </p>`;
}
setTimeout(iris, 9000);
function iris1() {
  document.querySelector(
    "#mycard1"
  ).innerHTML = `<div class="smallCard" id="card1">
                                <div class="subCardsItes">
                                    <ul>
                                        <li><span id="liData"></span> Can I redeem my FB before the origin team ?</li>
                                    </ul>

                                </div>
                            </div>`;
}
setTimeout(iris1, 11000);
function iris2() {
  document.querySelector(
    "#mycard2"
  ).innerHTML = `<div class="smallCard" id="card2">
                                <div class="subCardsItes">
                                    <ul>
                                        <li><span id="liData"></span> How do I pay Credit card bill?</li>
                                    </ul>

                                </div>
                            </div>`;
}
setTimeout(iris2, 13000);
function iris3() {
  document.querySelector(
    "#mycard3"
  ).innerHTML = ` <div class="smallCard" id="card3">
                                <div class="subCardsItes">
                                    <ul>
                                        <li><span id="liData"></span> How can I get my Account Statement?</li>
                                    </ul>

                                </div>
                            </div>`;
}
setTimeout(iris3, 15000);
function iris4() {
  document.querySelector(
    "#mycard4"
  ).innerHTML = ` <div class="smallCard" id="card4">
                                <div class="subCardsItes">
                                    <ul>
                                        <li><span id="liData"></span> What is the tenure of Fixed Deposite?</li>
                                    </ul>

                                </div>
                            </div>`;
}
setTimeout(iris4, 17000);
function iris5() {
  document.querySelector(
    "#mycard5"
  ).innerHTML = `<div class="smallCard" id="card5">
                                <div class="subCardsItes">
                                    <div id="bottoIcon">
                                        <img src="./assets/icon/chat-icon.png" id="img2" alt="">
                                        <p class="bottomText">Start a new conversation</p>
                                    </div>


                                </div>
                            </div>`;
}
setTimeout(iris5, 19000);

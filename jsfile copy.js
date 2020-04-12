const rob="RobertSchwieger"
alert("This is from JavaScript");
console.log("in body");

const callButtonClick = (this,whoToCall) => {
  console.log("in callButtonClick");
  const callCommand= "skype:"+ whoToCall + "?call&amp;video=true";
  console.log(callCommand);
}



var conversationsManager = application.conversationsManager;
conversation = conversationsManager.getConversation('sip:xxx');

conversation.selfParticipant.video.state.when('Connected', function () {
// set up self video container
conversation.selfParticipant.video.channels(0).stream.source.sink.format('Stretch');
conversation.selfParticipant.video.channels(0).stream.source.sink.container(/* DOM node */);
});
conversation.participants.added(function (person) {
// person.displayName() has joined the conversation

person.video.state.when('Connected', function () {
    // set up self video container
    person.video.channels(0).stream.source.sink.format('Stretch');
    person.video.channels(0).stream.source.sink.container(/* DOM node */);
});
});

conversation.state.changed(function (newValue, reason, oldValue) {
if (newValue === 'Disconnected' && (oldValue === 'Connected' || oldValue === 'Connecting')) {
    // conversation ended
}
});
conversation.videoService.start().then(null, function (error) {
// handle error
});

document.getElementById("header-txt").innerHTML="red";

conversation.leave().then(function () {
    // conversation ended
}, function (error) {
    // handle error
}).then(function () {
    // clean up operations
});
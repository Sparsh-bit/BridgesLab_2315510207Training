// Q6 – Event Subscription Panel with dynamic .on() and .off()
$(document).ready(function () {
  let notificationsEnabled = false;

  function showMessage(text) {
    $("#message").text(text);
  }

  $("#subscribeBtn").on("click", function () {
    notificationsEnabled = true;
    showMessage("Subscribed: notifications enabled.");
  });

  $("#unsubscribeBtn").on("click", function () {
    notificationsEnabled = false;
    showMessage("Unsubscribed: notifications disabled.");
  });

  // Click handler for topics (using .on for dynamic elements)
  $("#topicsList").on("click", ".topic", function () {
    if (!notificationsEnabled) {
      showMessage("Enable notifications to subscribe to topics.");
      return;
    }
    $(this).toggleClass("subscribed");
    const status = $(this).hasClass("subscribed") ? "subscribed" : "unsubscribed";
    showMessage(`You have ${status} to ${$(this).text()}.`);
  });

  // Add new topic dynamically
  $("#addTopicBtn").on("click", function () {
    const text = $("#newTopicInput").val().trim();
    if (!text) return;
    $("#topicsList").append(`<li class="topic">${text}</li>`);
    $("#newTopicInput").val("");
    showMessage(`New topic "${text}" added.`);
  });

  // Example of removing click for a specific topic using .off()
  // We detach click from the first topic when double-clicked.
  $("#topicsList").on("dblclick", ".topic", function () {
    $(this).off("click");
    $(this).removeClass("subscribed");
    showMessage(`Click unsubscribed for topic "${$(this).text()}".`);
  });
});

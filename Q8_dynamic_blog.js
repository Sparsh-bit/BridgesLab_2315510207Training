// Q8 – Dynamic Blog Posts using jQuery DOM methods
$(document).ready(function () {
  let postCounter = 6;

  $("#addPostBtn").on("click", function () {
    const newPost = $(`<article class="post">New post #${postCounter}</article>`);
    // Add tag after content
    newPost.append('<div class="tag">#general</div>');
    $("#posts").append(newPost);
    postCounter++;
  });

  $("#prependPostBtn").on("click", function () {
    const featured = $('<article class="post">🔥 Featured: JavaScript tips & tricks.</article>');
    featured.prepend('<div class="tag">#featured</div>');
    $("#posts").prepend(featured);
  });

  $("#removeLastPostBtn").on("click", function () {
    $("#posts .post").last().remove();
  });

  // Add tags using before()/after() for existing posts
  $("#posts .post").each(function () {
    if (!$(this).find(".tag").length) {
      $(this).after('<div class="tag">#blog</div>');
    }
  });

  $("#highlightKeywordBtn").on("click", function () {
    $("#posts .post").each(function () {
      const $post = $(this);
      const text = $post.text().toLowerCase();
      if (text.includes("javascript")) {
        $post.addClass("keyword-highlight");
      } else {
        $post.removeClass("keyword-highlight");
      }
    });
  });
});

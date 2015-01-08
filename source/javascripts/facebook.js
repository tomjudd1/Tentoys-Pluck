window.fbAsyncInit = function() {
  FB.init({
    appId: '793500784040825',
    xfbml: true,
    version: 'v2.2'
  });
};

if ($(".fb-like").length > 0) {
    if (typeof (FB) != 'undefined') {
        FB.init({ status: true, cookie: true, xfbml: true });
    } else {
        $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function () {
            FB.init({ status: true, cookie: true, xfbml: true });
        });
    }
}
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
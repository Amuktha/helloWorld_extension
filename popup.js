document.addEventListener('DOMContentLoaded', function() {
  var bookmarkProfile = document.getElementById('bookmarkProfile');
  bookmarkProfile.addEventListener('click', function() {

    // chrome.tabs.getSelected(null, function(tab) {
    //   d = document;
    //
    //   var f = d.createElement('form');
    //   f.action = 'http://gtmetrix.com/analyze.html?bm';
    //   f.method = 'post';
    //   var i = d.createElement('input');
    //   i.type = 'hidden';
    //   i.name = 'url';
    //   i.value = tab.url;
    //   f.appendChild(i);
    //   d.body.appendChild(f);
    //   f.submit();
    // });

    var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
    xhr.open("GET", chrome.extension.getURL('profilesList.json'), true);
    xhr.send();

    function saveProfile() {
      // Get a value saved in a form.
      var profileURL = $('.view-public-profile').html();
      var profileName = $('span.fn').text();
      // Check that there's some code there.
      if (!profileURL || !profileName) {
        message('Error: No profile bookmarked');
        return;
      }
      // Save it using the Chrome extension storage API.
      chrome.storage.sync.set({'profile': {url:profileURL, fullName: profileName}}, function() {
        // Notify that we saved.
        message('Profile Bookmarked');
      });
    }

  }, false);
}, false);

/*
Full Name:
$('span.fn').text();

Profile URL:
 $('.view-public-profile').html();
*/


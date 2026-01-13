(function() {
    var key = 'artrans_access_granted';
    var isComingSoon = window.location.href.indexOf('coming-soon.html') > -1;

    if (localStorage.getItem(key)) {
        // User is logged in
        if (isComingSoon) {
            // Redirect to home if they are already logged in but trying to access coming soon
            window.location.href = 'index.html';
        }
    } else {
        // User is NOT logged in
        if (!isComingSoon) {
            // Redirect to coming soon if they are trying to access protected pages
            window.location.href = 'coming-soon.html';
        }
    }
})();

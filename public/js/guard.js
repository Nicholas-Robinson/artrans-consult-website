(function() {
    var key = 'artrans_access_granted';
    // Support both legacy .html URLs and new Astro routes
    var pathname = window.location.pathname || window.location.href;
    var isComingSoon = pathname.indexOf('coming-soon') > -1;

    if (localStorage.getItem(key)) {
        // User is logged in
        if (isComingSoon) {
            // Redirect to home if they are already logged in but trying to access coming soon
            window.location.href = '/';
        }
    } else {
        // User is NOT logged in
        if (!isComingSoon) {
            // Redirect to coming soon if they are trying to access protected pages
            window.location.href = '/coming-soon';
        }
    }
})();

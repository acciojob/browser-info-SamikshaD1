//your JS code here. If required.
 var userAgent = navigator.userAgent;
        var browserName = navigator.appName;
        var browserVersion = navigator.appVersion;

        // Display the browser information in the "browser-info" div
        var browserInfoElement = document.getElementById("browser-info");
        browserInfoElement.textContent = "You are using " + browserName + " version " + browserVersion;
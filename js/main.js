function close() {

        MessengerExtensions.requestCloseBrowser(function success() {
            // webview closed
        }, function error(err) {
            // an error occurred
        });

}
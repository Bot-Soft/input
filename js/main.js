function close() {
    window.extAsyncInit = function () {
        MessengerExtensions.requestCloseBrowser(function success() {
            // webview closed
        }, function error(err) {
            // an error occurred
        });
    };
}
window.get_browser_version = function () {
    window.unityModule.SendMessage("BrowserComm", "GiveBrowserInfo", "Chrome,124")
}

window.UNITY_sendPlayerParams = function (content) {
    let data = JSON.parse(content);
    window.unityModule.SendMessage("BrowserComm","ExternalCallback", JSON.stringify({
        callbackId: data.callbackId,
        data: JSON.stringify(top.config)
    }))
}

window.UNITY_sendLoadStats = function (content) {
    let data = JSON.parse(content)
    window.unityModule.SendMessage("BrowserComm", "ExternalCallback", JSON.stringify({
        "callbackId": data.callbackId,
        "data": "{\"DOMReady\":1716934533441,\"PluginInit\":1716934557700}"
    }))
}

window.UNITY_requestVideoAd = function (content) {
    let data = JSON.parse(content)
    window.unityModule.SendMessage("BrowserComm","ExternalCallback", JSON.stringify({
        callbackId: data.callbackId,
        data: {
            adAvailable: false
        }
    }))
}

window.UNITY_requestRewardedVideoAd = function (content) {
    let data = JSON.parse(content)
    window.unityModule.SendMessage("BrowserComm","ExternalCallback", JSON.stringify({
        callbackId: data.callbackId,
        data: {
            adAvailable: false
        }
    }))
}

window.UNITY_unityDebugLog = function (message) {
    console.debug(message)
}

window.UNITY_sendStatHatCount = function () {

}

window.UNITY_requestDomain = function () {

}

window.UNITY_readyForAd = function () {

}

window.UNITY_sendStatHatValue = function () {

}

window.UNITY_gamePlayStatus = function () {

} 

window.UNITY_showVideoAd = function (content) {
    let data = JSON.parse(content)
    window.unityModule.SendMessage("BrowserComm","ExternalCallback", JSON.stringify({
        callbackId: data.callbackId,
        data: {
            status: 1
        }
    }))
} 

window.UNITY_showRewardedVideoAd = function (content) {
    let data = JSON.parse(content)
    window.unityModule.SendMessage("BrowserComm","ExternalCallback", JSON.stringify({
        callbackId: data.callbackId,
        data: {
            status: 1
        }
    }))
} 

window.UNITY_resetAFKtimer = function () {
    
}

window.UNITY_gotoDisconnectedPage = function () {
    alert("kicked")
}
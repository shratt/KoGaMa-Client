async function launchGame() { 

    let gameID = document.getElementById("gameID").value;
    let rawSession = await fetch(`https://www.kogama.com/locator/session/?objectID=${gameID}&profileID=0&lang=en_US&type=play`).then(r=>r.text())
    session = JSON.parse(rawSession);

    let encodedSessionToken = encodeURI(session.sessionToken).replaceAll(":", "%3A").replaceAll(",", "%2C")

    top.config = {
        "planetName": session.sessionID,
        "newPlanetName": session.sessionID,
        "serverIP": "wss://" + session.hostName + ":" + session.wssPort,
        "token": session.token,
        "sessionToken": session.sessionToken,
        "isSoftLaunch": false,
        "language": "en_US",
        "planetID": session.objectID,
        "profileID": 0,
        "embedded": false,
        "gameMode": 1,
        "pingURL": `https://www.kogama.com/locator/session/${session.id}/ping/?token=${encodedSessionToken}`,
        "disconnectURL": `https://www.kogama.com/locator/session/${session.id}/leave/?token=${encodedSessionToken}`,
        "unityPacketURL": `https://www.kogama.com/locator/session/${session.id}/?token=${encodedSessionToken}&plugin=WEBGL&ssl=1&unityPacket=1`,
        "reauthURL": `https://www.kogama.com/locator/session/${session.id}/reauth/?sessionToken=${encodedSessionToken}&profileID=0&objectID=${gameID}&lang=en_US&type=play&referrer=kogama&plugin=WEBGL&ssl=1&unityPacket=1`,
        "gameRewardData": null,
        "gameRewardURL": "https://api-www.kgoma.com/v1/api/reward/game-play/",
        "gameRewardDataURL": "https://api-www.kgoma.com/v1/api/reward/game-data/",
        "gamePublishedURL": "https://api-www.kgoma.com/v1/api/reward/published/",
        "playerProfileURL": "https://www.kogama.com/profile",
        "eliteUpgradeURL": "https://www.kogama.com/subscription/subscribe/",
        "purchaseGoldURL": "https://www.kogama.com/purchase/",
        "loginURL": "https://www.kogama.com/login/",
        "signupURL": "https://www.kogama.com/register/",
        "idleURL": "https://www.kogama.com/page/disconnected/?reason=idle",
        "disconnectedURL": "https://www.kogama.com/page/disconnected/",
        "region": "eu",
        "referrer": "kogama",
        "detailedStats": false,
        "isIOSDevice": false
    }

    let gameFrame = document.createElement("iframe");
    gameFrame.src = location.href + "player/"
    gameFrame.style.cssText = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";
    document.write(gameFrame.outerHTML);
}

document.getElementById("playButton").addEventListener("click", launchGame)

import WebSocketAsPromised from 'websocket-as-promised';
import { w3cwebsocket } from 'websocket';
import config from './config';

const wsp = new WebSocketAsPromised(
    config.server,
    {
        createWebSocket: url => new w3cwebsocket(url)
    }
);

let AuthenticateUserFrame = {
    'm': 0,
    'i': 2,
    'n': 'AuthenticateUser',
    'o': JSON.stringify({
        'UserName': config.UserName,
        'Password': config.Password,
    })
}

let AddUserAPIKeyFrame = {
    'm': 0,
    'i': 2,
    'n': 'AddUserAPIKey',
    'o': JSON.stringify({
        'UserId': config.UserId,
        'Permissions': config.Permissions,
    })
}

wsp.open().then((res) => {
    wsp.onMessage.addListener(message => {
        console.log(message);
    });
    wsp.send(JSON.stringify(AuthenticateUserFrame));
    setTimeout(() => {
        wsp.send(JSON.stringify(AddUserAPIKeyFrame));
    }, 1000);

}).catch((err) => {
    console.log(err);
});
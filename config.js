export default {

    // in this example we will use Coinext server
    server: 'wss://api.coinext.com.br/WSGateway/',
    // Place here your UserName and your Password
    UserName: 'qwerty',
    Password: 'qwerty',
    // UserId need be a number
    // You can found it using chrome DevTools when you are logged
    // at AlphaPoint, in this case on Coinext
    UserId: 123456,
    // In permissions you can set Trading, Withdraw and Deposit,
    // in this example we only set Trading permissions
    Permissions: [
        'Trading'
    ]

}
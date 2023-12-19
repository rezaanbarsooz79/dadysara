let $ = document;
let playB = $.getElementById('play');
let demo = $.getElementById('demo');
let btn=$.querySelector('.btn')

playB.addEventListener('click', function () {
    if (demo.paused) {
        demo.play();
        btn.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAX0lEQVR4nO2WQQqAQAwD53ku/v8D1n9EBAUpFDwURM1AbiELpQ0L5s/MwAroUACj0V8Sl5BTS6O/RIW6/CV+WB51wssln9NdXCBygSRcIHpdgcRTX5+RwvaQqdFvPs4Gyhr/h1qOuFIAAAAASUVORK5CYII=')
    } else {
        demo.pause();
        btn.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3WMWoCQBCF4Q8CwTSms7XQPhfICWxyi1zBNqVX8Aq2llYhhNSCN7BU0ohNIBmbXUiZQmeV+OCvf1hmZx7XNM47lnjKFscvPvDYQhyFOYYtxIEvTNHLFkdhhxfcZYujsMYzbrLFUVhh1EIchQUeWogD35ihny2Owh4T3GeLK1uMcZstrrz+G/Em+6nrcHX/IrzY77TIXiCr7JW5zj4Sn2VSO8cS1pxNEfgpkzo4lbCmWdl7a1Vvr3HsHACr5CJWnhywpwAAAABJRU5ErkJggg==')
    }
});

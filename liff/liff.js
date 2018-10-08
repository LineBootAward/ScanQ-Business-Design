window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://developers.line.me/en/docs/liff/developing-liff-apps/'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call 0
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([
            {
                type: 'text',
                text: "成功傳送訊息"
            },
            {
                type: 'sticker',
                packageId: '1',
                stickerId: '1'
            },
        ]).then(function () {
            window.alert("訊息傳送成功");
        }).catch(function (error) {
            window.alert("訊息傳送失敗錯誤碼: " + error);
        });
    });

    // sendMessages call 1
    document.getElementById('sendmessagebutton1').addEventListener('click', function () {
        liff.sendMessages([
            {
                type: 'text',
                text: "//liffup//https://iis6kieryhjjyjgbqgw32g-on.drv.tw/Line//1530276024-Xl0xxBwG//compact"
            },
            {
                type: 'sticker',
                packageId: '1',
                stickerId: '1'
            },
        ]).then(function () {
            window.alert("訊息傳送成功");
        }).catch(function (error) {
            window.alert("訊息傳送失敗錯誤碼: " + error);
        });
    });

    // sendMessages call 2
    document.getElementById('sendmessagebutton2').addEventListener('click', function () {
        liff.sendMessages([
            {
                type: 'text',
                text: "//liffup//https://iis6kieryhjjyjgbqgw32g-on.drv.tw/Line//1530276024-Xl0xxBwG//tall"
            },
            {
                type: 'sticker',
                packageId: '1',
                stickerId: '1'
            },
        ]).then(function () {
            window.alert("訊息傳送成功");
        }).catch(function (error) {
            window.alert("訊息傳送失敗錯誤碼: " + error);
        });
    });

    // sendMessages call 3
    document.getElementById('sendmessagebutton3').addEventListener('click', function () {
        liff.sendMessages([
            {
                type: 'text',
                text: "//liffup//https://iis6kieryhjjyjgbqgw32g-on.drv.tw/Line//1530276024-Xl0xxBwG//full"
            },
            {
                type: 'sticker',
                packageId: '1',
                stickerId: '1'
            },
        ]).then(function () {
            window.alert("訊息傳送成功");
        }).catch(function (error) {
            window.alert("訊息傳送失敗錯誤碼: " + error);
        });
    });

    // sendMessages call 4
    document.getElementById('sendmessagebutton4').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            liff.sendMessages([
                {
                    type: 'text',
                    text: profile.displayName + "：您好。\n你的頭像："
                },
                {
                    'type': 'image',
                    'originalContentUrl': profile.pictureUrl,
                    'previewImageUrl': profile.pictureUrl,
                },
                {
                    type: 'text',
                    text: "狀態設定如下：\n" + profile.statusMessage
                },
            ]).then(function () {
                window.alert("頭像傳送成功");
            }).catch(function (error) {
                window.alert("頭像傳送失敗錯誤碼: " + error);
            });
        }).catch(function (error) {
            window.alert("取得使用者個人資料錯誤碼: " + error);
        });

    });

    // sendMessages call 5
    document.getElementById('sendmessagebutton5').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            liff.sendMessages([
                {
                    type: 'text',
                    text: profile.displayName + "：您好。\n這是我們公司位置："
                },
                {
                    "type": "location",
                    "title": "【加羅湖】",
                    "address": "267台灣宜蘭縣大同鄉四季林道加羅湖班隱密帳一號",
                    "latitude": "24.474177571120546",
                    "longitude": "121.4786121994257"
                },

            ]).then(function () {
                window.alert("位置傳送成功");
            }).catch(function (error) {
                window.alert("位置傳送失敗錯誤碼: " + error);
            });
        }).catch(function (error) {
            window.alert("取得使用者個人資料錯誤碼: " + error);
        });

    });

    //get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            var profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            var img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "頭像";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;

            toggleProfileData();
        }).catch(function (error) {
            window.alert("取得使用者個人資料錯誤碼: " + error);
        });
    });
}

function toggleProfileData() {
    var elem = document.getElementById('profileinfo');
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}
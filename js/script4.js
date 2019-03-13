var config = {
    apiKey: "AIzaSyA2v-pIirWTWOyMv9MQ6DlNAZqKMQFXKLs",
    authDomain: "chat-ed048.firebaseapp.com",
    databaseURL: "https://chat-ed048.firebaseio.com",
    projectId: "chat-ed048",
    storageBucket: "chat-ed048.appspot.com",
    messagingSenderId: "1043956081234"
};
firebase.initializeApp(config);

// ボタンがクリックされた時の処理




$("#newuser").on("click", function () {
    var email = $("#email").val();
    var password = $("#password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/invalid-email") {
            alert("メールアドレスの形式が不正です。")
        };
    }).then(function (user) {
        console.log(user);
        alert('ご登録ありがとうございます。')
        location.href = 'http://umegaki113.sakura.ne.jp/Gs1107/dip.html';

    });
});


$('#login').on('click', function (e) {

    // メールアドレス・パスワードを取得
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/invalid-email") {
            alert("メールアドレスの形式が不正です。")
        }
    }).then(function (user) {
        console.log(user);
        alert('こんにちは！')
        location.href = 'http://umegaki113.sakura.ne.jp/Gs1107/dip.html';

    });
});


firebase.auth().onAuthStateChanged();

firebase.auth().signOut().then(function () {
    alert('Sign-out successful.');
}).catch(function (error) {
    // An error happened.
});
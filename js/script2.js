//========================================================
// データ定義
//========================================================

const firstQuestions = 'あなたの性別を教えてください。';
const firstChoice = ['1:男性', '2:女性', '3:Xジェンダー'];

const questions = {
    question: [
        [{
            question: '今の気分にぴったりなのは？',
            choices: ['1:さっぱり', '2:ウッディー', '3:スパイシー']
        }, {
            question: 'なりたいイメージは？',
            choices: ['1:さわやか', '2:大人の余裕', '3:ワイルド']
        }, {
            question: 'デートするなら・・・',
            choices: ['1:自然を満喫', '2:美術館', '3:バー']
        }],
        [{
                question: '今の気分にぴったりなのは？',
                choices: ['1:ジューシー', '2:フローラル', '3:オリエンタル']
            },
            {
                question: 'なりたいイメージは？',
                choices: ['1:癒し系', '2:色気のある', '3:スタイリッシュ']
            },
            {
                question: 'デートするなら・・・',
                choices: ['1:自然を満喫', '2:リゾート地', '3:六本木ヒルズ']
            }
        ],
        [{
                question: '今の気分にぴったりなのは？',
                choices: ['1:ハーブ', '2:バニラ', '3:オリエンタル']
            },
            {
                question: 'なりたいイメージは？',
                choices: ['1:上品', '2:無邪気', '3:色気のある']
            },
            {
                question: 'デートするなら・・・',
                choices: ['1:グランピング', '2:家でゆっくり', '3:クラブ']
            }
        ]
    ]
};


console.log(questions.question.length);
console.log(firstQuestions);


let type = ''; // 問題を選択するための最初の問題の答えを保存する
let currentQuestion = 0;
let answer = []; // 一個一個の選択肢の答えを保存する


//========================================================
// DOMのバインディング
//========================================================

const $questionArea = $('#js-questionArea') //配列じゃない
const $choices = $('input[name="kotae"]') //配列
const $choicesText = $('.choiceText') // 配列
const $resultArea = $('#result')

//========================================================
// 初期化
//========================================================
$questionArea.text(firstQuestions);
for (let i = 0; i < $choices.length; i++) {
    $choicesText[i].textContent = firstChoice[i]
    $choicesText.prop('checked', false);
};

//========================================================
// イベントの設定
//========================================================
// 一番最初に$choicesがクリックされた時はtypeの選択をしてる
// 


$choices.on('click', function () {

    if (currentQuestion < 3) {
        if (type == '') {
            type = this.value
            answer.push(type)
            const q = questions.question[type][currentQuestion].question
            const c = questions.question[type][currentQuestion].choices
            $questionArea.text(q); // 問題の挿入    
            for (let i = 0; i < $choicesText.length; i++) { // 選択肢の挿入
                $choicesText[i].textContent = c[i];

            }
            currentQuestion++;
        } else {
            answer.push(this.value)
            const q = questions.question[type][currentQuestion].question
            const c = questions.question[type][currentQuestion].choices

            $questionArea.text(q); // 問題の挿入    
            for (let i = 0; i < $choicesText.length; i++) { // 選択肢の挿入
                $choicesText[i].textContent = c[i];
            }
            $('.choiceText').prop('checked', false);
            currentQuestion++;
        }
    } else {
        // 結果表示
        console.log(answer)
        $('main').css('display', 'none');
        $('#recom').fadeIn(1200).show();
        $('#button').fadeIn(2000).show();
        $resultArea.text(getAnswer(answer)[0]);
        $('#resultImg').html(getAnswer(answer)[1]);
    };
});


function getAnswer(answer) {
    const choice = answer.slice(0, 3).join('') // 気分を取り除いた配列
    if (choice == '000') {
        return ['オーデサンス', '<img id="modalImage" src="img/オーデサンス.png">'];
    } else if (choice == '001') {
        return ['ヴェチヴェリオ', '<img id="modalImage" src="img/ヴェチヴェリオ.png">'];
    } else if (choice == '002') {
        return ['オイエド', '<img id="modalImage" src="img/オイエド.png">'];
    } else if (choice == '010') {
        return ['34', '<img id="modalImage" src="img/s_34EDP.jpg">'];
    } else if (choice == '011') {
        return ['タムダオ', '<img id="modalImage" src="img/タムダオ.png">'];
    } else if (choice == '012') {
        return ['ヴォリュート', '<img id="modalImage" src="img/s_ヴォリュート.jpg">'];
    } else if (choice == '020') {
        return ['ロンブルダンロー', '<img id="modalImage" src="img/ロンブルダンロー.png">'];
    } else if (choice == '021') {
        return ['ドソン', '<img id="modalImage" src="img/ドソン.png">'];
    } else if (choice == '022') {
        return ['ヴォリュート', '<img id="modalImage" src="img/s_ヴォリュート.jpg">'];
    } else if (choice == '100') {
        return ['フィロシコス', '<img id="modalImage" src="img/フィロシコス.png">'];
    } else if (choice == '101') {
        return ['ロンブルダンロー', '<img id="modalImage" src="img/ロンブルダンロー.png">'];
    } else if (choice == '102') {
        return ['オーデサンス', '<img id="modalImage" src="img/オーデサンス.png">'];
    } else if (choice == '110') {
        return ['オーローズ', '<img id="modalImage" src="img/オーローズ.png">'];
    } else if (choice == '111') {
        return ['ドソン', '<img id="modalImage" src="img/ドソン.png">'];
    } else if (choice == '112') {
        return ['オフレジア', '<img id="modalImage" src="img/s_オフレジア.jpg">'];
    } else if (choice == '120') {
        return ['オーモエリ', '<img id="modalImage" src="img/オーモエリ.png">'];
    } else if (choice == '121') {
        return ['34オードトワレ', '<img id="modalImage" src="img/s_34EDT.jpg">'];
    } else if (choice == '122') {
        return ['オイエド', '<img id="modalImage" src="img/オイエド.png">'];
    } else if (choice == '200') {
        return ['ヴェチヴェリオ', '<img id="modalImage" src="img/ヴェチヴェリオ.png">'];
    } else if (choice == '201') {
        return ['ロードネロリ', '<img id="modalImage" src="img/ロードネロリ.png">'];
    } else if (choice == '202') {
        return ['34', '<img id="modalImage" src="img/s_34EDP.jpg">'];
    } else if (choice == '210') {
        return ['オーデュエル', '<img id="modalImage" src="img/オーデュエル.png">'];
    } else if (choice == '211') {
        return ['オーローズ', '<img id="modalImage" src="img/オーローズ.png">'];
    } else if (choice == '212') {
        return ['ヴォリュート', '<img id="modalImage" src="img/s_ヴォリュート.jpg" width="250px" height="250px">'];
    } else if (choice == '220') {
        return ['ロンブルダンロー', '<img id="modalImage" src="img/ロンブルダンロー.png">'];
    } else if (choice == '221') {
        return ['オレーヌ', '<img id="modalImage" src="img/オレーヌ.png">'];
    } else if (choice == '222') {
        return ['ドソン', '<img id="modalImage" src="img/ドソン.png">'];
    }
};
// const quM = function quM() {
//     let i = 0;
//     $('#js-questionArea').html(questionM[i].question);
//     $('#choice1').html(questionM[i].choices[0]);
//     $('#choice2').html(questionM[i].choices[1]);
//     $('#choice3').html(questionM[i].choices[2]);
//     i++;
// };
// console.log(quM);

// const quW = function quW() {
//     let i = 0;
//     $('#js-questionArea').html(questionW[i].question);
//     $('#choice1').html(questionW[i].choices[0]);
//     $('#choice2').html(questionW[i].choices[1]);
//     $('#choice3').html(questionW[i].choices[2]);
//     i++;
// };

// const quX = function quX() {
//     let i = 0;
//     $('#js-questionArea').html(questionX[i].question);
//     $('#choice1').html(questionX[i].choices[0]);
//     $('#choice2').html(questionX[i].choices[1]);
//     $('#choice3').html(questionX[i].choices[2]);
//     i++;
// };



// $('input[name="kotae"]').on('click', function () {
//     if (quest[0].choices === 0) {
//         // console.log('男性');
//         quM(i);
//         i++;

//     } else if (quest[0].choices === 1) {

//         quW(i);
//         i++;


//     } else if (quest[0].choices === 2) {
//         quX(i);
//         i++;


//     }
// })

// if (currentQuestion === 0) {
//     type = this.value // ユーザーが最初の問題を選択したら、その結果を変数typeに保存する
// }

// 問題がまだある時の処理
// console.log(type)



// 答えの配列に選択されたもののインデックスをpushする
// answer.push(this.value);
// // currentQuestionを加算する
// currentQuestion++


// var num = 0;
// $('input[name="kotae"]').data("click", ++num);
// var clickCount = $('input[name="kotae"]').data("click");


// if (questions.question.length === clickCount) {

//     let ans = answer.slice(0, 2);
//     console.log(ans);

//     $('#modal').append('<div><button>結果を見る</button></div>');


// } else {
//     // $questionArea.text(q);
//     // for (let i = 0; i < $choicesText.length; i++) {
//     //     $choicesText[i].textContent = c[i]
//     // }
//     // answer.push(this.value)
//     // currentQuestion++
// }
// // 問題がなくなった時の処理





// $('#choice1').html(questions.type.choices[0]);
// $('#choice2').html(questions.type.choices[1]);
// $('#choice3').html(questions.type.choices[2]);

// $('input[name="kotae"]').select(function () {

// });
// });



// $choices.on('click', function () {
//     type = this.value

//     // $('#js-questionArea').html(questions.question[type][currentQuestion].question);
//     // $('#choice1').html(questions.question[type][currentQuestion].choices[0]);
//     // $('#choice2').html(questions.question[type][currentQuestion].choices[1]);
//     // $('#choice3').html(questions.question[type][currentQuestion].choices[2]);
//     // $('input[type="checkbox"]').prop('checked', false);
//     currentQuestion++
// });


// $('input[name="kotae"]').change(function () {

// ②
// typeに保存されてる値をkeyにして問題を取ってくる
// questions.question[type]で問題が取れる
// console.log(questions.question[type]);

// });

// ③
// currentQuestionを参照して現在の問題を出力する
// console.log(questions.question[type][currentQuestion])


// currentQuestion++



// ④
// ユーザーが問題を選択したらその結果をanswerにpushする
// currentQuestion++ する
// console.log(questions.question[type])

// $('input[name="kotae"]').select(function () {
//  answer.push($(this).val());
// });


// 問題が全部終わったかどうかを判断する => questions.question[type]のレングスがcurrentQuestionと同じかどうか
// もし終わってたら結果を判定する
// 終わっていなかったら③に戻る

// const qqt = questions.question[type];

// if (qqt.length !== currentQuestion) {
//     $('input[name="kotae"]').click(function () {
//         type = $('input[name="kotae"]:checked').val();
//         $('#js-questionArea').html(questions.question[type][currentQuestion].question);
//         $('#choice1').html(questions.question[type][currentQuestion].choices[0]);
//         $('#choice2').html(questions.question[type][currentQuestion].choices[1]);
//         $('#choice3').html(questions.question[type][currentQuestion].choices[2]);
//         currentQuestion++
//     });
// } else {
//     break;
//      $('#modal').html('<div><button>結果を見る</button></div>');
// }

// ⑤
// 結果判定処理
// answerの中に選択されたものが入ってるのでそれを見て最終的な結果を出力する

// const mensQA11 = questions.question[0][0].choices[0];
// const mensQA12 = questions.question[0][0].choices[1];
// const mensQA13 = questions.question[0][0].choices[2];
// const mensQA21 = questions.question[0][1].choices[0];
// const mensQA22 = questions.question[0][1].choices[1];
// const mensQA23 = questions.question[0][1].choices[2];
// const mensQA31 = questions.question[0][2].choices[0];
// const mensQA32 = questions.question[0][2].choices[1];
// const mensQA33 = questions.question[0][2].choices[2];

// const womenQA11 = questions.question[1][0].choices[0];
// const womenQA12 = questions.question[1][0].choices[1];
// const womenQA13 = questions.question[1][0].choices[2];
// const womenQA21 = questions.question[1][1].choices[0];
// const womenQA22 = questions.question[1][1].choices[1];
// const womenQA23 = questions.question[1][1].choices[2];
// const womenQA31 = questions.question[1][2].choices[0];
// const womenQA32 = questions.question[1][2].choices[1];
// const womenQA33 = questions.question[1][2].choices[2];

// const xQA11 = questions.question[2][0].choices[0];
// const xQA12 = questions.question[2][0].choices[1];
// const xQA13 = questions.question[2][0].choices[2];
// const xQA21 = questions.question[2][1].choices[0];
// const xQA22 = questions.question[2][1].choices[1];
// const xQA23 = questions.question[2][1].choices[2];
// const xQA31 = questions.question[2][2].choices[0];
// const xQA32 = questions.question[2][2].choices[1];
// const xQA33 = questions.question[2][2].choices[2];

// console.log(xQA11);

// if (answer > mensQA11 && mensQA21) {
//オーデサンス
// }else if(answer > mensQA11 && mensQA22){
//ヴェチヴェリオ
//}else if(answer > mensQA11 && mensQA23){
//オイエド
//}else if(answer > mensQA12 && mensQA21){
//34
//}else if(answer > mensQA12 && mensQA22){
//タムダオ
//}else if(answer > mensQA12 && mensQA23){
//ヴォリュート
//}else if(answer > mensQA13 && mensQA21){
//ロンブルダンロー
//}else if(answer > mensQA13 && mensQA22){
//ドソン
//}else if(answer > mensQA13 && mensQA21){
//ヴォリュート
//}

// if (answer > womenQA11 && womenQA21) {
//フィロシコス
// }else if(answer > womenQA11 && womenQA22){
//ロンブルダンロー
//}else if(answer > womenQA11 && womenQA23){
//オーデサンス
//}else if(answer > womenQA12 && womenQA21){
//オーローズ
//}else if(answer > womenQA12 && womenQA22){
//ドソン
//}else if(answer > womenQA12 && womenQA23){
//オフレシア
//}else if(answer > womenQA13 && womenQA21){
//オーモエリ
//}else if(answer > womenQA13 && womenQA22){
//34オードトワレ
//}else if(answer > womenQA13 && womenQA21){
//オイエド
//}

// if (answer > xQA11 && xQA21) {
//ヴェチヴェリオ
// }else if(answer > xQA11 && xQA22){
//ロードネロリ
//}else if(answer > xQA11 && xQA23){
//34
//}else if(answer > xQA12 && xQA21){
//オーデュエル
//}else if(answer > xQA12 && xQA22){
//オーローズ
//}else if(answer > xQA12 && xQA23){
//ヴォリュート
//}else if(answer > xQA13 && xQA21){
//ロンブルダンロー
//}else if(answer > xQA13 && xQA22){
//オレーヌ
//}else if(answer > xQA13 && xQA21){
//ドソン
//}





// const quest = [{
//     question: 'あなたの性別を教えてください。',
//     choices: ['1:男性', '2:女性', '3:Xジェンダー']
// }]
// console.log(quest[0].choices[1]);


// //オーデサンス　タムダオ　ヴォリュート
// const questionM = [{
//     question: '今の気分にぴったりなのは？',
//     choices: ['1:柑橘', '2:ウッディー', '3:スモーキー']
// }, {
//     question: 'なりたいイメージは？',
//     choices: ['1:さわやか', '2:大人の余裕', '3:ワイルド']
// }, {
//     question: 'デートするなら・・・',
//     choices: ['1:自然を満喫', '2:美術館', '3:バー']
// }]
// console.log(questionM[0].question);


// //フィロシコス　ドソン　ロンブルダンロー
// const questionW = [{
//     question: '今の気分にぴったりなのは？',
//     choices: ['1:ジューシー', '2:フローラル', '3:オリエンタル']
// }, {
//     question: 'なりたいイメージは？',
//     choices: ['1:癒し系', '2:色気のある', '3:スタイリッシュ']
// }, {
//     question: 'デートするなら・・・',
//     choices: ['1:自然を満喫', '2:リゾート地', '3:六本木ヒルズ']
// }]

// //ヴェチヴェリオ　オーデュエル　オレーヌ
// const questionX = [{
//     question: '今の気分にぴったりなのは？',
//     choices: ['1:ハーブ', '2:バニラ', '3:オリエンタル']
// }, {
//     question: 'なりたいイメージは？',
//     choices: ['1:上品', '2:無邪気', '3:色気のある']
// }, {
//     question: 'デートするなら・・・',
//     choices: ['1:グランピング', '2:家でゆっくり', '3:クラブ']
// }]

// const val1 = $('#choice1'.val);
// console.log(val1);


// function qu() {
//     $('#js-questionArea').html(quest[0].question);
//     $('#choice1').html(quest[0].choices[0]);
//     $('#choice2').html(quest[0].choices[1]);
//     $('#choice3').html(quest[0].choices[2]);
// }
// qu();
// console.log(qu);

// let i = 0;


// $('input[name="kotae"]').on('click', function () {
//     const choosevalue = parseInt($(this).val()); //文字
//     // const choosevalue = $(this).val();
//     console.log(choosevalue === 0);
//     if (choosevalue === 0) { //データの中身もデータの型も同じだったら
//         $('input[type="checkbox"]').prop('checked', false);

//         function quM() {
//             $('#js-questionArea').html(questionM[i].question);
//             $('#choice1').html(questionM[i].choices[0]);
//             $('#choice2').html(questionM[i].choices[1]);
//             $('#choice3').html(questionM[i].choices[2]);
//             // $('input[type="checkbox"]').prop('checked', true);
//         };
//         quM();
//         // i++;

//     } else if (choosevalue === 1) {
//         function quW() {
//             $('#js-questionArea').html(questionW[i].question);
//             $('#choice1').html(questionW[i].choices[0]);
//             $('#choice2').html(questionW[i].choices[1]);
//             $('#choice3').html(questionW[i].choices[2]);
//             // i++;
//         };
//         quW();
//         // i++;

//     } else if (choosevalue === 2) {
//         function quX() {
//             $('#js-questionArea').html(questionX[i].question);
//             $('#choice1').html(questionX[i].choices[0]);
//             $('#choice2').html(questionX[i].choices[1]);
//             $('#choice3').html(questionX[i].choices[2]);
//             // i++;
//         };
//         quX();
//         // i++;
//     }
// });

// $('input[name="kotae"]').on('click', function () {
//     if (quest[0].choices === 0) {
//         function quM1() {
//             $('#js-questionArea').html(questionM[0].question);
//             $('#choice1').html(questionM[0].choices[0]);
//             $('#choice2').html(questionM[0].choices[1]);
//             $('#choice3').html(questionM[0].choices[2]);
//         }
//         quM1();

//         if (questionM[0].choices === 0) {
//             function quM2() {
//                 $('#js-questionArea').html(questionM[1].question);
//                 $('#choice1').html(questionM[1].choices[0]);
//                 $('#choice2').html(questionM[1].choices[1]);
//                 $('#choice3').html(questionM[1].choices[2]);
//             }
//             quM2();

//         };
//         if (questionM[0].choices === 1) {
//             function quM3() {
//                 $('#js-questionArea').html(questionM[1].question);
//                 $('#choice1').html(questionM[1].choices[0]);
//                 $('#choice2').html(questionM[1].choices[1]);
//                 $('#choice3').html(questionM[1].choices[2]);
//             }
//             quM3();
//         };
//         if (questionM[0].choices === 2) {
//             function quM4() {
//                 $('#js-questionArea').html(questionM[1].question);
//                 $('#choice1').html(questionM[1].choices[0]);
//                 $('#choice2').html(questionM[1].choices[1]);
//                 $('#choice3').html(questionM[1].choices[2]);
//             };
//             quM4();
//         }
//     } else if (quest[0].choices === 1) {



//     } else if (quest[0].choices === 2) {



//     }
// });

// $('.show-modal').on('click', function () {
//     // モーダルウィンドウを開く
//     function showModal(event) {
//         event.preventDefault();

//         var $shade = $('<div></div>');
//         $shade
//             .attr('id', 'shade')
//             .on('click', hideModal);


//         var $modalWin = $('#modalwin');
//         var $window = $(window);
//         var posX = ($window.width() - $modalWin.outerWidth()) / 2;
//         var posY = ($window.height() - $modalWin.outerHeight()) / 2;

//         $modalWin
//             .before($shade)
//             .css({
//                 left: posX,
//                 top: posY
//             })
//             .removeClass('hide')
//             .addClass('show')
//             .on('click', 'button', function () {
//                 hideModal();
//             });
//     }

//     function hideModal() {
//         $('#shade').remove();
//         $('#modalwin')
//             .removeClass('show')
//             .addClass('hide');
//     }

//     $('.show-modal').on('click', showModal);

// }());
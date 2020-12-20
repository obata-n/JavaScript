const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'PlayStation2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },
  {
    question: '糸井重里が規格に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  },
  {
    question: 'ファイナルファンタジーIVの主人公の名前は？',
    answers: [　
      'フリオニール', 
      'クラウド', 
      'ティーダ', 
      'セシル'
    ],
    correct: 'セシル'
  },
  {
    question: '赤いネクタイがトレードマークの自称「ジャングルの王者」といえば？',
    answers: [　
      'キャンディーコング', 
      'クランキーコング', 
      'ドンキーコング', 
      'ファンキーコング'
    ],
    correct: 'ドンキーコング'
  }
]

const quizLength = quiz.length
let quizIndex = 0
let score = 0

// $を頭につけることでHTMLオブジェクトということを見ただけでわかるようにすると良い
const $button = document.getElementsByTagName('button')
let buttonLength = $button.length

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question
  let buttonIndex = 0
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++
  }
}

setupQuiz()

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！')
    score++
  } else {
    window.alert('不正解！')
  }

  quizIndex++

  if (quizIndex < quizLength) {
    // 問題文があれば実行
    setupQuiz()
  } else {
    // 問題文がなけば実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！')
  }

}

// ボタンクリック時に正誤判定
let handlerIndex = 0
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e)
  })
  handlerIndex++
}


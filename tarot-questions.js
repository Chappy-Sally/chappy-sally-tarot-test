const roleMap = {  
  yasashiku: {  
    categories: {  
      
chappy-sally-tarot
Repository navigation
Code
Issues
Pull requests
chappy-sally-tarot
/tarot.html
Chappy-Sally
Chappy-Sally
4 months ago
1013 lines (858 loc) · 31.6 KB

Code

Blame
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>チャッピー＆サリーの対話ナビ</title>

<style>
body{
  font-family:"Hiragino Kaku Gothic ProN", sans-serif;
  background:#fff0f5;
  text-align:center;
  margin:0;
  padding:20px 14px 40px;
  color:#6b4b2a;
}

.page-title{
  font-size:28px;
  font-weight:bold;
  line-height:1.4;
  margin:8px 0 18px;
}

.box{
  width:92%;
  max-width:680px;
  margin:0 auto 18px;
  background:rgba(255,255,255,0.92);
  border-radius:28px;
  padding:22px 16px;
  box-shadow:0 6px 18px rgba(0,0,0,0.07);
}

.desc{
  font-size:18px;
  line-height:1.8;
  margin:0 0 16px;
}

.label{
  font-size:16px;
  line-height:1.7;
  color:#8a6a4a;
  margin:8px 0 6px;
}

input, select, textarea{
  width:92%;
  max-width:520px;
  box-sizing:border-box;
  padding:14px 16px;
  border-radius:20px;
  border:2px solid #d8c0ff;
  font-size:17px;
  background:white;
  margin:6px 0 10px;
}

textarea{
  min-height:72px;
  resize:vertical;
}

button{
  border:none;
  border-radius:28px;
  padding:14px 18px;
  font-size:18px;
  color:white;
  cursor:pointer;
  margin:8px 6px;
  box-shadow:0 4px 10px rgba(0,0,0,0.08);
  transition:transform 0.15s ease, opacity 0.15s ease;
}
        "今の私の正直さは、何点くらい？",
        "この気持ちは、何を守ろうとしている？"
      ],
      "ゆるめる": [
        "今の私は、どこで頑張りすぎている？",
        "今日、やらなくてもいいことは何？",
        "休むことを許していない理由は？",
        "『ちゃんとしなきゃ』を外すと、何が起きる？",
        "今の私に必要な休み方は？",
        "このカードは、どこをゆるめてと言っている？",
        "立ち止まることで守れるものは何？",
        "今すぐできる小さな休息は？",
        "何を後回しにしても大丈夫？",
        "今日は何割の力で過ごしていい？"
      ],
      "自分にやさしく": [
        "私は自分に、どんな言葉をかけている？",
        "親友だったら、今の私に何て言う？",
        "責める代わりに、理解できるところは？",
        "私は本当は、何を許してほしい？",
        "このカードは、私のどこを認めている？",
        "もう十分やってきたことは何？",
        "比べなくていい理由は？",
        "自分を大切にするとしたら、今日は何を選ぶ？",
        "私は私に、どんな扱いをしてあげたい？",
        "このままでも大丈夫な部分はどこ？"
      ],
      "今日のひとこと": [
        "今日の私へのメッセージは？",
        "このカードを一言で表すと？",
        "今日いちばん意識したいことは？",
        "今日の私は、何を思い出せばいい？",
        "今日、無理しなくていい合図は？",
        "私は今日、何を受け取っていい？",
        "今日の安心ワードは？",
        "今日の私にとっての『正解』は何？",
        "今日はどんな一日で十分？",
        "最後に、私にかけてあげたい一言は？"
      ]
    }
  },

  kizuki: {
    categories: {
      "今のテーマ": [
        "このカードは、今の私のどんなテーマを映している？",
        "私はいま、人生のどんな場面に立っている？",
        "この状況で、いちばん大事にしたい軸は？",
        "今の私が向き合っている課題は何？",
        "このカードは、私に何を気づかせようとしている？",
        "ここから流れが変わるポイントはどこ？",
        "私は今、何を学んでいる途中？",
        "このテーマは、いつ頃から続いている？",
        "今の私は、変化のどの段階にいる？",
        "このカードが出た必然は何？"
      ],
      "思い込み・ブロック": [
        "私が『当たり前』だと思い込んでいることは？",
        "本当はもう手放していい考え方は何？",
        "このカードは、どんな思い込みを照らしている？",
        "私は何を怖がって、止まっている？",
        "それは本当に今の私に必要？",
        "誰かの価値観を背負っていない？",
        "この思い込みを外したら、何が起きそう？",
        "私はどこで自分を小さくしている？",
        "そのブロックは、もともと誰のもの？",
        "守るために持ってきた考えは何？"
      ],
      "手放し・切り替え": [
        "今の私が手放すと楽になるものは？",
        "終わりにしていいパターンは何？",
        "このカードは『もう十分』と言っている？",
        "無意識に握りしめているものは？",
        "手放した先に、どんな余白が生まれる？",
        "私は何を完了させようとしている？",
        "ここで区切りをつけても大丈夫な理由は？",
        "役目を終えたものは何？",
        "手放すこと＝失う、だと思っていない？",
        "このカードが示す『切り替えの合図』は？"
      ],
      "次の一歩": [
        "今の流れに沿った一歩はどれ？",
        "小さく始めていい行動は何？",
        "無理せず進むとしたら、どう動く？",
        "このカードは、どんな行動を後押ししている？",
        "今すぐ結果を出さなくていい理由は？",
        "一歩進むとしたら、何を選ぶ？",
        "動く前に整えるべきことは？",
        "私に合ったペースはどれくらい？",
        "進むことで、何が自然に変わりそう？",
        "今日できる『一番やさしい行動』は？"
      ],
      "流れに乗る": [
        "今の私は、どんな流れの中にいる？",
        "抗わなくていいポイントはどこ？",
        "このカードは、信頼していい流れを示している？",
        "頑張るより、委ねた方がいい部分は？",
        "私はどこで流れを止めている？",
        "流れに乗るために必要な姿勢は？",
        "すでにうまく進んでいるところは？",
        "この流れのゴールは何を教えている？",
        "今の私にとっての『ちょうどいい』は？",
        "最後に、このカードが伝えたい統合メッセージは？"
      ]
    }
  },


# redux introduction

## この資料について

社内でとあるチームより自チームのReduxアーキテクチャを理解したいという声があったのでこさえました  
アーキテクチャはuryyyyyyyさんが作ったもので、本人による[解説記事](https://qiita.com/uryyyyyyy/items/1f2022bbf914d65d635a)もあるので、そちらもちょこちょこ参照します  

構成としては、 `src/` 配下に `step1` ~ `stepN` のフォルダを作ってあり、stepごとに少しずつReduxを触っていく形になっています  

## 前説

Reduxのかんたんな説明をします  
この辺参照 https://redux.js.org/introduction/

### Reduxを超ざっくりまとめると

- モチベ
  - SPA複雑だしどっから変更されるかわからんグローバル変数とか人間には処理しきれないでしょ？
  - Flux,CQRS,EventSourcingといった仕組みのようにreduxでは更新処理に一定のルールを敷くことでわかりやすくしたよ
- コンセプト
  - Single source of truth
  - State is read-only
  - Changes are made with pure functions

状態はただ1つで、こいつは読み取り専用。更新処理は純粋関数によってのみ行われる。  
→この制約によってアプリケーションの状態管理がわかりやすくなるでしょ？

みたいな感じ。  

### コンセプトを実現するReduxの機能について

登場人物は以下の4つ

- State
  - 状態。プレーンなオブジェクト
- Action
  - イベント。 `type` というプロパティを持つ
- Reducer
  - `type Reducer = (state: State, action: Action) => State`
  - stateとactionを引数に取り、新しいstateを返す関数。純粋関数であるべき
- Store
  - 内部にStateを保持し、発行されたActionに対してReducerを適用して新しいStateを作り、その更新をブロードキャストする仕組みを持ったもの
  - つまり単なるPublisher/Subscriberモデル
  - Publisherはどこの誰かは知らんが、Actionを発火（dispatch）する
  - SubscriberはStoreから状態を読む

これ以外は大体、「↑の仕組みだけじゃ破綻しがちだから俺たち（Redux）が実装パターン用意したよ、つかってね」というだけ

## step1

reduxドキュメントのBasic Exampleを実装します  
https://redux.js.org/introduction/getting-started#basic-example

これが `redux` の最小構成です  


## step2

step1で作った最小構成をReactに素朴に組み込みます  
CounterStateをReactのComponent Stateとして保持しておき、reduxのstoreのstateが更新されるたびにComponentを更新するように作ります  

## step3

ボタンを `IncrementButton` として別Componentにし、その中で `INCREMENT` のActionを発火させるようにします  
こうなると「どこで `INCREMENT` のActionが発火されるのかひと目でわからん」という状態になりますね  

## step4

storeの依存をなるべく上流のComponentに集約させ、下流のComponentは渡されたPropsのみに依存するようにします  
また、`INCREMENT` Actionを再利用しやすいようにActionを作る関数を作ります。これがいわゆるActionCreatorになるわけです。  
  
ここでReduxのStoreとComponentがだいぶ疎結合になりました  

## step5

`App` Componentに含まれていたstoreの依存を完全に取り除くために `react-redux` というライブラリのヘルパ関数 `connect` を使ってみましょう  
このconnect関数を使うことでreduxの持つ `state` 及び `dispatch` 関数がComponentとキレイに分離されます  

段々と見たことある形に近づいてきましたね  


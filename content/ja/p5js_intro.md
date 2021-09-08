---
title: p5.jsについて
description: ''
position: 6.00
category: p5.js
---

## 成り立ち

### Design By Numbers (DBN)

> Design By Numbers (DBN) was an influential experiment in teaching programming initiated at the MIT Media Lab during the 1990s. Led by John Maeda and his students they created software aimed at allowing designers, artists and other non-programmers to easily start computer programming. The software itself could be run in a browser and published alongside the software was a book and courseware.<br>（[Wikipedia](https://en.wikipedia.org/wiki/Design_By_Numbers)より引用）

↓日本語訳
> <strong>Design By Numbers（DBN）</strong>は、<strong>1990年代</strong>に<strong>MITメディアラボ</strong>で行われた、プログラミング教育に大きな影響を与えた試みです。<strong>ジョン・マエダ</strong>とその学生たちが中心となり、<strong>デザイナーやアーティストなど、プログラマーではない人たちが簡単にコンピュータ・プログラミングを始められるようなソフトウェアを開発しました。</strong>ソフトウェア自体はブラウザで実行でき、ソフトウェアと一緒に本やコースウェアも出版された。

<!-- Vimeo 埋め込み -->
<div style="padding:58.31% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/72611093?h=2c52eee7ae" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/72611093">Design By Numbers</a> from <a href="https://vimeo.com/user895875">John Maeda</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Processing

<div class="flex justify-around items-center">
  <div>
    <span>新ロゴ</span>
    <img src="/resource/image/p5js_intro_logo-p5.png" alt="Processing" width="128" height="128"/>
  </div>
  <div>
    <span>旧ロゴ</span>
    <img src="/resource/image/p5js_intro_logo-p5-old.png" alt="Processing" width="128" height="128"/>
  </div>
</div>

[Processing](https://processing.org/)

> Processing（プロセシング）は、キャセイ・レアス（Casey Reas）とベンジャミン・フライ（Benjamin Fry）によるオープンソースプロジェクトであり、かつてはMITメディアラボで開発されていた。<strong>電子アートとビジュアルデザインのためのプログラミング言語</strong>であり、統合開発環境（IDE）である。<strong>アーティストによるコンテンツ制作作業のために、詳細な設定を行う関数を排除している。</strong> 視覚的なフィードバックが即座に得られるため、初心者がプログラミングを学習するのに適しており、電子スケッチブックの基盤としても利用できる。Java を単純化し、<strong>グラフィック機能に特化した言語</strong>といえる。<br>（[Wikipedia](https://ja.wikipedia.org/wiki/Processing)より引用）

Processingでは**プログラムのことをスケッチ（`sketch`）と呼びます。**

デスクトップアプリケーション（`.app` `.exe`）として書き出しができるため、メディアアートやインタラクティブコンテンツの制作によく用いられます。

<img src="/resource/image/p5js_intro_processing.png" alt="Processing"/>

`Processing` は英語圏のスラング（[Leet](https://ja.wikipedia.org/wiki/Leet)といいます）で `proce55ing` とも書かれていて、それを略して `p5` （ぴーふぁいぶ）と呼ばれることもあります。

## p5.js

<img src="/resource/image/common_logo-p5js.svg" width="128" height="58" alt="p5.js"/>

上記のProcessingを**Webブラウザ上で動作するようにJavaScriptに移植したもの**です。  
p5.jsはJavaScriptライブラリとして公開されています。

<alert>

p5.jsでもProcessingと同様にプログラムのことを**スケッチ**と呼びます。  
授業中にスケッチと言ったらp5.jsのプログラムのことだと思ってください。

</alert>

### p5.js Editor

p5.jsには公式のWebエディタが用意されています。  
p5.js Editor 上で作成したスケッチはログインすることで保存、公開できます。

今回はこの p5.js Editor を使って授業を進めていきます。

[p5.js Web Editor](https://editor.p5js.org/)

<a href="https://editor.p5js.org/" target="_blank">
  <img src="/resource/image/p5js_intro_editor.png" alt="p5.js Editor"/>
</a>
<!--  -->

### なにができる？

<alert type="success">

公式のExampleやOpenProcessing、NEORT、PCD Japan Galleryのページを見て、<strong>`p5.js` でどんなことができるのか確認しましょう。</strong>

</alert>

<alert type="success">

以下のサイトの中から**好きなスケッチをひとつ選んで**、以下の内容を**Teamsのスレッドに投稿**してください！  
選ぶ基準はなんでもOKです！

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝  
**スケッチURL**  
https://...

<br>

**選んだ理由**  
配色がかわいい！  
マウスについてきて楽しい！  

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

</alert>

#### Examples

p5.js公式のサンプルページです。  
機能ごとの簡単なサンプルが多いです。

[examples | p5.js](https://p5js.org/examples/)

<a href="https://p5js.org/examples/" target="_blank">
  <img src="/resource/image/p5js_intro_p5js-examples.png" alt="p5.js Editor"/>
</a>

#### OpenProcessing

p5.jsのスケッチを投稿するギャラリーサイトです。

[OpenProcessing](https://www.openprocessing.org/browse/#)

<a href="https://www.openprocessing.org/browse/#" target="_blank">
  <img src="/resource/image/p5js_intro_openprocessing.png" alt="OpenProcessing"/>
</a>

#### NEORT

制作ツール不問のデジタルアートを投稿するプラットフォームです。
`#p5.js`のタグがあるので、どんな作品が投稿されているか見てみましょう！

[NEORT | Digital Art Platform](https://neort.io/tag/bmjb2ss3p9f7m1g01690)

<a href="https://neort.io/tag/bmjb2ss3p9f7m1g01690" target="_blank">
  <img src="/resource/image/p5js_intro_neort.png" alt="NEORT"/>
</a>

#### PCD Japan Gallery

**P**rocessing **C**ommunity **D**ay Japan のギャラリーページです。

[PCD Japan Gallery](https://pcd-japan-gallery.vercel.app/)

<a href="https://pcd-japan-gallery.vercel.app/" target="_blank">
  <img src="/resource/image/p5js_intro_pcdjapan.png" alt="PCD Japan Gallery"/>
</a>

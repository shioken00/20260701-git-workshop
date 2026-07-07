# 旅の足跡 (Traces of Travel)

研究開発リテラシー #11 最終課題として制作したWebサイトです。
本来3人グループで行う課題を、1人チームとして企画・設計・実装しました。

## サイト構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ |
| `visited.html` | 詳細ページ1: 行った国 |
| `wishlist.html` | 詳細ページ2: 行きたい場所 |
| `css/style.css` | 共通スタイルシート |
| `js/script.js` | モバイルナビ・地図(Leaflet)制御 |

ページ数は「メンバー数+1」(1人チーム基準: 1+1=2枚)としています。

## 使用技術

- HTML5 / CSS3(レスポンシブデザイン対応)
- JavaScript(Vanilla JS)
- [Leaflet.js](https://leafletjs.com/) + OpenStreetMap(アクセスマップ表示)
- フォント: Fraunces / Work Sans / JetBrains Mono(Google Fonts)

## 編集方法

各HTMLファイル内の国名・コメント・座標はサンプルデータです。
`visited.html` / `wishlist.html` の下部にある `MAP_PINS` の値を書き換えると、
地図上のピンも連動して更新されます。

## ローカルでの確認方法

このサイトは静的サイトのため、`index.html` をブラウザで直接開くか、
以下のように簡易サーバーを立てて確認できます。

```bash
python3 -m http.server 8000
# http://localhost:8000 にアクセス
```

## 公開URL(GitHub Pages)

リポジトリの Settings > Pages から公開すると、以下のようなURLで閲覧できます。

```
https://<GitHubユーザー名>.github.io/<リポジトリ名>/
```

# vue-test
Vue をあれこれテストしたいがためのリポジトリ

---

以下は Windows 環境を用いています。

# 起動方法

Apache を起動して、そのうえで実行して確認する

### 1. httpd-2.4.57-win64-VS17.zip を解凍する

解凍する場所はどこでもいいが、ここでは `D:/program_src/javascript/vue-test` とする

### 2. 解凍したフォルダにある `Apache24\conf\httpd.conf` を以下のように直す

```sh
～ 中略 ～

# 解凍の仕方によって、 httpd-2.4.57-win64-VS1 は無い場合がある
Define SRVROOT "D:/program_src/javascript/vue-test/httpd-2.4.57-win64-VS17/Apache24"

～ 中略 ～

DocumentRoot "D:/program_src/javascript/vue-test"
<Directory "D:/program_src/javascript/vue-test">
```

### 3. 解凍したフォルダにある `Apache24\bin\httpd.exe` を実行する

コマンドプロンプトから `httpd.exe` を起動する  
なお、 Apache の起動を止める場合は `Ctrl + C` で止まる

# ソース確認方法

## ビルドありの確認方法

### 1. ビルドする

1. コマンドプロンプトを起動し、本リポジトリを clone もしくはダウンロードした際の `vue-test\src_create_vue\vue-project` フォルダまで、カレントディレクトリを移動する
2. カレントディレクトリが `vue-project` になっていることを確認し、 `npm run build` を実行する
3. `vue-project` 配下に `dist` というフォルダが作成され、その中にビルドしたファイルが入っている

### 2. ブラウザで確認する

`http://localhost/src_create_vue/vue-project/dist/` にアクセスすると、画像は出ないがそれ以外は動いている

## ビルドなしの確認方法

### ブラウザでアクセスするだけ

`http://localhost/src_cdn_dl` にアクセスすると、表示される

#### 余談

ビルド不要な方は、Vue の記述を `DOMContentLoaded` に紐づけるか、あるいはスクリプトの読み込みを `body` タグの最後に置かないと DOM の構築が終わっていないため処理できない

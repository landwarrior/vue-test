# vue-test
Vue をあれこれテストしたいがためのリポジトリ

---

以下は Windows 環境を用いています。

ESLint を使えるように、パッケージのインストールが必要です。  
package.json があるので、以下のコマンドを実行するだけ。

```sh
npm install
```

VSCode の拡張機能 Peacock を使って VSCode の色を変えているため、 `.vocode` にその設定が入っています。

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

### 2. パスを変更する

ビルドすると、 `dist` 配下にある `index.html` 内の `assets` 配下のパスが絶対パスになっているため、先頭に `.` をつけて相対パスに変更する  
CSS はうまくいくが、 JavaScript はダメみたい

### 3. ブラウザで確認する

`http://localhost/src_create_vue/vue-project/dist/` にアクセスすると、今は動いていない（ビルドがおかしい）

## ビルドなしの確認方法

### ブラウザでアクセスするだけ

`http://localhost/src_cdn_dl` にアクセスすると、表示される

#### 余談

ビルド不要な方は、Vue の記述を `DOMContentLoaded` に紐づけるか、あるいはスクリプトの読み込みを `body` タグの最後に置かないと DOM の構築が終わっていないため処理できない

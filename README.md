# vue-test
Vue をあれこれテストしたいがためのリポジトリ

---

Apache を起動して、そのうえで実行して確認する

Apache は、回答したら httpd.conf を以下のように直す

```conf
～ 中略 ～

Define SRVROOT "D:/program_src/javascript/vue-test/httpd-2.4.57-win64-VS17/Apache24"

～ 中略 ～

DocumentRoot "D:/program_src/javascript/vue-test"
<Directory "D:/program_src/javascript/vue-test">
```

httpd.exe を叩いて起動し、 `http://localhost/src_create_vue/vue-project/dist/` にアクセスすると、画像は出ないがそれ以外は動いている

上記URLを閲覧するためには `npm run build` が必要なので、忘れずに

ビルド不要な方は、 `DOMContentLoaded` に紐づけるか、あるいはスクリプトの読み込みを body タグの最後に置かないといけない

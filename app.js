/**
 * Created by v_lljunli on 2017/8/18.
 */
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
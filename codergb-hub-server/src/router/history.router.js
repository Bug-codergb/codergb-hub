const KoaRouter = require("koa-router");
const historyRouter = new KoaRouter({prefix:"/history"});
const {} = require("../controller/history.controller");

module.exports = historyRouter;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hello world';
    if (this.ctx.session.user) {
      console.log(this.ctx.session.user);
      await ctx.render("index")
    } else {
      ctx.redirect("/login")

    }
  }

  async login() {
    const { ctx } = this;
    // ctx.body = 'hello world';
    await ctx.render("login")
  }


  async doLogin() {
    let username = this.ctx.request.body.username
    let password = this.ctx.request.body.password
    if (username == "liujunjie" && password == "123") {
      this.ctx.session.user = username
      this.ctx.redirect("/")
    } else {
      this.ctx.redirect("/login")
    }
  }

  async logout() {
    this.ctx.session.user = ""
    this.ctx.redirect("/login")
  }

  async getData() {
    this.ctx.body = "hello egg"
  }
}

module.exports = HomeController;

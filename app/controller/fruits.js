const { Controller } = require('egg');


let fruitList = [
    "香蕉",
    "苹果",
    "鸭梨"
]

class FruitsController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = {
            msg: 'hello',
            code: 200,
            fruitList
        };
    }

    async new() {
        this.ctx.body = `
            <form method='post' action='/fruits'>
                <input name='fruitname'>
                <button>添加</button>
            </form>
        `
    }

    async create() {
        let fruit = this.ctx.request.body.fruit
        fruitList.push(fruit)
        // this.ctx.body = {
        //     fruitList
        // }

        this.ctx.body = "添加成功"
    }

    async destroy() {
        let num = this.ctx.params.id
        fruitList.splice(num, 1)
        this.ctx.body = "删除成功"
        // this.ctx.redirect('/fruits')
    }

    // async getId() {
    //     const { ctx } = this;
    //     console.log(ctx.params);
    //     ctx.body = "传递的ID是" + ctx.params.id
    // }

    // async createPage() {
    //     this.ctx.body = `
    //         <form method='post' action='/createfruit'>
    //             <input name='fruitname'>
    //             <button>添加</button>
    //         </form>
    //     `
    // }

    // async createFruit() {
    //     let fruit = this.ctx.request.body.fruitname
    //     fruitList.push(fruit)
    //     this.ctx.body = {
    //         fruitList
    //     }
    // }
}

module.exports = FruitsController;
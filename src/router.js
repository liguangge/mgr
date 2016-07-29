export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component (resolve) {
                require(['./views/Hello'], resolve)
            }
        },
         /* 404路由 */
        '*': {
            component: function(resolve){
                require(['./views/Hello'],resolve);
            }
        },
        '/hello': {
             name: 'hello',
             component (resolve) {
                 require(['./views/Hello'], resolve)
            }
        },
        '/funclist': {
             name: 'funclist',
             component (resolve) {
                 require(['./views/FuncList'], resolve)
            }
        }
    })
    router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if(toPath === '/funclist'){
        router.app.isIndex = false
    }else{
        router.app.isIndex = true
    }
    next()
    })
}
export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component (resolve) {
                require(['./views/Home'], resolve)
            }
        },
         /* 404路由 */
        '*': {
            component: function(resolve){
                require(['./views/Home'],resolve);
            }
        },
        '/funclist': {
             name: 'funclist',
             component (resolve) {
                 require(['./views/FuncList'], resolve)
            }
        },
        '/addfunc': {
             name: 'addfunc',
             component (resolve) {
                 require(['./views/AddFunc'], resolve)
            }
        }
    })
    router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if(toPath === '/funclist1'){
        router.app.isIndex = false
    }else{
        router.app.isIndex = true
    }
    next()
    })
}
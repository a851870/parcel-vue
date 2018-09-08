import myprogress from './tpl/Progress'

myprogress.install = function (Vue, options = {}) {
    Vue.component(options.componentName || myprogress.name, myprogress)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    Vue.component(myprogress.name, myprogress)
}

export default myprogress
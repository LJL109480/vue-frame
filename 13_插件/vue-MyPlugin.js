/**
 * Created by Administrator on 2018/11/9.
 */
(function (window) {
    const MyPlugin={};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
         alert('This is Vue of methods "myGlobalMethod"');
        },

        // 2. 添加全局资源
        Vue.directive('my-directive', (el, binding)=>{
             el.textContent='my-directive' + binding.value
            }
        )
        

        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
           alert('This is "$myMethod" of Vue  methods')
        }
    }
    window.MyPlugin = MyPlugin;
})(window);
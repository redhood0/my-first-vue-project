export default (Vue) => {
    Vue.directive("throttle", {
        inserted: function (el, binding) {
            let isWaiting = false;
            el.onclick = function () {
                let fun = binding.value['fun']
                let time = binding.value['time']

                if (isWaiting) {
                    console.log('点击次数过多');
                } else {
                    isWaiting = true;
                    fun();
                    setTimeout(function () {
                        isWaiting = false;
                    }, time)
                }
            }
        }
    })
}
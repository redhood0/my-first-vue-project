export default (Vue) => {
    Vue.directive("throttle", {
        inserted: function (el, binding) {
            let data = {
                isWaiting: false
            };

            el.onclick = function () {
                let fun = binding.value['fun']
                let time = binding.value['time']

                if (data.isWaiting) {
                    console.log('点击次数过多');
                } else {
                    data.isWaiting = true;
                    fun(data);
                    console.log(data);
                    // setTimeout(function () {
                    //     isWaiting = false;
                    // }, time)
                }
            }
        }
    })
}
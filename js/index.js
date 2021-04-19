document.addEventListener('DOMContentLoaded', function() {

    const wrap = document.querySelector('#myworks .content');
    const controlls = document.querySelectorAll('#myworks .controlls a');

    controlls.forEach( (el) => {
        el.addEventListener('click', function() {
            if(el.classList.contains('forw')) {
                wrap.scrollTo( wrap.scrollLeft + 300, 0 )
            }else{
                wrap.scrollTo( wrap.scrollLeft - 300, 0 )
            }
        })
    })

})
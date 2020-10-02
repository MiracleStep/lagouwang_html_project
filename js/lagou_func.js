window.onload = function (){
    let btn1 = document.getElementById('btn1');
    btn1.onclick = function (){
        let input1 = document.getElementById('input1');
        if (input1.value == ''){
            alert('尚未输入!');
        }
        else {
            alert('无法查找：'+ input1.value +'，此功能尚未完善！');
        }
    }


    let w1 = document.getElementById('w1');
    let w2 = document.getElementById('w2');
    let w3 = document.getElementById('w3');
    let w4 = document.getElementById('w4');
    let w5 = document.getElementById('w5');
    let w6 = document.getElementById('w6');
    let img = document.getElementById('img');
    const img_lib =['./image/bytedance.jpg','./image/Tencent.jpg',
        './image/baidu.jpg','./image/google.jpg','./image/weiruan.jpg','./image/apple.jpg'];
    w1.onclick = function (){
        img.src = './image/bytedance.jpg';
        img.style.width = '491px';
        img.style.height = '424px';
    }
    w2.onclick = function (){
        img.src = './image/Tencent.jpg';
        img.style.width = '491px';
        img.style.height = '424px';
    }
    w3.onclick = function (){
        img.src = './image/baidu.jpg';
        img.style.width = '491px';
        img.style.height = '424px';
    }
    w4.onclick = function (){
        img.src = './image/google.jpg';
        img.style.width = '491px';
        img.style.height = '424px';
    }
    w5.onclick = function (){
        img.src = './image/weiruan.jpg';
        img.style.width = '491px';
        img.style.height = '424px';
    }
    w6.onclick = function (){
        img.src = './image/apple.jpg';
        img.style.width = '491px';
        img.style.height = '424px';
    }


    // 获取激活码,多次点击后存在bug
    let huoqu = document.getElementById('huoqu');
    huoqu.onclick = function (){
        let num = 60;
        let timer = setInterval(function (){
            num--;
            huoqu.innerHTML = num;
            if (num == 0){
                num = 60;
                huoqu.innerHTML = '获取验证码';
                clearInterval(timer);
            }
        },1000);
    }

    let log_in = document.getElementById('log_in');
    log_in.onclick = function (){
        alert('尚未开通！');
    }


    // 临时功能(维护)
    // const app = new Vue({
    //     el: '#img',
    //     data:{
    //         img_lib : ['./image/bytedance.jpg','./image/Tencent.jpg',
    //             './image/baidu.jpg','./image/google.jpg','./image/weiruan.jpg','./image/apple.jpg']
    //     },
    //     methods:{
    //
    //     }
    // })
}
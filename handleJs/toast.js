function toast ({
    title ='',
    desc='',
    type='error',
    duration=3000
}){
    var wrapper =document.getElementById("wrapper")
    const icons = {
        succes:'fas fa-check',
        infor:'fas fa-info',
        error:'fas fa-times'
    }
    const delay=(duration/1000).toFixed(2)
    const icon = icons[type]
    const autoTime=duration+1000
    var boxMessage=document.createElement("div");

    // auto remove boxmessage
    var id =  setTimeout(function(){
        wrapper.removeChild(boxMessage)
    },autoTime)

    // remove boxmessage when click
    boxMessage.onclick=function(e){
        if(e.target.closest('.icon_close')){
            wrapper.removeChild(boxMessage)
            clearTimeout(id);
        }
    }
    boxMessage.innerHTML=
                `  <div class="icon_notify">
                <i class="${icon}"></i>
                </div>
                <div class="infor_box">
                    <h3 class="tile">
                        ${title}
                    </h3>
                    <div class="disc">
                       ${desc}
                    </div>
                </div>
                <div class="icon_close">
                    <i class="fas fa-times"></i>
                </div>
                `
    wrapper.appendChild(boxMessage)
    // css for boxmessage by class box_message
    boxMessage.classList.add('box_message',`toast__${type}`);
    // add animation for boxmessage
    boxMessage.style.animation=`sliderInLeft 0.5s linear, fadeOut 2s ${delay}s linear forwards`
}
function showSuccesToast() {
    toast({
        title:"succes",
        desc:"bạn đã cập nhật giỏ hàng thành công",
        type:"succes",
        duration:1000
    })
}

function showErrorToast() {
    toast({
        title:"thất bại",
        desc:"đã xảy ra sự cố",
        type:"error",
        duration:3000
    })
}

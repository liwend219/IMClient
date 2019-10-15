<template>
    <div class="chrt-room-box">
        <div class="online">
            当前你的小伙伴不在线
        </div>
        <div class="content">
            <div class="notice">
                mm加入了聊天室
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box2">
                
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box2">
                
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box2">
                
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box2">
                
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box2">
                
                <div class="message-cell">
                    <div class="message">4564564564564564564556456456455645645645564564564544444</div>
                </div>
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
            </div>
            <div class="message-box">
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
                <div class="message-cell">
                    <div class="message">456456456456456456455645645645564564564544444</div>
                </div>
            </div>
            <div class="message-box2">
                
                <div class="message-cell">
                    <div class="message">4564564564564564564556444</div>
                </div>
                <div class="author">
                    <img src="/static/images/man.jpeg" alt="">
                </div>
            </div>

            
        </div>
        <div class="message-input-box">
            <input type="text">
            <button class="submit-message">
                发送
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msgObj:{
                clientHeight:''
            }
        }
    },
    mounted(){
        
        // console.log(h)
        // window.scrollTo(0, h);
        this.scrollToBottom()
    },
    methods:{
        scrollToBottom (){
            var ele = document.getElementsByClassName('content')[0]
            ele.scrollTop = ele.scrollHeight;
        },
        submit:function(){
            var content = d.getElementById("content").value;
            if(content != ''){
                var obj = {
                    userid: this.userid,
                    username: this.username,
                    content: content
                };
                this.socket.emit('message', obj);
                d.getElementById("content").value = '';
            }
            return false;
        },
    }
}
</script>

<style lang="less">
.chrt-room-box{
    height: 100vh;
    
    .content{
        background: rgb(244, 249, 255);
        padding:10px;
        height:82vh;
        padding-top:25px;
        overflow: auto;
        
    }
}

.online{
    position: absolute;
    width: 100%;
    top:0;
    background: #EFEFF4;
    font-size: 12px;
    // padding-top: 10px;
    padding:3px 0;
    color: #666;
}
.notice{
    color: #fff;
    max-width: 150px;
    height: 20px;
    background: #ebebeb;
    border-radius: 20px;
    line-height: 20px;
    text-align: center;
    margin: 5px auto;
    font-size: 10px;
    padding: 3px 5px;
}
.message-box{
    display: flex;
    margin: 15px 0;
    .message-cell{
        border-radius: 0 20px 0 20px;
        background: #fff;
        box-shadow: 0px 0px 20px -1px rgb(185, 221, 255);
    }
    .author{
        margin-right: 10px;
    }
}
.author{
    width:40px;
    height:40px;
    // border-radius:50%;
    overflow: hidden;
    img{
        width: 100%;
    }
    
}
.message-cell{
    display: inline-block;
    padding: 11px;
    
    min-width: 180px;
    max-width:240px;
    word-wrap :break-word;
    
    
    .username{
        font-size: 10px;
        color:rgb(61, 61, 61);
    }
    .message{
        font-size: 10px;
        color:#252525
    }
}
.message-box2{
    display: flex;
    margin: 15px 0;
    justify-content: flex-end;
    .message-cell{
        border-radius: 20px 0 20px 0;
        background: rgb(241, 254, 255);
        box-shadow: 0px 0px 20px -1px #c9c9e9;
        
    }
    .author{
        margin-left: 10px;
    }
    .message{
        // color:#fff;
    }
}
.message-input-box{
    position: absolute;
    bottom:15px;
    
    width: 90%;
    left:50%;
    margin-left:-45%;
    // padding:10px;
    // margin-top:20px;
    height:40px;
    border-radius:40px;
    background: #c9c9e9;
    // margin: 20px auto;
    display: flex;
    justify-content: space-between;
    input{
        width: 60%;
        border-radius:40px;
        padding-left:20px;
        background: #c9c9e9;
        color:#fff;
        outline: none;
        border: none;
    }
    .submit-message{
        width:70px;
        height:30px;
        margin-top:5px;
        background: #252525;
        text-align: center;
        color:#fff;
        line-height: 30px;
        margin-right:5px;
        border-radius:30px;
        outline: none;
        border: none;
    }
}
</style>

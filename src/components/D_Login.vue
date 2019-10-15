<template>
    <div class="d-login">
        <div class="box">
            你是谁？
        </div>
        <div class="user-list">
            <div class="author" @click="setSex('man')">
                <img src="/static/images/man.jpeg" alt="">
            </div>
            <div class="author" @click="setSex('woman')">
                <img src="/static/images/woman.jpeg" alt="">
            </div>


        </div>

        <p class="tips">{{tips}}</p>

        <!-- <div class="cl-time">
            3s　>>
        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            tips:'',
            showTips:false,
            sex:'man',
            userid:'',
            username:''
        }
    },
    sockets: {
        connect() {
            console.log('???')
            //查看socket是否渲染成功 
        },
        message(data) {
            //监听message事件，方法是后台定义和提供的
            console.log(data)
        },
    },
    methods:{
        setSex(sex){
            if(this.showTips){
                return
            }
            if(sex === 'man'){
                this.sex = 'man'
                this.tips = '你是一个帅气boy!'
            }else{
                this.sex = 'woman'
                this.tips = '你将是一个备受宠爱的女人'
            }
            this.showTips = true
            var self = this
            this.userid = this.genUid();
            setTimeout(() => {
                self.$router.push(`/chrt?sex=${this.sex}`)
                
            },1000)
            this.$socket.emit('login', {userid:this.userid, username:this.sex == 'man'?'帅气男人':'美丽女人'});
            // this.sockets.subscribe('login', (data) => {
            //     console.log(data)
            // })
        },
        init(){
            
            // this.username = username;
 
            // d.getElementById("showusername").innerHTML = this.username;
            // this.msgObj.style.minHeight = (this.screenheight - db.clientHeight + this.msgObj.clientHeight) + "px";
            // this.scrollToBottom();
 
            //连接websocket后端服务器
            // this.socket = io.connect('ws://localhost:3000/');
            //  this.$socket.emit('login', loginId);       //触发socket连接
 
            //告诉服务器端有用户登录
            
 
            //监听新用户登录
            this.socket.on('login', function(o){
                // CHAT.updateSysMsg(o, 'login');
                console.log('有人登录',o)
            });

            this.sockets.subscribe('login', (data) => {
                console.log(data)
            })
 
            //监听用户退出
            this.socket.on('logout', function(o){
                console.log('有人退出',o)
            });
 
            //监听消息发送
            this.socket.on('message', function(obj){
                console.log('消息发送了',obj)
            });
        },
        genUid(){
            return new Date().getTime()+""+Math.floor(Math.random()*899+100);
        },
        
    }
}
</script>


<style lang="less">
.d-login{
    width: 100%;
    height: 100vh;
    .box{
        padding:100px 0 0 0;
        text-align: center;
        color:#515a6e;
    }
    .user-list{
        display: flex;
        justify-content: center;
        .author{
            width: 60px;
            height:60px;
            background: #000;
            border-radius:50%;
            margin:80px 35px 0 35px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
    .tips{
        margin-top:60px;
        text-align: center;
        color: rgb(112, 112, 112);
    }
    .cl-time{
        width: 100px;
        height:25px;
        background: rgb(228, 228, 228);
        margin: 0 auto;
        border-radius: 25px ;
        text-align: center;
        color: #fff;
    }
}
</style>

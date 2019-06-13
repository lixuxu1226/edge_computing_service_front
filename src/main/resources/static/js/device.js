//对设备操作的接口封装
// var deviceAll;
var device={
    deviceLogin:function (id) {
        $.ajax({
            url:'http://10.108.122.144:8089/devices/login?id='+id,
            type:'PUT',
            data:{},
            dataType:'json',
            async:false,
            success:function (msg) {
                if(msg.code==200){
                   alert("设备登录成功！")
                    // return true;
                }else {
                    // return false;
                }
            }

        })
    },
    deviceRegister:function (deviceType,userName) {
        // alert(deviceType+'/'+userName);
        $.ajax({
            url:'http://10.108.122.144:8089/devices/register',
            type:'POST',
            data:{deviceType:deviceType,userName:userName},
            dataType:'json',
            async:false,
            success:function (msg) {
                if(msg.code==200){
                    alert("设备注册成功！");
                    var te;
                    if(msg.data.deviceType=='phone'){
                        te= {
                            category: 2,
                            name: msg.data.id,
                            des: '',
                            x: 60,
                            y: 300,
                            symbolSize: [30,24],
                            symbol: 'image://../static/img/re_phone.png',
                        }
                    }else {
                        te= {
                            category: 3,
                            name: msg.data.id,
                            des: '',
                            x: 60 ,
                            y: 500,
                            symbolSize: [30,35],
                            symbol: 'image://../static/img/re_pad.png',
                        }
                    }

                }
            }

        })
    },
    deviceLogout:function (id) {
        $.ajax({
            url:'http://10.108.122.144:8089/devices/logout?id='+id,
            type:'PUT',
            data:{},
            dataType:'json',
            async:false,
            success:function (msg) {
                if(msg.code==200){
                    alert("设备登出成功！")
                    // return true;
                }
            }

        })

        
    },
    deviceDelete:function (deviceNo) {
        $.ajax({
            url:'http://10.108.122.144:8089/devices/delete?deviceNo='+deviceNo,
            type:'DELETE',
            data:{},
            dataType:'json',
            async:false,
            success:function (msg) {
                if(msg.code==200){
                    alert("设备删除成功！")
                    // return true;
                }else {
                    // return false;
                }
            }

        })
    }
    // deviceGetAll:function () {
    //     // var temp;
    //     $.ajax({
    //         url:'http://10.108.122.144:8089/devices/get_all',
    //         type:'GET',
    //         dataType:'json',
    //         async:false,
    //         // data:{},
    //         success:function (msg) {
    //             deviceAll=JSON.stringify(msg);
    //             alert(deviceAll);
    //             // JSON.stringify(msg)
    //             // return ;
    //         }
    //
    //
    //     });
        // return temp;
    // }
}

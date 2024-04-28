const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="./assets/css/base.css">
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/fonts/fontawesome-free-6.5.2-web/css/all.min.css">
    <style>
    

:root{
    --white-color: #fff;
    --black-color: #000;
    --text-color: #333;
    --header_height: 120px;
    --navbar_height: 34px;
    --header_body: calc(var(--header_height) - var(--navbar_height));
}

*{
    box-sizing: inherit;
}

html{
    font-size: 100%;
    /* 16px */
    /* font-size: 62.5%; */
    line-height: 1rem;
    font-family:'Times New Roman', Times, serif;
    box-sizing: border-box;

}

/* p{
    font-size: 1rem;
    /* 16px
} 
*/

.grid{
    width: 1450px;
    max-width: 100%;
    margin: 0 auto;
}

.grid__full-width{
    width: 100%;
}

.grid__row{
    display: flex;
    flex-wrap: wrap;
}

/* amination */

@keyframes fade_in {
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
}

@keyframes growth {
    from{
        transform: scale(var(--growth_from));
    }
    to{
        transform: scale(var(--grow_to));
    }
}

.modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
}


/* button style */


.button{
    min-width: 142px;
    height: 36px;
    text-decoration: none;
    outline: none;
    border: none;
    background-color: #fff;
    border-radius: 3px;
    font-size:large;   
    display: flex;
    justify-content: center;
    align-items: center; 
    
}

.button:hover{
    background-color: #D3D3D3;
    cursor: pointer;
}

.button.button__social--fb:hover{
    background-color: #0071db;
    cursor: pointer;
}

.button:focus{
    border: 2px solid #00B6DB;
}


.button.button--primary{
    color: white;
    background-color: rgb(238,77,45);

}

.button--disable{
    cursor: default;
    background-color: #c3c3c3;
}

.header{
    height: var(--header_height);
    background-image: linear-gradient(0,  #00B6DB, #070062);

}

.header__navbar{
    display: flex;
    justify-content: space-between;
    height: var(--navbar_height);

}

.header__navbar-list{
    list-style: none;
    padding-left: 0;
    margin-top: 4px;
}

.header__navbar-item{
    margin: 0 4px;
    position: relative;
    cursor: pointer;
}

/* .header__navbar-item:hover{
    opacity: 0.9;
} */

.header__navbar-item--separate::after{
    content: "";
    display: block;
    position: absolute;
    border-left: 2px solid var(--white-color);
    height: 14px;
    right: -7px;
    top: 50%;
    transform: translateY(-50% );


}


.header__navbar-item--strong{
    font-weight:bolder;
}

.header__navbar-item--strong:hover{
    opacity: 0.8;
}

.header__navbar-item, .header__navbar-icon{
    display: inline-block;
    font-size: 1.2rem;
    color: var(--white-color);
    text-decoration: none;
    font-weight: 200;
    
}

.header__navbar-icon:hover{
    opacity: 0.8;
}

.header__navbar-set_icon{
    margin: 0 5px;
    font-size: 1.2rem;
}

.header__navbar-item--ban{
    cursor: text;
    color: #ffffff;
}

/* header qr code */

.header__qr{
    width: 200px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 150%;
    padding: 8px;
    border-radius: 5px;
    display:none;
    animation: fade_in ease 0.3s;
    
}

.header__navbar-item--has_qr:hover .header__qr{
    display:block;
}

.header__qr::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 30px;
    display: block;
    top:-10px;
    left: 0;
    /* background-color: #00B6DB; */
}


.head__qr_img{
    width: 100%;
    border-radius: 5px;
}

.header__qr_app{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.header__qr_download{
    height: 20px;
    
}

/* thong bao */
.header__noti{
    position: absolute;
    top: 150%;
    right: 0px;
    width: 404px;
    background-color: #fff;
    /* border-radius: 10px; */
    border: 1px solid #D3D3D3;
    cursor: default;
    animation: grow ease-out 0.2s;
    transform-origin:  calc(100% - 20px) top;
    display: none;
}

.header__navbar-item--has-noti:hover .header__noti{
    display: block;
}

/* .header__noti::before{
    content: "";
    background-color: transparent;
    width: 100%;
    height: 10px;
    position: absolute;
    top: -10px;

} */


.header__noti::before {
    content: "";
    position: absolute;
    top: -30px; 
    right: 20px;
    border: 20px solid;
    border-color: transparent transparent #fff transparent;
    will-change: opacity, transform;
}

/* animation */

@keyframes grow {
    from{
        opacity: 0;
        transform: scale(0);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
}

.header__noti-header{
    height: 40px;
    background-color: #FFFFFF;

}

.header__noti-header h3{
    color: #999;
    margin: 5px 0 0 12px;
    font-size: 1.0rem;
    font-weight: 200;
    user-select: none;
}


.header__noti-list{
    padding-left: 0;
    background-color: #ffffff;
    
}

.header__noti-item{
    display: flex;
}

.header__noti-item:hover{
    background-color: #f1f1f1;
}

.header__noti-item--read{
    background-color:#ffffff ;
}

.header__noti-link{
    display: flex;
    text-decoration: none;
    background-color: #FFF0EE;
    width: 100%;
}

.header__noti-link:hover{
    background-color: #f1f1f1;
}


.header__noti-img{
    width: 50px;
    object-fit: contain;
    padding-left: 5px;

}
.header__noti-info{
    margin-left: 12px;
    overflow-y: auto;
    display: block;
}
.header__noti-name{
    display: block;
    color: #111111;
    font-size: 1.0rem;
    font-weight: 400;
    
}
.header__noti-describe{
    display: block;
    color: #999999;
    font-size: 0.8rem;
    height: 1.2rem;
    margin-top: 5px;    
}

.header__noti-item + .header__noti-item{
    margin: 5px 0 5px 0;
}


.header__noti-footer{
    display: flex;
}
.header__noti-footer-button{
    text-decoration: none;
    color:#111111;
    padding: 10px 16px;
    margin: auto;
    font-weight: 500;
    font-size: 1.0rem;
    width: 100%; 
    text-align: center;
}



/* modal */
.modal__overlayout{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4 );
    animation: fade_in linear 1s;
}


.modal__body{
    /* background-color: white; */
    position: relative;
    margin: auto;   
    z-index: 999999;
    border-radius: 5px;
    --growth_from:0;
    --growth_to: 1;
    animation: growth linear 0.3s;

}

/* authen modal */
.auth__form{
    width: 500px;
    height: 450px;
    background-color: white;
    border-radius: 5px;
    
}
.auth__container{
    padding: 0 32px;
}

.auth__form__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 12px;
}

.auth-form__heading{
    font-size: 1.6rem;
    font-weight: 500;
    color: black;
}

.auth-form__switch{
    font-size: 1.2rem;
    font-weight: 500;
    color: red;
    cursor: pointer;
}

.input__form-container{
    margin-top: 20px;
    outline: none;
}

.input__form-group{
    border-radius: 2px;
 

}

.input__form:focus{
    border:2px solid #00B6DB  ;
    outline:none;
}

.input__form{
    width: 100%;
    height: 40px;
    font-size: 1.0rem;
    padding:0 12px;
}


.input__form-group + .input__form-group{
    margin-top: 16px;
}

.security{
    margin-top: 50px;
    text-align: center;
    
}

.security-link{
    text-decoration: none;
    color: red;
}

.button__control{
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;

}

.button__control--right{
    margin-right: 8px;  
}


/* button fb gg */

.button__social{
    background-color: #F5F5F5;
    padding: 16px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    /* border-radius: 5px; */

}

.button__social__icon{
    color: black;
    background-color: #f3f3f3;
    
}



.button--size{
    line-height: 40px;
    font-size: 16px;
}

.button__social--size{
    font-size: 1.8rem;
    margin-right: 10px;
}

.button__social--fb{
    color: #FFFFFF;
    background-color: #0866FF;
    padding: 0 12px;
}

.button__social--gg{
    color: #111111;
    background-color: #F1F1F1;
    padding: 0 12px;
}





/* login */

.auth-form__help{
    display: flex;
    justify-content: flex-end;
}

.auth-form__help-link{
    outline: none;
    text-decoration: none;
    color: #999999;
    font-size: 1.0rem;
}

.auth-form__help-separate{
    display: block;
    border-left: 2px solid #999;
    height: 20px;
    margin: 0px 16px;
}

.forgot_password{
    color: red;
}

/* header search */

.header_body{
    height: var(--header_body);
    /* width: 100%; */
    display: flex;
    align-items: center;

}

.header__body_logo{
    width: 200px;
}

.header__body_logo-img{
    width: 150px;

}

.header__body_search{
    background-color: #ffffff;
    height: 40px;
    /* width: 150px; */
    border-radius: 2px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header__body_cart{
    width: 150px;
    /* text-align: center; */
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
}

.header__body_cart-icon{
    color: #fff;
    font-size: 1.6rem;

}

.header__body_search-input-wrap{
    flex: 1;
    height: 100%;
    /* width: 100%; */
}

.header__body_search-input{
    height: 100%;
    width: 100%;
    /* flex: 1; */
    outline: none;
    /* border: 2px solid #ffffff ; */
    border: none;
    border-radius: 1px;
    padding-left:  30px;
}

.header__body_search-select{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}

.header__body_search-select:hover .header_search-option{
    display: block;
}


.header__body_search-select-label{
    user-select: none;
    border-left: 2px solid #ccc;
    padding-left: 16px;
    cursor: pointer;
}

.header__body_search-select-icon {
    margin: 0 16px;

}

.header__body_search_button{
    background-color: #043D8A;
    border: none;
    border-radius: 2px;
    flex: 0.05;
    height: 90%;
    margin: 2px;
    cursor: pointer;
}

.header__body_search_button:hover{
    background-color: #245da9;

}
.header__body_search-icon{
    color: #ffffff;
}

.header_search-option{
    position: absolute;
    background-color: #ffffff;
    
    right: 0;
    top: 100%;
    list-style: none;
    width: 100%;
    height: auto;
    padding: 0;        
    box-shadow: 0 0 3px #c3c3c3;
    overflow: none;
    display: none;
    animation: fade_in ease-in 0.2s;
}

.header_search-option::after{
    content: "";
    display: block;
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 20px;
    top: -15px;


}

.header_search-option-item-active:hover{
    background-color: #9a8d8d;
    cursor: pointer;
}


.header_search-option-item{
    display: flex;
    justify-content: center;
    align-items: center;

}

.header_search-option-item-active i{
    color: red;
    margin:0 0 0 8px;
    padding: 10px;
}





    </style>
    

</head>
<body>
    <div class="app">
        <header class="header">
            <div class="grid">
                <nav class="header__navbar">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item  header__navbar-item--has_qr header__navbar-item--separate">
                            Vào cửa hàng trên ứng dụng
                            <div class="header__qr">
                                <img src="./assets/img/5b6e787c2e5ee052.png" alt="qr lỗi" class="head__qr_img">
                                <div class="header__qr_app">
                                    <a href="" class="link__download_chplay">
                                        <img src="./assets/img/chplay.png" alt="qr lỗi CH play" class="header__qr_download">
                                    </a>
                                    <a href="" class="link__download_appstore">
                                        <img src="./assets/img/appstore.png" alt="qr lỗi App Store" class="header__qr_download">
                                    </a>
                                </div>
                            </div>
                        
                        </li>
                        <li class="header__navbar-item"> <span class="header__navbar-item--ban">Kết nối</span>
                            <a href="https://www.facebook.com/profile.php?id=100092504498356" class="header__navbar-icon" target="_blank">
                                <i class="header__navbar-set_icon fa-brands fa-facebook"></i>
                            </a>

                            <a href="https://www.instagram.com/annc19324/" class="header__navbar-icon" target="_blank">
                                <i class="header__navbar-set_icon fa-brands fa-instagram"></i>
                            </a>

                            <a href="https://lazi.vn" class="header__navbar-icon" target="_blank">
                                <i class="header__navbar-set_icon fa-solid fa-l"></i>
                            </a>
                        </li>
                    </ul>
                    <ul class="header__navbar-list ">
                        <li class="header__navbar-item header__navbar-item--has-noti">
                            <a href="https://www.facebook.com/profile.php?id=100092504498356" class="header__navbar-icon" target="_blank">
                                <i class="header__navbar-set_icon fa-solid fa-bell"></i>
                                Thông báo
                            </a>
                            <div class="header__noti">
                                <header class="header__noti-header">
                                    <h3>
                                        Thông báo mới nhận
                                    </h3>
                                </header>
                                <ul class="header__noti-list">
                                    <li class="header__noti-item header__noti-item--read">
                                        <a href="" class="header__noti-link">
                                            <!-- <span>
                                                <img src="./assets/img/Giày-thuật-sĩ.png" alt="giày thuật sĩ" class="header__noti-img">
                                            </span> -->
                                            <img src="./assets/img/Giày-thuật-sĩ.png" alt="giày thuật sĩ" class="header__noti-img">
                                            <div class="header__noti-info">
                                                <span class="header__noti-name"> Giày thuật sĩ</span>
                                                <span class="header__noti-describe">fake item, please don't buy!</span>
                                            </div>
                                            
                                        </a>
                                        
                                    </li>

                                    <li class="header__noti-item">
                                        <a href="" class="header__noti-link">
                                            <!-- <span>
                                                <img src="./assets/img/Giày-thuật-sĩ.png" alt="giày thuật sĩ" class="header__noti-img">
                                            </span> -->
                                            <img src="./assets/img/Giày Hermes.png" alt="Giày Hermes" class="header__noti-img">
                                            <div class="header__noti-info">
                                                <span class="header__noti-name"> Giày Hermes</span>
                                                <span class="header__noti-describe">aslknfas dnafka dnaskfnkas djasoifhasnf fasfnkasnf oasfhsanfasf dahofhanf oiasfhaslknflkas fjasofhioialnf kflasnflksan flsfnsl fshfdskdn salfhvoiasdna fasoifhioadnf dahfinl fake item, please don't buy!</span>
                                            </div>
                                            
                                        </a>
                                        
                                    </li>

                                    <li class="header__noti-item">
                                        <a href="" class="header__noti-link">
                                            <!-- <span>
                                                <img src="./assets/img/Giày-thuật-sĩ.png" alt="giày thuật sĩ" class="header__noti-img">
                                            </span> -->
                                            <img src="./assets/img/Giày hộ vệ.png" alt="" class="header__noti-img">
                                            <div class="header__noti-info">
                                                <span class="header__noti-name"> Giày hộ vệ</span>
                                                <span class="header__noti-describe">fake item, please don't buy!</span>
                                            </div>
                                            
                                        </a>
                                        
                                    </li>

                                    
                                    <li class="header__noti-item">
                                        <a href="" class="header__noti-link">
                                            <!-- <span>
                                                <img src="./assets/img/Giày-thuật-sĩ.png" alt="giày thuật sĩ" class="header__noti-img">
                                            </span> -->
                                            <img src="./assets/img/Giày kiên cường(1).png" alt="" class="header__noti-img">
                                            <div class="header__noti-info">
                                                <span class="header__noti-name"> Giày kiên cường</span>
                                                <span class="header__noti-describe">fake item, please don't buy!</span>
                                            </div>
                                            
                                        </a>
                                        
                                    </li>

                                    
                                    <li class="header__noti-item">
                                        <a href="" class="header__noti-link">
                                            <!-- <span>
                                                <img src="./assets/img/Giày-thuật-sĩ.png" alt="giày thuật sĩ" class="header__noti-img">
                                            </span> -->
                                            <img src="./assets/img/Giày phù thủy(1).png" alt="" class="header__noti-img">
                                            <div class="header__noti-info">
                                                <span class="header__noti-name"> Giày phù thủy</span>
                                                <span class="header__noti-describe">fake item, please don't buy!</span>
                                            </div>
                                            
                                        </a>
                                        
                                    </li>

                    
                                </ul>

                                <div class="header__noti-footer">
                                    <a href="" class="header__noti-footer-button">Xem tất cả</a>
                                </div>
                            </div>

                        </li>


                        <li class="header__navbar-item">
                            <a href="https://www.facebook.com/profile.php?id=100092504498356" class="header__navbar-icon" target="_blank">
                                <i class="header__navbar-set_icon fa-solid fa-circle-question"></i>
                                Trợ giúp
                            </a>
                        </li>
                        <li class="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Đăng ký</li>
                        <li class="header__navbar-item header__navbar-item--strong">Đăng nhập</li>
                    </ul>
                </nav>

                <!-- header search -->

                <div class="header_body">
                    <div class="header__body_logo">
                        <!-- <i class="fa-brands fa-shopify">SHOPEE</i> -->
                        <svg viewBox="0 0 192 65" class="header__body_logo-img"><g fill-rule="evenodd"><path fill="lightblue" d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459"></path></g></svg>
                    </div>

                    <div class="header__body_search">
                        <div class="header__body_search-input-wrap">
                            <input type="text" class="header__body_search-input" placeholder="nhap de tim kiem san pham">
                            <div class="header__body_search-history">
                                <h3 class="header__body_search-history_header">Lịch sử tìm kiếm</h3>
                                ul
                            </div>
                       
                        </div>
                        <!-- <label for="header__body_search-input"></label> -->
                        <div class="header__body_search-select">
                            <span class="header__body_search-select-label">Trong Shop</span>
                            <i class="header__body_search-select-icon fa-solid fa-chevron-down"></i>

                            <ul class="header_search-option">
                                <li class=" header_search-option-item-active header_search-option-item">
                                    <span>Trong Shop</span>
                                    <i class="fa-solid fa-check"></i>
                                </li>

                                <li class=" header_search-option-item-active header_search-option-item">
                                    <span>Ngoài Shop</span>
                                    <i class="fa-solid fa-check "></i>
                                </li>
                            </ul>



                        </div>
                        <button class="header__body_search_button">
                            <i class="header__body_search-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div class="header__body_cart">
                        <i class="header__body_cart-icon fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>

            <!-- modal layout -->


<!-- 
            <div class="modal">
                <div class="modal__overlayout"></div>
                <div class="modal__body"> -->

                        <!-- register form -->
                    <!-- <div class="auth__form">
                        <div class="auth__container">
                            <div class="auth__form__header">
                                <h3 class="auth-form__heading">Đăng ký</h3>
                                <span class="auth-form__switch">Đăng nhập</span>
                            </div>
                        
                            <div class="input__form-container">
                                <div class="input__form-group">
                                    <input type="text" class="input__form" placeholder="Enter username">
                                </div>

                                <div class="input__form-group">
                                    <input type="password" class="input__form" placeholder="Enter password">
                                </div>
            
                                <div class="input__form-group">
                                    <input type="password" class="input__form" placeholder="Enter password again">
                                </div>
                            </div>

                            <div class="security">
                                <p class="security_p">Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                                    <a href="" class="security-link">chính sách bảo mật</a> &
                                    <a href="" class="security-link">điều khoản sử dụng</a>
                                </p>
                            </div>

                            <div class="button__control">
                                <button class="button button__control--right">trở lại</button>
                                <button class="button button--primary ">đăng ký</button>
                            </div>
                        </div>


                        <div class="button__social">
                            <a href="" class="button button__social__icon button--size button__social--fb">
                                <i class="fa-brands fa-facebook button__social--size"></i>
                                Kết nối với Facebook
                            </a>
                            <a href="" class="button button__social__icon button--size button__social--gg">
                                <i class="fa-brands fa-google button__social--size"></i>
                                Kết nối với Google
                            </a>

                        </div>

                    
                    </div> -->

                        <!-- login form -->
                    <!-- <div class="auth__form">
                        <div class="auth__container">
                            <div class="auth__form__header">
                                <h3 class="auth-form__heading">Đăng nhập</h3>
                                <span class="auth-form__switch">Đăng ký</span>
                            </div>
                        
                            <div class="input__form-container">
                                <div class="input__form-group">
                                    <input type="text" class="input__form" placeholder="Enter username">
                                </div>

                                <div class="input__form-group">
                                    <input type="password" class="input__form" placeholder="Enter password">
                                </div>
                            </div>

                            <div class="auth-form__outside">
                                <p class="auth-form__help"> 
                                    <a href="" class="auth-form__help-link forgot_password">quên mật khẩu</a>
                                    <span class="auth-form__help-separate"></span>
                                    <a href="" class="auth-form__help-link">cần trợ giúp?</a>
                                </p>
                            </div>

                            <div class="button__control">
                                <button class="button button__control--right">trở lại</button>
                                <button class="button button--primary ">đăng nhập</button>
                            </div>
                        </div>


                        <div class="button__social">
                            <a href="" class="button button__social__icon button--size button__social--fb">
                                <i class="fa-brands fa-facebook button__social--size"></i>
                                Đăng nhập Facebook
                            </a>
                            <a href="" class="button button__social__icon button--size button__social--gg">
                                <i class="fa-brands fa-google button__social--size"></i>
                                Đăng nhập Google
                            </a>

                        </div>

                    
                    </div> -->

                </div>
            </div>
        


        </header>

        
        <footer class="footer">

        </footer>


    </div>

  </body>
</html>
`

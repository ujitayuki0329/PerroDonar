<template>
  <div>
    <div class="footer-bg">
      <div class="container pt-4 pt-md-5">
        <!-- .row -->
        <div id="footer-index" class="row pt-4">
          <ul class="col list-unstyled">
            <li class="footer-menu"><a href="#">MENU</a></li>
            <ul class="list-unstyled">
              <li><a href="/other/about">ぺろドナとは？</a></li>
              <li><a href="/other/contact">お問い合わせ</a></li>
              <!-- <li><a href="#">お問い合わせ</a></li> -->
              <li><a href="/other/news">ペットニュース</a></li>
              <li><a href="/other/user_guide/">ご利用ガイド</a></li>
            </ul>
          </ul>
    
          <ul class="col list-unstyled" v-if="this.$store.getters['user'].login == false">
            <li class="footer-menu"><a href="#">MENU</a></li>
            <ul class="list-unstyled">
              <li @click="open_login_modal"><a href="#">愛犬を掲載する</a></li>
              <li @click="open_login_modal"><a href="#">プロフィール</a></li>
              <li @click="open_login_modal"><a href="#">お気に入り</a></li>
              <li @click="open_login_modal"><a href="#">スポンサー一覧</a></li>
              <li @click="open_login_modal"><a href="#">MY DOG一覧</a></li>
              <!-- <li><a href="#">SUBMENU</a></li> -->
            </ul>
          </ul>
          <ul class="col list-unstyled" v-if="this.$store.getters['user'].login == true">
            <li class="footer-menu"><a href="#">MENU</a></li>
            <ul class="list-unstyled">
              <li><a href="/user_page/publishe/">愛犬を掲載する</a></li>
              <li><a href="/user_page/profile/profile/">プロフィール</a></li>
              <li><a href="/user_page/favorite/">お気に入り</a></li>
              <li><a href="/user_page/sponser/">スポンサー一覧</a></li>
              <li><a href="/user_page/my_dog/">MY DOG一覧</a></li>
              <!-- <li><a href="#">SUBMENU</a></li> -->
            </ul>
          </ul>
    
          <ul class="col list-unstyled">
              <li class="footer-menu"><a href="#">MENU</a></li>
              <ul class="list-unstyled">
                <li><a href="/other/terms_of_service/">利用規約</a></li>
                <li><a href="/other/commercial/">特定商取引に基ずく表記</a></li>
                <li><a href="/other/privacy_policy/">プライバシーポリシー</a></li>
              </ul>
          </ul>
        </div><!-- /.footer-index -->
    
        <div id="footer-logo" class="mt-2 mt-sm-4">
          <div class="footer-inner-logo">
            <a class="mr-4" href="#"><img src="~/assets/img/header.logo1.png" alt="ぺろドナ" height="50"></a>
            <p class="mb-0">好きなわんちゃんのスポンサーになろう</p>
          </div>
          <div class="sns-wrap">
            <div class="footer-sns">
              <a href="#" target="_blank" rel="nofollow" class="d-flex align-items-center"><img src="~/assets/img/facebook.png"
                  alt="Official Facebook Page"></a>
            </div>
            <div class="footer-sns">
              <a href="https://twitter.com/Perro_Donar" target="_blank" rel="nofollow" class="d-flex align-items-center"><img
                  src="~/assets/img/titter.png" alt="Official Twitter"></a>
            </div>
          </div>
          <div style="text-align:right">
            <img src="~/assets/img/dog-img/ボストンテリア.png" width="300" height="200" alt="ボストンテリア">
          </div>
        </div><!-- .row -->
      </div><!-- .container -->
    </div>
    <div v-show="show" class="menu-content">
      <div class="menu-content-wrap">
        <nav class="header-nav">
          <div class="header-nav-item" v-if="this.$store.getters['user'].login == false">
            <a href="/auth/register/" class="header-button header-post">新規登録</a>
          </div>
          <div class="header-nav-item" v-if="this.$store.getters['user'].login == false">
            <a class="header-button header-login" @click="open_login_modal">ログイン</a>
          </div>
          <div v-if="this.$store.getters['user'].login == true">
            <div v-if="user_img != ''" @click="click_dropdown" class="header-nav-item">
              <img :src="user_img" class="header-avatar">
            </div>
            <div v-else @click="click_dropdown" class="header-nav-item">
              <img src="https://placehold.jp/50x50.png" class="header-avatar" />
            </div>
          </div>
        </nav>
      </div>
      <ul v-if="this.$store.getters['user'].login == false" >
          <li v-if="this.$store.getters['user'].login == true">
              <a href="#"><i class="fas fa-user" style="font-size:12px;"></i>プロフィール</a>
          </li>
          <li @click="open_login_modal">
              <a href="#"><i class="fas fa-heart" style="font-size:12px;"></i>お気に入り</a>
          </li>
          <li @click="open_login_modal">
              <a href="#"><i class="fas fa-hands-helping" style="font-size:12px;"></i>スポンサー一覧</a>
          </li>
          <li @click="open_login_modal">
              <a href="#"><i class="fas fa-paw" style="font-size:12px;"></i>MyDog一覧</a>
          </li>
          <li v-if="this.$store.getters['user'].login == true" @click="logout"> 
              <a href="#"><i class="fas fa-sign-out-alt" style="font-size:12px;"></i>ログアウト</a>
          </li>
        </ul>
      <ul v-if="this.$store.getters['user'].login == true">
        <li>
            <a href="/user_page/profile/profile/"><i class="fas fa-user" style="font-size:12px;"></i>プロフィール</a>
        </li>
        <li>
            <a href="/user_page/favorite/"><i class="fas fa-heart" style="font-size:12px;"></i>お気に入り</a>
        </li>
        <li>
            <a href="/user_page/sponser/"><i class="fas fa-hands-helping" style="font-size:12px;"></i>スポンサー一覧</a>
        </li>
        <li>
            <a href="/user_page/my_dog/"><i class="fas fa-paw" style="font-size:12px;"></i>MyDog一覧</a>
        </li>
        <li @click="logout">
            <a href="#"><i class="fas fa-sign-out-alt" style="font-size:12px;"></i>ログアウト</a>
        </li>
      </ul>
    </div>
    <Modal v-show="login_modal">
      <div class="form-wrapper">
        <div class="modal-button">
          <button type="button" class="close-button" data-dismiss="modal" aria-label="Close" @click="close_login_modal">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>ログイン</h1>
        <div class="form-wrap">
          <form>      
            <input name="email" type="text" class="feedback-input" placeholder="メールアドレス" v-model="email">
            <input name="password" type="text" class="feedback-input" placeholder="パスワード" v-model="password">   
            <div class="check-button" @click="login">
              <a href="#" class="btn btn-radius-solid" style="font-weight: bold;">ログイン</a>
            </div>
          </form>
        </div>
        <div class="login_footer">
          <p>新規会員登録がお済みでない方は <a href="/auth/register">こちら</a></p>
          <p>パスワードをお忘れの方は <a href="#">こちら</a></p>
        </div>
        <!-- <div class="google-sign-wrap" @click="signInWithGoogle">
          <div class="google-sign-contents">
            <img src="~/assets/img/google-btn.png" alt="">
          </div>
        </div> -->
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  components: {
    Modal
  },
  computed: {
    user () {
      return this.$store.getters['user']
    },
  },
  data() {
    return {
      email: "",
      password: "",
      user_img: "",
      login_modal: false,
      show:false,
    }
  },
  methods: {
    open_login_modal() {
      this.login_modal = true
    },
    close_login_modal() {
      this.login_modal = false
    },
    click_dropdown() {
      this.show = !this.show
    },
    login (email, password) {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
  
}
</script>

<style scoped>
#footer-index {
  width: 100%;
  margin: 0;
}
.v-application a {
  color: rgb(163, 160, 160);
  font-size: 12px;

}
a:hover {
  color: black;
}
ul {
  list-style: none;
  font-size: 12px;
  padding: 10px;
}
li {
  padding-top: 5px;
}
.footer-inner-logo {
  display: flex;
  align-items: center;
}
.footer-inner-logo p{
  font-size: 12px;
}
.sns-wrap {
  display: flex;
}
.footer-sns{
  border-radius: 50%;
}
.footer-sns img{
  border-radius: 50%;
  padding: 10px;
}
</style>
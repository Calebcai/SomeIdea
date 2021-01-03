<template>
  <div id="nav">
    <a-row>
      <a-col :span="18" :push="4">
        <a-row type="flex">
          <a-col :flex="4">
            <a-row>
              <a-col :span="6">
                <div class="wrap">
                  <a-icon
                    type="bulb"
                    theme="twoTone"
                    two-tone-color="rgb(248, 245, 59)"
                  />
                  <a href="#"> 记录感想 </a>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="wrap">
                  <a-icon type="heart" theme="twoTone" two-tone-color="red" />
                  <a href="#"> 我的收藏 </a>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="wrap">
                  <a-icon type="eye" theme="twoTone" two-tone-color="green" />
                  <a href="#"> 随便看看 </a>
                </div>
              </a-col>
              <a-col :span="6">
                <div class="wrap">
                  <a-dropdown>
                    <a class="ant-dropdown-link">
                      <a-icon type="sound" theme="twoTone" two-tone-color="orange" />
                      个性订阅
                      <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                      <a-menu-item>
                        <p>关注微信公众号</p>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :flex="1">
            <a-row class="login">
              <a-col :span="12">
                <a-button ghost class="but"> 登录 </a-button>
              </a-col>
              <a-col :span="12">
                <a-button ghost class="but"> 注册 </a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="4" :pull="18">
        <div class="logo">
          树洞时光 - 小时光
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import "../assets/init.css";

export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
#nav {
  min-width: 500px;
  background-color: rgb(12, 31, 45);
  box-sizing: border-box;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  a {
    color: white;
  }
  .logo {
    position: absolute;
    color: white;
  }
  .login {
    text-align: center;
    .but {
      color: white;
    }
  }
  .wrap {
    text-align: center;
    background-color: rgb(12, 31, 45);
  }
}
</style>

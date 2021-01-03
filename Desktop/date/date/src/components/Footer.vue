<template>
  <div class="Footer">
    <a-divider class="tip">关于我们</a-divider>
    <a-row>
      <a-col :span="22">
        <div class="wrap">
          <label for="tip" class="tip">2020 毕业设计 | 本科 | 华北电力大学 | 作者：蔡基培</label>
        </div>
      </a-col>
      <a-col :span="2">
        <div>
          <a-popover title="支持作者">
            <template slot="content">
              <div id="logo">
                <img src="../assets/calebcai.png" alt="" />
              </div>
            </template>
            <a-button type="primary"> 支持作者 </a-button>
          </a-popover>
        </div>
      </a-col>
    </a-row>
    <div id="number">©2020 Create by Smile Time</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
#logo {
  box-sizing: border-box;
  img {
    width: 180px;
    height: 180px;
  }
}

.Footer {
  margin-top: 30px;
  background-color: rgb(12, 31, 45);
  color: white;
}
.wrap {
  .tip {
    color: white;
  }
}
#number {
  text-align: center;
}
</style>

<template>
  <div id="wrap">
    <div id="lunb">
      <a-carousel effect="fade" autoplay>
        <div>
          <img
            src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/77947143ac841ad46a5c17926d5954e0.png"
            alt=""
          />
          <span class="font_sty">
            <a href="#">记录下你的每个点点滴滴</a>
          </span>
        </div>
        <div>
          <img
            src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/91745ada6ba12153054d2e59598dbae7.jpeg"
            alt=""
          />
          <span class="font_sty">
            <a href="#">记录下你的每个点点滴滴</a>
          </span>
        </div>
        <div>
          <img
            src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/466289ce222dbbe66d0317a9aeaa74e8.jpg"
            alt=""
          />
         <span class="font_sty">
            <a href="#">记录下你的每个点点滴滴</a>
          </span>
        </div>
        <div>
          <img
            src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/4cc01ff6d6e12f84131c656621b77b7b.jpeg"
            alt=""
          />
          <span class="font_sty">
            <a href="#">记录下你的每个点点滴滴</a>
          </span>
        </div>
      </a-carousel>
    </div>
    <div class="card">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card hoverable style="width: 100%;">
            <img
              slot="cover"
              alt="example"
              src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/f3b6f352ee633346189ba086c1ea8ca2.jpg"
            />
            <a-card-meta title="This is a dog">
              <template slot="description"> 这是一只狗 </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card hoverable style="width: 100%;">
            <img
              slot="cover"
              alt="example"
              src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/6e46ac387b49d91ee6fc513cba8b695a.png"
            />
            <a-card-meta title="Face to face">
              <template slot="description"> 记录下你的好心情 </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card hoverable style="width: 100%;">
            <img
              slot="cover"
              alt="example"
              src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/0849c71c2104dc8e3e03192cb250f78b.png"
            />
            <a-card-meta title="Emotion Management">
              <template slot="description"> 情绪管理 </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div class="card">
      <a-row :gutter="16">
        <a-col :span="6">
          <a-card hoverable style="width: 100%;">
            <img
              slot="cover"
              alt="example"
              src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/9ad5558c25187fc496d720aec0c31a3a.png"
            />
            <a-card-meta title="This is a dog">
              <template slot="description"> 历史精选 </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card hoverable style="width: 100%;">
            <img
              slot="cover"
              alt="example"
              src="https://weaver-images.oss-cn-beijing.aliyuncs.com/project/606664ea539ff6c31cd2942f0cd9b5aa.png"
            />
            <a-card-meta title="Face to face">
              <template slot="description"> 每日推荐 </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card hoverable style="width: 100%;">
            <img
              slot="cover"
              alt="example"
              src="../assets/image_processing20200820-4461-146u5l3.gif"
            />
            <a-card-meta title="Emotion Management">
              <template slot="description"> 内容精选 </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.font_sty {
  position: absolute;
  font-size: 50px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  color: white;
}
.font_sty a{
  color: white;
}
.font_sty a:hover{
  color:rgb(233, 97, 19);
}
#lunb :hover img{
  opacity: 1;
}
img {
  width: 100%;
  height: 640px;
  line-height: 640px;
  opacity: 0.8;
}
.card {
  margin-top: 20px;
}
.card img {
  width: 100%;
  height: 350px;
  line-height: 350px;
}
#wrap {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 640px;
  border-radius: 15px;
  line-height: 640px;
  overflow: hidden;
}
</style>

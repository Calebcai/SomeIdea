<template>
  <div class="contain">
    <div class="logo">
      微华电音乐
    </div>
    <div class="btn">
      <el-button>收藏</el-button>
      <el-button>删除</el-button>
      <el-button>下载</el-button>
      <el-button>清空列表</el-button>
    </div>
    <el-row>
      <el-col :span="18">
        <!-- 音乐列表 -->
        <el-table
          max-height="500"
          :data="tableData"
          highlight-current-row
          style="width: 70%"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column
            label="歌曲"
          >
            <template slot-scope="scope">
              <span>{{ scope.row }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="专辑"
          >
            <template slot-scope="scoped">
              {{ scoped.row }}
            </template>
          </el-table-column>
          <el-table-column
            label="歌手"
          >
            <template slot-scope="scoped">
              {{ scoped.row }}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="4">
        <div class="musicImg">
          <img
            src="https://qpic.y.qq.com/music_cover/niaNsTtZ1FTMib0CT3Aicnch8H1AFOGGicdCvlnF6IHNVbYYuAgFdHibic8Q/300?n=1"
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$http.get('https://api.zsfmyz.top/music/top').then(res => {
        const {
          data: { data }
        } = res
        for (let index = 0; index < data.list.length; index++) {
          // const element = data.list[index]
          // this.songname = element.songname
          // this.name = element.singer.name
          // this.albumname = element.albumname
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contain {
  padding: 20px 0 20px 20px;
  background-image: url('https://api.dongmanxingkong.com/suijitupian/acg/1080p/index.php');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  .logo {
    color: #bfced5;
    padding-bottom: 20px;
  }
  .btn {
    padding-bottom: 20px;
  }
  .musicImg {
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
}
.el-button {
  width: 130px;
}
.el-table {
  border-radius: 15px;
  color: #8095cf;
  font-weight: 550;
}
</style>

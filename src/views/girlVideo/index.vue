<template>
    <div>
      <div class="girl_video">
       <div class="but_content">
        <el-button type="primary" class="but" icon="el-icon-arrow-left" circle @click="toVideo"></el-button>
        <el-button type="primary" class="but" icon="el-icon-arrow-right" circle @click="nextVideo"></el-button>
       </div>
        <div class="video_content">
        <video ref="videoPlayer" style="height: 80vh" muted controls>
          <source :src="videoURLList[ItemIndex]" type="video/mp4" />
        </video>
      </div>
      </div>
     
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        ItemIndex: 0,
        videoURLList: [
          "https://alimov2.a.kwimgs.com/upic/2023/11/20/01/BMjAyMzExMjAwMTMxMjBfMTM2MzIzOTUyM18xMTc2MDI2NzQ3MzRfMV8z_b_Bedc67557aba26d57677f021198bdb1f5.mp4?clientCacheKey=3xjicmfmjj42xj2_b.mp4&tt=b&di=78e49c3f&bp=13414",
        ],
      };
    },
    mounted() {
      this.getGirl();
    },
    methods: {
      async getGirl() {
        for (let i = 0; i <= 5; i++) {
          const { data: res } = await axios.get(
            "https://api.kuleu.com/api/xjj?type=json"
          );
          this.videoURLList.push(res.video);
        }
      },
  
      // 上一个
      toVideo() {
        if (this.ItemIndex == 0) {
          alert("已经最上一个了");
        } else {
          this.ItemIndex--;
        }
        this.shuaxin();
      },
  
      // 下一个
      nextVideo() {
        // 实现获取下一个视频的逻辑
        if (this.ItemIndex == this.videoURLList.length - 2) {
          this.getGirl();
          this.ItemIndex++;
        } else {
          this.ItemIndex++;
        }
        console.log(this.ItemIndex);
        console.log(this.videoURLList);
        this.shuaxin();
      },
  
      // 刷新视频
      shuaxin() {
        this.$nextTick(() => {
          const videoElement = this.$refs.videoPlayer;
          if (videoElement) {
            videoElement.load(); // 确保视频加载
            videoElement.play().catch((e) => console.error("自动播放失败:", e)); // 尝试播放并捕获可能的错误
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .girl_video{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  .but_content{
    height: 120px;
    width: 200px;
    margin-left: 100px;
  }
  .but{
    margin: 0 20px;
  }
  .video_content{
    height: 88vh;
    display: flex;
    justify-content: flex-start;
  }
  </style>
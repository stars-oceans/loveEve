<template>
    <div>
      <div class="girl_video">
       <div class="but_content">
        <el-button type="primary" class="but" icon="el-icon-arrow-left" circle @click="toVideo"></el-button>
        <el-button type="primary" class="but" icon="el-icon-arrow-right" circle @click="nextVideo"></el-button>
       </div>
        <div class="video_content">
        <!-- <video ref="videoPlayer" style="height: 80vh" muted controls>
          <source :src="videoURLList[ItemIndex]" type="video/mp4" />
        </video> -->
        <img :src="videoURLList[ItemIndex]" style="width: 70vw; height: 80vh;" alt="">
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
          "https://api-storage.4ce.cn/v1/07551f612db953e5762f35a85d23d32d.webp",
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
            "https://api.vvhan.com/api/wallpaper/pcGirl?type=json"
          );
          console.log(res);
          this.videoURLList.push(res.url);
        }
        console.log(this.videoURLList);
      },
  
      // 上一个
      toVideo() {
        if (this.ItemIndex == 0) {
          alert("已经最上一个了");
        } else {
          this.ItemIndex--;
        }
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
  
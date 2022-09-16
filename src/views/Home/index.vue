<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" stlye="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超級管理員</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陸時間:<span>2022-09-04</span></p>
          <p>上次登陸地點:<span>台北</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(item, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="item"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <!-- <div style="height: 280px" ref="echarts"></div> -->
        <Echarts :chartData="echartData.order" style="height: 280px" />
      </el-card>
      <div class="graph">
        <el-card style="height: 265px">
          <!-- <div style="height: 240px" ref="userEcharts"></div> -->
          <Echarts :chartData="echartData.user" style="height: 265px" />
        </el-card>
        <el-card style="height: 265px">
          <!-- <div style="height: 240px" ref="videoEcharts"></div> -->
          <Echarts
            :chartData="echartData.video"
            :isAxisChart="false"
            style="height: 265px"
          />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../api/data.js";
// import * as echarts from "echarts";
import Echarts from "../../components/Echarts.vue";
export default {
  name: "home",
  components: {
    Echarts,
  },
  data() {
    return {
      userImg: require("../../assets/spon.jpg"),
      tableLabel: {
        name: "課程",
        todayBuy: "今日購買",
        monthBuy: "本月購買",
        totalBuy: "總購買",
      },
      tableData: [
        {
          name: "sony",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "nokia",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "蘋果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "四星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  mounted() {
    getData()
      .then(res => {
        const { code, data } = res.data;
        if (code === 20000) {
          this.tableData = data.tableData;
          const order = data.orderData;
          const xData = order.date;
          const keyArray = Object.keys(order.data[0]);
          const series = [];
          keyArray.forEach((key) => {
            series.push({
              name: key,
              data: order.data.map((item) => item[key]),
              type: "line",
            });
          });
          this.echartData.order.xData = xData
          this.echartData.order.series = series;

          this.echartData.user.xData = data.userData.map((item) => item.date);
          this.echartData.user.series = [
            {
              name: "新增用戶",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活躍用戶",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ];
          this.echartData.video.series = [
            {
              data: data.videoData,
              type: "pie",
            },
          ];
        }
      })
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
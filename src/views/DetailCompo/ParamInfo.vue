<template>
  <!-- 不要忘了这个keys判断,否则容易报undefined错误！！ -->
  <div class="param-info" v-if="Object.keys(params).length !== 0">
    <div class="param-size">
      <div class="rule-key">{{ params.rule.key }}</div>
      <table v-for="(table, index) in params.rule.tables" :key="index">
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">
            {{ td }}
          </td>
        </tr>
      </table>
    </div>

    <div class="param-other">
      <div class="info-key">{{ params.info.key }}</div>
      <table v-for="(item, index) in params.info.set" :key="index">
        <tr>
          <td class="item-key">{{ item.key }}</td>
          <td class="item-value">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParamInfo",
  props: {
    params: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.param-info {
  /* margin: 20px; */
}
.rule-key,
.info-key {
  /* margin: 20px; */
  color: crimson;
}
table {
  /* 加了这个以后 tr才能显示border */
  border-collapse: collapse;
  width: 100%;
}
td {
  padding: 10px;
}
tr {
  border-bottom: 1px solid rgb(71, 67, 67);
}
.item-value {
  color: pink;
}
.item-key {
  width: 25%;
}
</style>
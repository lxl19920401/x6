<template>
  <div class="select">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: 'test'
        }, {
          value: '2',
          label: '或者'
        }],
        value: ''
      }
    },
    inject: ["getGraph", "getNode"],
    watch:{
      value(val){
        //当前节点处理
        const node = this.getNode();
        const currentId = node.id;
        const { value } = node.getData();
        node.setData({
          value: val,
        });
        const graph = this.getGraph()

        //计算子节点位置
        const { x , y } = node.position();
        console.log(node)
        const newX = x + 250 + 20
        const newY = y

        const childId = new Date().getTime();
        graph.addNode({
          id:childId,
          shape: "select-node",
          x: newX,
          y: newY,
          data: {
            value: '',
          },
        });
        graph.addEdge({
          source: currentId, // 源节点
          target: childId, // 目标节点
        })
      }
    },
    beforeCreate() {
    },
    mounted() {
      const self = this;
      const node = this.getNode();
      const { value } = node.getData();
      this.value = value
      // 监听数据改变事件
      node.on("change:data", ({ current }) => {
        self.value = current.value;
      });
    },
    methods:{

    }
  }
</script>
<style scoped>

</style>

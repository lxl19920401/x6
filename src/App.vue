<template>
  <div>
    <div id="app"></div>
    <button @click="save">保存</button>
  </div>
</template>

<script>
  import { Graph } from "@antv/x6";
  import "@antv/x6-vue-shape";
  import SelectNode from "./components/SelectNode";
  const params = {
      r: 0,//6
      magnet: true,
      stroke: '#31d0c6',
      strokeWidth: 0,//2
      fill: '#fff',
  }
  const ports = {
    groups: {
      // 输入链接桩群组定义
      top: {
        position: 'top',
        attrs: {
          circle: params,
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: params,
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: params,
        },
      },
      // 输出链接桩群组定义
      right: {
        position: 'right',
        attrs: {
          circle: params,
        },
      },
    },
    items: [
      {
        group: 'top',
      },
      {
        group: 'bottom',
      },
      {
        group: 'left',
      },
      {
        group: 'right',
      },
    ],
  }
  let graph = null;
  export default {
    name: "App",
    mounted() {
      graph = new Graph({
        container: document.getElementById("app"),
        width: 1200,
        height: 400,
        grid: true,
      });

      // 注册 vue component
      Graph.registerNode("select-node", {
        inherit: "vue-shape",
        component: {
          template: `<select-node />`,
          components: {
            SelectNode,
          },
        },
        width: 150,
        height: 40,
        data: {

        },
        ports: {
          ...ports,
          items:[
            {
              group: 'bottom',
            },
            {
              group: 'right',
            },
          ]
        }
      });
      // graph.addNode({
      //     id:1,
      //     shape: "select-node",
      //     x: 20,
      //     y: 20,
      //     data: {
      //       value: '',
      //     },
      //   });
      setTimeout(()=>{
        graph.fromJSON({"cells":[{"position":{"x":20,"y":20},"size":{"width":150,"height":40},"view":"vue-shape-view","shape":"select-node","component":{"template":"<select-node />","components":{"SelectNode":{"inject":{"getGraph":{"from":"getGraph"},"getNode":{"from":"getNode"}},"watch":{},"methods":{},"staticRenderFns":[],"_compiled":true,"_scopeId":"data-v-30ded44e","beforeCreate":[null],"beforeDestroy":[null],"__file":"src/components/SelectNode.vue","_Ctor":{}}}},"data":{"value":"2"},"ports":{"groups":{"top":{"position":"top","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}},"bottom":{"position":"bottom","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}},"left":{"position":"left","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}},"right":{"position":"right","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}}},"items":[{"group":"bottom","id":"19605fde-b085-4d71-9314-161f71f08426"},{"group":"right","id":"38d41959-bf7b-4032-a68d-57f66f13ae1d"}]},"id":1,"zIndex":1},{"position":{"x":290,"y":20},"size":{"width":150,"height":40},"view":"vue-shape-view","shape":"select-node","component":{"template":"<select-node />","components":{"SelectNode":{"inject":{"getGraph":{"from":"getGraph"},"getNode":{"from":"getNode"}},"watch":{},"methods":{},"staticRenderFns":[],"_compiled":true,"_scopeId":"data-v-30ded44e","beforeCreate":[null],"beforeDestroy":[null],"__file":"src/components/SelectNode.vue","_Ctor":{}}}},"data":{"value":""},"ports":{"groups":{"top":{"position":"top","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}},"bottom":{"position":"bottom","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}},"left":{"position":"left","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}},"right":{"position":"right","attrs":{"circle":{"r":0,"magnet":true,"stroke":"#31d0c6","strokeWidth":0,"fill":"#fff"}}}},"items":[{"group":"bottom","id":"261b06b9-c2d4-455b-9de9-b21f9e2d5979"},{"group":"right","id":"705b431d-6efe-41d0-a59a-d5ec00578341"}]},"id":1678351110606,"zIndex":2},{"shape":"edge","id":"2974340d-4e48-4b01-9568-d03e177b47d9","source":{"cell":1},"target":{"cell":1678351110606},"zIndex":3}]})

      },100)
      },
    methods: {
      save() {
        const json = graph.toJSON();
        console.log(JSON.stringify(json))
        // const nodes = graph.getNodes();
        // if (nodes.length) {
        //   nodes.forEach((node) => {
        //     const { num } = node.getData();
        //     node.setData({
        //       num: num + 1,
        //     });
        //   });
        // }
      },
    },
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

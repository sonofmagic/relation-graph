<template>
  <div>
    <div style="height:calc(100vh - 50px);">
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      />
    </div>
    <el-button type="success" class="c-show-code-button"><el-link href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4Node.vue" target="_blank" style="color: #ffffff;">查看代码</el-link></el-button>
  </div>
</template>

<script>
import SeeksRelationGraph from '../../../src/index.js'
import dataForDemo from './data.json'
export default {
  name: 'Demo',
  components: { SeeksRelationGraph },
  data() {
    return {
      isShowCodePanel: false,
      graphOptions: {
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    }
  },
  mounted() {
    this.showSeeksGraph()
  },
  methods: {
    showSeeksGraph(query) {
      var __graph_json_data = dataForDemo
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
    },
    onNodeClick(nodeObject, $event) {
      console.log('onNodeClick:', nodeObject)
    },
    onLineClick(lineObject, $event) {
      console.log('onLineClick:', lineObject)
    }
  }
}
</script>

<style lang="scss">

  .my-node-style{
    background-color: #00ced1 !important;/** 通过自定义样式设置节点颜色需要加 !important **/
  }.my-node-style:hover{
    background-color: #ff0000 !important;
  }
  @keyframes myFlash {
    from {
      opacity: 1.0;
    }
    50% {
      opacity: 0.4;
    }
    to {
      opacity: 1.0;
    }
  }

  @-webkit-keyframes myFlash {
    from {
      opacity: 1.0;
    }
    50% {
      opacity: 0.4;
    }
    to {
      opacity: 1.0;
    }
  }
  .my-node-style{
    animation: myFlash 600ms infinite;
    -webkit-animation: myFlash 600ms infinite;
  }
</style>

<style lang="scss" scoped>

</style>

<template>
  <div class="vue-root">
    <smart-pivot-table id="pivotTable"></smart-pivot-table>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import 'smart-webcomponents/source/styles/smart.default.css'
import 'smart-webcomponents/source/modules/smart.pivottable.js'
import { list } from './components/test.js'

export default {
  name: 'app',
  setup () {},

  mounted () {
    const _this = this
    window.Smart(
        '#pivotTable',
        class {
          get properties () {
            return {
              dataSource: new window.Smart.DataAdapter({
                dataSource: _this.sort_silt(),
                dataFields: [
                  'date: string',
                  'line: number',
                  'styleId: string',
                  'styleName: string',
                  'operationIndex: number',
                  'operationCode: string',
                  'operationName: string',
                  'size: string',
                  'color: string',
                  'lotNo: string',
                  'total: number'
                ]
              }),
              designer: true,
              toolbar: true,
              // freezeHeader: true,
              columnReorder: true,
              keyboardNavigation: true,
              sortMode: 'many',
              filtering: true,
              designerPosition: 'near',
              columnTotals: true,
              defaultSortByRowGroups: true,
              groupLayout: 'classic',
              columns: [
                {
                  label: '款号',
                  dataField: 'styleName',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true,
                  rowGroup: true
                },
                {
                  label: '床次',
                  dataField: 'lotNo',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true
                },

                {
                  label: '尺码',
                  dataField: 'size',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true,
                  pivot: true
                },
                {
                  label: '工序代码',
                  dataField: 'operationCode',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true
                  // pivot: true
                },
                {
                  label: '工序序号',
                  dataField: 'operationIndex',
                  dataType: 'number',
                  allowRowGroup: true,
                  allowPivot: true
                },
                {
                  label: '工序名称',
                  dataField: 'operationName',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true
                },
                {
                  label: '日期',
                  dataField: 'date',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true,
                  rowGroup: true
                },
                {
                  label: '线号',
                  dataField: 'line',
                  dataType: 'number',
                  allowRowGroup: true,
                  allowPivot: true,
                  rowGroup: true
                },
                {
                  label: '颜色',
                  dataField: 'color',
                  dataType: 'string',
                  allowRowGroup: true,
                  allowPivot: true,
                  rowGroup: true
                },
                {
                  label: '数量',
                  dataField: 'total',
                  dataType: 'number',
                  summary: 'sum'
                }
              ]
            }
          }

        }
    )
    const pivotTable = document.createElement('smart-pivot-table')
    pivotTable.methodName('expandAllRows');
  },

  methods: {
    compare (p) { //这是比较函数
      return function (m, n) {
        const a = m[p]
        const b = n[p]
        return a - b //升序
      }
    },
    sort_silt (s) {
      return list.sort(this.compare(s || 'total'))
    }

  }

}
</script>

<style>
.smart-pivot-table {
  height: 800px;
}
</style>

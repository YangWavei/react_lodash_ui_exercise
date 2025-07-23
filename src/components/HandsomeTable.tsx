import { useCallback, useEffect, useRef, type FC } from 'react';
import { HotTable, type HotTableProps, type HotTableRef } from '@handsontable/react-wrapper';
import Handsontable from 'handsontable';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';
import Core from "handsontable";
// register Handsontable's modules
registerAllModules();


interface Person {
  id: number;
  name: string;
  address: string;
}

const data: Person[] = [
  { id: 1, name: 'Ted Right', address: '你好' },
  { id: 2, name: 'Frank Honest', address: '阿斯顿' },
  { id: 3, name: 'Joan Well', address: '撒旦' },
  { id: 4, name: 'Gail Polite', address: '小册子' },
  { id: 5, name: 'Michael Fair', address: '你不是的' },
];
// here is used to determine the data structure
// const dataSchema = {
//   id: null,
//   name: {
//     first: null,
//     last: null,
//   },
//   address: null,
// }

const changes: [number, number, string | number][] = [
  [0, 2, 'New Value'],
  [1, 2, 'Different value'],
  [2, 2, 'Third Replace Value']
]

/***
 *  点击右键菜单时
 *  获取选中的row 数据
 *
 * ****/
export function getSelectedRowsHandlerByRightMenuClick(selections: Selection[], core: Core): any[] {
  if (!selections.length) return [];
  return getSelectSourceData(core)
}

export function getSelectSourceData(core: Core) {
  const selectIndexs = core.getSelected();
  if (!selectIndexs) return [];
  const rowindexs: any[] = [];
  // selected row data
  const rowDatas: any[] = [];

  selectIndexs.forEach(item => {
    // destructuring
    const [startRow, _start_col, endRow, _end_col] = item;
    if (endRow > startRow) {
      const len = (endRow - startRow) + 1;
      Array(len).fill(1).map((_n, i) => {
        const dataIndex = startRow + i//2 3 4  selected three rows
        const cellData = core.getCellMeta(dataIndex, 0)//(row,col) return => cellProperties
        // get the original data of every row
        const row = core.getSourceDataAtRow(cellData.row)
        if (row) {
          if (!rowindexs.includes(dataIndex)) {
            rowDatas.push(row)
            rowindexs.push(dataIndex)
          }
        }
      })
    } else {
      const len = (startRow - endRow) + 1
      Array(len).fill(1).map((_n, i) => {
        const dataIndex = endRow + i;
        const cellData = core.getCellMeta(dataIndex, 0)
        const row = core.getSourceDataAtRow(cellData.row)
        if (row) {
          if (!rowindexs.includes(dataIndex)) {
            rowDatas.push(row)
            rowindexs.push(dataIndex)
          }
        }
      })
    }
  })

  return rowDatas
}


const HandsomeTable: FC = () => {
  const hotRef = useRef<HotTableRef>(null);

  useEffect(() => {
    const hot = hotRef.current?.hotInstance;
    // console.log(hot?.getSourceData());
    //Manually modify the table data from the outside
    // hot && hot.setDataAtCell(1, 1, '肖振洋')
    // hot && hot.setDataAtCell(changes)
  }, []) //run once

  // Fired after one more cells has been changed.
  const handleAfterChange = (changes: Handsontable.CellChange[] | null, source: Handsontable.ChangeSource) => {
    // source : String that identifies source of all hooks call.
    // changes=[3,2,11,'154']
    // [row,column, originalData,modifiedData]
    // console.log(changes);
    // console.log(source);
  }



  // // 删除行前的回调处理
  // const handleBeforeRemoveRow = useCallback((core: Handsontable.Core, key: string, selection: Selection[], clickEvent: MouseEvent) => {
  //   const rows = getSelectedRowsHanlderByRightMenuClick(selection, core)
  //   console.log("🚀 ~ handleBeforeRemoveRow ~ rows:", rows)
  // }, [])



  return (
    <HotTable
      themeName="ht-theme-main"
      data={structuredClone(data)}
      ref={hotRef}
      rowHeaders={true}
      autoWrapRow={true}
      autoWrapCol={true}
      copyPaste={false}
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
      filter={true}
      afterChange={handleAfterChange}
      width={400}
      height={300}
      colHeaders={true}
      customBorders={true}
      dropdownMenu={true}
      multiColumnSorting={true}
      filters={true}
      manualRowMove={true}
      // 添加右键菜单删除选项配置
      contextMenu={{
        items: {
          row_remove: {
            name: '删除行',
            callback(this, _key, selection, _clickEvent) {
              console.log(`selection`, selection);
              const rowData = getSelectedRowsHandlerByRightMenuClick(selection as any, this)
              console.log("🚀 ~ callback ~ rowData:", rowData)
            },
          }
        }
      }}
    />
  );
};

export default HandsomeTable;

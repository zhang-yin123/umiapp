import styles from './index.css';
import Bar from './component/bar/bar';
import Aside from './component/aside/aside'
import { useState } from 'react';
import { Input } from 'antd';
export default function () {

  const [sideBar, setSideBar] = useState({
    indexArr: [],
    name: 'Option 1'
  });
  const [inputTxt, setInputTxt] = useState('Option 1');
  const [isedit, setIsEdit] = useState(false);

  const [menuItem, setMenuItem] = useState([
    {
      key: '1',
      type: 'pie-chart',
      name: 'Option 1'
    },
    {
      key: '2',
      type: 'desktop',
      name: 'Option 2'
    },
    {
      key: '3',
      type: 'inbox',
      name: 'Option 3'
    },
    {
      key: 'sub1',
      type: 'mail',
      name: 'Navigation One',
      children: [
        {
          key: '5',
          name: 'Option 5'
        },
        {
          key: '6',
          name: 'Option 6'
        },
        {
          key: '7',
          name: 'Option 7'
        },
        {
          key: '8',
          name: 'Option 8'
        },
      ]
    },
    {
      key: 'sub2',
      type: 'appstore',
      name: 'Navigation Two',
      children: [
        {
          key: '10',
          name: 'Option 10'
        },
        {
          key: '11',
          name: 'Option 11'
        },
        {
          key: '12',
          name: 'Option 12'
        },
        {
          key: '13',
          name: 'Option 13'
        },
      ]
    }
  ]);


  const select = (val,val2) => {
    setSideBar({
      name: val.name,
      indexArr: val2
    })
  }
  const edit = () => {
    setIsEdit(!isedit)
    if (isedit) {
      setSideBar({
        ...sideBar,
        name: inputTxt
      })
      let indexArr = sideBar.indexArr;
      if(!isNaN(indexArr[1])) {
        menuItem[indexArr[0]].children[indexArr[1]].name = inputTxt;
      } else {
        menuItem[indexArr[0]].name = inputTxt;
      }
      setMenuItem(menuItem);

    }
  }

  const handleChange = (e) => {
    setInputTxt(e.currentTarget.value)
  }


  return (
    <div className={styles.IndexPage}>
      <Bar></Bar>
      <div className={styles.main}>
        <Aside select={select} menuItem={menuItem}></Aside>
        <div className={styles.preview}>
          {isedit ? <Input placeholder="" onChange={handleChange} /> : <span>{sideBar.name}</span>}
          <button onClick={edit}>{isedit ? '保存' : '编辑'}</button>
          {isedit && <button onClick={() => setIsEdit(false)}>取消</button>}
        </div>
      </div>
    </div>
  );
}

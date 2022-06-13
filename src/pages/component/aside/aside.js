import { Menu, Icon, Button } from 'antd';
import React from 'react';
import styles from './aside.less'

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = e => {
    let target = this.props.menuItem;
    const res = [];
    e.keyPath.reverse().forEach(item=>{
      Array.isArray(target) && target.forEach((each, index)=>{
        if(each.key === item) {
          target = each
          res.push(index)
        }
      })
      if(target.children) {
        target = target.children
      }
    })
    this.props.select(target,res)
  };
  buildItem = (item) => {
    return <Menu.Item key={item.key}>
      {item.type && <Icon type={item.type} />}
      <span>{item.name}</span>
    </Menu.Item>
  }

  render() {
    return (
      <div className={styles.aside}>
        <div className={styles.btn}>
          <Button type="primary" onClick={this.toggleCollapsed}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onClick={this.handleClick}
        >
          {
            this.props.menuItem.map((item => {
              if (item.children) {
                return <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.type} />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {
                    item.children.map((each => {
                      return this.buildItem(each);
                    }))
                  }
                </SubMenu>
              } else {
                return this.buildItem(item);
              }

            }))
          }
          {/* <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default App;
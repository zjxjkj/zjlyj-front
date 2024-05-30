import {Badge, Dropdown, Menu, Space} from 'antd';
import React from 'react';
import { useModel } from 'umi';
import styles from './index.less';
import AvatarDropdown from "./AvatarDropdown";
import {BellOutlined} from "@ant-design/icons";
export type SiderTheme = 'light' | 'dark';



const notifications = [
  { id: 1, title: '系统更新', description: '系统将于今晚10点进行更新' },
  { id: 2, title: '新消息', description: '你有一条新的消息' },
];

const menu = (
  <Menu>
    {notifications.map(notification => (
      <Menu.Item key={notification.id}>
        <div>
          <strong>{notification.title}</strong>
          <p>{notification.description}</p>
        </div>
      </Menu.Item>
    ))}
  </Menu>
);


const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }


  return (
    <Space className={className}>
      <Dropdown overlay={menu} trigger={['click']}>
        <Badge count={notifications.length}>
          <BellOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
        </Badge>
      </Dropdown>
      <AvatarDropdown menu />
    </Space>
  );
};

export default GlobalHeaderRight;

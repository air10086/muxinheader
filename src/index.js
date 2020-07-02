import React, { useState } from 'react'
import * as styles from './index.css'
import noted from './images/noted.png'
import myHeader from './images/header.png'
import defaultAvator from './images/default_avator.png'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const MuxinHeader = ({ avator = defaultAvator }) => {
  const menu = (
    <Menu className={styles['dropdown-con']}>
      <Menu.Item className={styles['drop-top']}>
        <div>管理</div>
      </Menu.Item>

      <Menu.Item className={styles['padding-none']}>
        <div className={styles['drop-mask']} />
      </Menu.Item>
    </Menu>
  )

  const avatorMenu = (
    <Menu>
      <Menu.Item>
        <a traget="self" href="http://192.168.2.135/dashboard-admin/login">
          退出
        </a>
      </Menu.Item>
    </Menu>
  )

  const noteMenu = (
    <Menu>
      <Menu.Item>
        <span>一条消息</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles['pic-con']}>
        <img className={styles['pic-img']} src={myHeader} />
        <Dropdown overlay={menu}>
          <span
            className={styles['drop-nav']}
            onClick={e => e.preventDefault()}
          >
            概览 <DownOutlined />
          </span>
        </Dropdown>
      </div>
      <div className={styles['nav-right']}>
        <div className={styles['bg-choose']}>企业</div>
        <div className={styles['bg-choose']}>工单</div>

        <Dropdown overlay={noteMenu} placement="bottomCenter" arrow>
          <div className={styles['bg-choose']}>
            <img className={styles['pic-note']} src={noted} alt=""></img>
          </div>
        </Dropdown>

        <Dropdown overlay={avatorMenu}>
          <span
            className={styles['avator-nav']}
            onClick={e => e.preventDefault()}
          >
            <img src={avator ? avator : defaultAvator} alt="" />{' '}
            <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  )
}
export default MuxinHeader

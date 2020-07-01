import React, { useState } from 'react'
import * as styles from './index.css'
import noted from './images/noted.png'
import header from './images/header.png'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const MuxinHeader = () => {
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

  const [current, setCurrent] = useState(0)
  return (
    <div className={styles.wrapper}>
      <div className={styles['pic-con']}>
        <img className={styles['pic-img']} src={header} />
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
        <div
          className={styles[`${current === 0 ? 'bg-choose' : ''}`]}
          onClick={() => {
            setCurrent(0)
          }}
        >
          企业
        </div>
        <div
          className={styles[`${current === 1 ? 'bg-choose' : ''}`]}
          onClick={() => {
            setCurrent(1)
          }}
        >
          工单
        </div>
        <div
          className={styles[`${current === 2 ? 'bg-choose' : ''}`]}
          onClick={() => {
            setCurrent(2)
          }}
        >
          <img className={styles['pic-note']} src={noted} alt=""></img>
        </div>

        <Dropdown overlay={avatorMenu}>
          <span
            className={styles['avator-nav']}
            onClick={e => e.preventDefault()}
          >
            头像 <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  )
}
export default MuxinHeader

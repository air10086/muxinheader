import React from 'react'
import * as styles from './index.css'
import { Button } from 'antd'
const MuxinHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Button>ssss</Button>
        <span className={styles['pic-img']}>图片</span>
        <span>概览</span>
      </div>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}
export default MuxinHeader

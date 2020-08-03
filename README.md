# 头部组件使用

## muxin-header

npm 地址：https://www.npmjs.com/package/muxin-header

## install

```
	npm install muxin-header或者yarn add muxin-header
```

## example

```jsx
import CusHeader from 'muxin-header'
import 'muxin-header/lib/main.min.css'

const Myheader = () => {
  return (
    <CusHeader
      hostURL="http://localhost:3000/dashboardadmin"
      baseURL="http://192.168.2.135:1036"
    />
  )
}

export default Myheader
```

## API

| name    | description  | type   | default                                        |
| ------- | ------------ | ------ | ---------------------------------------------- |
| hostURL | 退出跳转地址 | string | https://api.uwooz.com/sso-manage               |
| baseURL | 接口请求地址 | string | https://console.cloud.uwooz.com/dashboardadmin |

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
  return <CusHeader avator="" />
}

export default Myheader
```

## API

| name   | description | type   | default |
| ------ | ----------- | ------ | ------- |
| avator | 头像地址    | string |         |

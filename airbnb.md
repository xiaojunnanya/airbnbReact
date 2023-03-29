<!--
 * @Author: 肖俊男
 * @Date: 2023-03-25 15:42:26
 * @LastEditTime: 2023-03-25 15:53:04
 * @LastEditors: 肖俊男
 * @Description: airbnb爱彼迎的项目
 * @FilePath: \airbnb\airbnb.md
 * 前端实习生：鲸落
-->
# 颜色

```javascript
$\textcolor{Red}{1}$
$\textcolor{ProcessBlue}{2}$
```

 rpce/rmc



# 项目规范

- 1.文件夹、文件名称统一小写、多个单词以连接符(-）连接;
- 2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰;
- 3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component) 
- 4.整个项目不再使用class组件，统一使用函数式组件，并且全面拥抱Hooks;
- 5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹;
- 6.组件内部的状态，使用useState、useReducer;业务数据全部放在redux中管理
- 7.函数组件内部基本按照如下顺序编写代码：
  - 组件内部state管理;
  - redux的hooks代码;
  - 其他hooks相关代码(比如自定义hooks) 
  - 其他逻辑代码
  - 返回JSX代码

- 8.redux代码规范如下:
  - redux目前我们学习了两种模式，在项目实战中尽量两个都用起来，都需要掌握
  - 每个模块有自己独立的reducer或者slice，之后合并在一起
  - redux中会存在共享的状态、从服务器获取到的数据状态
- 9.网络请求采用axios
  - 对axios进行二次封装
  - 所有的模块请求会放到一个请求文件中单独管理

- 10.项目使用AntDesign、MUl (Material UI)
  - 爱彼迎本身的设计风格更多偏向于Material Ul，但是课程中也会尽量讲到AntDesign的使用方法
  - 项目中某些AntDesign、MUI中的组件会被拿过来使用
  - 但是多部分组件还是自己进行编写、封装、实现



# 基本配置

## jsconfig.json

先添加jsconfig.json，配置智能提示

```json
{
    "compilerOptions": {
        "target": "ES5",
        "module": "esnext",
        "baseUrl": "./",
        "moduleResolution": "node",
        "paths": {
            "@/*":[
                "src/*"
            ]
        },
        "jsx": "preserve",
        "lib": [
            "ESNext",
            "DOM.Iterable",
            "ScriptHost"
        ]
    }
}
```



## 项目结构

- assets：静态目录
- base-ui：当前项目依赖的基础UI
- components：公共组件
- hooks：自定义hook
- router：路由配置
- services：网络请求
- store：仓库
- utils：
- views：视图



## 别名配置

目标：**@ => src**

- 但是问题是react脚手架默认给我们隐藏了webpack

  - 解决办法一：`npm run eject`导出webpack【不推荐】
  - 解决办法二：使用 craco【名字由来：create-react-app config】

- 安装craco：`npm install @craco/craco` 【但是目前我们使用的 react script版本较新，它不支持】【解决方案：`npm install @craco/craco@alpha`，并且我们最好将其加入开发依赖：`npm install @craco/craco@alpha -D`】

  - 创建 craco.config.js：

  - ```js
    const path = require('path')
    
    module.exports = {
        webpack: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        }
    }
    ```

  - 然后修改package.json【我们需要通过craco启动项目，而不是react-scripts】

  - ```json
    //原来：
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    
    //现在：
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
    },
    ```



## 配置less

1.安装：craco-less：`npm install craco-less-D`【目前也是版本问题，安装：`npm i craco-less@2.1.0-alpha.0`】

2.craco.config.js添加：

```json
const path = require('path')

const CracoLessPlugin = require('craco-less')

module.exports = {
    // webpack配置@
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    // 配置less
    plugins: [
        {
            plugin: CracoLessPlugin
        }
    ]
}
```





## CSS样式重构

- 使用normalize.css（安装：`npm install normalize.css`）【Normalize.css只是一个很小的CSS文件，但它在默认的HTML元素样式上提供了跨浏览器的高度一致性。相比于传统的`CSS reset`，`Normalize.css`是一种现代的、为HTML5准备的优质替代方案。】
- 安装后并使用
- 然后我们自定义一个reset.css，来编写我们在写代码过程中遇到的需要重置的css样式



## Router配置

- 安装：`npm install react-router-dom`
- 使用：使用history模式
- 定义routes，并导入，记得配置路由懒加载



## redux状态管理

- Redux状态管理的选择:
  - 普通方式：目前项目中依然使用率非常高
  - @reduxjs/toolkit方式：推荐方式,未来的趋势



### 普通方式

- 创建四个文件
- index.js中雨之前直接使用redux不同，index是做一个统一的导出。（就是合并的写法）



### @reduxjs/toolkit方式

- 安装：`npm install @reduxjs/toolkit`【一般一起将react-redux一起安装了`npm install @reduxjs/toolkit react-redux`】【安装了@reduxjs/toolkit 就不需要安装 redux了，因为@reduxjs/toolkit底层依赖redux，会一起安装】

- 配置store
- 在index.js中使用



## axios的封装

- 安装axios：`npm install `
























# Fizzy React

## 新增页面

在 `src/pages` 下创建页面，约定如下

1. 页面目录以中划线分隔方式命名
2. 页面目录下必须包含：
   1. `Index.tsx` 视图层入口
   2. `page.json` 页面配置，触发自动生成路由，参数参照 `react-router` 配置

## 常量管理

在 `src/constants` 下创建常量文件，默认包含的 `storage.ts` 用于管理本地存储 key

## 特殊说明

别名 `@@` 用于引用自动生成的产物，相关产物位于 `src/$fizzy-generated` 下，如：`routeConfig.tsx` 为自动生成的 ReactRouter 路由文件

## 结构说明

```bash
.
├── misc                    # 杂项，不参与项目构建
│   └── nginx.conf          # 服务器 ng 配置建议
├── plugins                 # 自定义 webpack plugin 目录
│   └── router-plugin.js    # 自动生成路由插件
├── src
│   ├── $fizzy-generated    # 自动生成的产物（执行任意打包命令后生成）
│   │   └── routeConfig.tsx # 自动生成的路由配置
│   ├── layout              # 布局组件目录
│   ├── pages               # 页面目录
│   │   ├── demo-detail     # 示例：详情页
│   │   ├── demo-edit       # 示例：编辑页（不传参则为新增页）
│   │   ├── demo-list       # 示例：列表页
│   │   └── home            # 首页
│   ├── typings             # 项目渲染入口
│   │   └── global.d.ts     # 全局类型声明
│   ├── App.tsx             # 项目渲染入口
│   ├── components          # 公共组件目录
│   ├── constant            # 常量管理
│   ├── router.tsx          # 路由配置
│   └── entry.tsx           # 打包入口
├── template                # html 模板目录
├── .npmrc
├── .gitignore
├── .eslintignore
├── .eslintrc.js
├── babel.config.json
├── tsconfig.json
├── .prettierignore
├── .prettierrc.json
├── pnpm-lock.yaml
├── postcss.config.js
├── package.json
├── readme.md
└── webpack.config.js
```
# Fizzy React

## 新增页面

在 `src/pages` 下创建页面，约定如下

1. 页面目录以中划线分隔方式命名
2. 页面目录下必须包含：
   1. `Index.tsx` 视图层入口
   2. `page.json` 页面配置，触发自动生成路由

## 常量管理

在 `src/constants` 下创建常量文件，默认包含的 `storage.ts` 用于管理本地存储 key

## 特殊说明

别名 `@@` 用于引用自动生成的产物，相关产物位于 `src/$fizzy-generated` 下，如：`routeConfig.tsx` 为自动生成的 ReactRouter 路由文件

## 结构说明

```bash
.
├── babel.config.json       # babel 配置
├── index.ejs               # html 模板
├── package.json
├── plugins                 # 自定义 webpack plugin 目录
│   └── router-plugin.js    # 自动生成路由插件
├── pnpm-lock.yaml
├── postcss.config.js
├── readme.md
├── src
│   ├── $fizzy-generated    # 自动生成的产物
│   │   └── routeConfig.tsx # 自动生成的路由配置
│   ├── App.tsx             # 项目渲染入口
│   ├── components          # 公共组件目录
│   │   └── PageLoading.tsx
│   ├── constant            # 常量管理
│   │   └── storage.ts
│   ├── entry.tsx
│   ├── layout              # 布局组件目录
│   │   ├── Index.tsx
│   │   └── layout.css
│   ├── pages               # 页面目录
│   │   ├── demo-detail     # 示例：详情页
│   │   │   ├── Index.tsx
│   │   │   └── page.json
│   │   ├── demo-edit       # 示例：编辑页（不传参则为新增页）
│   │   │   ├── Index.tsx
│   │   │   └── page.json
│   │   ├── demo-list       # 示例：列表页
│   │   │   ├── Index.tsx
│   │   │   ├── list.css
│   │   │   └── page.json
│   │   └── home            # 首页
│   │       └── Index.tsx
│   ├── router.tsx          # 路由配置
│   └── typings
│       └── global.d.ts     # 全局类型声明
├── tsconfig.json
└── webpack.config.js
```
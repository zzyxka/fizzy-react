const fs = require('fs');
const path = require('path');
const glob = require('glob');

function camelCaseFormat(str) {
  let newStr = str.replace(/-/g, ' ');
  newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
  return newStr.replace(/\s/g, '');
}

class RouterPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap('RouterPlugin', (compilation, callback) => {
      glob(path.join(this.options.srcDir, '**', 'page.json'), (err, files) => {
        if (err) {
          compilation.errors.push(err);
          return callback();
        }

        const routes = [];
        files.forEach((file) => {
          const filePath = path.parse(file).dir;

          // 读取 route.json 文件内容  
          const fileContent = fs.readFileSync(file, 'utf-8');
          const routeConfig = JSON.parse(fileContent);

          const routePath = (routeConfig.path ? `${filePath}${routeConfig.path}` : filePath).replace(`${this.options.srcDir}/`, '');
          const pageName = filePath.replace(`${this.options.srcDir}/`, '');
          routes.push({
            componentName: camelCaseFormat(pageName),
            routePath,
            pageName,
            pageConfig: routeConfig
          });
        });

        const components = routes.map((route) => {
          return `const ${route.componentName} = lazy(async () => await import('@/pages/${route.pageName}/Index'));`;
        })
        const configs = routes.map((route, index) => {
          return `\n  { path: '${route.routePath}', element: <Suspense fallback={'loading'}><${route.componentName} /></Suspense>, loader: () => ({ pageConfig: ${JSON.stringify(route.pageConfig)}}) }${index === routes.length - 1 ? '\n' : ','}`;
        });

        // 将生成的路由信息写入到 router.js 文件中  
        const routerFilePath = path.join(this.options.outputDir, 'routeConfig.tsx');
        const routerContent = `import React, { lazy, Suspense } from 'react';\n\n${components.join('\n')}\n\nconst routeConfig = [${configs.join('')}];\n\nexport default routeConfig;\n`;
        const dirPath = path.dirname(routerFilePath);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        } else {
          fs.rmSync(routerFilePath);
          fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFileSync(routerFilePath, routerContent);
      });
    });
  }
}

module.exports = RouterPlugin;
# React + TypeScript 聊天应用前端

这是一个基于 React + TypeScript 的聊天应用前端，使用 Apollo Client 与 GraphQL 后端通信。

## 功能特性

- React + TypeScript
- Apollo Client for GraphQL
- Tailwind CSS 响应式设计
- 实时聊天界面
- 错误处理和加载状态

## 快速开始

1. 克隆仓库
```bash
git clone https://github.com/jianminy931020-coder/chat-frontend-react.git
cd chat-frontend-react
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
```bash
cp .env.example .env
# 编辑 .env 文件，设置 REACT_APP_GRAPHQL_ENDPOINT
```

4. 启动开发服务器
```bash
npm start
```

## 部署

构建生产版本：
```bash
npm run build
```

部署到 Vercel：
```bash
npm install -g vercel
vercel --prod
```

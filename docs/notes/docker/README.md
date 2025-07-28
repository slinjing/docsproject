---
title: Docker
createTime: 2025/07/18 15:50:46
permalink: /notes/docker/
---
## 什么是 Docker

**Docker** 是一个开源的应用容器引擎，可以轻松地为任何应用创建一个轻量级的、可移植的、自给自足的容器。它允许开发者将应用程序及其依赖环境一起打包到一个容器中，然后可以在任何平台上运行。

## Docker 的核心概念

Docker 的核心包括三个主要部分：镜像、容器和仓库。


- 镜像：镜像是一个只读的模板，用于创建 Docker 容器。它包含了运行应用程序所需的所有依赖、库、资源和配置文件。镜像是静态的，不包含任何动态数据。


- 容器：容器是镜像的运行实例。它是一个轻量级的、独立的执行环境，包含了应用程序及其所有依赖。容器是动态的，可以启动、停止、删除和迁移。


- 仓库：仓库是存放镜像的地方，类似于代码仓库。[Docker Hub](https://hub.docker.com/) 是一个公共的 Docker 镜像仓库，用户可以在上面上传和下载镜像。



## [Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice)

* 在线阅读：[docker-practice.com](https://vuepress.mirror.docker-practice.com/)，[GitBook](https://yeasy.gitbook.io/docker_practice/)，[Github](https://github.com/yeasy/docker_practice/blob/master/SUMMARY.md)
* 离线阅读：[`$ docker run -it --rm -p 4000:80 ccr.ccs.tencentyun.com/dockerpracticesig/docker_practice:vuepress`](https://github.com/yeasy/docker_practice/wiki/%E7%A6%BB%E7%BA%BF%E9%98%85%E8%AF%BB%E5%8A%9F%E8%83%BD%E8%AF%A6%E8%A7%A3)
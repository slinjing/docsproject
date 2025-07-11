---
title: 一步步部署 kubernetes 集群
createTime: 2025/07/11 11:37:49
permalink: /notes/follow-me-install-kubernetes-cluster/
---

::: tip 此文档 fork 自 [follow-me-install-kubernetes-cluster](https://github.com/opsnull/follow-me-install-kubernetes-cluster)。
:::




本系列文档介绍使用二进制部署 ==kubernetes v1.16.6== 集群的所有步骤（Hard-Way 模式）。在部署的过程中，将详细列出各组件的启动参数，它们的含义和可能遇到的问题。

部署完成后，你将理解系统各组件的交互原理，进而能快速解决实际问题。所以本文档主要适合于那些有一定 kubernetes 基础，想通过一步步部署的方式来学习和了解系统配置、运行原理的人。

## 步骤列表





- [00.组件版本和配置策略](00.组件版本和配置策略.md)
- [01.初始化系统和全局变量](01.初始化系统和全局变量.md)
- [02.创建CA根证书和秘钥](02.创建CA根证书和秘钥.md)			
- [03.部署kubectl命令行工具](03.kubectl.md)			
- [04.部署etcd集群](04.etcd集群.md)				
- [05-1.部署master节点.md](05-1.master节点.md)
- [05-2.apiserver集群](05-2.apiserver集群.md)
- [05-3.controller-manager集群](05-3.controller-manager集群.md)	
- [05-4.scheduler集群](05-4.scheduler集群.md)
- [06-1.部署woker节点](06-1.worker节点.md)			
- [06-2.apiserver高可用之nginx代理](06-2.apiserver高可用.md)
- [06-3.containerd](06-3.containerd.md)					
- [06-4.kubelet](06-4.kubelet.md)				
- [06-5.kube-proxy](06-5.kube-proxy.md)
- [06-6.部署calico网络](06-6.calico.md)	
- [07.验证集群功能](07.验证集群功能.md)			
- [08-1.部署集群插件](08-1.部署集群插件.md)
- [08-2.coredns插件](08-2.coredns插件.md)
- [08-3.dashboard插件](08-3.dashboard插件.md)
- [08-4.kube-prometheus插件](08-4.kube-prometheus插件.md)
- [08-5.EFK插件](08-5.EFK插件.md)			
- [09.部署Docker-Registry](09.Registry.md)	
- [10.清理集群](10.清理集群.md)	
- [A.浏览器访问apiserver安全端口](A.浏览器访问kube-apiserver安全端口.md)
- [B.校验TLS证书](B.校验TLS证书.md)
- [C.部署metrics-server插件](C.metrics-server插件.md)
- [D.部署Harbor-Registry](D.部署Harbor-Registry.md)	

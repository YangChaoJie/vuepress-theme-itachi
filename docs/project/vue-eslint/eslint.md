---
title: 题库组前端开发规范
date: 2021-01-07

---
[toc]
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1	规范(默认)](#1%09%E8%A7%84%E8%8C%83%E9%BB%98%E8%AE%A4)
  - [1.1	所有字符串一律使用单引号；](#11%09%E6%89%80%E6%9C%89%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%80%E5%BE%8B%E4%BD%BF%E7%94%A8%E5%8D%95%E5%BC%95%E5%8F%B7)
  - [1.2	每个层级继承上一级缩进连个空格](#12%09%E6%AF%8F%E4%B8%AA%E5%B1%82%E7%BA%A7%E7%BB%A7%E6%89%BF%E4%B8%8A%E4%B8%80%E7%BA%A7%E7%BC%A9%E8%BF%9B%E8%BF%9E%E4%B8%AA%E7%A9%BA%E6%A0%BC)
  - [1.3	函数圆括号前后需有一个空格](#13%09%E5%87%BD%E6%95%B0%E5%9C%86%E6%8B%AC%E5%8F%B7%E5%89%8D%E5%90%8E%E9%9C%80%E6%9C%89%E4%B8%80%E4%B8%AA%E7%A9%BA%E6%A0%BC)
  - [1.4	注释符后必须跟一个空格](#14%09%E6%B3%A8%E9%87%8A%E7%AC%A6%E5%90%8E%E5%BF%85%E9%A1%BB%E8%B7%9F%E4%B8%80%E4%B8%AA%E7%A9%BA%E6%A0%BC)
  - [1.5	禁止出现未使用过的变量和函数](#15%09%E7%A6%81%E6%AD%A2%E5%87%BA%E7%8E%B0%E6%9C%AA%E4%BD%BF%E7%94%A8%E8%BF%87%E7%9A%84%E5%8F%98%E9%87%8F%E5%92%8C%E5%87%BD%E6%95%B0)
  - [1.6	禁止使用==，要求使用===和!==来代替](#16%09%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8%E8%A6%81%E6%B1%82%E4%BD%BF%E7%94%A8%E5%92%8C%E6%9D%A5%E4%BB%A3%E6%9B%BF)
  - [1.7	对象的value前需加一个空格](#17%09%E5%AF%B9%E8%B1%A1%E7%9A%84value%E5%89%8D%E9%9C%80%E5%8A%A0%E4%B8%80%E4%B8%AA%E7%A9%BA%E6%A0%BC)
  - [1.8	对象或数组的最后一个值后面不要加逗号](#18%09%E5%AF%B9%E8%B1%A1%E6%88%96%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%80%BC%E5%90%8E%E9%9D%A2%E4%B8%8D%E8%A6%81%E5%8A%A0%E9%80%97%E5%8F%B7)
  - [1.9	箭头函数前后需要有空格](#19%09%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E5%89%8D%E5%90%8E%E9%9C%80%E8%A6%81%E6%9C%89%E7%A9%BA%E6%A0%BC)
  - [1.10	中缀符前后都需加空格](#110%09%E4%B8%AD%E7%BC%80%E7%AC%A6%E5%89%8D%E5%90%8E%E9%83%BD%E9%9C%80%E5%8A%A0%E7%A9%BA%E6%A0%BC)
  - [1.11	不允许出现多个连续空行](#111%09%E4%B8%8D%E5%85%81%E8%AE%B8%E5%87%BA%E7%8E%B0%E5%A4%9A%E4%B8%AA%E8%BF%9E%E7%BB%AD%E7%A9%BA%E8%A1%8C)
  - [1.12	变量，方法名需使用驼峰原则](#112%09%E5%8F%98%E9%87%8F%E6%96%B9%E6%B3%95%E5%90%8D%E9%9C%80%E4%BD%BF%E7%94%A8%E9%A9%BC%E5%B3%B0%E5%8E%9F%E5%88%99)
  - [1.13	不允许省略大括号](#113%09%E4%B8%8D%E5%85%81%E8%AE%B8%E7%9C%81%E7%95%A5%E5%A4%A7%E6%8B%AC%E5%8F%B7)
  - [1.14	禁止出现多个连续的空格](#114%09%E7%A6%81%E6%AD%A2%E5%87%BA%E7%8E%B0%E5%A4%9A%E4%B8%AA%E8%BF%9E%E7%BB%AD%E7%9A%84%E7%A9%BA%E6%A0%BC)
  - [1.15	禁止使用tab](#115%09%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8tab)
  - [1.16	变量声明等号前后需有空格](#116%09%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E%E7%AD%89%E5%8F%B7%E5%89%8D%E5%90%8E%E9%9C%80%E6%9C%89%E7%A9%BA%E6%A0%BC)
  - [1.17	Vue for循环时必须bing key](#117%09vue-for%E5%BE%AA%E7%8E%AF%E6%97%B6%E5%BF%85%E9%A1%BBbing-key)
  - [1.18	语句块前需有一个空格](#118%09%E8%AF%AD%E5%8F%A5%E5%9D%97%E5%89%8D%E9%9C%80%E6%9C%89%E4%B8%80%E4%B8%AA%E7%A9%BA%E6%A0%BC)
  - [1.19	禁止与 -0 进行比较](#119%09%E7%A6%81%E6%AD%A2%E4%B8%8E--0-%E8%BF%9B%E8%A1%8C%E6%AF%94%E8%BE%83)
  - [1.20	禁止在条件语句中出现赋值操作符](#120%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5%E4%B8%AD%E5%87%BA%E7%8E%B0%E8%B5%8B%E5%80%BC%E6%93%8D%E4%BD%9C%E7%AC%A6)
  - [1.21	禁止在条件中使用常量表达式](#121%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E6%9D%A1%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%B8%B8%E9%87%8F%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [1.22	在同一块中禁止重新声明变量](#122%09%E5%9C%A8%E5%90%8C%E4%B8%80%E5%9D%97%E4%B8%AD%E7%A6%81%E6%AD%A2%E9%87%8D%E6%96%B0%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F)
  - [1.23	连续的变量声明需要只能有一个变量声明](#123%09%E8%BF%9E%E7%BB%AD%E7%9A%84%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E%E9%9C%80%E8%A6%81%E5%8F%AA%E8%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E)
  - [1.24	每个对象，区块后都需要加分号(;)](#124%09%E6%AF%8F%E4%B8%AA%E5%AF%B9%E8%B1%A1%E5%8C%BA%E5%9D%97%E5%90%8E%E9%83%BD%E9%9C%80%E8%A6%81%E5%8A%A0%E5%88%86%E5%8F%B7)
  - [1.25	禁止空块语句,但允许空的catch块](#125%09%E7%A6%81%E6%AD%A2%E7%A9%BA%E5%9D%97%E8%AF%AD%E5%8F%A5%E4%BD%86%E5%85%81%E8%AE%B8%E7%A9%BA%E7%9A%84catch%E5%9D%97)
  - [1.26	禁止在正则表达式中出现空字符集](#126%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%AD%E5%87%BA%E7%8E%B0%E7%A9%BA%E5%AD%97%E7%AC%A6%E9%9B%86)
  - [1.27	禁止在正则表达式中使用控制字符](#127%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6)
  - [1.28	强制在 getter 属性中出现一个 return 语句](#128%09%E5%BC%BA%E5%88%B6%E5%9C%A8-getter-%E5%B1%9E%E6%80%A7%E4%B8%AD%E5%87%BA%E7%8E%B0%E4%B8%80%E4%B8%AA-return-%E8%AF%AD%E5%8F%A5)
  - [1.29	强制 “for” 循环中更新子句的计数器朝着正确的方向移动](#129%09%E5%BC%BA%E5%88%B6-for-%E5%BE%AA%E7%8E%AF%E4%B8%AD%E6%9B%B4%E6%96%B0%E5%AD%90%E5%8F%A5%E7%9A%84%E8%AE%A1%E6%95%B0%E5%99%A8%E6%9C%9D%E7%9D%80%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%96%B9%E5%90%91%E7%A7%BB%E5%8A%A8)
  - [1.30	禁止在循环中 出现 await](#130%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E5%BE%AA%E7%8E%AF%E4%B8%AD-%E5%87%BA%E7%8E%B0-await)
  - [1.31	禁止在条件中使用常量表达式](#131%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E6%9D%A1%E4%BB%B6%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%B8%B8%E9%87%8F%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [1.32	禁止在对象字面量中出现重复的键](#132%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F%E4%B8%AD%E5%87%BA%E7%8E%B0%E9%87%8D%E5%A4%8D%E7%9A%84%E9%94%AE)
  - [1.33	禁止重复 case 标签](#133%09%E7%A6%81%E6%AD%A2%E9%87%8D%E5%A4%8D-case-%E6%A0%87%E7%AD%BE)
  - [1.34	禁止对 catch 子句的参数重新赋值](#134%09%E7%A6%81%E6%AD%A2%E5%AF%B9-catch-%E5%AD%90%E5%8F%A5%E7%9A%84%E5%8F%82%E6%95%B0%E9%87%8D%E6%96%B0%E8%B5%8B%E5%80%BC)
  - [1.35	禁止function中出现重复的参数](#135%09%E7%A6%81%E6%AD%A2function%E4%B8%AD%E5%87%BA%E7%8E%B0%E9%87%8D%E5%A4%8D%E7%9A%84%E5%8F%82%E6%95%B0)
  - [1.36	禁止使用不必要的布尔类型转换](#136%09%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E5%B8%83%E5%B0%94%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)
  - [1.37	禁止正则表达式字面量中出现多个空格](#137%09%E7%A6%81%E6%AD%A2%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%AD%97%E9%9D%A2%E9%87%8F%E4%B8%AD%E5%87%BA%E7%8E%B0%E5%A4%9A%E4%B8%AA%E7%A9%BA%E6%A0%BC)
  - [1.38	禁用稀疏数组](#138%09%E7%A6%81%E7%94%A8%E7%A8%80%E7%96%8F%E6%95%B0%E7%BB%84)
  - [1.39	禁止在常规字符串中出现模板字面量占位符语法](#139%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E5%B8%B8%E8%A7%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E5%87%BA%E7%8E%B0%E6%A8%A1%E6%9D%BF%E5%AD%97%E9%9D%A2%E9%87%8F%E5%8D%A0%E4%BD%8D%E7%AC%A6%E8%AF%AD%E6%B3%95)
  - [1.40	禁止使用令人困惑的多行表达式](#140%09%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8%E4%BB%A4%E4%BA%BA%E5%9B%B0%E6%83%91%E7%9A%84%E5%A4%9A%E8%A1%8C%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [1.41	禁止在 return、throw、continue 和 break 语句后出现不可达代码](#141%09%E7%A6%81%E6%AD%A2%E5%9C%A8-returnthrowcontinue-%E5%92%8C-break-%E8%AF%AD%E5%8F%A5%E5%90%8E%E5%87%BA%E7%8E%B0%E4%B8%8D%E5%8F%AF%E8%BE%BE%E4%BB%A3%E7%A0%81)
  - [1.42	禁止在 finally 语句块中出现控制流语句](#142%09%E7%A6%81%E6%AD%A2%E5%9C%A8-finally-%E8%AF%AD%E5%8F%A5%E5%9D%97%E4%B8%AD%E5%87%BA%E7%8E%B0%E6%8E%A7%E5%88%B6%E6%B5%81%E8%AF%AD%E5%8F%A5)
  - [1.43	禁止对关系运算符的左操作数使用否定操作符](#143%09%E7%A6%81%E6%AD%A2%E5%AF%B9%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6%E7%9A%84%E5%B7%A6%E6%93%8D%E4%BD%9C%E6%95%B0%E4%BD%BF%E7%94%A8%E5%90%A6%E5%AE%9A%E6%93%8D%E4%BD%9C%E7%AC%A6)
  - [1.44	要求调用 isNaN()检查 NaN](#144%09%E8%A6%81%E6%B1%82%E8%B0%83%E7%94%A8-isnan%E6%A3%80%E6%9F%A5-nan)
  - [1.45	强制 typeof 表达式与有效的字符串进行比较](#145%09%E5%BC%BA%E5%88%B6-typeof-%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%B8%8E%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%9B%E8%A1%8C%E6%AF%94%E8%BE%83)
  - [1.46	强制所有控制语句都使用{}](#146%09%E5%BC%BA%E5%88%B6%E6%89%80%E6%9C%89%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5%E9%83%BD%E4%BD%BF%E7%94%A8)
  - [1.47	禁止出现空函数](#147%09%E7%A6%81%E6%AD%A2%E5%87%BA%E7%8E%B0%E7%A9%BA%E5%87%BD%E6%95%B0)
  - [1.48	禁用隐式的eval()](#148%09%E7%A6%81%E7%94%A8%E9%9A%90%E5%BC%8F%E7%9A%84eval)
  - [1.49	禁止重新声明变量](#149%09%E7%A6%81%E6%AD%A2%E9%87%8D%E6%96%B0%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F)
  - [1.50	禁止在返回语句中赋值  reutrn a = 1 + 2,允许使用return (a = 1 + 2)](#150%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E8%BF%94%E5%9B%9E%E8%AF%AD%E5%8F%A5%E4%B8%AD%E8%B5%8B%E5%80%BC--reutrn-a--1--2%E5%85%81%E8%AE%B8%E4%BD%BF%E7%94%A8return-a--1--2)
  - [1.51	禁止自身赋值](#151%09%E7%A6%81%E6%AD%A2%E8%87%AA%E8%BA%AB%E8%B5%8B%E5%80%BC)
  - [1.52	禁止自身比较](#152%09%E7%A6%81%E6%AD%A2%E8%87%AA%E8%BA%AB%E6%AF%94%E8%BE%83)
  - [1.53	限制可以被抛出的异常 (no-throw-literal)，抛出的异常必须是Error对象](#153%09%E9%99%90%E5%88%B6%E5%8F%AF%E4%BB%A5%E8%A2%AB%E6%8A%9B%E5%87%BA%E7%9A%84%E5%BC%82%E5%B8%B8-no-throw-literal%E6%8A%9B%E5%87%BA%E7%9A%84%E5%BC%82%E5%B8%B8%E5%BF%85%E9%A1%BB%E6%98%AFerror%E5%AF%B9%E8%B1%A1)
  - [1.54	禁用一成不变的循环条件](#154%09%E7%A6%81%E7%94%A8%E4%B8%80%E6%88%90%E4%B8%8D%E5%8F%98%E7%9A%84%E5%BE%AA%E7%8E%AF%E6%9D%A1%E4%BB%B6)
  - [1.55	禁止没有必要的字符拼接](#155%09%E7%A6%81%E6%AD%A2%E6%B2%A1%E6%9C%89%E5%BF%85%E8%A6%81%E7%9A%84%E5%AD%97%E7%AC%A6%E6%8B%BC%E6%8E%A5)
  - [1.56	禁用不必要的转义](#156%09%E7%A6%81%E7%94%A8%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E8%BD%AC%E4%B9%89)
  - [1.57	禁止删除变量](#157%09%E7%A6%81%E6%AD%A2%E5%88%A0%E9%99%A4%E5%8F%98%E9%87%8F)
  - [1.58	禁用未声明的变量](#158%09%E7%A6%81%E7%94%A8%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%9A%84%E5%8F%98%E9%87%8F)
  - [1.59	禁止未使用过的变量](#159%09%E7%A6%81%E6%AD%A2%E6%9C%AA%E4%BD%BF%E7%94%A8%E8%BF%87%E7%9A%84%E5%8F%98%E9%87%8F)
  - [1.60	要求使用骆驼拼写法](#160%09%E8%A6%81%E6%B1%82%E4%BD%BF%E7%94%A8%E9%AA%86%E9%A9%BC%E6%8B%BC%E5%86%99%E6%B3%95)
  - [1.61	要求或禁止使用拖尾逗号](#161%09%E8%A6%81%E6%B1%82%E6%88%96%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8%E6%8B%96%E5%B0%BE%E9%80%97%E5%8F%B7)
  - [1.62	强制在逗号周围使用空格](#162%09%E5%BC%BA%E5%88%B6%E5%9C%A8%E9%80%97%E5%8F%B7%E5%91%A8%E5%9B%B4%E4%BD%BF%E7%94%A8%E7%A9%BA%E6%A0%BC)
  - [1.63	逗号风格](#163%09%E9%80%97%E5%8F%B7%E9%A3%8E%E6%A0%BC)
  - [1.64	禁止或强制在计算属性中使用空格](#164%09%E7%A6%81%E6%AD%A2%E6%88%96%E5%BC%BA%E5%88%B6%E5%9C%A8%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%A9%BA%E6%A0%BC)
  - [1.65	要求或禁止在函数标识符和其调用之间有空格](#165%09%E8%A6%81%E6%B1%82%E6%88%96%E7%A6%81%E6%AD%A2%E5%9C%A8%E5%87%BD%E6%95%B0%E6%A0%87%E8%AF%86%E7%AC%A6%E5%92%8C%E5%85%B6%E8%B0%83%E7%94%A8%E4%B9%8B%E9%97%B4%E6%9C%89%E7%A9%BA%E6%A0%BC)
  - [1.66	强制隐式返回的箭头函数体的位置](#166%09%E5%BC%BA%E5%88%B6%E9%9A%90%E5%BC%8F%E8%BF%94%E5%9B%9E%E7%9A%84%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%BD%93%E7%9A%84%E4%BD%8D%E7%BD%AE)
  - [1.67	强制在对象字面量的键和值之间使用一致的空格](#167%09%E5%BC%BA%E5%88%B6%E5%9C%A8%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F%E7%9A%84%E9%94%AE%E5%92%8C%E5%80%BC%E4%B9%8B%E9%97%B4%E4%BD%BF%E7%94%A8%E4%B8%80%E8%87%B4%E7%9A%84%E7%A9%BA%E6%A0%BC)
  - [1.68	强制关键字周围空格的一致性](#168%09%E5%BC%BA%E5%88%B6%E5%85%B3%E9%94%AE%E5%AD%97%E5%91%A8%E5%9B%B4%E7%A9%BA%E6%A0%BC%E7%9A%84%E4%B8%80%E8%87%B4%E6%80%A7)
  - [1.69	禁止使用 空格 和 tab 混合缩进](#169%09%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8-%E7%A9%BA%E6%A0%BC-%E5%92%8C-tab-%E6%B7%B7%E5%90%88%E7%BC%A9%E8%BF%9B)
  - [1.70	禁止属性前有空白](#170%09%E7%A6%81%E6%AD%A2%E5%B1%9E%E6%80%A7%E5%89%8D%E6%9C%89%E7%A9%BA%E7%99%BD)
  - [1.71	要求或禁止块内填充](#171%09%E8%A6%81%E6%B1%82%E6%88%96%E7%A6%81%E6%AD%A2%E5%9D%97%E5%86%85%E5%A1%AB%E5%85%85)
  - [1.72	强制分号前后有空格 (semi-spacing),分号前没有空格](#172%09%E5%BC%BA%E5%88%B6%E5%88%86%E5%8F%B7%E5%89%8D%E5%90%8E%E6%9C%89%E7%A9%BA%E6%A0%BC-semi-spacing%E5%88%86%E5%8F%B7%E5%89%8D%E6%B2%A1%E6%9C%89%E7%A9%BA%E6%A0%BC)
  - [1.73	强制分号的位置](#173%09%E5%BC%BA%E5%88%B6%E5%88%86%E5%8F%B7%E7%9A%84%E4%BD%8D%E7%BD%AE)
  - [1.74	要求或禁止语句块之前的空格](#174%09%E8%A6%81%E6%B1%82%E6%88%96%E7%A6%81%E6%AD%A2%E8%AF%AD%E5%8F%A5%E5%9D%97%E4%B9%8B%E5%89%8D%E7%9A%84%E7%A9%BA%E6%A0%BC)
  - [1.75	禁止圆括号内的空格](#175%09%E7%A6%81%E6%AD%A2%E5%9C%86%E6%8B%AC%E5%8F%B7%E5%86%85%E7%9A%84%E7%A9%BA%E6%A0%BC)
  - [1.76	要求中缀操作符周围有空格](#176%09%E8%A6%81%E6%B1%82%E4%B8%AD%E7%BC%80%E6%93%8D%E4%BD%9C%E7%AC%A6%E5%91%A8%E5%9B%B4%E6%9C%89%E7%A9%BA%E6%A0%BC)
  - [1.77	要求在一元操作符之前或之后存在空格](#177%09%E8%A6%81%E6%B1%82%E5%9C%A8%E4%B8%80%E5%85%83%E6%93%8D%E4%BD%9C%E7%AC%A6%E4%B9%8B%E5%89%8D%E6%88%96%E4%B9%8B%E5%90%8E%E5%AD%98%E5%9C%A8%E7%A9%BA%E6%A0%BC)
  - [1.78	禁止重复导入](#178%09%E7%A6%81%E6%AD%A2%E9%87%8D%E5%A4%8D%E5%AF%BC%E5%85%A5)
  - [1.79	禁止对 function 声明重新赋值](#179%09%E7%A6%81%E6%AD%A2%E5%AF%B9-function-%E5%A3%B0%E6%98%8E%E9%87%8D%E6%96%B0%E8%B5%8B%E5%80%BC)
  - [1.80	禁止不必要的分号](#180%09%E7%A6%81%E6%AD%A2%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E5%88%86%E5%8F%B7)
  - [1.81	禁止在嵌套的语句块中出现变量或 function 声明](#181%09%E7%A6%81%E6%AD%A2%E5%9C%A8%E5%B5%8C%E5%A5%97%E7%9A%84%E8%AF%AD%E5%8F%A5%E5%9D%97%E4%B8%AD%E5%87%BA%E7%8E%B0%E5%8F%98%E9%87%8F%E6%88%96-function-%E5%A3%B0%E6%98%8E)
  - [1.82	禁止不规则的空白](#182%09%E7%A6%81%E6%AD%A2%E4%B8%8D%E8%A7%84%E5%88%99%E7%9A%84%E7%A9%BA%E7%99%BD)
  - [1.83	禁止将全局对象当作函数进行调用](#183%09%E7%A6%81%E6%AD%A2%E5%B0%86%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1%E5%BD%93%E4%BD%9C%E5%87%BD%E6%95%B0%E8%BF%9B%E8%A1%8C%E8%B0%83%E7%94%A8)
  - [1.84	禁止 case 语句落空](#184%09%E7%A6%81%E6%AD%A2-case-%E8%AF%AD%E5%8F%A5%E8%90%BD%E7%A9%BA)
  - [1.85	禁止对原生对象或只读的全局对象进行赋值](#185%09%E7%A6%81%E6%AD%A2%E5%AF%B9%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1%E6%88%96%E5%8F%AA%E8%AF%BB%E7%9A%84%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1%E8%BF%9B%E8%A1%8C%E8%B5%8B%E5%80%BC)
  - [1.86	禁用八进制字面量](#186%09%E7%A6%81%E7%94%A8%E5%85%AB%E8%BF%9B%E5%88%B6%E5%AD%97%E9%9D%A2%E9%87%8F)
  - [1.87	禁用未使用过的标签](#187%09%E7%A6%81%E7%94%A8%E6%9C%AA%E4%BD%BF%E7%94%A8%E8%BF%87%E7%9A%84%E6%A0%87%E7%AD%BE)
  - [1.88	不允许修改类声明的变量](#188%09%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BF%AE%E6%94%B9%E7%B1%BB%E5%A3%B0%E6%98%8E%E7%9A%84%E5%8F%98%E9%87%8F)
  - [1.89	不允许改变用const声明的变量](#189%09%E4%B8%8D%E5%85%81%E8%AE%B8%E6%94%B9%E5%8F%98%E7%94%A8const%E5%A3%B0%E6%98%8E%E7%9A%84%E5%8F%98%E9%87%8F)
  - [1.90	在构造函数中禁止在调用super()之前使用this或super](#190%09%E5%9C%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%AD%E7%A6%81%E6%AD%A2%E5%9C%A8%E8%B0%83%E7%94%A8super%E4%B9%8B%E5%89%8D%E4%BD%BF%E7%94%A8this%E6%88%96super)
  - [1.91	禁用函数内没有yield的 generator 函数](#191%09%E7%A6%81%E7%94%A8%E5%87%BD%E6%95%B0%E5%86%85%E6%B2%A1%E6%9C%89yield%E7%9A%84-generator-%E5%87%BD%E6%95%B0)
- [2	Vue规范](#2%09vue%E8%A7%84%E8%8C%83)
  - [2.1	不允许计算属性中的异步操作(disallow asynchronous actions in computed properties)](#21%09%E4%B8%8D%E5%85%81%E8%AE%B8%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%AD%E7%9A%84%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9Cdisallow-asynchronous-actions-in-computed-properties)
  - [2.2	不允许重复字段名(disallow duplication of field names)](#22%09%E4%B8%8D%E5%85%81%E8%AE%B8%E9%87%8D%E5%A4%8D%E5%AD%97%E6%AE%B5%E5%90%8Ddisallow-duplication-of-field-names)
  - [2.3	不允许重复属性(disallow duplication of attributes)](#23%09%E4%B8%8D%E5%85%81%E8%AE%B8%E9%87%8D%E5%A4%8D%E5%B1%9E%E6%80%A7disallow-duplication-of-attributes)
  - [2.4	不允许在```<Template>```中出现解析错误(disallow parsing errors in ```<Template>```)](#24%09%E4%B8%8D%E5%85%81%E8%AE%B8%E5%9C%A8template%E4%B8%AD%E5%87%BA%E7%8E%B0%E8%A7%A3%E6%9E%90%E9%94%99%E8%AF%AFdisallow-parsing-errors-in-template)
  - [2.5	不允许重写保留的关键字(disallow overwriting reserved keys)](#25%09%E4%B8%8D%E5%85%81%E8%AE%B8%E9%87%8D%E5%86%99%E4%BF%9D%E7%95%99%E7%9A%84%E5%85%B3%E9%94%AE%E5%AD%97disallow-overwriting-reserved-keys)
  - [2.6	将组件的数据属性强制为函数(enforce component's data property to be a function)](#26%09%E5%B0%86%E7%BB%84%E4%BB%B6%E7%9A%84%E6%95%B0%E6%8D%AE%E5%B1%9E%E6%80%A7%E5%BC%BA%E5%88%B6%E4%B8%BA%E5%87%BD%E6%95%B0enforce-components-data-property-to-be-a-function)
  - [2.7	计算属性中的不允许副作用(disallow side effects in computed properties)](#27%09%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%AD%E7%9A%84%E4%B8%8D%E5%85%81%E8%AE%B8%E5%89%AF%E4%BD%9C%E7%94%A8disallow-side-effects-in-computed-properties)
  - [2.8	不允许```<Template>```上的key属性](#28%09%E4%B8%8D%E5%85%81%E8%AE%B8template%E4%B8%8A%E7%9A%84key%E5%B1%9E%E6%80%A7)
  - [2.9	禁止使用```<textrea>```中的胡子(disallow mustaches in ```<textarea>```)](#29%09%E7%A6%81%E6%AD%A2%E4%BD%BF%E7%94%A8textrea%E4%B8%AD%E7%9A%84%E8%83%A1%E5%AD%90disallow-mustaches-in-textarea)
  - [2.10	不允许注册模板中未使用的组件。(disallow registering components that are not used inside templates)](#210%09%E4%B8%8D%E5%85%81%E8%AE%B8%E6%B3%A8%E5%86%8C%E6%A8%A1%E6%9D%BF%E4%B8%AD%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E7%BB%84%E4%BB%B6disallow-registering-components-that-are-not-used-inside-templates)
  - [2.11	不允许未使用的v-for指令或作用域属性的变量定义(disallow unused variable definitions of v-for directives or scope attributes)](#211%09%E4%B8%8D%E5%85%81%E8%AE%B8%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84v-for%E6%8C%87%E4%BB%A4%E6%88%96%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%98%E9%87%8F%E5%AE%9A%E4%B9%89disallow-unused-variable-definitions-of-v-for-directives-or-scope-attributes)
  - [2.12	不允许使用v-if在与v-for相同的元素上(sallow use v-if on the same element as v-for)](#212%09%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BD%BF%E7%94%A8v-if%E5%9C%A8%E4%B8%8Ev-for%E7%9B%B8%E5%90%8C%E7%9A%84%E5%85%83%E7%B4%A0%E4%B8%8Asallow-use-v-if-on-the-same-element-as-v-for)
  - [2.13	要求v-bing:is属于```<component>```元素的(require v-bind:is of ```<component>``` elements)](#213%09%E8%A6%81%E6%B1%82v-bingis%E5%B1%9E%E4%BA%8Ecomponent%E5%85%83%E7%B4%A0%E7%9A%84require-v-bindis-of-component-elements)
  - [2.14	要求prop类型为构造函数(require prop type to be a constructor)](#214%09%E8%A6%81%E6%B1%82prop%E7%B1%BB%E5%9E%8B%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0require-prop-type-to-be-a-constructor)
  - [2.15	强制render函数总是返回一个值(enforce render function to always return value)](#215%09%E5%BC%BA%E5%88%B6render%E5%87%BD%E6%95%B0%E6%80%BB%E6%98%AF%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E5%80%BCenforce-render-function-to-always-return-value)
  - [2.16	要求v-for指令v-bind:key(require v-bind:key with v-for directives)](#216%09%E8%A6%81%E6%B1%82v-for%E6%8C%87%E4%BB%A4v-bindkeyrequire-v-bindkey-with-v-for-directives)
  - [2.17	将props默认值强制执行为有效(enforce props default values to be valid)](#217%09%E5%B0%86props%E9%BB%98%E8%AE%A4%E5%80%BC%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E4%B8%BA%E6%9C%89%E6%95%88enforce-props-default-values-to-be-valid)
  - [2.18	强制在计算属性中存在返回语句。(enforce that a return statement is present in computed property)](#218%09%E5%BC%BA%E5%88%B6%E5%9C%A8%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%AD%E5%AD%98%E5%9C%A8%E8%BF%94%E5%9B%9E%E8%AF%AD%E5%8F%A5enforce-that-a-return-statement-is-present-in-computed-property)
  - [2.19	强制有效的模板根(enforce valid template root)](#219%09%E5%BC%BA%E5%88%B6%E6%9C%89%E6%95%88%E7%9A%84%E6%A8%A1%E6%9D%BF%E6%A0%B9enforce-valid-template-root)
  - [2.20	强制执行有效的v-bing指令(enforce valid v-bind directives)](#220%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-bing%E6%8C%87%E4%BB%A4enforce-valid-v-bind-directives)
  - [2.21	强制执行有效的v-cloak指令(enforce valid v-cloak directives)](#221%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-cloak%E6%8C%87%E4%BB%A4enforce-valid-v-cloak-directives)
  - [2.22	强制执行有效的v-else-if指令(enforce valid v-else-if directives)](#222%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-else-if%E6%8C%87%E4%BB%A4enforce-valid-v-else-if-directives)
  - [2.23	强制执行有效的v-else指令(enforce valid v-else directives)](#223%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-else%E6%8C%87%E4%BB%A4enforce-valid-v-else-directives)
  - [2.24	强制执行有效的v-for指令(enforce valid v-for directives)](#224%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-for%E6%8C%87%E4%BB%A4enforce-valid-v-for-directives)
  - [2.25	强制执行有效的v-html指令(enforce valid v-html directives)](#225%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-html%E6%8C%87%E4%BB%A4enforce-valid-v-html-directives)
  - [2.26	强制执行有效的v-if指令(enforce valid v-if directives )](#226%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-if%E6%8C%87%E4%BB%A4enforce-valid-v-if-directives-)
  - [2.27	强制执行邮箱的v-model指令(enforce valid v-model directives)](#227%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E9%82%AE%E7%AE%B1%E7%9A%84v-model%E6%8C%87%E4%BB%A4enforce-valid-v-model-directives)
  - [2.28	强制执行有效的v-on指令(enforce valid v-on directives)](#228%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-on%E6%8C%87%E4%BB%A4enforce-valid-v-on-directives)
  - [2.29	强制执行有效的v-once指令(enforce valid v-once directives)](#229%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-once%E6%8C%87%E4%BB%A4enforce-valid-v-once-directives)
  - [2.30	强制执行有效的v-pre指令(enforce valid v-pre directives)](#230%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-pre%E6%8C%87%E4%BB%A4enforce-valid-v-pre-directives)
  - [2.31	强制执行有效的v-show指令(enforce valid v-show directives)](#231%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-show%E6%8C%87%E4%BB%A4enforce-valid-v-show-directives)
  - [2.32	强制执行有效的v-text指令(enforce valid v-text directives)](#232%09%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%E6%9C%89%E6%95%88%E7%9A%84v-text%E6%8C%87%E4%BB%A4enforce-valid-v-text-directives)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 1	规范(默认)
[https://cn.eslint.org/docs/rules/]()

### 1.1	所有字符串一律使用单引号；
### 1.2	每个层级继承上一级缩进连个空格
注：因各编辑器使用的缩进不一样，所以需调整编辑器的缩进方式，缩进不能使用tab必须使用空格，在idea中script标签的第一级也缩进的两个空格，这种方式是错误的。
 
 

设置编辑器的缩进规则：
(Ctrl+alt+s或File->settings)->Editor->Code Style->HTML
在Do not indent children of中添加script。
 
### 1.3	函数圆括号前后需有一个空格
Idea编辑器格式化需修改(Ctrl+alt+s或File->settings)->Editor->Code Style->JavaScript
 
### 1.4	注释符后必须跟一个空格
例：
```javascript
// 注释1

/* 注释2 */

/*
 * 注释3
 */

/*
注释4
*/
```
### 1.5	禁止出现未使用过的变量和函数
### 1.6	禁止使用==，要求使用===和!==来代替
### 1.7	对象的value前需加一个空格
### 1.8	对象或数组的最后一个值后面不要加逗号
### 1.9	箭头函数前后需要有空格

例：
```javascript
() => {}
```

### 1.10	中缀符前后都需加空格
### 1.11	不允许出现多个连续空行
### 1.12	变量，方法名需使用驼峰原则
### 1.13	不允许省略大括号
### 1.14	禁止出现多个连续的空格
### 1.15	禁止使用tab
### 1.16	变量声明等号前后需有空格
### 1.17	Vue for循环时必须bing key
例：
```javascript
var datas = [
  {
  key: 1,
  value: ‘aa’
},
{
  key: 2,
  value: ‘bb’
}
];
```
正确：

```html
<a v-for=”data in datas” :key=”data.key”></a>
```

错误：
```html
<a v-for=”data in datas” ></a>
```

### 1.18	语句块前需有一个空格
### 1.19	禁止与 -0 进行比较
### 1.20	禁止在条件语句中出现赋值操作符
### 1.21	禁止在条件中使用常量表达式
### 1.22	在同一块中禁止重新声明变量 
### 1.23	连续的变量声明需要只能有一个变量声明
### 1.24	每个对象，区块后都需要加分号(;)
### 1.25	禁止空块语句,但允许空的catch块
### 1.26	禁止在正则表达式中出现空字符集
### 1.27	禁止在正则表达式中使用控制字符
### 1.28	强制在 getter 属性中出现一个 return 语句
### 1.29	强制 “for” 循环中更新子句的计数器朝着正确的方向移动
### 1.30	禁止在循环中 出现 await
### 1.31	禁止在条件中使用常量表达式
### 1.32	禁止在对象字面量中出现重复的键
### 1.33	禁止重复 case 标签
### 1.34	禁止对 catch 子句的参数重新赋值
### 1.35	禁止function中出现重复的参数
### 1.36	禁止使用不必要的布尔类型转换
### 1.37	禁止正则表达式字面量中出现多个空格
### 1.38	禁用稀疏数组
例：

```javascript
var a = [1,,2];
```
### 1.39	禁止在常规字符串中出现模板字面量占位符语法
例：
错误：

```javascript
"Hello ${name}!";
'Hello ${name}!';
"Time: ${12 * 60 * 60 * 1000}";
```

正确：

```javascript
Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;
```


### 1.40	禁止使用令人困惑的多行表达式
### 1.41	禁止在 return、throw、continue 和 break 语句后出现不可达代码
### 1.42	禁止在 finally 语句块中出现控制流语句
### 1.43	禁止对关系运算符的左操作数使用否定操作符
### 1.44	要求调用 isNaN()检查 NaN
### 1.45	强制 typeof 表达式与有效的字符串进行比较
### 1.46	强制所有控制语句都使用{}
例：
```javascript
var a = 1;
```
正确:
```javascript
if (a === 1) {
    console.log();
  }
```
错误：
```javascript
if (a === 1) console.log();
```
### 1.47	禁止出现空函数
### 1.48	禁用隐式的eval()
### 1.49	禁止重新声明变量
### 1.50	禁止在返回语句中赋值  reutrn a = 1 + 2,允许使用return (a = 1 + 2)
### 1.51	禁止自身赋值
例：
错误：
```javascript
var a = 1;
  a = a;
```
正确：
```javascript
var a = 1;
  a = a + 1;
```
### 1.52	禁止自身比较
例：
```javascript
var a = 1;
if (a === a) {
    console.log(a);
}
```
### 1.53	限制可以被抛出的异常 (no-throw-literal)，抛出的异常必须是Error对象
例：

错误：

```javascript
throw "error";

throw 0;

throw undefined;

throw null;

var err = new Error();
throw "an " + err;
// err is recast to a string literal

var err = new Error();
throw `${err}`
```


正确：

```javascript
throw new Error();

throw new Error("error");

var e = new Error("error");
throw e;

try {
    throw new Error("error");
} catch (e) {
    throw e;
}

```
### 1.54	禁用一成不变的循环条件
错误 代码示例：

```javascript
while (node) {
    doSomething(node);
}
node = other;

for (var j = 0; j < items.length; ++i) {
    doSomething(items[j]);
}

while (node !== root) {
    doSomething(node);
}
```

正确 代码示例：

```javascript
while (node) {
    doSomething(node);
    node = node.parent;
}

for (var j = 0; j < items.length; ++j) {
    doSomething(items[j]);
}

// OK, the result of this binary expression is changed in this loop.
while (node !== root) {
    doSomething(node);
    node = node.parent;
}

// OK, the result of this ternary expression is changed in this loop.
while (node ? A : B) {
    doSomething(node);
    node = node.parent;
}

// A property might be a getter which has side effect...
// Or "doSomething" can modify "obj.foo".
while (obj.foo) {
    doSomething(obj);
}

// A function call can return various values.
while (check(obj)) {
    doSomething(obj);
}
```

### 1.55	禁止没有必要的字符拼接
错误 代码示例：

```javascript
/*eslint no-useless-concat: "error"*/
/*eslint-env es6*/

// these are the same as "10"
var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;
```
正确 代码示例：

```javascript
/*eslint no-useless-concat: "error"*/

// when a non string is included
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
// when the string concatenation is multiline
var c = "foo" +
    "bar";
```

### 1.56	禁用不必要的转义
错误 代码示例：

```javascript
/*eslint no-useless-escape: "error"*/

"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
```

正确 代码示例：

```javascript
/*eslint no-useless-escape: "error"*/

"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}}`;
`$\{${foo}}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;
```

### 1.57	禁止删除变量
错误 代码示例：

```javascript
/*eslint no-delete-var: "error"*/

var x;
delete x;
```

### 1.58	禁用未声明的变量
错误 代码示例：

```javascript
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
```

有 global 声明时，该规则的 正确 代码示例：

```javascript
/*global someFunction b:true*/
/*eslint no-undef: "error"*/

var a = someFunction();
b = 10;
```
/*global */ 中的 b:true 表明对 b 继续赋值是正确的。

有 global 声明时，该规则的 错误 代码示例：

```javascript
/*global b*/
/*eslint no-undef: "error"*/

b = 10;
```
默认情况下，/*global */ 中声明的变量是只读的，因此对其进行赋值是错误的。

### 1.59	禁止未使用过的变量

```javascript
/*eslint no-unused-vars: "error"*/
/*global some_unused_var*/

// It checks variables you have defined as global
some_unused_var = 42;

var x;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// By default, unused arguments cause warnings.
(function(foo) {
    return 5;
})();

// Unused recursive functions also cause warnings.
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}

// When a function definition destructures an array, unused entries from the array also cause warnings.
function getY([x, y]) {
    return y;
}
```

正确 代码示例：

```javascript
/*eslint no-unused-vars: "error"*/

var x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
    // ...
}.bind(this));

(function(foo) {
    return foo;
})();

var myFunc;
myFunc = setTimeout(function() {
    // myFunc is considered used
    myFunc();
}, 50);

// Only the second argument from the descructured array is used.
function getY([, y]) {
    return y;
}
```

### 1.60	要求使用骆驼拼写法
### 1.61	要求或禁止使用拖尾逗号
认选项 "never" 的 错误 代码示例：

```javascript
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var arr = [1,2,];

foo({
  bar: "baz",
  qux: "quux",
});



```

默认选项 "never" 的 正确 代码示例：

```javascript
/*eslint comma-dangle: ["error", "never"]*/

var foo = {
    bar: "baz",
    qux: "quux"
};

var arr = [1,2];

foo({
  bar: "baz",
  qux: "quux"
});
```

### 1.62	强制在逗号周围使用空格

默认选项 { "before": false, "after": true } 的 错误 代码示例：

```javascript
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/

var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

默认选项 { "before": false, "after": true } 的 正确 代码示例：

```javascript
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/

var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var arr = [1,, 3]
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

当用空元素进行初始化时，默认选项 { "before": false, "after": true } 的 正确 代码示例：

```javascript
/*eslint comma-spacing: ["error", { "before": false, "after": true }]*/
/*eslint array-bracket-spacing: ["error", "always"]*/

var arr = [ , 2, 3 ]
```

### 1.63	逗号风格
默认选项 "last" 的 错误 代码示例：

```javascript
/*eslint comma-style: ["error", "last"]*/

var foo = 1
,
bar = 2;

var foo = 1
  , bar = 2;


var foo = ["apples"
           , "oranges"];

function bar() {
    return {
        "a": 1
        ,"b:": 2
    };
}
```

默认选项 "last" 的 正确 代码示例：

```javascript
/*eslint comma-style: ["error", "last"]*/

var foo = 1, bar = 2;

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

### 1.64	禁止或强制在计算属性中使用空格
默认选项 "never" 的 错误 代码示例：

```javascript
/*eslint computed-property-spacing: ["error", "never"]*/
/*eslint-env es6*/

obj[foo ]
obj[ 'foo']
var x = {[ b ]: a}
obj[foo[ bar ]]
默认选项 "never" 的 正确 代码示例：
/*eslint computed-property-spacing: ["error", "never"]*/
/*eslint-env es6*/

obj[foo]
obj['foo']
var x = {[b]: a}
obj[foo[bar]]
```

### 1.65	要求或禁止在函数标识符和其调用之间有空格
默认选项 "never" 的 错误 代码示例：

```javascript
/*eslint func-call-spacing: ["error", "never"]*/

fn ();

fn
();
```

默认选项 "never" 的 正确 代码示例：

```javascript
/*eslint func-call-spacing: ["error", "never"]*/

fn();

```

### 1.66	强制隐式返回的箭头函数体的位置
默认选项 "beside" 的 错误 代码示例：

```javascript
/* eslint implicit-arrow-linebreak: ["error", "beside"] */

(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;

(foo) =>
(
  bar()
);
```

默认选项 "beside" 的 正确 代码示例：

```javascript
/* eslint implicit-arrow-linebreak: ["error", "beside"] */

(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;

(foo) => (
  bar()
);

// functions with block bodies allowed with this rule using any style
// to enforce a consistent location for this case, see the rule: `brace-style`
(foo) => {
  return bar();
}

(foo) =>
{
  return bar();
}
```

### 1.67	强制在对象字面量的键和值之间使用一致的空格
默认选项 { "beforeColon": false } 的 错误 代码示例：

```javascript
/*eslint key-spacing: ["error", { "beforeColon": false }]*/

var obj = { "foo" : 42 };
```

默认选项 { "beforeColon": false } 的 正确 代码示例：

```javascript
/*eslint key-spacing: ["error", { "beforeColon": false }]*/

var obj = { "foo": 42 };
```

### 1.68	强制关键字周围空格的一致性
默认选项 { "before": true } 的 错误 代码示例：

```javascript
/*eslint keyword-spacing: ["error", { "before": true }]*/

if (foo) {
    //...
}else if (bar) {
    //...
}else {
    //...
}
```


默认选项 { "before": true } 的 正确 代码示例：

```javascript
/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

// Avoid conflict with `array-bracket-spacing`
let a = [this];
let b = [function() {}];

// Avoid conflict with `arrow-spacing`
let a = ()=> this.foo;

// Avoid conflict with `block-spacing`
{function foo() {}}

// Avoid conflict with `comma-spacing`
let a = [100,this.foo, this.bar];

// Avoid conflict with `computed-property-spacing`
obj[this.foo] = 0;

// Avoid conflict with `generator-star-spacing`
function *foo() {}

// Avoid conflict with `key-spacing`
let obj = {
    foo:function() {}
};

// Avoid conflict with `object-curly-spacing`
let obj = {foo: this};

// Avoid conflict with `semi-spacing`
let a = this;function foo() {}

// Avoid conflict with `space-in-parens`
(function () {})();

// Avoid conflict with `space-infix-ops`
if ("foo"in {foo: 0}) {}
if (10+this.foo<= this.bar) {}

// Avoid conflict with `jsx-curly-spacing`
let a = <A foo={this.foo} bar={function(){}} />
```

### 1.69	禁止使用 空格 和 tab 混合缩进
### 1.70	禁止属性前有空白
错误 代码示例：

```javascript
/*eslint no-whitespace-before-property: "error"*/

foo [bar]

foo. bar

foo .bar

foo. bar. baz

foo. bar()
  .baz()

foo
  .bar(). baz()
```

正确 代码示例：

```javascript
/*eslint no-whitespace-before-property: "error"*/

foo.bar

foo[bar]

foo[ bar ]

foo.bar.baz

foo
  .bar().baz()

foo
  .bar()
  .baz()

foo.
  bar().
  baz()

```
### 1.71	要求或禁止块内填充
默认选项 "always" 的 错误 代码示例：

```javascript
/*eslint padded-blocks: ["error", "always"]*/

if (a) {
    b();
}

if (a) { b(); }

if (a)
{
    b();
}

if (a) {

    b();
}

if (a) {
    b();

}

if (a) {
    // comment
    b();

}
```

默认选项 "always" 的 正确 代码示例：

```javascript
/*eslint padded-blocks: ["error", "always"]*/

if (a) {

    b();

}

if (a)
{

    b();

}

if (a) {

    // comment
    b();

}
```

### 1.72	强制分号前后有空格 (semi-spacing),分号前没有空格
错误 代码示例：

```javascript
/*eslint semi-spacing: "error"*/

var foo ;
var foo;var bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}
```

正确 代码示例：

```javascript
/*eslint semi-spacing: "error"*/

var foo;
var foo; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
for (;;) {}
if (true) {;}
;foo();
```

### 1.73	强制分号的位置
选项 "last" 的 错误 代码示例：

```javascript
/*eslint semi-style: ["error", "last"]*/

foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}
```

选项 "last" 的 正确 代码示例：

```javascript
/*eslint semi-style: ["error", "last"]*/

foo();
[1, 2, 3].forEach(bar)

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo()
}
```


### 1.74	要求或禁止语句块之前的空格
选项 "always" 的 错误 代码示例：

```javascript
/*eslint space-before-blocks: "error"*/

if (a){
    b();
}

function a(){}

for (;;){
    b();
}

try {} catch(a){}

class Foo{
  constructor(){}
}
```

选项 "always" 的 正确 代码示例：

```javascript
/*eslint space-before-blocks: "error"*/

if (a) {
    b();
}

if (a) {
    b();
} else{ /*no error. this is checked by `keyword-spacing` rule.*/
    c();
}


function a() {}

for (;;) {
    b();
}

try {} catch(a) {}
```

### 1.75	禁止圆括号内的空格
选项 "never" 的 错误 代码示例：

```javascript
/*eslint space-in-parens: ["error", "never"]*/

foo( 'bar');
foo('bar' );
foo( 'bar' );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

选项 "never" 的 正确 代码示例：

```javascript
/*eslint space-in-parens: ["error", "never"]*/

foo();

foo('bar');

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

### 1.76	要求中缀操作符周围有空格
错误 代码示例：

```javascript
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a+b

a+ b

a +b

a?b:c

const a={b:1};

var {a=0}=bar;

function foo(a=0) { }
```

正确 代码示例：

```javascript
/*eslint space-infix-ops: "error"*/
/*eslint-env es6*/

a + b

a       + b

a ? b : c

const a = {b:1};

var {a = 0} = bar;

function foo(a = 0) { }
```


### 1.77	要求在一元操作符之前或之后存在空格
### 1.78	禁止重复导入
### 1.79	禁止对 function 声明重新赋值
错误 代码示例：

```javascript
/*eslint no-func-assign: "error"*/

function foo() {}
foo = bar;

function foo() {
    foo = bar;
}
```

与 JSHint 中对应的规则不同，该规则的 错误 代码示例：

```javascript
/*eslint no-func-assign: "error"*/

foo = bar;
function foo() {}
```

正确 代码示例：

```javascript
/*eslint no-func-assign: "error"*/

var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
    foo = bar;
}

function foo() {
    var foo = bar;  // `foo` is shadowed.
}
```


### 1.80	禁止不必要的分号
错误 代码示例：

```javascript
/*eslint no-extra-semi: "error"*/

var x = 5;;

function foo() {
    // code
};
```


正确 代码示例：

```javascript
/*eslint no-extra-semi: "error"*/

var x = 5;

var foo = function() {
    // code
};
```

### 1.81	禁止在嵌套的语句块中出现变量或 function 声明
默认选项 "functions" 的 错误 代码示例：

```javascript
/*eslint no-inner-declarations: "error"*/

if (test) {
    function doSomething() { }
}

function doSomethingElse() {
    if (test) {
        function doAnotherThing() { }
    }
}
```

默认选项 "functions" 的 正确 代码示例：

```javascript
/*eslint no-inner-declarations: "error"*/

function doSomething() { }

function doSomethingElse() {
    function doAnotherThing() { }
}

if (test) {
    asyncCall(id, function (err, data) { });
}

var fn;
if (test) {
    fn = function fnExpression() { };
}
```

### 1.82	禁止不规则的空白
 + 该规则旨在捕获无效的不是正常的tab和空格的空白。这些字符有的会在现代浏览器中引发问题，其它的会引起调试问题。
 + 该规则禁止出现以下字符，除非该规则选项允许：

```html
\u000B - Line Tabulation (\v) - <VT>
\u000C - Form Feed (\f) - <FF>
\u00A0 - No-Break Space - <NBSP>
\u0085 - Next Line
\u1680 - Ogham Space Mark
\u180E - Mongolian Vowel Separator - <MVS>
\ufeff - Zero Width No-Break Space - <BOM>
\u2000 - En Quad
\u2001 - Em Quad
\u2002 - En Space - <ENSP>
\u2003 - Em Space - <EMSP>
\u2004 - Tree-Per-Em
\u2005 - Four-Per-Em
\u2006 - Six-Per-Em
\u2007 - Figure Space
\u2008 - Punctuation Space - <PUNCSP>
\u2009 - Thin Space
\u200A - Hair Space
\u200B - Zero Width Space - <ZWSP>
\u2028 - Line Separator
\u2029 - Paragraph Separator
\u202F - Narrow No-Break Space
\u205f - Medium Mathematical Space
\u3000 - Ideographic Space
```

默认选项 { "skipStrings": true } 的 错误 代码示例：

```javascript
/*eslint no-irregular-whitespace: "error"*/

function thing() /*<NBSP>*/{
    return 'test';
}

function thing( /*<NBSP>*/){
    return 'test';
}

function thing /*<NBSP>*/(){
    return 'test';
}

function thing᠎/*<MVS>*/(){
    return 'test';
}

function thing() {
    return 'test'; /*<ENSP>*/
}

function thing() {
    return 'test'; /*<NBSP>*/
}

function thing() {
    // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

function thing() {
    return / <NBSP>regexp/;
}

/*eslint-env es6*/
function thing() {
    return `template <NBSP>string`;
}
```

默认选项 { "skipStrings": true } 正确 代码示例：

```javascript
/*eslint no-irregular-whitespace: "error"*/

function thing() {
    return ' <NBSP>thing';
}

function thing() {
    return '<ZWSP>thing';
}

function thing() {
    return 'th <NBSP>ing';
}
```

### 1.83	禁止将全局对象当作函数进行调用

该规则禁止将 Math、JSON 和 Reflect 对象当作函数进行调用。

错误 代码示例：

```javascript
/*eslint no-obj-calls: "error"*/

var math = Math();
var json = JSON();
var reflect = Reflect();
```

正确 代码示例：

```javascript
/*eslint no-obj-calls: "error"*/

function area(r) {
    return Math.PI * r * r;
}
var object = JSON.parse("{}");
var value = Reflect.get({ x: 1, y: 2 }, "x");
```


### 1.84	禁止 case 语句落空
错误 代码示例：

```javascript
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomething();
}
```

正确 代码示例：

```javascript
/*eslint no-fallthrough: "error"*/

switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomething();
}
```


注意，在上面的例子中，最后的 case 语句，不会引起警告，因为没有可落空的语句了。

### 1.85	禁止对原生对象或只读的全局对象进行赋值
错误 代码示例：

```javascript
/*eslint no-global-assign: "error"*/

Object = null
undefined = 1
/*eslint no-global-assign: "error"*/
/*eslint-env browser*/

window = {}
length = 1
top = 1
/*eslint no-global-assign: "error"*/
/*globals a:false*/

a = 1
```

正确 示例：

```javascript
/*eslint no-global-assign: "error"*/

a = 1
var b = 1
b = 2
/*eslint no-global-assign: "error"*/
/*eslint-env browser*/

onload = function() {}
/*eslint no-global-assign: "error"*/
/*globals a:true*/

a = 1
```


### 1.86	禁用八进制字面量
错误 代码示例：

```javascript
/*eslint no-octal: "error"*/

var num = 071;
var result = 5 + 07;
正确 代码示例：
/*eslint no-octal: "error"*/

var num  = "071";
```


### 1.87	禁用未使用过的标签
错误 代码示例：

```javascript
/*eslint no-unused-labels: "error"*/

A: var foo = 0;

B: {
    foo();
}

C:
for (let i = 0; i < 10; ++i) {
    foo();
}
```

正确 代码示例：

```javascript
/*eslint no-unused-labels: "error"*/

A: {
    if (foo()) {
        break A;
    }
    bar();
}

B:
for (let i = 0; i < 10; ++i) {
    if (foo()) {
        break B;
    }
    bar();
}
```


### 1.88	不允许修改类声明的变量
错误 代码示例：

```javascript
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

class A { }
A = 0;
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

A = 0;
class A { }
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

class A {
    b() {
        A = 0;
    }
}
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

let A = class A {
    b() {
        A = 0;
        // `let A` is shadowed by the class name.
    }
}
```

正确 代码示例：

```javascript
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

let A = class A { }
A = 0; // A is a variable.
/*eslint no-class-assign: "error"*/
/*eslint-env es6*/

let A = class {
    b() {
        A = 0; // A is a variable.
    }
}
/*eslint no-class-assign: 2*/
/*eslint-env es6*/

class A {
    b(A) {
        A = 0; // A is a parameter.
    }
}

```

### 1.89	不允许改变用const声明的变量
错误 代码示例：

```javascript
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a = 1;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
a += 1;
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
++a;
```

正确 代码示例：

```javascript
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const a = 0;
console.log(a);
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a in [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

for (const a of [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
    console.log(a);
}
```


### 1.90	在构造函数中禁止在调用super()之前使用this或super
错误 代码示例：

```javascript
/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A extends B {
    constructor() {
        this.a = 0;
        super();
    }
}

class A extends B {
    constructor() {
        this.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super(this.foo());
    }
}
```

正确 代码示例：

```javascript
/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A {
    constructor() {
        this.a = 0; // OK, this class doesn't have an `extends` clause.
    }
}

class A extends B {
    constructor() {
        super();
        this.a = 0; // OK, this is after `super()`.
    }
}

class A extends B {
    foo() {
        this.a = 0; // OK. this is not in a constructor.
    }
}
```


### 1.91	禁用函数内没有yield的 generator 函数
错误 代码示例：

```javascript
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  return 10;
}
```

正确 代码示例：

```javascript
/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() { }
```


## 2	Vue规范

[https://github.com/vuejs/eslint-plugin-vue]()

### 2.1	不允许计算属性中的异步操作(disallow asynchronous actions in computed properties)
此规则旨在防止异步方法在计算属性中被调用。
  Examples of incorrect code for this rule:

```javascript
computed: {
  pro () {
    return Promise.all([new Promise((resolve, reject) => {})])
  },
  foo: async function () {
    return await someFunc()
  },
  bar () {
    return fetch(url).then(response => {})
  },
  tim () {
    setTimeout(() => { }, 0)
  },
  inter () {
    setInterval(() => { }, 0)
  },
  anim () {
    requestAnimationFrame(() => {})
  }
}
```
  Examples of correct code for this rule:

```javascript
computed: {
  foo () {
    var bar = 0
    try {
      bar = bar / this.a
    } catch (e) {
      return 0
    } finally {
      return bar
    }
  }
}
```

### 2.2	不允许重复字段名(disallow duplication of field names)
This rule is aimed at preventing duplicated property names.
  Examples of incorrect code for this rule:

```javascript
export default {
  props: {
    foo: String
  },
  computed: {
    foo: {
      get () {}
    }
  },
  data: {
    foo: null
  },
  methods: {
    foo () {}
  }
}
```

  Examples of correct code for this rule:

```javascript
export default {
  props: ['foo'],
  computed: {
    bar () {}
  },
  data () {
    return {
      baz: null
    }
  },
  methods: {
    boo () {}
  }
}
```

### 2.3	不允许重复属性(disallow duplication of attributes)
This rule reports duplicate attributes. v-bind:foo directives are handled as the attributes foo.
  Examples of incorrect code for this rule:

```html
<MyComponent
  :foo="def"
  foo="abc"
/>
```

  Examples of correct code for this rule:

```html
<MyComponent :foo="abc"/>
<MyComponent foo="abc"/>
```

### 2.4	不允许在```<Template>```中出现解析错误(disallow parsing errors in ```<Template>```)
This rule tries to parse directives/mustaches in ```<template>``` by the parser which parses ```<script>```. Then reports syntax errors if exist.
  Examples of incorrect code for this rule:

```javascript
{{ . }}
{{ foo. }}
  Examples of correct code for this rule:
{{ foo }}
{{ foo.bar }}
```

### 2.5	不允许重写保留的关键字(disallow overwriting reserved keys)
  Examples of incorrect code for this rule:

```javascript
export default {
  props: {
    $el: String
  },
  computed: {
    $on: {
      get () {}
    }
  },
  data: {
    _foo: null
  },
  methods: {
    $nextTick () {}
  }
}
```

### 2.6	将组件的数据属性强制为函数(enforce component's data property to be a function)
When the value of data is an object, it’s shared across all instances of a component.
  Examples of incorrect code for this rule:

```javascript
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})
export default {
  data: {
    foo: 'bar'
  }
})
  Examples of correct code for this rule:
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

### 2.7	计算属性中的不允许副作用(disallow side effects in computed properties)
Examples of incorrect code for this rule:

```javascript
computed: {
  fullName () {
    this.firstName = 'lorem' // <- side effect
    return `${this.firstName} ${this.lastName}`
  },
  reversedArray () {
    return this.array.reverse() // <- side effect - orginal array is being mutated
  }
}
```
Examples of correct code for this rule:

```javascript
computed: {
  fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  reversedArray () {
    return this.array.slice(0).reverse() // .slice makes a copy of the array, instead of mutating the orginal
  }
}
```

### 2.8	不允许```<Template>```上的key属性
This rule reports the ```<template>``` elements which have key attribute.
  Examples of incorrect code for this rule:

```html
<template key="foo"> ... </template>
<template v-bind:key="bar"> ... </template>
<template :key="baz"> ... </template>
  Examples of correct code for this rule:
<div key="foo"> ... </div>
<template> ... </template>
```

### 2.9	禁止使用```<textrea>```中的胡子(disallow mustaches in ```<textarea>```)
This rule reports mustaches in ```<textarea>```.
  Examples of incorrect code for this rule:

```html
<textarea>{{ message }}</textarea>
  Examples of correct code for this rule:
<textarea v-model="message"/>
```

### 2.10	不允许注册模板中未使用的组件。(disallow registering components that are not used inside templates)
  Examples of incorrect code for this rule:

```html
<template>
  <div>
    <h2>Lorem ipsum</h2>
    <TheModal />
  </div>
</template>

<script>
  import TheButton from 'components/TheButton.vue'
  import TheModal from 'components/TheModal.vue'

  export default {
    components: {
      TheButton // Unused component
      'the-modal': TheModal // Unused component
    }
  }
</script>
```

Note that components registered under other than PascalCase name have to be called directly under the specified name, whereas if you register it using PascalCase you can call it however you like, except using snake_case.

  Examples of correct code for this rule:

```html
<template>
  <div>
    <h2>Lorem ipsum</h2>
    <the-modal>
      <component is="TheInput" />
      <component :is="'TheDropdown'" />
      <TheButton>CTA</TheButton>
    </the-modal>
  </div>
</template>

<script>
  import TheButton from 'components/TheButton.vue'
  import TheModal from 'components/TheModal.vue'
  import TheInput from 'components/TheInput.vue'
  import TheDropdown from 'components/TheDropdown.vue'

  export default {
    components: {
      TheButton,
      TheModal,
      TheInput,
      TheDropdown,
    }
  }
</script>
```

### 2.11	不允许未使用的v-for指令或作用域属性的变量定义(disallow unused variable definitions of v-for directives or scope attributes)
  Examples of incorrect code for this rule:

```html
<template>
  <ol v-for="i in 5"><!-- "i" is defined but never used. -->
    <li>item</li>
  </ol>
</template>
```

  Examples of correct code for this rule:

  ```html
<template>
  <ol v-for="i in 5">
    <li>{{i}}</li><!-- "i" is defined and used. -->
  </ol>
</template>
```

### 2.12	不允许使用v-if在与v-for相同的元素上(sallow use v-if on the same element as v-for)
  Examples of incorrect code for this rule:

```html
<TodoItem
  v-if="complete"
  v-for="todo in todos"
  :todo="todo"
/>
```
In this case, the v-if should be written on the wrapper element.

```html
<TodoItem
  v-for="todo in todos"
  v-if="todo.shown"
  :todo="todo"
/>
```

In this case, the v-for list variable should be replace with a computed property that returns your filtered list.
  Examples of correct code for this rule:

```html
<ul v-if="complete">
  <TodoItem
    v-for="todo in todos"
    :todo="todo"
  />
</ul>
<TodoItem
  v-for="todo in shownTodos"
  :todo="todo"
/>
<script>
    computed: {
        shownTodos() {
            return this.todos.filter((todo) => todo.shown)
        }
    }
</script>
```

### 2.13	要求v-bing:is属于```<component>```元素的(require v-bind:is of ```<component>``` elements)
This rule reports the ```<component>``` elements which do not have v-bind:is attributes.
  Examples of incorrect code for this rule:

```html
<component/>
<component is="type"/>
  Examples of correct code for this rule:
<component :is="type"/>
<component v-bind:is="type"/>
```

### 2.14	要求prop类型为构造函数(require prop type to be a constructor)
Examples of incorrect code for this rule:

```javascript
export default {
  props: {
    myProp: "Number",
    anotherProp: ["Number", "String"],
    myFieldWithBadType: {
      type: "Object",
      default: function() {
        return {}
      },
    },
    myOtherFieldWithBadType: {
      type: "Number",
      default: 1,
    },
  }
}
```

Examples of correct code for this rule:

```javascript
export default {
  props: {
    myProp: Number,
    anotherProp: [Number, String],
    myFieldWithBadType: {
      type: Object,
      default: function() {
        return {}
      },
    },
    myOtherFieldWithBadType: {
      type: Number,
      default: 1,
    },
  }
}
```

### 2.15	强制render函数总是返回一个值(enforce render function to always return value)
  Examples of incorrect code for this rule:

```javascript
export default {
  render () {}
}
export default {
  render (h) {
    if (foo) {
      return h('div', 'hello')
    }
  }
}
  Examples of correct code for this rule:
export default {
  render (h) {
    return h('div', 'hello')
  }
}
```

### 2.16	要求v-for指令v-bind:key(require v-bind:key with v-for directives)
This rule reports the elements which have v-for and do not have v-bind:key.
This rule does not report custom components. It will be reported by ```[valid-v-for]``` rule.
  Examples of incorrect code for this rule:

```html
<div v-for="todo in todos"/>
  Examples of correct code for this rule:
<div
  v-for="todo in todos"
  :key="todo.id"
/>
```

### 2.17	将props默认值强制执行为有效(enforce props default values to be valid)
  Examples of incorrect code for this rule:

```javascript
props: {
  propA: {
    type: String,
    default: {}
  },
  propB: {
    type: String,
    default: []
  },
  propC: {
    type: Object,
    default: []
  },
  propD: {
    type: Array,
    default: []
  },
  propE: {
    type: Object,
    default: { message: 'hello' }
  }
}
```
  Examples of correct code for this rule:

```javascript
props: {
  // basic type check (`null` means accept any type)
  propA: Number,
  // multiple possible types
  propB: [String, Number],
  // a number with default value
  propD: {
    type: Number,
    default: 100
  },
  // object/array defaults should be returned from a factory function
  propE: {
    type: Object,
    default() {
      return { message: 'hello' }
    }
  },
  propF: {
    type: Array,
    default() {
      return []
    }
  }  
}
```


### 2.18	强制在计算属性中存在返回语句。(enforce that a return statement is present in computed property)
This rule enforces that a return statement is present in computed properties.
  Examples of incorrect code for this rule:

```javascript
export default {
  computed: {
    foo () {},
    bar: function () {}
  }
}
```
  Examples of correct code for this rule:

```javascript
export default {
  computed: {
    foo () {
      return true
    },
    bar: function () {
      return false
    }
  }
}
```

### 2.19	强制有效的模板根(enforce valid template root)
This rule reports the template root in the following cases:
 +	The root is nothing. E.g. ```<template></template>```.
 +	The root is text. E.g. ```<template>hello</template>```.
 +	The root is multiple elements. E.g. ```<template><div>one</div><div>two</div></template>```.
 +	The root element has v-for directives. E.g. ```<template><div v-for="x in list"></div></template>```.
 +	The root element is ```<template> or <slot>``` elements. E.g. ```<template><template>hello</template></template>```.
  Examples of incorrect code for this rule:

```html
template: ''
<template>
</template>
template: `
  <div>hello</div>
  <div>hello</div>
`uu
<template>
  <div>hello</div>
  <div>hello</div>
</template>
template: 'abc'
<template>
  abc
</template>
template: '<div v-for="item in items"/>'
<template>
  <div v-for="item in items"/>
</template>
```

  Examples of correct code for this rule:

```html
template: '<div>abc</div>'
<template>
  <div>abc</div>
</template>
template: '<div v-if="foo">abc</div>'
<template>
  <div v-if="foo">abc</div>
</template>
template: `
  <div v-if="foo">abc</div>
  <div v-else>def</div>
`
<template>
  <div v-if="foo">abc</div>
  <div v-else>def</div>
</template>
```

### 2.20	强制执行有效的v-bing指令(enforce valid v-bind directives)
This rule reports v-bind directives in the following cases:
 +	The directive does not have that attribute value. E.g. ```<div v-bind:aaa></div>```
 +	The directive has invalid modifiers. E.g. ```<div v-bind:aaa.bbb="ccc"></div>```
 +  This rule does not report v-bind directives which do not have their argument (E.g.``` <div v-bind="aaa"></div>```) because it's valid if the attribute value is an object.
 +  This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-bind/>
<div :aaa/>
<div v-bind:aaa.bbb="foo"/>
```

  Examples of correct code for this rule:

```html
<div v-bind="foo"/>
<div v-bind:aaa="foo"/>
<div :aaa="foo"/>
<div :aaa.prop="foo"/>
```

### 2.21	强制执行有效的v-cloak指令(enforce valid v-cloak directives)
This rule reports v-cloak directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-cloak:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-cloak.bbb></div>```
 +	The directive has that attribute value. E.g. ```<div v-cloak="ccc"></div>```
  Examples of incorrect code for this rule:

```html
<div v-cloak:aaa/>
<div v-cloak.bbb/>
<div v-cloak="ccc"/>
```

  Examples of correct code for this rule:

```html
<div v-cloak/>
```

### 2.22	强制执行有效的v-else-if指令(enforce valid v-else-if directives)
This rule reports v-else-if directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-if="foo"></div><div v-else-if:aaa="bar"></div>```
 +	The directive has that modifier. E.g. ```<div v-if="foo"></div><div v-else-if.bbb="bar"></div>```
 +	The directive does not have that attribute value. E.g. ```<div v-if="foo"></div><div v-else-if></div>```
 +	The directive is on the elements that the previous element don't have v-if/v-else-if directives. E.g. ```<div v-else-if="bar"></div>```
 +	The directive is on the elements which have v-if/v-else directives. E.g. ```<div v-if="foo" v-else-if="bar"></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-else-if/>
<div v-else-if:aaa="foo"/>
<div v-else-if.bbb="foo"/>
```
  Examples of correct code for this rule:

```html
<div v-if="foo"/>
<div v-else-if="bar"/>
```

### 2.23	强制执行有效的v-else指令(enforce valid v-else directives)
This rule reports v-else directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-if="foo"></div><div v-else:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-if="foo"></div><div v-else.bbb></div>```
 +	The directive has that attribute value. E.g. ```<div v-if="foo"></div><div v-else="bar"></div>```
 +	The directive is on the elements that the previous element don't have v-if/v-if-else directives. E.g. ```<div v-else></div>```
 +	The directive is on the elements which have v-if/v-if-else directives. E.g. ```<div v-if="foo" v-else></div>```
  Examples of incorrect code for this rule:

```html
<div v-else="foo"/>
<div v-else:aaa/>
<div v-else.bbb/>
```

  Examples of correct code for this rule:

```html
<div v-if="foo"/>
<div v-else/>
```

### 2.24	强制执行有效的v-for指令(enforce valid v-for directives)
This rule reports v-for directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-for:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-for.bbb></div>```
 +	The directive does not have that attribute value. E.g. ```<div v-for></div>```
 +	If the element which has the directive is a custom component, the component does not have v-bind:key directive. E.g. ```<your-component v-for="item in list"></your-component>```
 +	The v-bind:key directive does not use the variables which are defined by the v-for directive. E.g. ```<div v-for="x in list" :key="foo"></div>```
If the element which has the directive is a reserved element, this rule does not report even if the element does not have v-bind:key directive because it's not fatal error. require-v-for-key rule reports it.
This rule does not check syntax errors in directives. no-parsing-error rule reports it. The following cases are syntax errors:
 +	The directive's value is not the form alias in expr. E.g. ```<div v-for="foo"></div>```
 +	The alias is not LHS. E.g. ```<div v-for="foo() in list"></div>```
  Examples of incorrect code for this rule:

```html
<div v-for/>
<div v-for:aaa="todo in todos"/>
<div v-for.bbb="todo in todos"/>
<div
  v-for="todo in todos"
  is="MyComponent"
/>
<MyComponent v-for="todo in todos"/>
<MyComponent
  v-for="todo in todos"
  :key="foo"
/>
```

  Examples of correct code for this rule:

```html
<div v-for="todo in todos"/>
<MyComponent
  v-for="todo in todos"
  :key="todo.id"
/>
<div
  v-for="todo in todos"
  :is="MyComponent"
  :key="todo.id"
/>
```

### 2.25	强制执行有效的v-html指令(enforce valid v-html directives)
This rule reports v-html directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-html:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-html.bbb></div>```
 +	The directive does not have that attribute value. E.g. ```<div v-html></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-html/>
<div v-html:aaa="foo"/>
<div v-html.bbb="foo"/>
```

  Examples of correct code for this rule:

```html
<div v-html="foo"/>
```

### 2.26	强制执行有效的v-if指令(enforce valid v-if directives )
This rule reports v-if directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-if:aaa="foo"></div>```
 +	The directive has that modifier. E.g. ```<div v-if.bbb="foo"></div>```
 +	The directive does not have that attribute value. E.g. ```<div v-if></div>```
 +	The directive is on the elements which have v-else/v-else-if directives. E.g. ```<div v-else v-if="foo"></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-if/>
<div v-if:aaa="foo"/>
<div v-if.bbb="foo"/>
<div
  v-if="foo"
  v-else
/>
<div
  v-if="foo"
  v-else-if="bar"
/>
```
  Examples of correct code for this rule:

```html
<div v-if="foo"/>
<div v-else-if="bar"/>
<div v-else/>
```

### 2.27	强制执行邮箱的v-model指令(enforce valid v-model directives)
This rule reports v-model directives in the following cases:
 +	The directive has that argument. E.g. ```<input v-model:aaa="foo">```
 +	The directive has the modifiers which are not supported. E.g. ```<input v-model.bbb="foo">```
 +	The directive does not have that attribute value. E.g. ```<input v-model>```
 +	The directive does not have the attribute value which is valid as LHS. E.g. ```<input v-model="foo() + bar()">```
 +	The directive is on unsupported elements. E.g. ```<div v-model="foo"></div>```
 +	The directive is on input elements which their types are file. E.g. ```<input type="file" v-model="foo">```
 +	The directive's reference is iteration variables. E.g. ```<div v-for="x in list"><input type="file" v-model="x"></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<input v-model>
<input v-model:aaa="foo">
<input v-model.bbb="foo">
<input v-model="foo + bar">
<div v-model="foo"/>
<div v-for="todo in todos">
  <input v-model="todo">
</div>
```

  Examples of correct code for this rule:

```html
<input v-model="foo">
<input v-model.lazy="foo">
<textarea v-model="foo"/>
<MyComponent v-model="foo"/>
<div v-for="todo in todos">
  <input v-model="todo.name">
</div>
```

### 2.28	强制执行有效的v-on指令(enforce valid v-on directives)
This rule reports v-on directives in the following cases:
 +	The directive does not have that event name. E.g. ```<div v-on="foo"></div>```
 +	The directive has invalid modifiers. E.g. ```<div v-on:click.bbb="foo"></div>```
 +	The directive does not have that attribute value and any verb modifiers. E.g. ```<div v-on:click></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-on/>
<div v-on:click/>
<div v-on:click.aaa="foo"/>
<div @click/>
```
  Examples of correct code for this rule:

```html
<div v-on="foo"/>
<div v-on:click="foo"/>
<div @click="foo"/>
<div @click.left="foo"/>
<div @click.prevent/>
<div @click.stop/>
```

### 2.29	强制执行有效的v-once指令(enforce valid v-once directives)
This rule reports v-once directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-once:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-once.bbb></div>```
 +	The directive has that attribute value. E.g. ```<div v-once="ccc"></div>```
  Examples of incorrect code for this rule:

```html
<div v-once:aaa/>
<div v-once.bbb/>
<div v-once="ccc"/>
```

  Examples of correct code for this rule:

```html
<div v-once/>
```

### 2.30	强制执行有效的v-pre指令(enforce valid v-pre directives)
This rule reports v-pre directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-pre:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-pre.bbb></div>```
 +	The directive has that attribute value. E.g. ```<div v-pre="ccc"></div>```
  Examples of incorrect code for this rule:

```html
<div v-pre:aaa/>
<div v-pre.bbb/>
<div v-pre="ccc"/>
```
  Examples of correct code for this rule:

```html
<div v-pre/>
```

### 2.31	强制执行有效的v-show指令(enforce valid v-show directives)
This rule reports v-show directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-show:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-show.bbb></div>```
 +	The directive does not have that attribute value. E.g. ```<div v-show></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-show/>
<div v-show:aaa="foo"/>
<div v-show.bbb="foo"/>
```
  Examples of correct code for this rule:

```html
<div v-show="foo"/>
```

### 2.32	强制执行有效的v-text指令(enforce valid v-text directives)
This rule reports v-text directives in the following cases:
 +	The directive has that argument. E.g. ```<div v-text:aaa></div>```
 +	The directive has that modifier. E.g. ```<div v-text.bbb></div>```
 +	The directive does not have that attribute value. E.g. ```<div v-text></div>```
This rule does not check syntax errors in directives because it's checked by no-parsing-error rule.
  Examples of incorrect code for this rule:

```html
<div v-text/>
<div v-text:aaa="foo"/>
<div v-text.bbb="foo"/>
```
  Examples of correct code for this rule:

```html
<div v-text="foo"/>
```


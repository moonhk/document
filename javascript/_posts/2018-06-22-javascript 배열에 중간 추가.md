---
layout: post
title: "자바스크립트 배열 중간에 추가"
description: " "
date: 2018-06-22 
tags: [자바스크립트]
comments: false
share: false
categories: [javscript, 정규식]
---

` splice(시작인덱스, 삭제할 요수개수, 추가할 값); `
--> 추가시에는 삭제할 요소 개수를 0으로 설정함. 

array = [1,2,3,4];

배열 중간에 추가하고 싶을때 사용하면 좋은 문법

` array.splice(0,0,3); ` 

결과값 : array = [3,1,2,3,4];





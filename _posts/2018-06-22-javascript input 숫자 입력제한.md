---
layout: post
title: "정수 길이 제한 및 소수점 자리수 제한 정규식"
description: "정수 길이 제한 및 소수점 자리수 제한 정규식 "
date: 2018-06-22 
tags: [자바스크립트]
comments: false
share: false
categories: [javscript, 정규식]
---

input태그에 소수점을 입력한다고 가정해보자.

정수의 길이 : 3
소수점의 길이: 2

123.12 에서 1231.12로 data가 바뀌면 정규식 text를 체크하여  false를 반환하도록 한다. 
이때 이 false값을 가지고 event를 핸들링 한다.

이때 사용하는 정규식은 ^\\d{0,3}[.]\\d{0,2}$ 이다.

* ^ 첫번째로 나와야하는 문자
* \d : 숫자 0-9까지
* {0,3}: 숫자의 개수가 0~3사이
* [.]: 소수점
* \d : 소수점 뒤에는 숫자 0-9 사이의값이 설정
* {0,2}: 이때 숫자의 길이는 0~2사이여야 함

```
var regEx = new RegExp("^\\d{0,3}[.]\\d{0,2}$"); 

if(!regEx.test("123.123")){ 
    return false;
}
```

```
var maxLength = 3;
var maxDecimal =2;

var regEx = new RegExp("^\\d{0,"+maxLength+"}[.]\\d{0,"+maxDecimal+"}$"; 

if(!regEx.test("123.123")){ 
    return false;
}
```





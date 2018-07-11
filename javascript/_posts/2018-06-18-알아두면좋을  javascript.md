---
layout: post
title: "알아두면 좋은 자바스크립트 문법 정리"
description: ""
date: 2018-06-18
tags: [자바스크립트]
comments: false
share: false
categories: [javascript]
---

# 알아두면 좋은 javscript 문법


* isNaN() 숫자로 변환가능한 값은 true를 반환, 숫자가 아니면 NaN 반환
* 리딩제로 - 숫자앞에 있는 0를 없앤다.
* Number() : 문자열 -> 숫자 변환 
* parseInt(): 문자열 -> 10진수 변환
* paseFloat(): 리딩제로 무시
* 부동소수점 숫자는 메모리를 2배 소모한다.
* data type인 null과 undefined는 'null', 'undefined'와 같이 리터럴 텍스트로 변경가능

2. 객체 타입

* new : 객체 생성 연산자
* Object : 객체 멤버 (프로퍼티, 메서드)
* contructor : 해당 객체를 만드는데 사용된 함수 (생성자)
* hasOwnProperty() :속성이 자신의 고유속성인지 상속받은 속성인지에 따라 true/false를 반환한다. 
* isPrototypeOf() : 해당 객체가 다른 객체의 프로토타입인지 확인
* propertyIsEnmerable() : 해당 프로퍼티를 for-in문에서 나열 할 수 있는지 확인
* toLocaleString() : 객체를 지역에 맞게 표현한 문자열 반환
* toString() : 객체 -> 문자열로 변화 
* valueOf(): 객체를 나타내는 문자열,숫자,boolean값 반환


* ^ (xor) : 1 - 0 -> 1 , 1 - 1 -> 0 
* 문자 레이블 : 중첩 for문 사용시 for문에 이름을주고 break, continue에서 사용함


 

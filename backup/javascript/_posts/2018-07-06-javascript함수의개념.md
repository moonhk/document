---
layout: post
title: "javascript에서의 function 개념"
description: "object로 인식하는 javascript의 function"
date: 2018-07-06
tags: [javascript]
comments: true
share: true
categories: [javascript]
---
## javascript에서 function 이란?
 함수를 객체로 인식한다.
 그러므로 함수이름은 단순히 함수객체를 가리키는 포인터일 뿐.
 이 개념을 이해하면 javascript에 오버로딩이 안된다는걸 쉽게 이해할수 있다.

#### overLoading 이란?
 
 같은 이름의 함수를 여러 개 정의하고, 매개변수의 유형과 개수를 다르게 하여 다양한 유형의 호출에 응답하게 하는걸 말하며 java에서는 메소드 오버로딩, 생성자 오버로딩이 있다.

## 함수 선언 호이스팅 ?
  javascript 엔진은 코드를 평가할때 제일 먼저 함수 선언을 찾고 맨위로 호이스팅함.

### 함수 선언식
 함수 선언식은 호출문보다 선언문이 뒤에있어도 에러가 나지 않는다.

  ```
  sum(10,10);
  function(num1,num2){
    return num1 + num2;
  }
  ```
 
### 함수 표현식
 함수 표현식은 코드 실행이 해당 줄까지 진행하기 전에는 사용할 수 없기때문에 sum(10,10) 호출 부분에서 `unexpected identifier` 에러 발생

 ```
 sum(10,10);
 var sum = funciton(num1, num2){
    return num1 + num2;
 }
 ```


## 값 처럼 쓰이는 함수
 함수이름은 단지 변수일 뿐이므로 함수도 다른 값이 오는 자리라면 어디든 올 수 있다.

 * 함수를 매개변수로 넘길 수 있음
 * return값으로 함수를 반환 할 수 있음.
 





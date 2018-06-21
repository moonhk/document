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

초반에 나는 MVC패턴으로 개발중에 헷갈리는 부분이 꽤 있었다.
내가 간단하게 알고 있기로는 MVC패턴은 control에서 data를 model로 셋팅해주고 view는 model의 값을 그려준다.간단한 개념식으로만 인지하고 있었음.
>개발을 하다보니 model의 값은 control을 통해서 계속 변화하는데 view에서 render해줄때 model의 값을 얼마나 갱신해줘야하며 내가 만든 로직이 view에 해당되는건지 model에 해당 되는건지를 내가 정확하게 판단하지 못하였다.

내가 갈피를 못잡을수록 코드가 더러워 보였고 메소드 명도 점점 산으로 가게 되길레 더이상 개발 진행을 하지 않고 모르는건 물어보자! 이생각으로
차장님께 SOS를 보냈다.

차장님께서는 view에서는 최대한 계산하지 않고 model에서 최대한 계산하라고 하셨다. 이게 바로 SRP 원칙이라고도 하셨음.

그러고 나서 내가 만든 로직을 보니 나는 view에서 model에 있는 data를 가져와서 조합하여 사용했다는것을 깨닫게 되었다...!

예를들어 view에서 renderBorder시에() 라는 함수를 구현한다.
여태까지 내가 해왔던 방식은 renderBorder시에 필요한 속성들을 아래의 예제처럼 model에서 하나하나 가져와서 view에서 조합하는 형식이었다면

###
    renderBorder: function(){
        var input = this;
        var style = this.model.getBorderStyle();
        var width = this.model.getBorderWidth();
        var color = this.model.getBorderColor();
        input.style.borderStyle = style;
        input.style.borderWidth = width;
        input.style.borderColor = color;
    }

이번에 리팩토링한 로직은 아래 방식 처럼 모델에서 필요한 값을 조합하여 계산하고
그값을 view에서는 간단하게 사용하도록 수정하였다.

###
    renderBorder : function(){
        var input = this;
        var borderStyle = this.model.boderStyle();
        input.style.cssText = borderStyle;
    }


이 방법으로 현재 개발중인 Input 컴포넌트에 적용하였는데 소스가 많이 보기 좋아졌다.

개발을 진행하면서 
value와 text속성의 용도를 명확하게 나누고 text는 view에서 사용하는 속성이고 
value는 내부에 input의 value값 조작하는 용도로 사용하고나니 
내가 개발하면서도 헷갈리지 않아서 좋다.

>그리고 추가로 차장님과 대화하면서 MVC 패턴에 modelView 속성을 도입하여 
브라우저 퍼포먼스를 올릴수있을꺼같다고 하셨는데 style이나 text부분을 캐시처리하여 render유/무를 준다고 하셨다.

 일단 내가 하고 있는 프로젝트에 할 수 있으면 먼저 도입해보고 퍼포먼스 성능이 중요한 컴포넌트에 도입하도록 해봐야겠다. 
 팁이있다면 style부분은 common(<b>유의하기!!</b>) 으로 뺄수있다는거?
 

 

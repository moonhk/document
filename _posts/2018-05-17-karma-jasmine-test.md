---
layout: post
title: "npm을 이용한 jasmine-karma 환경 설정 및 grunt 연동 "
description: "jasmine-karma 사용법"
date: 2018-05-17
tags: [karma, jasmine, grunt, npm, test, front-end]
comments: true
share: true
categories: [test]
---
##Karma
karma란 자바스크립트 단위테스트를 구동하는 테스트 러너이다.
테스트 러너란 테스트 도구(jasmine)를 이용하여 테스트 코드를 만들고 실제 실행을 담당하는 역할을 한다.



###설치

karma도 Grunt와 마찬가지로 npm으로 설치가 가능하다. node를 설치후 npm으로 install한다.

#### 1. karma-cli 설치

* karma-cli 도 Grunt-cli와 동일하게 karma 명령어를 사용하기 위한 용도이다
* npm install -g karma cli

#### 2. karma 및 jasmine 브라우저 플러그인 설치

* npm install karma --save-dev
* npm install karma-jasmine --save-dev
* npm install jasmine-core --save-dev
* npm install karma-chrome-launcher --save-dev
* npm install karma-ie-launcher --save-dev

#### 3. karma 환경 설정 파일 작성
: karma init 명령어를 이용하여 쉽게 만들어 보자

#### 4. karma.conf.js 속성

* basePath: root패스 설정(상대경로도 가능)
* Frameworks : 테스트할 프레임 워크를 설정한다 (ex ['jasmine'])
* files : karam가 인식할 모든 파일 기술
* exclude : 제외하고 싶은 파일
* preprocessors : karma가 jasmine이나 mock등의 테스트 도구를 활용하여 테스트 하기전에 사전작업을 하기위한 속성이다.
* reporters : 테스트 결과를 출력하는 기능
* port : web port 설정
* autoWatch : true 일경우 소스의 변경 사항을 감지하여 자동으로 테스트
* browsers : 테스트할 브라우저 선택
* plugins : 설치하여 사용할 플러그인 설정 

#### 5. reporters 설정

 : reporters 속성은 jasmine으로 테스트한 결과를 html페이지로 출력함

* npm install karma-html-reporter --save-dev 설치

#### 6. Jasmine 설정

* TDD, BDD를 위해 사용하는 프레임 워크이며 karma 환결설정 파일에서 프레임워크를 설정하였다면 설정이 따로 필요없다.
* TDD: 테스트 주도 개발
* BDD: 행동 주도 개발

#### 7.Grunt + karma

* npm install grunt-karma --save-dev
* Gruntfile.js 설정

```
 
 	karma:{
            test: {
                configFile: 'karma.conf.js',
                singleRun: false,
                browsers:['Chrome']
            },
            testone: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['Chrome','IE', 'IE10', 'IE9']
            }
        },
```

 ```
    grunt.loadNpmTasks('grunt-karma');
 ```


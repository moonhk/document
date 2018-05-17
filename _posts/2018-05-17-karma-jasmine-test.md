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

##설치
karma도 Grunt와 마찬가지로 npm으로 설치가 가능하다. node를 설치후 npm으로 install한다.

1.karma-cli 설치
:karma-cli 도 Grunt-cli와 동일하게 karma 명령어를 사용하기 위한 용도이다
   npm install -g karma cli

2.karma 및 jasmine 브라우저 플러그인 설치
npm install karma --save-dev
npm install karma-jasmine --save-dev
npm install jasmine-core --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-ie-launcher --save-dev

3. karma 환경 설정 파일 작성
: karma init 명령어를 이용하여 쉽게 만들어 보자


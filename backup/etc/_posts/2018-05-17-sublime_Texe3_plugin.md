---
layout: post
title: "Sublime_Text3 markdown 플러그인"
description: "Sublime Text로 markdown문서 보면서 작성할수있는 방법. "
date: 2018-05-17
tags: [sublime_Text3, markdown]
comments: true
share: true
categories: [markdown]
---

## Sublime_text3로 markdown 문서작성시 팁!
: submlieText3로 markdown 화면을 볼 수 있도록 하는 Plugin 소개.

###설치 방법
1. Sumblime Text에서 Ctrl + Shift + P 를 누르고 package Control:Install 
* Package를 선택한다.
2. 입력창에 Markdown Preview를 입력하고 enter를 눌러 설치한다.
3. 단축키에 .md파일을 실행 할 수 있도록 추가하자.
4. Preferences에서 Key Bindings에 하단의 내용으로 단축키 추가 

###
    {
        "keys": ["alt+m"],
        "command": "markdown_preview",
        "args": {
            "target": "browser",
            "parser": "markdown"
        }
    }

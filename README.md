# basic-forum

OAuth를 활용한 네이버인증 연동 스토어

**22.10.01 ~ 22.10.03**


### 목차

[1.서비스 개요](#서비스-목표)<br>
[2.요구사항 구현 내용](#요구사항-구현-내용)<br>
[3.실행 방법 정리](#실행-방법-정리)<br>
[4.회고](#회고)<br>

## 서비스 목표

다음은 이번 프로젝트에서 이루고자 하는 목표입니다.

- `nestjs`를 사용하여 게시판 만들기.
- jwt를 이용한 유저 인증 구현.
- 게시글에 좋아요와 조회수 구현.
- `TypeORM`을 사용하여 관계형 데이터베이스 구축.

### ERD



### 기술 스택

`nodejs` `nestjs` `typeorm` `mySql` `typescript`

### git flow

`main` `develop`두 종류의 브랜치를 기본으로 사용합니다.


1. 각 기능이 병합된 `develop` 에서 `main`로 병합합니다.
2. 병합된 `feature-taskname` 브렌치들은 삭제합니다.

## 요구사항 구현 내용



## 실행 방법 정리

```
npm build
npm start
```

```
npm run start:dev // 개발용
```

### 커밋 컨벤션

`fix:` 버그가 발생해 코드를 고칠 때  
`feat:` 기능을 추가할 때  
`build:` 빌드할 때  
`chore:` 설정 변경 발생시(단순오타 등은 refactor 😊)  
`docs:` 문서 수정(마크다운 파일, swagger doc 등)  
`style:` 코드 스타일 수정(개행 등)  
`refactor:` 코드의 기능변화 없이 수정할 때  
`test:` 테스트파일 관련 작업(jest)

## 회고

### 이전 과제에서의 회고


### 이번 과제에서의 회고

### Made By

🍀 [남승인](https://github.com/RunningLearner)

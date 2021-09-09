# onego-Mainserver

본 Repository는  **자필 원고지 인식 및 맞춤법 교정 시스템**인 **One Go!**의 메인 서버를 위한 것입니다. 해당 서버를 통해 onego모바일과 모델, aws S3까지 통신할 수 있습니다.



## 주요 기능

- 안드로이드 mobile과 이미지/텍스트파일 통신

- 모델 서버인 flask와 이미지/텍스트파일 통신

- aws 클라우드 스토리지인 s3와 통신하여 유저별 이미지 저장

- py-hanspell 라이브러리를 사용하여 맞춤법 결과 제공

  

## 설치

- Git 프로젝트 디렉토리 생성 및 원격 저장소 연결 혹은 git clone

```
git init
git remote add origin https://github.com/Onego2021/onego-server.git
git pull origin master

git clone https://github.com/Onego2021/onego-server.git
```



- Node.js설치

```
sudo apt install nodejs
sudo apt install npm
```



- 의존성 모듈들의 설치후 프로젝트 실행

```
//의존성 모듈 설치
npm install
```

```
//실행(접속) : 'http://3.34.215.157:3000'
npm start
```



## 개발 환경

- Node.js v16.4.0
- npm 7.19.0
- python 3.9.5



## 개발자

- 최지희(judyi1999) : 메인서버와 모바일/모델서버간의 통신 구현
- 박보서(BO-SEO) : py-hanspell모듈 사용하여 맞춤법 검사 코드 구현



## 라이센스

MIT License - [LICENSE](https://github.com/Onego2021/onego-server/blob/master/LICENSE)
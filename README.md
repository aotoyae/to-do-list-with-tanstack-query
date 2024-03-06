# Tanstack Query + TypeScript 추가 실습 세션

## 목표

- 문제를 풀면서 Tanstack Query, TypeScript 이해하기
- 실습과 강의를 통해 왜 사용하는지 깨닫기

## 시작하기

1. 저장소 클론
   ```shell
   git clone ...
   ```
2. 해당 파일로 이동
   ```shell
   cd ...
   ```
3. 패키지 설치
   ```shell
   npm install
   ```
4. json-server 실행
   ```shell
   npm run server
   ```
5. 데브 서버 실행
   ```shell
   npm start
   ```

## 문제

1. `src/api.ts`에 있는 `Todo` 타입 정의하기.
2. `src/App.tsx`에 있는 데이터 페칭 로직과 비동기 상태 관리 로직을 `useQuery`로 개선하기.

   2.1 데이터 페칭 로직은 `src/api.ts`에 옮기기.

3. `src/components/TodoItem.tsx`의 `onClick` 이벤트 부분을 모두 채우기.

## 권장 사항

VS Code에 Prettier와 ESLint 확장을 설치해 주세요.(필수는 아닙니다!)

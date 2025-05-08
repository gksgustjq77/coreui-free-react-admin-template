## 주요 기능

- **로그인 페이지**

  - `/api/auth/login` 을 호출해 JWT 로그인 구현
  - 성공 시 대시보드 페이지로 리다이렉트, 실패 시 에러 메시지 표시
  - 요청 헤더에 `Authorization: Bearer <token>` 자동 추가

- **기기 상태 조회 대시보드**

  - 지정한 키(`wh40batt`, `baromrelin`, `soilad1`, `rainratein`)의 10분치 데이터 조회
  - React Query를 이용해 페이지 리로드 없이 데이터 갱신
  - CChartBar를 통해 데이터 시각화

- **전구 제어 대시보드**

  - 슬라이더(Bar)로 밝기 조절 UI
  - 값 변경 시 `/api/plugins/telemetry/DEVICE/{deviceId}/SERVER_SCOPE` API를 통해 데이터 패칭
  - 전구 SVG 내부에 <circle>을 통해 밝기 구현

## 기술 스택

- **언어 및 프레임워크**

  - React 19 + TypeScript

- **상태 관리 / 데이터 페칭**

  - React Query
  - Jotai

- **기타**

  - Axios

## 설치 및 실행

# 리포지토리 클론

git clone https://github.com/gksgustjq77/coreui-free-react-admin-template.git

# 의존성 설치

npm install

# 개발 서버 실행

npm run start

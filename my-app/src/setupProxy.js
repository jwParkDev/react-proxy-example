const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api', // proxy가 필요한 path parameter를 입력
    createProxyMiddleware({
      target: 'http://localhost:3080', // 타겟이 되는 server api의 url을 입력
      changeOrigin: true, // 대상 서버 구성에 다라 호스트 헤더가 변경되도록 설정
    })
  );
  app.use(
    '/api2', // proxy가 필요한 path parameter를 입력
    createProxyMiddleware({
      target: 'http://localhost:3070', // 타겟이 되는 server api의 url을 입력
      changeOrigin: true, // 대상 서버 구성에 다라 호스트 헤더가 변경되도록 설정
    })
  );
}

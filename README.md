# Go Backend 側に JWT を実装したサンプル

## 起動

### Backend

```bash
cd backend
go run . seed
go run . serve
```

### Frontend

```bash
cd frontend
npm run dev
```

Backend 側にリバースプロキシを設定しているので、以下でトップページにアクセスできる。

- http://localhost:8000

## 参考資料

- [golang-jwt/jwt](https://github.com/golang-jwt/jwt)
- [How to Create a Secure Authentication API in Golang using Middlewares](https://medium.com/@fasgolangdev/how-to-create-a-secure-authentication-api-in-golang-using-middlewares-6988632ddfd3)
- [Building a Secure API with Golang](https://blog.stackademic.com/building-a-secure-api-with-golang-42b563d42c0d)
- [Next.js Authentication](https://nextjs.org/docs/pages/building-your-application/authentication)

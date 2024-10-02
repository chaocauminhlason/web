const express = require("express");
const cors = require("cors");
const initialRouter = require("./router");
const DataBaseConnect = require("./config/mongoConnect");
var cookieParser = require("cookie-parser");
const CloudinaryConnect = require("./config/cloudinaryConnect");
const connect = require("./config/redisConnect");
const app = express();
require("dotenv").config();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
initialRouter(app);
const PORT = process.env.PORT;
app.listen(PORT || 8000, () => {
  console.log("listening on port " + process.env.PORT);
});
CloudinaryConnect();
DataBaseConnect();
/*express: Thư viện để tạo ứng dụng web.
cors: Middleware để cho phép Cross-Origin Resource Sharing (CORS).
initialRouter: Router chính của ứng dụng, chứa các định nghĩa đường dẫn API.
DataBaseConnect: Hàm để kết nối với cơ sở dữ liệu MongoDB.
cookie-parser: Middleware để phân tích cookies từ yêu cầu HTTP.
CloudinaryConnect: Hàm để kết nối với dịch vụ Cloudinary (thường dùng để quản lý và lưu trữ hình ảnh).
connect: Kết nối đến Redis (thường dùng cho caching).
dotenv: Thư viện để quản lý biến môi trường từ tệp .env.
Middleware trong ứng dụng web, đặc biệt là với Express.js, là các hàm mà bạn có thể thêm vào để xử lý các yêu cầu HTTP trước khi đến được các route xử lý chính. Middleware cho phép bạn thực hiện nhiều nhiệm vụ, như kiểm tra xác thực, xử lý dữ liệu, quản lý session, hoặc ghi nhật ký, mà không cần phải lặp lại mã trong từng route.
*/
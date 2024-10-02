import axios from "./axios";
export const login = async (data) => {
  const res = await axios.post("/user/login", data);
  return res.data;
};
/*Mục đích: Gửi yêu cầu đăng nhập cho người dùng.
Tham số: data - thông tin đăng nhập (thường là tên người dùng và mật khẩu).
Trả về: Dữ liệu phản hồi từ máy chủ (ví dụ: token xác thực, thông tin người dùng).*/
export const register = async (data) => {
  const res = await axios.post("/user/register", data);
  return res.data;
};
/*Mục đích: Gửi yêu cầu đăng ký tài khoản cho người dùng mới.
Tham số: data - thông tin người dùng mới (ví dụ: tên, email, mật khẩu).
Trả về: Dữ liệu phản hồi từ máy chủ (có thể là thông tin tài khoản hoặc thông báo thành công).*/
export const userTK = async (data) => {
  const res = await axios.get("/user/get-user-token", data);
  return res.data;
};
export const resfesToken = async () => {
  const res = await axios.get("/user/refesToken");
  return res.data;
};
//Mục đích: Lấy token mới (refresh token) cho người dùng để duy trì phiên làm việc.
//Trả về: Dữ liệu phản hồi từ máy chủ (token mới
export const getUsser = async () => {
  const res = await axios.get("/user/get-users");
  return res.data;
};
export const deleteUser = async (id) => {
  const res = await axios.delete(`/user/delete/${id}`);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await axios.put(`/user/update-user/${id}`, data);
  return res.data;
};

export const addCart = async (id, data) => {
  const res = await axios.patch(`/user/add-card/${id}`, data);
  return res.data;
};
//Thêm sản phẩm vào giỏ hàng của người dùng theo ID người dùng.
export const removeCart = async (id, data) => {
  const res = await axios.patch(`/user/remove-card/${id}`, data);
  return res.data;
};

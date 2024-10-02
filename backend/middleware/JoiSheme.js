const Joi = require("joi");
exports.string = Joi.string().allow(null, "");
exports.stringReq = Joi.string().required();
exports.numberReq = Joi.number().required();
exports.number = Joi.string().allow(null, "");
exports.array = Joi.array().allow(null, "");
exports.arrayReq = Joi.array().required();
exports.binaryReq = Joi.binary().required();
exports.objectReq = Joi.object().required();
/*Giải thích các Schema Joi
exports.string = Joi.string().allow(null, "");

Định nghĩa một schema cho một chuỗi có thể là null hoặc chuỗi rỗng. Điều này hữu ích cho các trường chuỗi tùy chọn mà bạn muốn cho phép không có giá trị.
exports.stringReq = Joi.string().required();

Định nghĩa một schema cho một chuỗi bắt buộc. Nếu giá trị là null, chuỗi rỗng, hoặc bị thiếu, Joi sẽ trả về lỗi xác thực.
exports.numberReq = Joi.number().required();

Định nghĩa một schema cho một số bắt buộc. Tương tự như trường hợp trước, trường này phải có một giá trị số, nếu không sẽ gây ra lỗi xác thực.
exports.number = Joi.string().allow(null, "");

Tạo một schema cho một số, nhưng được định nghĩa dưới dạng chuỗi cho phép null hoặc chuỗi rỗng. Điều này có thể hữu ích nếu bạn đang làm việc với các giá trị số ở định dạng chuỗi và muốn cho phép không có giá trị.
exports.array = Joi.array().allow(null, "");

Định nghĩa một schema cho một mảng có thể là null hoặc chuỗi rỗng. Điều này hữu ích cho các trường mảng tùy chọn.
exports.arrayReq = Joi.array().required();

Định nghĩa một schema cho một mảng bắt buộc. Nếu mảng là null, rỗng, hoặc bị thiếu, nó sẽ dẫn đến lỗi xác thực.
exports.binaryReq = Joi.binary().required();

Định nghĩa một schema cho một giá trị nhị phân bắt buộc. Điều này có thể hữu ích cho các trường mà bạn mong đợi dữ liệu nhị phân, chẳng hạn như các tệp tải lên.
exports.objectReq = Joi.object().required();

Định nghĩa một schema cho một đối tượng bắt buộc. Đối tượng phải có mặt; nếu không, nó sẽ dẫn đến lỗi xác thực.
Ví dụ Sử Dụng
Bạn thường sử dụng các schema này trong một handler (hàm xử lý) của route để xác thực dữ liệu yêu cầu đầu vào. Đây là một ví dụ về cách sử dụng một trong các schema:

javascript
Copy code
const { stringReq } = require('./path/to/your/joiSchemes');

app.post('/some-route', (req, res) => {
  const { error } = stringReq.validate(req.body.someField);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Tiếp tục xử lý dữ liệu hợp lệ
});
Tóm tắt
Mã code cung cấp một tập hợp các schema xác thực Joi có thể tái sử dụng, giúp đảm bảo tính toàn vẹn dữ liệu trong ứng dụng của bạn.
Sử dụng các schema này đảm bảo rằng dữ liệu mà ứng dụng của bạn xử lý đáp ứng các yêu cầu của bạn, giảm thiểu rủi ro lỗi hoặc hành vi không mong muốn trong quá trình thực thi.*/
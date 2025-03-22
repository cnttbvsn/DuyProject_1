const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Danh sách học viên</title>
    </head>
    <body>
        <table border="1" cellpadding="10">
            <tr>
                <th>MSHV</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Quê quán</th>
                <th>Email</th>
                <th>SĐT</th>
            </tr>
            <tr>
                <td>001</td>
                <td>Cao Diệp Duy</td>
                <td>25/05/1990</td>
                <td>Sóc Trăng</td>
                <td>duym2524005@gstudent.edu.ctu.com</td>
                <td>0918757099</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Hoàng Sơn Tùng</td>
                <td>31/07/1991</td>
                <td>Cần Thơ</td>
                <td>tungm2524016@gstudent.edu.ctu.com</td>
                <td>0901035982</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Phan Phúc Thịnh C</td>
                <td>13/01/1999</td>
                <td>Sóc Trăng</td>
                <td>thinhm2524015@gstudent.edu.ctu.com</td>
                <td>0964292952</td>
            </tr>
        </table>
    </body>
    </html>
  `);
});

// Lắng nghe cổng và kiểm tra lỗi khi chạy
server.listen(port, (err) => {
  if (err) {
    console.error("Lỗi khi khởi động server:", err);
  } else {
    console.log(`Server đang chạy tại http://localhost:${port}`);
  }
});

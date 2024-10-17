//1.Hàm tính điểm trung bình
function tinhDiemTrungBinh(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}

//2.Hàm xếp loại
function xepLoai(diemTrungBinh) {
    if (diemTrungBinh >= 9) 
        {
        return 'Xuất sắc';
    } else if (diemTrungBinh >= 8)
        {
          return 'Giỏi';  
         } else if (diemTrungBinh >= 7)
         {
            return 'Khá';
         } else if (diemTrungBinh >= 6)
         {
            return 'Trung Bình Khá';
         } else if (diemTrungBinh >= 5){
            return 'Trung Bình';
         } else if (diemTrungBinh < 5){
            return 'Yếu';
        }
}


//3.Hàm chính
function main() {
    // Nhập điểm Toán, Lý, Hóa từ người dùng (hoặc gán giá trị trực tiếp)
    const toan = parseFloat(prompt('Nhập điểm toan:'));
    const ly = parseFloat(prompt('Nhập điểm lý:'));
    const hoa =parseFloat(prompt('Nhập điểm hóa:'));
     
    // Tính điểm trung bình 
    const diemTrungBinh = tinhDiemTrungBinh(toan, ly, hoa);

    // Xếp loại
    const xepLoaiHocLuc = xepLoai(diemTrungBinh);

    // In kết quả ra màn hình 
    console
    console.log("Điểm trung bình: " + diemTrungBinh);
    console.log("Xếp loại: " + xepLoaiHocLuc);
}

// Gọi hàm chính để thực hiện chương trình 
main() ;

module.exports = {
    getDateFromOffset(offset = 0) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + offset);
    
        const day = currentDate.getDate().toString().padStart(2, '0'); // Pad thêm '0' nếu cần
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
        const year = currentDate.getFullYear();
    
        return `${day}/${month}/${year}`;
    }
}
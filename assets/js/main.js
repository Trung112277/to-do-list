// Tạo item mới
const createListItem = (text) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${text}
      <button class="close">x</button>
    `;
    return li;
};

// Kiểm tra input hợp lệ
const isValidInput = (inputValue) => {
    return inputValue.trim() !== '';
};

// Thêm item vào đầu danh sách
const addItemToList = () => {
    const inputElement = document.getElementById('input');
    const listElement = document.getElementById('myList');
    const inputValue = inputElement.value;

    if (!isValidInput(inputValue)) {
        showError('Vui lòng nhập thứ gì đó vào');
        return;
    }

    const newItem = createListItem(inputValue.trim());
    listElement.prepend(newItem);
    inputElement.value = '';
};

// Hiển thị thông báo lỗi
const showError = (message) => {
    alert(message);
};

// Gắn sự kiện cho nút Add
const setupAddButton = () => {
    const addButton = document.querySelector('.addBtn');
    addButton.addEventListener('click', addItemToList);
};

// Khởi tạo ứng dụng
const initApp = () => {
    setupAddButton();
};

// Chạy ứng dụng khi DOM tải xong
document.addEventListener('DOMContentLoaded', initApp);
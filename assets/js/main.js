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
// Hiển thị thông báo lỗi
const showError = (message) => {
    alert(message);
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

// Thêm/xóa class checked khi click vào item
const toggleCheckedClass = (event) => {
    // Chỉ xử lý khi click vào thẻ li (không phải nút close)
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
};

// Xử lý xóa item
const deleteListItem = (event) => {
    // Kiểm tra nếu click vào nút close (x)
    if (event.target.classList.contains('close')) {
        const listItem = event.target.closest('li');
        if (listItem) {
            listItem.remove();
        }
    }
};

// Gắn sự kiện cho nút Add
const setupAddButton = () => {
    const addButton = document.querySelector('.addBtn');
    addButton.addEventListener('click', addItemToList);
};
// Gắn sự kiện delegate cho toàn bộ list
const setupListClickEvent = () => {
    const listElement = document.getElementById('myList');
    listElement.addEventListener('click', toggleCheckedClass);
};

// Gắn sự kiện delegate cho toàn bộ list
const setupDeleteEvent = () => {
    const listElement = document.getElementById('myList');
    listElement.addEventListener('click', deleteListItem);
};


// Khởi tạo ứng dụng
const initApp = () => {
    setupAddButton();
    setupListClickEvent();
    setupDeleteEvent();
};

// Chạy ứng dụng khi DOM tải xong
document.addEventListener('DOMContentLoaded', initApp);
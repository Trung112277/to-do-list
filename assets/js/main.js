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
// Sự kiện nhấn enter
const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addItemToList();
    }
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
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        updateTrashButtonVisibility();
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

// Kiểm tra và cập nhật trạng thái nút trash
const updateTrashButtonVisibility = () => {
    const trashBtn = document.getElementById('trashAll');
    const checkedItems = document.querySelectorAll('#myList li.checked');

    // Hiển thị nút trash nếu có từ 2 item checked trở lên
    if (checkedItems.length >= 2) {
        trashBtn.style.display = 'block';
    } else {
        trashBtn.style.display = 'none';
    }
};

// Xóa tất cả item đã checked
const deleteCheckedItems = () => {
    const checkedItems = document.querySelectorAll('#myList li.checked');

    checkedItems.forEach(item => {
        item.remove();
    });

    // Sau khi xóa cập nhật lại trạng thái nút trash
    updateTrashButtonVisibility();
};

// Chọn/bỏ chọn tất cả các item
const toggleAllItems = () => {
    const allItems = document.querySelectorAll('#myList li');
    const selectAllBtn = document.getElementById('selectAll');

    // Kiểm tra nếu tất cả đã được chọn thì bỏ chọn, ngược lại chọn hết
    const allChecked = [...allItems].every(item => item.classList.contains('checked'));

    allItems.forEach(item => {
        if (allChecked) {
            item.classList.remove('checked');
        } else {
            item.classList.add('checked');
        }
    });

    // Cập nhật trạng thái nút trash
    updateTrashButtonVisibility();
};

// Gắn sự kiện click cho nút trash
const setupTrashButton = () => {
    const trashBtn = document.getElementById('trashAll');
    trashBtn.addEventListener('click', deleteCheckedItems);

    // Ẩn nút trash ban đầu
    trashBtn.style.display = 'none';
};

// Gắn sự kiện cho nút Add
const setupAddButton = () => {
    const addButton = document.querySelector('.addBtn');
    const inputElement = document.getElementById('input');

    addButton.addEventListener('click', addItemToList);
    inputElement.addEventListener('keypress', handleKeyPress); // nhấn enter để add
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

// Gắn sự kiện cho nút selectAll
const setupSelectAllButton = () => {
    const selectAllBtn = document.getElementById('selectAll');
    selectAllBtn.addEventListener('click', toggleAllItems);
};

// Khởi tạo ứng dụng
const initApp = () => {
    setupAddButton();
    setupListClickEvent();
    setupDeleteEvent();
    setupTrashButton();
    setupSelectAllButton();
};

// Chạy ứng dụng khi DOM tải xong
document.addEventListener('DOMContentLoaded', initApp);
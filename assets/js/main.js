// ===== CÁC HÀM TIỆN ÍCH  ===== //
const updateSelectColor = (select) => {
    const colorMap = {
        'chua-hoan-thanh': 'var(--orange)',
        'hoan-thanh': 'var(--green)',
        'cao': 'var(--color-red)',
        'vua': 'var(--orange)',
        'thap': 'var(--yellow)'
    };

    const selectedValue = select.value;
    select.style.backgroundColor = colorMap[selectedValue];
};
const handleSelectChange = (event) => {
    updateSelectColor(event.target);
};

// Hiển thị thông báo lỗi
const showAlert = () => {
    alert('Hãy nhập thứ gì đó vào');
};

// Tạo list mới
const createNewItem = (text) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" hidden>
      <p>${text}</p>
      <div class="btn-box gap-10">
        <select name="status" class="status-list">
          <option value="chua-hoan-thanh" selected>Chưa hoàn thành</option>
          <option value="hoan-thanh">Hoàn thành</option>
        </select>
        <select name="priority" class="priority-list">
          <option value="cao">Cao</option>
          <option value="vua" selected>Vừa</option>
          <option value="thap">Thấp</option>
        </select>
        <div class="flex">
          <button class="btn change">Sửa</button>
          <button class="btn close">x</button>
        </div>
      </div>
    `;
    return li;
};


// ===== HÀM XỬ LÝ SỰ KIỆN ===== //
const setupSelects = () => {
    // Select chính ở header
    const mainStatus = document.getElementById('status');
    const mainPriority = document.getElementById('priority');

    // Select trong các item (hiện tại và sẽ thêm sau)
    const itemStatuses = document.querySelectorAll('#status-list');
    const itemPriorities = document.querySelectorAll('#priority-list');

    // Gắn sự kiện cho select chính
    if (mainStatus) {
        mainStatus.addEventListener('change', handleSelectChange);
        updateSelectColor(mainStatus);
    }

    if (mainPriority) {
        mainPriority.addEventListener('change', handleSelectChange);
        updateSelectColor(mainPriority);
    }

    // Gắn sự kiện cho select trong list
    itemStatuses.forEach(select => {
        select.addEventListener('change', handleSelectChange);
        updateSelectColor(select);
    });

    itemPriorities.forEach(select => {
        select.addEventListener('change', handleSelectChange);
        updateSelectColor(select);
    });
};

const addItem = () => {
    const input = document.getElementById('input');
    const list = document.getElementById('myList');
    const text = input.value.trim();

    if (!text) {
        showAlert();
        return;
    }

    const newItem = createNewItem(text);
    list.prepend(newItem);
    input.value = '';

    // Cập nhật màu cho select mới
    updateSelectColor(newItem.querySelector('.status-list'));
    updateSelectColor(newItem.querySelector('.priority-list'));
};

const handleAddClick = () => addItem();
const handleKeyPress = (e) => e.key === 'Enter' && addItem();

// ===== KHỞI TẠO ===== //
const initAddFunction = () => {
    document.querySelector('.addBtn').addEventListener('click', handleAddClick);
    document.getElementById('input').addEventListener('keypress', handleKeyPress);
};
const initApp = () => {
    setupSelects();
    initAddFunction();
};

document.addEventListener('DOMContentLoaded', initApp);
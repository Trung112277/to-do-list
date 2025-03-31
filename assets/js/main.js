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

// ===== KHỞI TẠO ===== //
const initApp = () => {
    setupSelects();
};

document.addEventListener('DOMContentLoaded', initApp);
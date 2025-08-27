// 全局变量
let pluginsData = [];
let currentPage = 1;
let pageSize = 6;
let currentCategory = 'discover';
let filteredPlugins = [];

// 使用技巧数据
const tips = [
    "部分付费插件的免费版本可以在原网站的原帖中找到，请仔细观察👀",
    "可使用搜索功能查找插件，搜索范围包括插件名称、描述、标签等。",
    "点击插件卡片可以查看详细信息，包括服务端核心版本支持。",
    "插件详情中的依赖关系可以帮助您了解需要安装的其他插件。",
    "您可以通过每页显示选项控制每页显示的插件数量。",
    "关注我们的 B 站主页获取站长的第一手资料！",
    "如果有什么疑问，可以加入 QQ 群进行询问和探讨。",
    "加入 QQ 群可以与其他服主交流插件使用经验。"
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 隐藏加载动画
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.visibility = 'hidden';
    }, 1500);

    fetch('pluginsData.json')
        .then(response => response.json())
        .then(data => {
            pluginsData = data;
            initializeApp();
        })
        .catch(error => {
            console.error('Error fetching plugins data:', error);
            const container = document.getElementById('plugins-container');
            container.innerHTML = '<p class="no-plugins">无法加载插件数据，请稍后重试。</p>';
        });
});


function initializeApp() {
    const darkModeIndicator = document.getElementById('darkModeIndicator');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 初始检测
    updateDarkModeIndicator(prefersDarkScheme.matches);
    
    // 监听系统颜色模式变化
    prefersDarkScheme.addEventListener('change', e => {
        updateDarkModeIndicator(e.matches);
    });
    
    function updateDarkModeIndicator(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }
    
    // 初始化插件显示
    filteredPlugins = [...pluginsData];
    renderPlugins();
    setupPagination();

    // 分类筛选功能
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            // 移除所有active类
            categoryItems.forEach(i => i.classList.remove('active'));
            // 为当前项添加active类
            this.classList.add('active');

            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            filterPlugins();
        });
    });

    // 搜索功能
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', function () {
        currentPage = 1;
        filterPlugins();
    });

    // 每页显示数量
    const pageSizeFilter = document.getElementById('pageSizeFilter');
    pageSizeFilter.addEventListener('change', function () {
        pageSize = parseInt(this.value);
        currentPage = 1;
        filterPlugins();
    });

    // 提示按钮功能
    const tipButton = document.getElementById('tipButton');
    const tipPopup = document.getElementById('tipPopup');
    const tipContent = document.getElementById('tipContent');

    tipButton.addEventListener('click', function () {
        // 随机选择一条提示
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipContent.textContent = randomTip;

        // 显示/隐藏提示浮窗
        tipPopup.classList.toggle('show');
    });

    // 点击页面其他区域关闭提示浮窗
    document.addEventListener('click', function (event) {
        if (!tipButton.contains(event.target) && !tipPopup.contains(event.target)) {
            tipPopup.classList.remove('show');
        }
    });

    // 模态框功能
    const modal = document.getElementById('pluginModal');
    const closeModal = document.getElementById('closeModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modalCloseBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}


// 筛选插件函数
function filterPlugins() {
    const searchTerm = document.querySelector('.search-box').value.toLowerCase();

    // 首先根据分类筛选
    if (currentCategory === 'discover') {
        filteredPlugins = [...pluginsData];
    } else {
        filteredPlugins = pluginsData.filter(plugin =>
            plugin.category.includes(currentCategory)
        );
    }

    // 然后根据搜索词筛选
    if (searchTerm.length >= 2) {
        filteredPlugins = filteredPlugins.filter(plugin =>
            plugin.name.toLowerCase().includes(searchTerm) ||
            plugin.description.toLowerCase().includes(searchTerm) ||
            plugin.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    // 重新渲染插件和分页
    renderPlugins();
    setupPagination();
}

// 渲染插件卡片函数
function renderPlugins() {
    const container = document.getElementById('plugins-container');
    container.innerHTML = '';

    if (filteredPlugins.length === 0) {
        container.innerHTML = '<p class="no-plugins">没有找到符合条件的插件</p>';
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    // 计算当前页要显示的插件
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredPlugins.length);
    const currentPlugins = filteredPlugins.slice(startIndex, endIndex);

    currentPlugins.forEach(plugin => {
        const card = document.createElement('div');
        card.className = 'plugin-card fade-in';
        card.setAttribute('data-id', plugin.id);

        // 添加涂鸦元素
        const doodle1 = document.createElement('div');
        doodle1.className = 'doodle doodle-1';
        doodle1.innerHTML = '<i class="fas fa-cube"></i>';

        const doodle2 = document.createElement('div');
        doodle2.className = 'doodle doodle-2';
        doodle2.innerHTML = '<i class="fas fa-dragon"></i>';

        card.appendChild(doodle1);
        card.appendChild(doodle2);

        // 生成付费标识
        let paymentBadge = '';
        if (plugin.paymentType === 'paid') {
            paymentBadge = '<span class="payment-badge payment-paid"><i class="fas fa-dollar-sign"></i> 付费</span>';
        } else if (plugin.paymentType === 'freemium') {
            paymentBadge = '<span class="payment-badge payment-freemium"><i class="fas fa-star-half-alt"></i> 免费版</span>';
        } else {
            paymentBadge = '<span class="payment-badge payment-free"><i class="fas fa-gift"></i> 免费</span>';
        }

        // 插件内容
        card.innerHTML += `
                    <div class="plugin-header">
                        <div class="plugin-name">${plugin.name}</div>
                        <div class="plugin-author">作者: ${plugin.author}</div>
                    </div>
                    <div class="plugin-description">${plugin.description}</div>
                    <div class="plugin-meta">
                        <div class="plugin-version">支持: ${plugin.version}</div>
                        <div class="plugin-stats">
                            <span class="stat"><i class="fas fa-download"></i> ${formatDownloads(plugin.downloads)}</span>
                            <span class="stat"><i class="fas fa-star"></i> ${plugin.rating}</span>
                        </div>
                    </div>
                    <div class="plugin-tags">
                        ${paymentBadge}
                        ${plugin.tags.map(tag => `<span class="plugin-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="download-btn" data-id="${plugin.id}">
                        <i class="fas fa-download"></i> 下载插件
                    </div>
                `;

        container.appendChild(card);
    });

    // 添加插件卡片点击事件
    document.querySelectorAll('.plugin-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.classList.contains('download-btn')) {
                const pluginId = parseInt(this.getAttribute('data-id'));
                openPluginModal(pluginId);
            }
        });
    });

    // 添加下载按钮点击事件
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const pluginId = parseInt(this.getAttribute('data-id'));
            const plugin = pluginsData.find(p => p.id === pluginId);
            if (plugin) {
                window.open(plugin.link, '_blank');
            }
        });
    });
}

// 设置分页功能
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if (filteredPlugins.length === 0) {
        return;
    }

    const pageCount = Math.ceil(filteredPlugins.length / pageSize);

    // 添加上一页按钮
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerHTML = '&laquo;';
        prevBtn.addEventListener('click', function () {
            currentPage--;
            renderPlugins();
            setupPagination();
            window.scrollTo(0, 0);
        });
        pagination.appendChild(prevBtn);
    }

    // 添加页码按钮
    for (let i = 1; i <= pageCount; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.innerText = i;
        pageBtn.addEventListener('click', function () {
            currentPage = i;
            renderPlugins();
            setupPagination();
            window.scrollTo(0, 0);
        });
        pagination.appendChild(pageBtn);
    }

    // 添加下一页按钮
    if (currentPage < pageCount) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerHTML = '&raquo;';
        nextBtn.addEventListener('click', function () {
            currentPage++;
            renderPlugins();
            setupPagination();
            window.scrollTo(0, 0);
        });
        pagination.appendChild(nextBtn);
    }
}

// 打开插件详情模态框
function openPluginModal(pluginId) {
    const plugin = pluginsData.find(p => p.id === pluginId);
    if (!plugin) return;

    // 付费类型文本
    let paymentText = '';
    let paymentIcon = '';
    if (plugin.paymentType === 'paid') {
        paymentText = '付费';
        paymentIcon = 'fa-dollar-sign';
    } else if (plugin.paymentType === 'freemium') {
        paymentText = '免费版';
        paymentIcon = 'fa-star-half-alt';
    } else {
        paymentText = '免费';
        paymentIcon = 'fa-gift';
    }

    // 填充模态框内容
    document.getElementById('modalTitle').textContent = plugin.name;
    document.getElementById('modalAuthor').textContent = `作者: ${plugin.author}`;
    document.getElementById('modalDescription').textContent = plugin.description;
    document.getElementById('modalDownloads').textContent = formatDownloads(plugin.downloads);
    document.getElementById('modalRating').textContent = plugin.rating;
    document.getElementById('modalReviews').textContent = formatDownloads(plugin.reviews);
    document.getElementById('modalVersion').textContent = plugin.version;
    document.getElementById('modalPaymentType').innerHTML = `<i class="fas ${paymentIcon}"></i> ${paymentText}`;
    document.getElementById('modalReleaseDate').textContent = plugin.releaseDate;
    document.getElementById('modalDownloadBtn').setAttribute('href', plugin.link);

    // 填充服务端核心版本标签
    const serverCoresContainer = document.getElementById('modalServerCores');
    serverCoresContainer.innerHTML = '';

    if (plugin.serverCores && plugin.serverCores.length > 0) {
        plugin.serverCores.forEach(core => {
            const coreTag = document.createElement('span');
            coreTag.className = 'server-core-tag';
            coreTag.innerHTML = `<i class="fas fa-server"></i> ${core}`;
            serverCoresContainer.appendChild(coreTag);
        });
    } else {
        const noCoreTag = document.createElement('span');
        noCoreTag.className = 'server-core-tag';
        noCoreTag.innerHTML = '<i class="fas fa-question-circle"></i> 未知';
        serverCoresContainer.appendChild(noCoreTag);
    }

    // 填充标签
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';

    // 添加付费标识
    let paymentBadge = '';
    if (plugin.paymentType === 'paid') {
        paymentBadge = '<span class="payment-badge payment-paid"><i class="fas fa-dollar-sign"></i> 付费</span>';
    } else if (plugin.paymentType === 'freemium') {
        paymentBadge = '<span class="payment-badge payment-freemium"><i class="fas fa-star-half-alt"></i> 免费版</span>';
    } else {
        paymentBadge = '<span class="payment-badge payment-free"><i class="fas fa-gift"></i> 免费</span>';
    }
    tagsContainer.innerHTML = paymentBadge;

    // 添加其他标签
    plugin.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'plugin-tag';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });

    // 填充依赖关系
    const depsContainer = document.getElementById('modalDependencies');
    depsContainer.innerHTML = '';

    if (plugin.dependencies && plugin.dependencies.length > 0) {
        plugin.dependencies.forEach(dep => {
            const depEl = document.createElement('li');
            depEl.className = 'dependency-item';
            depEl.innerHTML = `<i class="fas fa-link"></i> ${dep}`;
            depsContainer.appendChild(depEl);
        });
    } else {
        const noDepEl = document.createElement('li');
        noDepEl.className = 'dependency-item';
        noDepEl.innerHTML = '<i class="fas fa-check-circle"></i> 无依赖';
        depsContainer.appendChild(noDepEl);
    }

    // 显示模态框
    document.getElementById('pluginModal').style.display = 'block';
}

// 格式化下载量显示
function formatDownloads(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}
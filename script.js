// 扩展插件数据库
const pluginsData = [
    {
        id: 1,
        name: "EssentialsX",
        author: "drtshock",
        description: "提供服务器基础功能，包括传送、家园、经济等基础功能，是大多数服务器必备的核心插件。",
        version: "1.8-1.21",
        tags: ["基础功能", "经济", "传送", "管理"],
        category: ["admin", "economy"],
        downloads: 5579837,
        rating: 4.8,
        reviews: 5420,
        releaseDate: "2015-07-07",
        dependencies: ["Vault"],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://www.spigotmc.org/resources/essentialsx.9089/"
    },
    {
        id: 2,
        name: "WorldEdit",
        author: "sk89q",
        description: "强大的世界编辑工具，允许快速修改和建造大型结构，是建筑服务器的必备工具。",
        version: "1.12-1.21",
        tags: ["建筑", "地形", "编辑", "管理"],
        category: ["world", "admin"],
        downloads: 23531395,
        rating: 4.9,
        reviews: 3820,
        releaseDate: "2011-08-25",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper", "Fabric", "Forge"],
        paymentType: "free",
        link: "https://dev.bukkit.org/projects/worldedit"
    },
    {
        id: 3,
        name: "Vault",
        author: "MilkBowl",
        description: "经济系统兼容插件，为不同经济插件提供统一API接口，是经济系统的核心依赖。",
        version: "1.13-1.21",
        tags: ["经济", "API", "兼容"],
        category: ["economy", "api"],
        downloads: 3188890,
        rating: 4.7,
        reviews: 2950,
        releaseDate: "2017-01-05",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://www.spigotmc.org/resources/vault.34315/"
    },
    {
        id: 4,
        name: "Citizens",
        author: "fullwall",
        description: "NPC创建和管理插件，可以创建自定义NPC并赋予其各种行为，适合RPG服务器。",
        version: "1.14-1.21",
        tags: ["NPC", "角色", "任务", "RPG"],
        category: ["rpg", "gameplay"],
        downloads: 27213,
        rating: 4.0,
        reviews: 2780,
        releaseDate: "2015-10-27",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "freemium",
        link: "https://www.spigotmc.org/resources/citizens.13811/"
    },
    {
        id: 5,
        name: "WorldGuard",
        author: "sk89q",
        description: "区域保护插件，可以定义区域并设置各种保护标志，防止玩家破坏或建造。",
        version: "1.8-1.21",
        tags: ["保护", "领地", "管理"],
        category: ["protection", "admin"],
        downloads: 9455418,
        rating: 4.8,
        reviews: 3420,
        releaseDate: "2011-08-25",
        dependencies: ["WorldEdit"],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://dev.bukkit.org/projects/worldguard"
    },
    {
        id: 6,
        name: "McMMO",
        author: "nossr50",
        description: "RPG技能系统，玩家可以通过各种活动提升技能等级，获得特殊能力和奖励。",
        version: "1.13-1.21",
        tags: ["RPG", "技能", "等级", "游戏玩法"],
        category: ["rpg", "gameplay"],
        downloads: 32708,
        rating: 4.5,
        reviews: 4120,
        releaseDate: "2019-01-30",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "paid",
        link: "https://www.spigotmc.org/resources/official-mcmmo-original-author-returns.64348/"
    },
    {
        id: 7,
        name: "LuckPerms",
        author: "Luck",
        description: "权限管理插件，提供强大的权限组和权限设置功能，支持多种数据库后端。",
        version: "1.7-1.21",
        tags: ["权限", "管理", "安全"],
        category: ["admin", "utility"],
        downloads: 7620099,
        rating: 4.9,
        reviews: 3250,
        releaseDate: "2016-08-21",
        dependencies: [],
        serverCores: ["Bukkit", "Sponge", "Fabric", "NeoForge", "Forge", "Nukkit", "Velocity", "BungeeCord"],
        paymentType: "free",
        link: "https://www.spigotmc.org/resources/luckperms.28140/"
    },
    {
        id: 8,
        name: "ItemsAdder",
        author: "LoneDev",
        description: "自定义物品和资源包插件，可以创建自定义方块、物品和模型，无需修改客户端。",
        version: "1.16-1.21",
        tags: ["自定义", "物品", "资源包", "装饰"],
        category: ["decoration", "gameplay"],
        downloads: 15549,
        rating: 4.8,
        reviews: 1850,
        releaseDate: "2020-01-10",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "paid",
        link: "https://www.spigotmc.org/resources/itemsadder.73355/"
    },
    {
        id: 9,
        name: "PlaceholderAPI",
        author: "ExtendedClip",
        description: "占位符API，允许其他插件创建和使用占位符，极大增强插件之间的兼容性。",
        version: "1.8-1.21",
        tags: ["API", "兼容", "实用工具"],
        category: ["api"],
        downloads: 1923403,
        rating: 4.7,
        reviews: 2450,
        releaseDate: "2015-04-20",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://www.spigotmc.org/resources/placeholderapi.6245/"
    },
    {
        id: 10,
        name: "ProtocolLib",
        author: "dmulloy2",
        description: "允许修改Minecraft协议的低级库，许多高级插件依赖此库实现复杂功能。",
        version: "1.8-1.21",
        tags: ["库", "协议", "开发"],
        category: ["api"],
        downloads: 2929030,
        rating: 4.6,
        reviews: 1620,
        releaseDate: "2014-11-21",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://www.spigotmc.org/resources/protocollib.1997/"
    },
    {
        id: 11,
        name: "DecentHolograms ",
        author: "filoghost",
        description: "创建全息文字和图像的插件，适合用于信息显示、商店招牌或装饰用途。",
        version: "1.8-1.21",
        tags: ["全息", "显示", "装饰"],
        category: ["decoration", "utility"],
        downloads: 75097,
        rating: 4.4,
        reviews: 1780,
        releaseDate: "2021-10-18",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://dev.bukkit.org/projects/holographic-displays"
    },
    {
        id: 12,
        name: "AdvancedEnchantments",
        author: "YouHaveTrouble",
        description: "添加多种自定义附魔效果，增强游戏战斗和工具系统，完全可配置。",
        version: "1.17-1.21",
        tags: ["附魔", "战斗", "游戏玩法"],
        category: ["gameplay", "rpg"],
        downloads: 30378,
        rating: 4.3,
        reviews: 1250,
        releaseDate: "2017-07-06",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "paid",
        link: "https://www.spigotmc.org/resources/1-17-1-21-8-%E2%AD%95-advancedenchantments-%E2%AD%90-500-custom-enchants-%E2%AD%90create-custom-enchantments-%E2%9C%85.43058/"
    },
    {
        id: 13,
        name: "Spark",
        author: "Luck",
        description: "高效管理服务器性能资源，实时监视后台资源占用，检测服务器性能问题。",
        version: "1.8-1.21",
        tags: ["性能", "管理", "保护", "资源监视"],
        category: ["admin", "utility"],
        downloads: 239636,
        rating: 4.9,
        reviews: 18450,
        releaseDate: "2018-05-29",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper", "Sponge", "Fabric", "NeoForge", "Forge", "Standlone", "Velocity", "BungeeCord"],
        paymentType: "free",
        link: "https://spark.lucko.me/download"
    },
    {
        id: 14,
        name: "ViaVersion",
        author: "FormallyMyles",
        description: "允许玩家使用比服务器更新的MC版本进入你的服务器，增强服务器留人能力，助你收获更多玩家！",
        version: "1.8-1.21",
        tags: ["兼容", "管理", "跨版本"],
        category: ["admin", "utility"],
        downloads: 7827940,
        rating: 4.8,
        reviews: 10270,
        releaseDate: "2016-03-01",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper", "Sponge", "Fabric", "NeoForge", "Forge"],
        paymentType: "free",
        link: "https://hangar.papermc.io/ViaVersion/ViaVersion"
    },
    {
        id: 15,
        name: "ViaBackwards",
        author: "kennytv",
        description: "ViaVersion的附属插件，允许玩家使用比服务器更旧的MC版本进入你的服务器。",
        version: "1.10-1.21",
        tags: ["兼容", "管理", "跨版本"],
        category: ["admin", "utility"],
        downloads: 4610736,
        rating: 4.8,
        reviews: 1460,
        releaseDate: "2016-08-05",
        dependencies: ["ViaVersion"],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://hangar.papermc.io/ViaVersion/ViaBackwards"
    },
    {
        id: 16,
        name: "ViaRewind",
        author: "EnZaXD",
        description: "ViaVersion的附属插件，允许玩家使用1.7.x和1.8.x的MC版本进入你的服务器。",
        version: "1.8-1.21",
        tags: ["兼容", "管理", "跨版本"],
        category: ["admin", "utility"],
        downloads: 1216329,
        rating: 4.5,
        reviews: 1050,
        releaseDate: "2018-01-17",
        dependencies: ["ViaVersion"],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://hangar.papermc.io/ViaVersion/ViaRewind"
    },
    {
        id: 17,
        name: "ViaRewindLegacySupport",
        author: "EnZaXD",
        description: "ViaRewind的附属插件，修复了ViaRewind插件上的一些BUG。",
        version: "1.7-1.20",
        tags: ["兼容", "管理", "跨版本"],
        category: ["admin", "utility"],
        downloads: 50037,
        rating: 4.5,
        reviews: 896,
        releaseDate: "2018-02-06",
        dependencies: ["ViaVersion", "ViaRewind"],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://hangar.papermc.io/ViaVersion/ViaRewindLegacySupport"
    },
    {
        id: 18,
        name: "Geyser",
        author: "GeyserMC",
        description: "一种桥接/代理插件，允许玩家使用基岩版客户端登录你的Java版服务器，实现跨端互通。",
        version: "1.13-1.21",
        tags: ["兼容", "管理", "代理"],
        category: ["admin", "utility"],
        downloads: 1102526,
        rating: 4.9,
        reviews: 4025,
        releaseDate: "2020-01-10",
        dependencies: ["ViaVersion"],
        serverCores: ["Bukkit", "Spigot", "Paper", "Fabric", "NeoForge", "Forge", "ViaProxy", "Velocity", "BungeeCord"],
        paymentType: "free",
        link: "https://geysermc.org/download?project=geyser"
    },
    {
        id: 19,
        name: "Floodgate",
        author: "GeyserMC",
        description: "Geyser的附属，一种混合模式插件，用于允许从Geyser连接到在线（正版）服务器。",
        version: "1.8-1.21",
        tags: ["兼容", "管理", "代理"],
        category: ["admin", "utility"],
        downloads: 285421,
        rating: 4.0,
        reviews: 1024,
        releaseDate: "2020-01-10",
        dependencies: ["Geyser"],
        serverCores: ["Bukkit", "Spigot", "Paper", "Fabric", "NeoForge", "Forge", "ViaProxy", "Velocity", "BungeeCord"],
        paymentType: "free",
        link: "https://geysermc.org/download?project=floodgate"
    },
    {
        id: 20,
        name: "Chunky",
        author: "pop4959",
        description: "预加载区块插件，可以预先生成服务器地图的区块，以减少加载区块所需要的性能负担。",
        version: "1.13-1.21",
        tags: ["地形", "管理", "性能", "预加载"],
        category: ["admin", "world", "utility"],
        downloads: 439060,
        rating: 4.4,
        reviews: 1245,
        releaseDate: "2020-07-16",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://modrinth.com/plugin/chunky"
    },
    {
        id: 21,
        name: "CoreProtect",
        author: "Intelli",
        description: "一种快速、高效的数据记录和防熊工具，可以快速回滚并恢复任意程度的破坏行为。",
        version: "1.14-1.21",
        tags: ["工具", "管理", "代理"],
        category: ["protection", "admin", "utility"],
        downloads: 237530,
        rating: 4.9,
        reviews: 6351,
        releaseDate: "2015-06-25",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://modrinth.com/plugin/coreprotect"
    },
    {
        id: 22,
        name: "ViaBungee",
        author: "ViaVersion",
        description: "ViaVersion的BungeeCord/WaterFall版本，仅用于多端服。",
        version: "最新版本",
        tags: ["兼容", "管理", "跨版本"],
        category: ["admin", "utility"],
        downloads: 25714,
        rating: 4.2,
        reviews: 135,
        releaseDate: "2024-07-19",
        dependencies: [],
        serverCores: ["BungeeCord"],
        paymentType: "free",
        link: "https://hangar.papermc.io/ViaVersion/ViaBungee"
    },
    {
        id: 23,
        name: "Residence",
        author: "Zrips",
        description: "为每一位玩家的私人区域提供保护的插件，非常适合生存服务器。",
        version: "1.7-1.21",
        tags: ["领地", "保护", "多人", "生存"],
        category: ["protection", "utility", "gameplay"],
        downloads: 305809,
        rating: 4.6,
        reviews: 1154,
        releaseDate: "2015-08-29",
        dependencies: ["CMILib"],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "freemium",
        link: "https://www.spigotmc.org/resources/residence-1-7-10-up-to-1-21.11480/"
    },
    {
        id: 24,
        name: "CMILib",
        author: "Zrips",
        description: "一种支持库插件，Zrips大佬的插件都需要用到这个支持库。",
        version: "1.7-1.21",
        tags: ["库", "协议", "开发"],
        category: ["api"],
        downloads: 343445,
        rating: 4.0,
        reviews: 42,
        releaseDate: "2021-01-08",
        dependencies: [],
        serverCores: ["Bukkit", "Spigot", "Paper"],
        paymentType: "free",
        link: "https://www.spigotmc.org/resources/cmilib.87610/"
    }
];

// 使用技巧数据
const tips = [
    "部分付费插件的免费版本可以在原网站的原帖中找到，请仔细观察👀",
    "勤使用搜索功能查找插件，可以搜索的范围包括插件名称、描述、Tag标签等等。",
    "点击插件卡片可以查看详细信息，包括服务端核心版本支持。",
    "插件详情中的依赖关系可以帮助您了解需要安装的其他插件。",
    "您可以通过每页显示选项控制每页显示的插件数量。",
    "关注我们的B站主页获取站长的第一手资料！",
    "如果有什么疑问，可以加入导航栏上的QQ群进行询问和探讨。",
    "加入QQ群可以与其他服主交流插件使用经验。"
];

// 全局变量
let currentPage = 1;
let pageSize = 6;
let currentCategory = 'discover';
let filteredPlugins = [];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 隐藏加载动画
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.visibility = 'hidden';
    }, 1500);

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
});

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
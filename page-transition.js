// 页面过渡动画
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // 排除外部链接
            if (link.hostname !== window.location.hostname) return;
            
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // 添加退出动画
            document.body.classList.add('page-exit');
            
            // 等待动画完成后跳转
            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
    
    // 页面加载时的动画
    document.body.classList.add('page-enter');
});

// 处理浏览器前进后退
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.add('page-enter');
    }
}); 
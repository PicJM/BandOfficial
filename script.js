// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 添加音乐播放功能
const musicPlayer = {
    init: function() {
        // 这里可以添加音乐播放器的初始化代码
        console.log('音乐播放器初始化');
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    musicPlayer.init();
}); 
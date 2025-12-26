import * as skinview3d from 'skinview3d';

const urlParams = new URLSearchParams(window.location.search);
const skinUrl = urlParams.get('url');

if (!skinUrl) {
    document.querySelector('h1').textContent = '❌ URL скина не указан';
} else {
    const skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 600,
        height: 600,
        skin: skinUrl
    });
    
    // Настройки управления
    skinViewer.controls.enableRotate = true;
    skinViewer.controls.enableZoom = true;
    skinViewer.controls.enablePan = false;
    
    // Анимация
    skinViewer.animation = new skinview3d.WalkingAnimation();
    skinViewer.animation.speed = 0.5;
    
    // Автовращение
    skinViewer.autoRotate = true;
    skinViewer.autoRotateSpeed = 1;
    
    // Остановка при взаимодействии
    skinViewer.controls.addEventListener('start', () => {
        skinViewer.autoRotate = false;
    });
}

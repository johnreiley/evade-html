function getRandomNumber(min, max) {
    return Math.random() * (max - min);
}

window.onload = function() {
    // document.addEventListener('mousemove', () => {
    //     Array.from(document.querySelectorAll(':hover')).forEach(el => {
    //         if (el.tagName === 'INPUT' || el.tagName === 'BUTTON' || el.tagName === 'A' || el.tagName === 'LABEL') {
    //             el.style.transition = 'opacity 0.3s';
    //             el.style.opacity = '0';
    //             el.style.pointerEvents = 'none';
    //         }
    //     })
    // });
    Array.from(document.querySelectorAll('input, button, a, label, img')).forEach((el) => {
        // el.addEventListener('click', (e) => {
        el.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.documentElement.style.overflow = 'hidden';
            // document.body.style.overflow = 'hidden';
            const elBox = el.getBoundingClientRect();
            el.style.transition = 'all 0.5s cubic-bezier(0,1.07,.91,1)';
            // el.style.opacity = '0';
            // el.style.pointerEvents = 'none';
            const placeholder = el.cloneNode(true);
            placeholder.style.opacity = 0;
            placeholder.style.pointerEvents = 'none';
            el.style.top = elBox.top + 'px';
            el.style.left = elBox.left + 'px';
            el.style.position = 'fixed';
            el.style.zIndex = '1000';
            setTimeout(() => {
                el.style.top = `${getRandomNumber(0, document.documentElement.clientHeight)}px`;
                el.style.left = `${getRandomNumber(0, document.documentElement.clientWidth)}px`;
                el.parentNode.insertBefore(placeholder, el);
            }, 1);
        });
    });
}
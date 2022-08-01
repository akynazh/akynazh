/**
 * 懒加载（完美版）可加载`<img>`、`<video>`、`<audio>`等一些引用资源路径的标签
 * @param {object} params 传参对象
 * @param {string?} params.lazyAttr 自定义加载的属性（可选）
 * @param {"src"|"background"} params.loadType 加载的类型（默认为`src`）
 * @param {string?} params.errorPath 加载失败时显示的资源路径，仅在`loadType`设置为`src`中可用（可选）
 */
 function lazyLoad(params) {
    const attr = params.lazyAttr || "lazy";
    const type = params.loadType || "src";

    /** 更新整个文档的懒加载节点 */
    function update() {
        const els = document.querySelectorAll(`[${attr}]`);
        for (let i = 0; i < els.length; i++) {
            const el = els[i];
            observer.observe(el);
        }
    }

    /**
     * 加载图片
     * @param {HTMLImageElement} el 图片节点
     */
    function loadImage(el) {
        const cache = el.src; // 缓存当前`src`加载失败时候用
        el.src = el.getAttribute(attr);
        el.onerror = function () {
            el.src = params.errorPath || cache;
        }
    }

    /**
     * 加载单个节点
     * @param {HTMLElement} el 
     */
    function loadElement(el) {
        switch (type) {
            case "src":
                loadImage(el);
                break;
            case "background":
                el.style.backgroundImage = `url(${el.getAttribute(attr)})`;
                break;
        }
        el.removeAttribute(attr);
        observer.unobserve(el);
    }

    /** 
     * 监听器 
     * [MDN说明](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
    */
    const observer = new IntersectionObserver(function(entries) {
        for (let i = 0; i < entries.length; i++) {
            const item = entries[i];
            if (item.isIntersecting) {
                loadElement(item.target);
            }
        }
    })

    update();

    return {
        observer,
        update
    }
}

// 懒加载图片src
lazyLoad({
    errorPath: "/image/lazy/errorImg.jpg"
})
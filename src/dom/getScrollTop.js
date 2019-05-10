/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
export default function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

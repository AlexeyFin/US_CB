$('.toTop').mPageScroll2id({
    scrollSpeed: 1500
});

let video = $('.main_video');
video.on('mouseover', e => {
    video.attr('controls','controls')
});
video.on('mouseout', e => {
    video.removeAttr('controls')
});
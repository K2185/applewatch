$(function(){
    var titleData = [
        {
            imgUrl: 'images/img1.png',
            bgUrl: 'images/apple1.svg'
        },
        {
            imgUrl: 'images/img2.png',
            bgUrl: 'images/apple2.svg'
        },
        {
            imgUrl: 'images/img3.png',
            bgUrl: 'images/apple3.svg'
        },
    ];

    $('.pager > ul > li').eq(0).click(function(){
        $('figure img')
            .attr('src', titleData[0].imgUrl);
        $('#title figure').css('background-image', `url(${titleData[0].bgUrl})`);
    });
    $('.pager > ul > li').eq(1).click(function(){
        $('figure img')
            .attr('src', titleData[1].imgUrl);
            $('#title figure').css('background-image', `url(${titleData[1].bgUrl})`);
    });
    $('.pager > ul > li').eq(2).click(function(){
        $('figure img')
            .attr('src', titleData[2].imgUrl);
            $('#title figure').css('background-image', `url(${titleData[2].bgUrl})`);
    });
});
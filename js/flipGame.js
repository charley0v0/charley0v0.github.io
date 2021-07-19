const imgArr = ['003','009','012','019','031','038','053','086','093'];
let newArr = [];
let imgStr = '';
let checkUrl = '';
let Start = false;


$(function(){
    //開始遊戲
    $('#start').click(function(){
        $('button').attr('disabled',true);
        StartGame();
    });

    //重新遊戲
    $('#reStart').click(function(){
        Start = false;
        $(this).css('display','none');
        $('#start').css('display','block');
        $(document).find(".card").flip(false);
    });

    //點擊卡片
    $('.card_area').on('flip:done','.card',function(){
        if(Start){
            if(checkUrl === ''){
                //第一次翻開卡片
                checkUrl = $(this).find('img').attr('src');
            }else{
                //第二次翻開卡片
                if($(this).find('img').attr('src') === checkUrl){
                }else{
                    $(this).flip(false);
                    $(`img[src="${checkUrl}"]`).parents('.card').flip(false);
                }
                checkUrl = '';
            }
        }
    });

});


//重新排序
function reSort(){
    newArr = imgArr.sort(() => Math.random() - 0.5);
    imgStr = '';
    newArr.forEach((x) => {
        imgStr += `<div class="card">
                        <div class="front">
                            back
                        </div>
                        <div class="back">
                            <img src="img/${x}.png">
                        </div>
                    </div>`;
    });
}


function StartGame(){
    checkUrl = '';
    $('#start').css('display','none');
    $('#reStart').css('display','block');
    //帶入左方原圖
    reSort();
    $('#leftArea').html(imgStr);

    //帶入左方原圖
    reSort();
    $('#rightArea').html(imgStr);

    $(document).find(".card").flip();

    let startShow = setTimeout(function(){
        $(document).find(".card").flip(true);
    },500);

    let showCount = setTimeout(function(){
        $(document).find(".card").flip(false);
        Start = true;
        $('button').attr('disabled',false);
    },5500);
    
}


let imgArr = ['003','009','012','019','031','038','053','086','093'];
let newArr = [];
let imgStr = '';

$(function(){
    $('#start').click(function(){
        StartGame();
    });
});


//重新排序
function reSort(){
    newArr = imgArr.sort(() => Math.random() - 0.5);
    imgStr = '';
    newArr.forEach((x) => {
        imgStr += `<div class="card">
                        <div class="front">
                            <img src="img/${x}.png">
                        </div>
                        <div class="back">
                            Back content
                        </div>
                    </div>`;
    });
}


function StartGame(){
    //帶入左方原圖
    reSort();
    $('#leftArea').html(imgStr);

    //帶入左方原圖
    reSort();
    $('#rightArea').html(imgStr);

    $(".card").flip();
}


'use strict';

const todayFormat = () => {
    const today = new Date();
    const answer = {};
    //new Date().toISOString().slice(0,10)
    answer.date = `${today.getFullYear()}年 ${today.getMonth()}月 ${today.getDay()}日`;
    answer.datetime =`${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
    return answer; 
}

document.getElementById("today-header").innerText = todayFormat().date;
document.getElementById("today-header").datetime = todayFormat().datetime;

//ボタンを押したらテーブルを用意する
//最初はボタン1
//献立
//メニュー 食材1 食材2 食材3 道具

const buttonOneTable = () => {
    //配列の数の内被りのない三つの数を出す

    //献立関数
    const menufunction = () => {
        const menu = ["カレー","味噌汁","サラダ","焼肉","肉じゃが"];
        const food = ["牛肉","味噌","レタス","パクチー","コリアンダー","香菜","ジャガイモ"];
        const item = ["包丁","寸胴","カセットコンロ"];
        const menuPlan = [];
        for(let i = 0;i < 5;i++){
            menuPlan.push({menu:menu[i]});
            menuPlan[i].food1 = food[Math.floor(food.length*Math.random())];
            menuPlan[i].food2 = food[Math.floor(food.length*Math.random())];
            menuPlan[i].food3 = food[Math.floor(food.length*Math.random())];
            menuPlan[i].item = item[Math.floor(item.length*Math.random())];
            //food.length内で被りのない三つの数を出す
            //ランダムを日付をseedにしたい
        };
        return menuPlan;
    };

    //thead
    const theadMakerMenu = () => {
        const tagTr = document.createElement("tr");
        const columnsName = ["メニュー","食材1","食材2","食材3","道具"];
        for(let i = 0;i < columnsName.length;i++){
            const tagTh = document.createElement("th");
            tagTh.innerText = columnsName[i];
            tagTr.appendChild(tagTh);
        }
        return tagTr
    }
    document.querySelector("thead").appendChild(theadMakerMenu());
    
    //tbody
    const tbodyMakerMenu = () => {
        const values = menufunction();
        for(let i = 0;i < 5;i++){
            const tagTr = document.createElement("tr");
            const value = values[i]
            for(let j = 0;j < 5;j++){
                const tagTd = document.createElement("td");
                tagTd.innerText = value[Object.keys(value)[j]];
                tagTr.appendChild(tagTd);
                document.querySelector("tbody").appendChild(tagTr);
            }
        }
    }
    tbodyMakerMenu();
}

buttonOneTable()

const buttonTwoTable = () => {
    //チーム関数
    //7列
    const menufunction = () => {
        const team = ["チーム1","チーム2","チーム3","チーム4","チーム5","チーム6","チーム7"];
        const member = ["鈴木","佐藤","田中","斉藤","山田","塚本","高田","飯田","庄田","高橋"];
        const item = ["機械加工","溶接","組付","事務","仕上げ","分析","保全","設計","休暇"];
        const menuPlan = [];
        for(let i = 0;i < 7;i++){
            menuPlan.push({team:team[i]});
            menuPlan[i].member1 = member[Math.floor(member.length*Math.random())];
            menuPlan[i].member2 = member[Math.floor(member.length*Math.random())];
            menuPlan[i].member3 = member[Math.floor(member.length*Math.random())];
            menuPlan[i].item = item[Math.floor(item.length*Math.random())];
            //food.length内で被りのない三つの数を出す
            //ランダムを日付をseedにしたい
        };
        return menuPlan;
    };

    //thead
    const theadMakerMenu = () => {
        const tagTr = document.createElement("tr");
        const columnsName = ["チーム","メンバー1","メンバー2","メンバー3","作業"];
        for(let i = 0;i < columnsName.length;i++){
            const tagTh = document.createElement("th");
            tagTh.innerText = columnsName[i];
            tagTr.appendChild(tagTh);
        }
        return tagTr
    }
    document.querySelector("thead").appendChild(theadMakerMenu());
    
    //tbody
    const tbodyMakerMenu = () => {
        const values = menufunction();
        for(let i = 0;i < 7;i++){
            const tagTr = document.createElement("tr");
            const value = values[i]
            for(let j = 0;j < 5;j++){
                const tagTd = document.createElement("td");
                tagTd.innerText = value[Object.keys(value)[j]];
                tagTr.appendChild(tagTd);
                document.querySelector("tbody").appendChild(tagTr);
            }
        }
    }
    tbodyMakerMenu();
}


//削除＆作成
const deleteTable = () => {
    const table = document.querySelector("table");
    const theadD = document.querySelector("thead");
    const tbodyD = document.querySelector("tbody");
    table.removeChild(theadD);
    table.removeChild(tbodyD);
    const theadC = document.createElement("thead");
    const tbodyC = document.createElement("tbody");
    table.appendChild(theadC);
    table.appendChild(tbodyC);
};

//削除＆作成
// const deleteMain = () => {
//     const main = document.querySelector("main");
//     const tableD = document.querySelector("table");
//     main.removeChild(tableD);
// };

// const imageChenger = () => {
//     const imgTag = document.createElement("img");
//     const imgRandom = () => {
//         return Math.random() > 0.5 ? "computer_note_good.png" : "computer_note_bad.png";
//     }
//     imgTag.src = imgRandom();
//     document.querySelector("main").appendChild(imgTag);
// };

// document.addEventListener

// const tbody = document.querySelector("tbody")
// const table = document.querySelector("table");
// table.removeChild(tbody)

//削除した後にtheadとtbodyを再作成する

document.getElementById("button-one").addEventListener("click",() => {
    deleteTable();
    buttonOneTable();
});

document.getElementById("button-two").addEventListener("click",() => {
    deleteTable();
    buttonTwoTable();
});

// document.getElementById("button-three").addEventListener("click",() => {
//     deleteTable();
//     imageChenger();
// });


{/* <li><button id="button-one">献立</button></li>
<li><button id="button-two">メンバー表</button></li>
<li><button id="button-three">img</button></li> */}

{/* <script type='text/javascript'>
function handleDownload() {
    var content = 'あいうえお';
    var blob = new Blob([ content ], { "type" : "text/plain" });
            
    if (window.navigator.msSaveBlob) { 
        window.navigator.msSaveBlob(blob, "test.txt"); 
        
        // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
        window.navigator.msSaveOrOpenBlob(blob, "test.txt"); 
    } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}
</script>
<a id="download" href="#" download="test.txt" onclick="handleDownload()">ダウンロード</a> */}

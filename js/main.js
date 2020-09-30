'use strict';
const title = ()=>{
  console.log('========================');
  console.log('現在持っているタスク一覧');
  console.log('========================');
}
const catalogs = ['掃除','買い物','散歩'];
const fcatalogs = (i) =>{
  for(let i = 0;i < catalogs.length; i++){
    console.log(`${i}:${catalogs[i]}`);
  }
}
title();
fcatalogs();

while(true){
let task = prompt("タスクを入力してください");
alert("新しいタスクを追加しました");
catalogs.push(task);
title();
fcatalogs();
let result = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
}
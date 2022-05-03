const students = [
    {
        username: 'asd',
        age: 18,
        sex: 'male',
    },
    {
        username: 'fghgfn',
        age: 8,
        sex: 'male',
    }, {
        username: 'dsgs',
        age: 56,
        sex: 'female',
    }, {
        username: 'dgdrg',
        age: 7,
        sex: 'female',
    },
];
const oList = document.getElementById('list');
let html = '';
for (let i = 0; i < students.length; i++) {
    html += `<li>我的名字是：${students[i].username},
    我几年已经${students[i].age}岁了，
    我是${students[i].sex}的。</li>`
}


oList.innerHTML = html;



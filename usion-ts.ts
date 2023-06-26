const button = document.querySelector('button')
// !告诉编译器这个变量不会为null或者undefined
// asHTMLInputElement 指令类型
// +'123' 可以把字符串强制转换为数字
const input1 = document.getElementById('num1')!as HTMLInputElement
const input2 = document.getElementById('num2')!as HTMLInputElement

function add(num1 : number, num2 :number) {
    return num1 + num2
}

button!.addEventListener('click', e => {
    console.log(add(+input1.value, +input2.value));
})
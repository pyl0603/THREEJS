// 引入THREE.js
import * as THREE from 'three'
// 引入相机轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
const stats = new Stats()
document.body.appendChild(stats.domElement)

// 引入gui动画库
import * as dat from 'dat.gui';
const gui = new dat.GUI();


// 创建一个三维场景 scene
const scene = new THREE.Scene()
// 给三维场景添加物体    xyz轴
const boxGeometry = new THREE.BoxGeometry(50, 50, 50)
// 给物体添加材质 
// MeshBasicMaterial：不受光照影响
// MeshLambertMaterial:受光照影响
const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    // transparent:true,//允许透明
    // opacity:.5,//透明度值
    side:THREE.DoubleSide,
    shininess:100,//高光强度属性
    specular:0x444444,//高光部分的颜色
})
// 创建一个网格模型,用来表示物体
const mesh = new THREE.Mesh(boxGeometry, material)
mesh.position.set(0, 10, 0)
// 场景添加物体
scene.add(mesh)






// 创建一个辅助三维坐标轴 1.size
const asesHelper = new THREE.AxesHelper(150);
// 坐标轴对象添加到三维场景中
scene.add(asesHelper)

// 创建点光源
// 1.光源颜色
// 2.光源强度  0-1
const pointLight = new THREE.PointLight(0xffffff, 1)
// 点光源的位置
pointLight.position.set(400, 200, 300)//放在x轴上
// 光源添加到场景
scene.add(pointLight)

// 可视化点光源
// 1.目标
// 2.可视化大小
const pointLightHelper = new THREE.PointLightHelper(pointLight, 100, 0xffffff)
scene.add(pointLightHelper)

// // 添加一个环境光:环境光没有方向,不是指向性的
// const ambient = new THREE.AmbientLight(0xffffff, .2)
// scene.add(ambient)

// // 添加一个平行光
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
// directionalLight.position.set(50, 100, 60)
// // directionalLight.target = mesh//默认坐标原点,可以设置目标
// scene.add(directionalLight)
// // 可视化平行光
// // 1.目标
// // 2.可视化大小
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xffffff)
// scene.add(directionalLightHelper)


// 定义相机输出的 画布尺寸
// 设置相机的四个参数
//  1.视锥体角度
//  2.宽高比
//  3.近距离可视
//  4.远距离可视
// 创建一个透视投影相机对象 
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 6000)
// 设置相机的位置
camera.position.set(100, 100, 100)
// 定义相机的视线  观察目标点的坐标


camera.lookAt(0, 0,0)//坐标原点
// camera.lookAt(0,10,0)//y轴
// camera.lookAt(mesh.position)//指向网格模型





// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer({
    antialias:true//设置抗锯齿
});

// 获取屏幕的对应设备像素比
renderer.setPixelRatio(window.devicePixelRatio)
//设置背景颜色
renderer.setClearColor(0x444444)


renderer.setSize(window.innerWidth, window.innerHeight)//设置canvas画布款宽高度
renderer.render(scene, camera)//渲染哪一个场景哪一个相机。执行一个渲染操作,类比相机的按快门
document.body.appendChild(renderer.domElement)//把渲染结果canvas画布,也就是所谓的照片,添加到页面中

console.log(window.devicePixelRatio);
// 创建一个相机控件对象 轨道控制器
// 1.改变那个相机
// 2.监控那个范围
const controls = new OrbitControls(camera, renderer.domElement)
// 发生改变重新渲染画面
// controls.addEventListener('change', () => {
//     renderer.render(scene, camera)//执行渲染操作
// })
const clock = new THREE.Clock()//创建一个时钟对象
// 渲染循环
function render() {
    stats.update()
    const spt = clock.getDelta() * 1000//单位:毫秒
    // 实现周期性循环执行
    // 默认每秒执行60次
    window.requestAnimationFrame(render)// 参数是函数名
    // mesh.rotateY(0.01)//周期性每次旋转0.01
    // mesh.rotateZ(0.01)//周期性每次旋转0.01
    renderer.render(scene, camera)//周期性执行相机的渲染功能,更新canvas画布上的内容
}
render()
window.onresize = () => {
    // 浏览器画面发生改变更新Canvas画布尺寸
    renderer.setSize(window.innerWidth, window.innerHeight)
    // 浏览器发生改变更新相机的宽高比
    camera.aspect = window.innerWidth / window.innerHeight
    // 更新摄像机投影矩阵。在任何参数被改变以后必须被调用。
    camera.updateProjectionMatrix()
}
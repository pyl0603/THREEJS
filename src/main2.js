// 引入THREE.js
import * as THREE from 'three'
// 引入相机轨道控制器
import {OrbitControls} from  'three/examples/jsm/controls/OrbitControls'
// 创建一个三维场景 scene
const scene = new THREE.Scene()
// 给三维场景添加物体    xyz轴
const boxGeometry = new THREE.BoxGeometry(100, 100, 100)
// 给物体添加材质 
// MeshBasicMaterial：不受光照影响
// MeshLambertMaterial:受光照影响
const material = new THREE.MeshLambertMaterial({
    color: 0xff0000,
    // transparent:true,//允许透明
    // opacity:.5,//透明度值
})
// 创建一个网格模型,用来表示物体
const mesh = new THREE.Mesh(boxGeometry, material)
mesh.position.set(0,10,0)
// 场景添加物体
scene.add(mesh)

// 创建一个辅助三维坐标轴 1.size
const asesHelper = new THREE.AxesHelper(150);
// 坐标轴对象添加到三维场景中
scene.add(asesHelper)

// 创建点光源
// 1.光源颜色
// 2.光源强度  0-1
const pointLight = new THREE.PointLight(0xffffff,0.5)
// 点光源的位置
pointLight.position.set(200,100,300)//放在x轴上
// 光源添加到场景
scene.add(pointLight)
// 定义相机输出的 画布尺寸
// 设置相机的四个参数
//  1.视锥体角度
//  2.宽高比
//  3.近距离可视
//  4.远距离可视
// 创建一个透视投影相机对象 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置相机的位置
camera.position.set(200,200,200)
// 定义相机的视线  观察目标点的坐标


camera.lookAt(0,0,0)//坐标原点
// camera.lookAt(0,10,0)//y轴
// camera.lookAt(mesh.position)//指向网格模型

// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight)//设置canvas画布款宽高度
renderer.render(scene,camera)//渲染哪一个场景哪一个相机。执行一个渲染操作,类比相机的按快门
document.body.appendChild(renderer.domElement)//把渲染结果canvas画布,也就是所谓的照片,添加到页面中


// 创建一个相机控件对象 轨道控制器
// 1.改变那个相机
// 2.监控那个范围
const controls = new OrbitControls(camera,renderer.domElement)

// 发生改变重新渲染画面
controls.addEventListener('change',()=>{
    renderer.render(scene,camera)//执行渲染操作
})
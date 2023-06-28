// 引入THREE.js
import * as THREE from 'three'
import Sperite from './module'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import tag from './tag.js'

const modele = Sperite
const gridHelper = new THREE.GridHelper(300, 50, 0x00ffff, 0x004444)
const mesh = modele
// const mesh2 = Group2
// 引入相机轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MapControls } from 'three/examples/jsm/controls/MapControls'
import Stats from 'three/examples/jsm/libs/stats.module'
const stats = new Stats()
document.body.appendChild(stats.domElement)

// 引入gui动画库
import * as dat from 'dat.gui';
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
const gui = new dat.GUI();


// 创建一个三维场景 scene
const scene = new THREE.Scene()




scene.add(mesh)

// 创建一个辅助三维坐标轴 1.size
const asesHelper = new THREE.AxesHelper(150);
// 坐标轴对象添加到三维场景中
scene.add(asesHelper)

// 创建点光源
// 1.光源颜色
// 2.光源强度  0-1
// const pointLight = new THREE.PointLight(0xffffff, .3)
// // 点光源的位置
// pointLight.position.set(400, 200, 300)//放在x轴上
// // 光源添加到场景
// scene.add(pointLight)

// // // 可视化点光源
// // // 1.目标
// // // 2.可视化大小
// // const pointLightHelper = new THREE.PointLightHelper(pointLight, 100, 0xffffff)
// // scene.add(pointLightHelper)

// 添加一个环境光:环境光没有方向,不是指向性的
const ambient = new THREE.AmbientLight(0xffffff, .2)
scene.add(ambient)

// const spotLight = new THREE.SpotLight(0xffffff,1.0)
// spotLight.angle = Math.PI/3//发散角度
// spotLight.position.set(0,50,0)

// spotLight.target.position.set(50,0,0)
// scene.add(spotLight.target)
// const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper)
// scene.add(spotLight)
// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, .5)
directionalLight.castShadow = true//光源是否投射阴影
directionalLight.position.set(-100, 100, 100)
// directionalLight.target = mesh//默认坐标原点,可以设置目标
directionalLight.shadow.camera.left = -100
directionalLight.shadow.camera.right = 100
directionalLight.shadow.camera.top = 100
directionalLight.shadow.camera.bottom = -100
directionalLight.shadow.camera.near = .5
directionalLight.shadow.camera.far = 100 * 4
directionalLight.shadow.mapSize.set(2222, 2222)
directionalLight.shadow.radius = 2

const directionalLightHlper = new THREE.DirectionalLightHelper(directionalLight)
// scene.add(directionalLightHlper)
const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)


// scene.add(cameraHelper)
scene.add(directionalLight)
// // 可视化平行光
// // 1.目标
// // 2.可视化大小
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xffffff)
// scene.add(directionalLightHelper)
// gridHelper.position.set(0, -1, 0)
// scene.add(gridHelper)

// 定义相机输出的 画布尺寸
// 设置相机的四个参数
//  1.视锥体角度
//  2.宽高比
//  3.近距离可视
//  4.远距离可视
// 创建一个透视投影相机对象 
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 3000)

const k = window.innerWidth / window.innerHeight
const s = 600

// const camera = new THREE.OrthographicCamera(-k * s, k * s, s, -s, 1, 2000)


// camera.position.set(-206.41210022464386,148.07946752703523,194.84998377665232)

// 定义相机的视线  观察目标点的坐标

const x = 113.51, y = 33.88
// 设置相机的位置
// camera.position.set(x, y, 100)
camera.position.set(200, 200, 200)
// camera.up.set(0,-1,0)
camera.lookAt(0, 0, 0)//坐标原点
// camera.lookAt(x, y, 0)//坐标原点
// camera.lookAt(0,10,0)//y轴
// camera.lookAt(mesh.position)//指向网格模型


// 创建一个WebGL渲染器

const renderer = new THREE.WebGLRenderer({
    antialias: true,//设置抗锯齿
    preserveDrawingBuffer: true,
});
// 后处理
const composer = new EffectComposer(renderer)//指定哪一个渲染器需要后处理
const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

// const glitchPass = new GlitchPass()
// composer.addPass(glitchPass)


// // const unrealBloomPass =  new UnrealBloomPass(new THREE.Vector2(window.innerWidth,window.innerHeight))
// // composer.addPass(unrealBloomPass)
// // unrealBloomPass.strength = 2
// const gamaPass = new  ShaderPass(GammaCorrectionShader)
// composer.addPass(gamaPass)

// // const FXAAPss = new ShaderPass(FXAAShader)
// const pixelRatio = renderer.getPixelRatio()
// // FXAAPss.uniforms.resolution.value.x = 1/(window.innerWidth.pixelRatio) 
// // FXAAPss.uniforms.resolution.value.y =1/(window.innerHeight.pixelRatio)
// // composer.addPass(FXAAPss)

// const smaaPass = new SMAAPass(window.innerWidth*pixelRatio,window.innerHeight*pixelRatio)
// composer.addPass(smaaPass)

const v2 = new THREE.Vector2(window.innerWidth, window.innerHeight)
const outLinePass = new OutlinePass(v2, scene, camera)
// outLinePass.selectedObjects = [modele.children[0]]
// outLinePass.visibleEdgeColor.set(0xffff00)
// outLinePass.edgeThickness = 1//厚度
// outLinePass.edgeStrength = 6//亮度
// outLinePass.pulsePeriod =1//闪烁

composer.addPass(outLinePass)


const cssDRenderer = new CSS2DRenderer()
cssDRenderer.domElement.style.position = 'absolute'
cssDRenderer.domElement.style.top = '0px'
cssDRenderer.domElement.style.pointerEvents = 'none'
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.shadowMap.enabled = true//渲染器开启阴影渲染
// 设置编码方式和gltf贴图包旨一直 解决渲染颜色偏差的问题
renderer.outputColorSpace = THREE.SRGBColorSpace

// 获取屏幕的对应设备像素比
renderer.setPixelRatio(window.devicePixelRatio)
//设置背景颜色
// renderer.setClearColor(0x444444)//1.颜色2.透明度
// window.addEventListener('click',()=>{
//     const link = document.createElement('a')
//     link.href =renderer.domElement.toDataURL('image/png') 
//     link.download ='threejs.png'
//     link.click()
// })
cssDRenderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(window.innerWidth, window.innerHeight)//设置canvas画布款宽高度
renderer.render(scene, camera)//渲染哪一个场景哪一个相机。执行一个渲染操作,类比相机的按快门
document.body.appendChild(renderer.domElement)//把渲染结果canvas画布,也就是所谓的照片,添加到页面中
// ddocument.getElementById('.tag').appendChild(renderer.domElement)//把渲染结果canvas画布,也就是所谓的照片,添加到页面中
document.body.appendChild(cssDRenderer.domElement)

// 创建一个相机控件对象 轨道控制器
// 1.改变那个相机
// 2.监控那个范围
const controls = new OrbitControls(camera, renderer.domElement)
// const mapControls = new MapControls(camera,renderer.domElement)
// mapControls.enablePan =false
// mapControls.enableZoom = false
// mapControls.enableRotate = false
// controls.minDistance=100
// controls.maxDistance=1000
// controls.target.set(x, y, 0)
// controls.update()
// 发生改变重新渲染画面
// controls.addEventListener('change', () => {
//     renderer.render(scene, camera)//执行渲染操作
// })
const clock = new THREE.Clock()//创建一个时钟对象
// 渲染循环
// modele.children[0].rotation.set(-Math.PI/2,0,0)

// modele.children[1].position.set(0,20,0)
function render() {
cssDRenderer.render(scene,camera)

    // console.log(camera.position);
    // console.log(controls.getDistance());
    // console.log(camera.position);
    stats.update()
    const spt = clock.getDelta() * 1000//单位:毫秒
    // 实现周期性循环执行
    // 默认每秒执行60次
    window.requestAnimationFrame(render)// 参数是函数名
    // mesh.rotateY(0.01)//周期性每次旋转0.01
    // mesh.rotateZ(0.01)//周期性每次旋转0.01
    // renderer.render(scene, camera)//周期性执行相机的渲染功能,更新canvas画布上的内容
    composer.render()

}
render()
window.onresize = () => {
    switch (camera.type) {
        case 'OrthographicCamera':
            const k = window.innerWidth / window.innerHeight
            camera.left = -k * s
            camera.right = k * s
            renderer.setSize(window.innerWidth, window.innerHeight)
            // renderer.setSize(600, 400)
            camera.updateProjectionMatrix()
            break
        case 'PerspectiveCamera':
            // 浏览器画面发生改变更新Canvas画布尺寸
            renderer.setSize(window.innerWidth, window.innerHeight)
            // 浏览器发生改变更新相机的宽高比
            camera.aspect = window.innerWidth / window.innerHeight
            // 更新摄像机投影矩阵。在任何参数被改变以后必须被调用。
            camera.updateProjectionMatrix()
            break
        default: console.log('相机类型');
    }




}
let chooseObj = null

window.addEventListener('click',e =>{
    const px = e.offsetX
    const py = e.offsetY
    const x = (px / window.innerWidth )*2 -1
    const y = -(py / window.innerHeight )*2 +1
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(new THREE.Vector2(x,y),camera)
    const cunchu = modele.children[0].getObjectByName('存储罐')

    
    for(let i = 0 ; i < cunchu.children.length ; i ++) {
        const group = cunchu.children[i]
        group.traverse(obj=>{
            if(obj.isMesh){
                obj.ancestors = group
            }
           
        })
    }
    const intersects =   raycaster.intersectObjects(cunchu.children)
    if(intersects.length>0){
        // !intersects&&intersects[0].object.ancestors.children[14].remove(tag)
        // console.log(intersects&&intersects[0].object.ancestors.children[14]);
        outLinePass.selectedObjects = [intersects[0].object.ancestors]
        chooseObj = intersects[0].object.ancestors
        modele.getObjectByName(intersects[0].object.ancestors.name+'标注').add(tag)
        
        
    }else{
        if(chooseObj){
            outLinePass.selectedObjects =[]
            const a = chooseObj.getObjectByName(chooseObj.name+'标注')

            a.remove(tag)
        }
    }
    
})


// const raycaster = new THREE.Raycaster(new THREE.Vector3(-100, 0, 0), new THREE.Vector3(1, 0, 0))

// const intersects = raycaster.intersectObjects([modele.children[0], modele.children[1], modele.children[2]])
// if (intersects.length = 0) {
//     intersects[0].object.material.color.set(0xff0000)
//     intersects[1].object.material.color.set(0xff0000)
// }

// window.addEventListener('click', e => {
//     const px = e.offsetX
//     const py = e.offsetY

//     const x = (px / window.innerWidth) * 2 - 1
//     const y = -(py / window.innerHeight) * 2 + 1
//     const raycaster = new THREE.Raycaster()
//     raycaster.setFromCamera(new THREE.Vector2(x, y), camera)

//     const intersects = raycaster.intersectObjects([modele.children[1], modele.children[2]])
    
//     if (intersects.length) {
//         console.log(intersects);
//         intersects[0].object.change()
//     }





//     // const c = modele.getObjectByName('存储罐')


//     // for (let i = 0; i<c.children.length;i++){
//     //     const group = c.children[i]
//     //     group.traverse(obj=>{
//     //         if(obj.isMesh){
//     //             obj.ancestora = group
//     //         }
//     //     })
//     // }
//     // const intersects = raycaster.intersectObjects(c.children)
//     // console.log(intersects);
//     // if(intersects.length){
//     //     outLinePass.selectedObjects = [intersects[0].object.ancestora]
//     // }
//     // const intercetct = raycaster.intersectObjects([modele.children[0], modele.children[1], modele.children[2]])
//     //         if(intercetct.length > 0) {
//     //             intercetct.map(i=>{
//     //                 i.object.material.color.set(0xff0000)
//     //             })
//     //         }


// })


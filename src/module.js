import * as THREE from "three";

// 引入gltf加载器
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { toHalfFloat } from "three/src/extras/DataUtils";
import * as TWEEN from '@tweenjs/tween.js'
import * as dat from "dat.gui";
import data from "./data.js";
import tag from "./tag.js";
import createSprite from "./sprite.js";
import createCanvas from "./canvas.js";
const gui = new dat.GUI();

// const textureCube = new THREE.CubeTextureLoader()
//     .setPath('./环境贴图/环境贴图6/')
//     .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg',])
const modele = new THREE.Group();
const loader = new GLTFLoader();
// loader.load('./机械装配动画.glb', gltf => {
//     gltf.scene.traverse((obj) => {
//         if (obj.isMesh) {
//             obj.material.metalness = 1.0
//             obj.material.roughness = 0.5;
//             obj.material.envMap = textureCube;
//             obj.material.envMapIntensity = 1.0;

//         }
//     })
//     modele.add(gltf.scene)

//     const clip = gltf.animations[0];
//     const duration = clip.duration;//默认持续时间

//     const mixer = new THREE.AnimationMixer(gltf.scene)//播放器1.有动画的模型对象
//     const clipAction = mixer.clipAction(gltf.animations[0])//播放器添加关键帧动画
//     clipAction.play()
//     const clock = new THREE.Clock()
//     function loop() {
//         const frameT = clock.getDelta()
//         mixer.update(frameT)
//         requestAnimationFrame(loop)
//     }
//     loop()

// window.addEventListener('click', e => {
//     clipAction.paused?clipAction.paused = false:clipAction.paused = true
// })

// })

// const boxGeomety = new THREE.BoxGeometry(50, 50, 50)
// const material = new THREE.MeshLambertMaterial({
//     color: 0x00ffff
// })
// const mesh = new THREE.Mesh(boxGeomety, material)
// mesh.name = 'Box'
// modele.add(mesh)
// const time = [0, 3, 6]//设置三个时间点
// const values = [0, 0, 0, 100, 0, 0, 0, 0, 100]//设置位置
// const positionKF = new THREE.KeyframeTrack('Box.position', time, values)//操纵对象的对应属性,时间点,位置

// const colorKef = new THREE.KeyframeTrack('Box.material.color', [2, 5], [1, 0, 0, 0, 0, 1])

// const animation = new THREE.AnimationClip('text', 6, [positionKF, colorKef])//1.名字2.时间3.关键帧数据

// const mixer = new THREE.AnimationMixer(modele)//播放器1.有动画的模型对象
// const clipAction = mixer.clipAction(animation)//播放器添加关键帧动画
// clipAction.play()
// clipAction.loop = THREE.LoopOnce//只执行一次动画
// clipAction.clampWhenFinished = true//停留在结束的位置
// clipAction.time = 3

// gui.add(clipAction,'timeScale',0,10)
// gui.add(clipAction,'time',0,10)

// let i = true
// window.addEventListener('click', e => {
//     if (i) {
//         clipAction.paused = true
//         i = false
//     }else{
//         clipAction.paused = false
//         // clipAction.play()
//         i = true
//     }
// })
// const geometry = new  THREE.BoxGeometry(50,50,50)

// const target1 = new THREE.BoxGeometry(50,200,50).attributes.position
// const target2 = new THREE.BoxGeometry(10,50,10).attributes.position
// geometry.morphAttributes.position = [target1,target2]//变形的目标

// const material = new THREE.MeshLambertMaterial({
//     color:0x00ffff
// })
// const mesh = new THREE.Mesh(geometry,material)

// mesh.name = 'Box'
// const positionKF1 = new THREE.KeyframeTrack('Box.morphTargetInfluences[0]',[0,5],[0,1])
// const positionKF2= new THREE.KeyframeTrack('Box.morphTargetInfluences[1]',[5,10],[0,1])
// const clip = new THREE.AnimationClip('text',10 ,[positionKF1,positionKF2])
// const mixer = new THREE.AnimationMixer(mesh)
// const clipAction = mixer.clipAction(clip)
// clipAction.play()

// const clock = new THREE.Clock()
// function loop () {
//     requestAnimationFrame(loop)
//     const frameT = clock.getDelta();
//     mixer.update(frameT)
// }
// loop()

// const obj = {
//     t1:0,
//     t2:0
// }
// gui.add(obj,'t1',0,1).name('变形目标1').onChange(e=>{
//     mesh.morphTargetInfluences[0] = e
// })
// gui.add(obj,'t2',0,1).name('变形目标2').onChange(e=>{
//     mesh.morphTargetInfluences[1] = e
// })
// modele.add(mesh)

// loader.load("./人.glb", (gltf) => {
//   modele.add(gltf.scene);

//   const mesh = gltf.scene.children[0];
//   console.log(mesh);
//   const tArr = mesh.geometry.morphAttributes.position;
//   const obj = {};
//   for (let i = 0; i < tArr.length; i++) {
//     obj[`t${i}`] = 0;
//     gui.add(obj, `t${i}`, 0, 1).onChange((e) => {
//       mesh.morphTargetInfluences[i] = e;
//     });
//   }
// });

// const Bone1 = new THREE.Bone();
// const Bone2 = new THREE.Bone();
// const Bone3 = new THREE.Bone();
// Bone1.add(Bone2);
// Bone2.add(Bone3);
// Bone1.position.set(50, 0, 50);

// Bone2.position.y = 60;
// Bone3.position.y = 30;
// modele.add(Bone1)
// const skeletonHelper =new THREE.SkeletonHelper(modele)
// modele.add(skeletonHelper)

// gui.add(Bone1.rotation,'x',0,Math.PI/6).name('关节1')
// gui.add(Bone2.rotation,'x',0,Math.PI/6).name('关节2')
// gui.add(Bone3.rotation,'x',0,Math.PI/6).name('关节3')

// loader.load("./士兵.glb", (gltf) => {
//   modele.add(gltf.scene);
//   const index = [];

//   for (let i = 0; i < gltf.animations.length; i++) {
//     index[i] = i;
//     gui
//       .add(index, [i], 0, 1)
//       .name(gltf.animations[i].name)
//       .onChange((e) => {
//         const mixer = new THREE.AnimationMixer(gltf.scene);

//         const clil = mixer.clipAction(gltf.animations[i]);
//         clil.weight = 0;
//         clil.stop();
//         clil.play();
//         clil.weight = 1;

//         const clock = new THREE.Clock();
//         function loop() {
//           mixer.update(clock.getDelta());
//           requestAnimationFrame(loop);
//         }
//         loop();
//       });
//   }
// });


// const geometry = new THREE.BoxGeometry(50,50,50)
// const material = new THREE.MeshLambertMaterial({
//     color:0x00ffff
// })
// const mesh = new THREE.Mesh(geometry,material)

// new TWEEN.Tween(mesh.position)
// .to({z:100},2000)
// .start()

// modele.add(mesh)
// loader.load('./工厂.glb',gltf=>{
//     modele.add(gltf.scene)
// })

 const texture =new THREE.TextureLoader().load('./img/earth.jpg')
const sphereGeomety = new THREE.SphereGeometry(50,50)
const material = new THREE.MeshLambertMaterial({
  map:texture,
  transparent:true,
  opacity:0,
})

new TWEEN.Tween({opacity:material.opacity}).to({
  opacity:1.0
},3000).onUpdate(e=>{
  material.opacity = e.opacity
}).start()

const mesh = new THREE.Mesh(sphereGeomety,material)
modele.add(mesh)
export default modele;

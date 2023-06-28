import *as THREE from 'three'

// 引入gltf加载器
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { toHalfFloat } from 'three/src/extras/DataUtils';
import data from './data.js';
const modele = new THREE.Group()


const loader = new GLTFLoader()

loader.load('./工厂.glb', (gltf) => {
    modele.add(gltf.scene)

    const div = document.getElementById('tag')
    const tag = new CSS2DObject(div)
    div.style.position = 'absolute'
    div.style.top = '-90px'
    div.style.left = '-5px'
    div.style.display = 'block'
    console.log(div.style.display);
    const obj = gltf.scene.getObjectByName('设备B标注')
    const axesHleper = new THREE.AxesHelper(30)
    obj.add(axesHleper)
    obj.add(tag)

})


export default modele
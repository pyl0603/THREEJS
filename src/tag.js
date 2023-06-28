import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
    const div = document.getElementById('tag')
    div.style.position = 'absolute'
    div.style.top = '-90px'
    div.style.left = '-5px'
    const tag = new CSS2DObject(div)
export default tag
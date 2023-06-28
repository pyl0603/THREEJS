import *as THREE from 'three'

function createSprite(obj,state,i){
    let texture
    const textLoader = new THREE.TextureLoader()
    switch(state){
        case '警告' :
            texture = textLoader.load('./警告.png')
        break;
        case '故障':
            texture = textLoader.load('./故障.png')
        break;
        default:console.log('无状态码');
    }

    
    const spriteMater = new THREE.SpriteMaterial({
        map: texture
    })
    const sprite = new THREE.Sprite(spriteMater)
    sprite.scale.set(5, 5, 1)
    sprite.position.y = 5 / 2
    
    obj.add(sprite)

}
export default createSprite
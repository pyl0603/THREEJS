import *as THREE from 'three'

const Group = new THREE.Group()

for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(40, 100, 20)

    const matarial = new THREE.MeshLambertMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: .5
    })
    const mesh = new THREE.Mesh(geometry, matarial)
    mesh.position.x = i * 50
    Group.add(mesh)
}


const Group2 = new THREE.Group()

for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(40, 80, 20)

    const matarial = new THREE.MeshLambertMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: .5
    })
    const mesh = new THREE.Mesh(geometry, matarial)
    mesh.position.x = i * 50
    Group2.add(mesh)
}
Group2.position.set(0,0,100)


const modele = new THREE.Group()
modele.translateX(-100)
modele.add(Group, Group2)
export default modele 
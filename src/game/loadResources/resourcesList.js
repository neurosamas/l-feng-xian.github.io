export default function resourcesList() {
    return [
        {
            type: 'gltf',
            path: '/game.glb',
            name: 'plan',
            load: true,
            physicsType: 'fixed',
            physicsModel: 'trimesh',
            addPhysics: true,
            position: {x: 0, y: 0, z: 0},
            castShadow: false,
            receiveShadow: true,
        },
        {
            type: 'mash',
            name: 'mash1',
            load: false,
            physicsType: 'dynamic',
            physicsModel: 'ball',
            addPhysics: true,
            position: {x: 1.5, y: 4.0, z:0.0},
            size: {radius: 0.5, widthSegments: 32, heightSegments: 16},
            castShadow: true,
            receiveShadow: true,
        },
        {
            type: 'mash',
            name: 'mash2',
            load: false,
            physicsType: 'dynamic',
            physicsModel: 'cuboid',
            addPhysics: true,
            position: {x: 1, y: 4.0, z:2.0},
            size: {width: 1, height : 1, depth : 1},
            castShadow: true,
            receiveShadow: true,
        },
    ]
}
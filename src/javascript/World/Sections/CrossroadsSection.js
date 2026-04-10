import * as THREE from 'three'

export default class CrossroadsSection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.objects = _options.objects
        this.areas = _options.areas
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Set up
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        this.setStatic()
        this.setBoards()
        this.setTiles()
    }

    setBoards()
    {
        this.boards = {}
        
        const createBoard = (textureName, x, y, rotationZ, href) => {
            const texture = this.resources.items[textureName]
            texture.magFilter = THREE.NearestFilter
            texture.minFilter = THREE.LinearFilter
            texture.needsUpdate = true
            
            // Adjust materials to look floating and cool
            const material = new THREE.MeshBasicMaterial({ transparent: true, alphaMap: texture, color: 0xffffff, depthWrite: false })
            const geometry = new THREE.PlaneGeometry(3, 3 * (128 / 512))
            const mesh = new THREE.Mesh(geometry, material)
            
            // Position near the center
            mesh.position.set(this.x + x, this.y + y, 2.5)
            mesh.rotation.z = rotationZ
            // Make them face the camera slightly
            mesh.rotation.x = Math.PI * 0.25
            mesh.matrixAutoUpdate = false
            mesh.updateMatrix()
            this.container.add(mesh)

            // Gamification Area (Teleport or Link)
            const area = this.areas.add({
                position: new THREE.Vector2(this.x + x, this.y + y),
                halfExtents: new THREE.Vector2(2, 2)
            })
            area.on('interact', () => {
                if(href.startsWith('#')) {
                    window.location.hash = href
                } else {
                    window.open(href, '_blank')
                }
            })
            return { mesh, area }
        }

        this.boards.games = createBoard('crossroadsGamesLabelTexture', 4, 1, 0, '#games')
        this.boards.services = createBoard('crossroadsServicesLabelTexture', -4, -1, 0, '#services')
        this.boards.contact = createBoard('crossroadsContactLabelTexture', 0, -4, 0, '#contact')
        this.boards.account = createBoard('crossroadsAccountLabelTexture', 4, 4, 0, '#account')
    }

    setStatic()
    {
        this.objects.add({
            base: this.resources.items.crossroadsStaticBase.scene,
            collision: this.resources.items.crossroadsStaticCollision.scene,
            floorShadowTexture: this.resources.items.crossroadsStaticFloorShadowTexture,
            offset: new THREE.Vector3(this.x, this.y, 0),
            mass: 0
        })
    }

    setTiles()
    {
        // To intro
        this.tiles.add({
            start: new THREE.Vector2(this.x, - 10),
            delta: new THREE.Vector2(0, this.y + 14)
        })

        // To projects (Games)
        this.tiles.add({
            start: new THREE.Vector2(this.x + 12.5, this.y),
            delta: new THREE.Vector2(17.5, 0)
        })

        // To playground (Services)
        this.tiles.add({
            start: new THREE.Vector2(this.x - 13, this.y),
            delta: new THREE.Vector2(- 25, -4)
        })

        // To account
        this.tiles.add({
            start: new THREE.Vector2(this.x + 4, this.y + 4),
            delta: new THREE.Vector2(16, 16)
        })
    }
}

export default class TimeLoop {
    constructor() {
        this.physicsObjects = []
    }

    managePhysicsObject(physicsObject) {
        this.physicsObjects.push(physicsObject)
    }

    run() {
        var time = new Date().getTime()
        var physicsObjects = this.physicsObjects

        CollisionManager.manage(physicsObjects)

        for (var physicsObject of physicsObjects) {
            var position = PositionCalculator.calculate(physicsObject, time)

            var graphicsObject = physicsObject.graphicsObject
            graphicsObject.style.left = position.x
            graphicsObject.style.top = position.y
        }

        window.requestAnimationFrame(() => this.run())
    }
}
export default class CollisionManager {
    static manage(physicsObjects, time) {
        var physicsObjectPairs = Couples.from(physicsObjects)
        for (var physicsObjectCouple of physicsObjectPairs) {
            var collisionData = this._check(physicsObjectCouple, time)
            if (collisionData != null) {
                firstPhysicsObject.physicsProperties = collisionData.firstObjectPhysicsProperties
                secondPhysicsObject.physicsProperties = collisionData.secondObjectPhysicsProperties
            }
        }
    }

    static _check(physicsObjectCouple, time) {
        var firstPhysicsObject = physicsObjectPair[0]
        var secondPhysicsObject = physicsObjectPair[1]
        if (firstPhysicsObject instanceof BallPhysicsObject
            && secondPhysicsObject instanceof WallPhysicsObject) {
                return BallWallCollisionCalculator.check(firstPhysicsObject, secondPhysicsObject)
        }

        if (secondPhysicsObject instanceof BallPhysicsObject
            && firstPhysicsObject instanceof WallPhysicsObject) {
                return BallWallCollisionCalculator.check(secondPhysicsObject, firstPhysicsObject)
        }
    }
}
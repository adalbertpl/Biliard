export default class PositionCalculator {
    static calculate(physicsObject, time) {
        var physicsProperties = physicsObject.physicsProperties
        var deltaT = time - this.time
        var deltaP = physicsProperties.velocity.clone().muln(deltaT)
        var position = physicsProperties.position.clone().add(deltaP)
        return position
    }
}
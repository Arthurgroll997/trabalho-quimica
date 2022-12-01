export class IncreaseTemperature {
    constructor(environment) {
        this.environment = environment;
    }

    increaseTemperature(deg) {
        this.environment.increaseTemperature(deg);
    }

    decreaseTemperature(deg) {
        this.environment.decreaseTemperature(deg);
    }
}
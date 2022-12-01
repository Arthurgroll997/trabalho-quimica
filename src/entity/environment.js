export class Environment {
    constructor(molecules = [], temperature = 0) {
        this.molecules = molecules;
        this.temperature = temperature;
    }

    addMolecule(molecule) {
        this.molecules.push(molecule);
    }

    increaseTemperature(deg) {
        this.temperature += deg;

        this.molecules.forEach((mol) => {
            mol.increaseAgitation(deg * 0.05);
        });
    }

    getTemperatureInCelcius()
    {
        return this.temperature - 273;
    }

    decreaseTemperature(deg) {
        if (this.temperature - deg < 0)
            this.temperature = 0;
        else
            this.temperature -= deg;

        this.molecules.forEach((mol) => {
            mol.decreaseAgitation(deg * 0.05);
        });
    }
}
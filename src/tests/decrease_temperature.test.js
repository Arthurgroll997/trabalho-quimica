import { beforeEach, describe, expect, it } from "vitest";
import { Environment } from "../entity/environment";
import { Molecule } from "../entity/molecule";
import { EngineAdapter } from "../adapter/engine_adapter";
import { AppMock } from "../mock/app_mock";
import { GraphicsMock } from "../mock/graphics_mock";
import { Random } from "../helper/random";
import { RandomMock } from "../mock/random_mock";
import { Position } from "../helper/position";

describe("Diminuição da temperatura do ambiente", () => {
    let engine = new EngineAdapter(new AppMock(), GraphicsMock);
    let random = new Random(new RandomMock(5));
    let ambiente = new Environment([], 373);

    it("Deve diminuir a agitação das moléculas do ambiente", () => {
        let moleculas = [
            new Molecule(1, 5, 0x000000, new Position(10, 10), random),
            new Molecule(1, 10, 0x000000, new Position(10, 10), random),
            new Molecule(1, 15, 0x000000, new Position(10, 10), random),
        ];

        ambiente.addMolecule(moleculas[0]);
        ambiente.addMolecule(moleculas[1]);
        ambiente.addMolecule(moleculas[2]);

        ambiente.decreaseTemperature(100);

        expect(ambiente.molecules[0].agitation).toBe(0);
        expect(ambiente.molecules[1].agitation).toBe(5);
        expect(ambiente.molecules[2].agitation).toBe(10);
    });
});
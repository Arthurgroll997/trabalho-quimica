import { describe, expect, it } from "vitest";
import { Molecule } from "../entity/molecule";
import { Random } from "../helper/random";
import { RandomMock } from "../mock/random_mock";
import { EngineAdapter } from "../adapter/engine_adapter";
import { AppMock } from "../mock/app_mock";
import { GraphicsMock } from "../mock/graphics_mock";
import { Position } from "../helper/position";

describe("Uma molécula", () => {
    let engine = new EngineAdapter(new AppMock(), GraphicsMock);
    let random = new Random(new RandomMock(5));
    let moleculePos = new Position(20, 20);

    it("Pode ter sua agitação aumentada", () => {
        let molecule = new Molecule(1, 0, 0x000000, moleculePos, random);

        molecule.increaseAgitation(5);
        
        expect(molecule.agitation).toBe(5);
    });

    it("Pode ser desenhada", () => {
        let molecule = new Molecule(1, 0, 0x000000, moleculePos, random);

        expect(molecule.draw(engine)).toBe(true);
    });
});
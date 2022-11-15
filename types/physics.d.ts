import { Body as CannonBody, Material as CannonMaterial } from 'cannon-es';
import { IDiceValue } from '@dice/config';
export default class ThreeDDicePhysics {
    static BARRIER_MATERIAL: CannonMaterial;
    static DICE_MATERIAL: CannonMaterial;
    static FLOOR_MATERIAL: CannonMaterial;
    static KEYFRAME_INTERVAL: number;
    static PHYSICS_ITERATIONS: number;
    static PHYSICS_STEP: number;
    private physics;
    private walls;
    constructor();
    add: (body: CannonBody) => void;
    init: (sizeX: number, sizeY: number) => void;
    remove: (body: CannonBody) => void;
    resize: (sizeX: number, sizeY: number) => void;
    runSimulation: (diceValues: IDiceValue[]) => Promise<void>;
    startSimulation: (diceValues: IDiceValue[]) => Promise<void>;
    update: (dt?: number) => void;
    private createWall;
    private isAppVisible;
}

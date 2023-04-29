import { Body as CannonBody, Material as CannonMaterial } from 'cannon-es';
import { IDiceValue, IPhysics } from '@dice/config';
export default class ThreeDDicePhysics {
    static BARRIER_MATERIAL: CannonMaterial;
    static DICE_MATERIAL: CannonMaterial;
    static FLOOR_MATERIAL: CannonMaterial;
    static KEYFRAME_INTERVAL: number;
    static PHYSICS_ITERATIONS: number;
    static PHYSICS_STEP: number;
    private config;
    private physics;
    private walls;
    constructor(config: IPhysics);
    add: (body: CannonBody) => void;
    init: (sizeX: number, sizeY: number) => void;
    setConfig: (config: IPhysics) => void;
    remove: (body: CannonBody) => void;
    resize: (sizeX: number, sizeY: number) => void;
    runSimulation: (diceValues: IDiceValue[]) => Promise<void>;
    startSimulation: (diceValues: IDiceValue[]) => Promise<void>;
    update: (dt?: number) => void;
    private createWall;
    private isAppVisible;
}

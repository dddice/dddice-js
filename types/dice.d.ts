import { Mesh, PositionalAudio, Vector3 } from 'three';
import { Body as CannonBody, ConvexPolyhedron as CannonConvexPolyhedron, Quaternion as CannonQuaternion, Vec3 as CannonVector3 } from 'cannon-es';
import { ThreeDDice } from '@dice';
import { DiceEvent, IDiceOptions } from '@dice/config';
export interface IDiceDefinition {
    vertices: [number, number, number][];
    faces: [number, number, number, number][] | [number, number, number, number, number][] | [number, number, number, number, number, number][];
    scaleFactor: number;
    values: number;
    mass: number;
    inertia: number;
    invertUpside: boolean;
}
export interface IDicePhysicsState {
    position: CannonVector3;
    quaternion: CannonQuaternion;
    velocity: CannonVector3;
    angularVelocity: CannonVector3;
    invInertiaSolve: CannonVector3;
    invMassSolve: number;
    vlambda: CannonVector3;
    wlambda: CannonVector3;
}
export declare class DiceObject {
    protected options: IDiceOptions;
    protected invertUpside: boolean;
    protected vertices: [number, number, number][];
    protected faces: [number, number, number, number][] | [number, number, number, number, number][] | [number, number, number, number, number, number][];
    protected faceNormals: Vector3[];
    protected scaleFactor: number;
    protected mass: number;
    protected inertia: number;
    protected object: Mesh;
    protected physicsBody: CannonBody;
    protected shape: CannonConvexPolyhedron;
    protected shiftRot: CannonQuaternion;
    protected savedState?: IDicePhysicsState;
    values: number;
    simulationRunning: boolean;
    color?: string;
    isRollHidden: boolean;
    uuid: string;
    valueShiftedTo?: number;
    shouldFadeOut: boolean;
    constructor(options: IDiceOptions, definition: IDiceDefinition);
    addSound: (sound: PositionalAudio, event?: DiceEvent) => void;
    finish: () => void;
    private onCollide;
    private playSound;
    protected createShape(): CannonConvexPolyhedron;
    isFinished(): boolean;
    saveState(): void;
    getState(): IDicePhysicsState;
    loadState(state?: IDicePhysicsState): void;
    getFaceVector(face: number): CannonVector3;
    getFaceNormal(face: number): CannonVector3;
    getShiftedUpsideValue(): number;
    getUpsideValue(): number;
    shiftUpsideValue(toValue: number): void;
    getObject(): Mesh;
    getPhysicsBody(): CannonBody;
    updateShader(attrs?: {}): void;
    getUniformValue(uniform: string): import("three").IUniform<any>;
    updateMeshFromBody(): void;
    updateBodyFromMesh(): void;
}
export declare class DiceD4 extends DiceObject {
    constructor(manager: ThreeDDice, options: IDiceOptions);
}
export declare class DiceD6 extends DiceObject {
    constructor(manager: ThreeDDice, options: IDiceOptions);
}
export declare class DiceD8 extends DiceObject {
    constructor(manager: ThreeDDice, options: IDiceOptions);
}
export declare class DiceD10 extends DiceObject {
    constructor(manager: ThreeDDice, options: IDiceOptions);
}
export declare class DiceD12 extends DiceObject {
    constructor(manager: ThreeDDice, options: IDiceOptions);
}
export declare class DiceD20 extends DiceObject {
    constructor(manager: ThreeDDice, options: IDiceOptions);
}

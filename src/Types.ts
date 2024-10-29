import { ReactNode } from "react";
import * as Three from "three";

export interface IPage {
    id: string,
    children: JSX.Element
}

export interface IModel {
    inView: boolean,
    scale: number,
    nodes: {
        [name: string]: Three.Object3D<Three.Object3DEventMap>;
    },
    from: number
}

export interface IBackground {
    children: JSX.Element
}

export interface IBurgerButton {
    toggleMenu: () => void
}

export interface ISvg {
    className: string
}
export interface IBackground {
    children: JSX.Element;
}

export interface IBurgerButton {
    toggleMenu: () => void;
}

export interface IPage {
    id: string;
    children: JSX.Element;
}

export interface ISvg {
    className: string;
}

export interface IProjectItem {
    data: {
        src: string;
        title: string;
        text: string;
        date: string; 
        link?: string;
    };
}
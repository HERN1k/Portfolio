import * as Three from "three";
import { FC, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
    Environment, 
    useGLTF, 
    ContactShadows, 
    Box, 
    PresentationControls
}  from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import { useInView } from "react-intersection-observer";
import { MOBILE } from "../Constants";
import { IModel } from "../Types";

const ErrorModel: FC = () => <Box args={[1, 1, 1]}><meshStandardMaterial color="#242424" /></Box>;

const Model = ({ inView, nodes, scale, from }: IModel) => {

    const group = useRef<Three.Group | null>(null);

    const { x } = useSpring({
        loop: { reverse: true, cancel: inView },
        from: { x: from },
        to: { x: inView ? 0 : from },
        config: { tension: 60, friction: 15 },
        reset: true,
    });

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.x = Three.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
            group.current.rotation.y = Three.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1);
            group.current.rotation.z = Three.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1);
            
            group.current.position.y = Three.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1);

            if (inView) {
                group.current.position.x = x.get();
            }
        }
    });

    return (
        <PresentationControls
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 2, tension: 500 }}
                speed={0.5}
                zoom={1.0}
                polar={[-0.2, Math.PI / 2]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}>
            <group ref={group} scale={scale} dispose={null} position-x={x}> 
                <primitive castShadow receiveShadow key={"GLTF_SceneRootNode"} object={nodes["GLTF_SceneRootNode"]} />
            </group>
        </PresentationControls>
    );
}

const PhoneProjectScene: FC = () => {
    
    const [fromAnimation, setFromAnimation] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);
    const [position, setPosition] = useState<Three.Vector3>(new Three.Vector3(0, 0, 0));
    const [shadows, setShadows] = useState<Three.Vector3>(new Three.Vector3(0, 0, 0));
    const [rotation, setRotation] = useState<Three.Euler>(new Three.Euler(0, 0, 0));

    const { nodes } = useGLTF("/objects/phone/phone.gltf");
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        const updateModel = () => {
            const isMobile = window.innerWidth <= MOBILE;

            setFromAnimation(isMobile ? -5 : 5);

            setScale(isMobile ? 1.15 : 1.5);

            setPosition(isMobile 
                ? new Three.Vector3(0, -3, 0) 
                : new Three.Vector3(-7, -1.5, 0));

             setShadows(isMobile 
                 ? new Three.Vector3(0, -4.5, 0) 
                 : new Three.Vector3(0, -4, 0));

            setRotation(isMobile 
                ? new Three.Euler(Math.PI / 1.5, Math.PI, 0) 
                : new Three.Euler(Math.PI / 1.8, Math.PI * 1.05, -(Math.PI / 6)));
        };

        updateModel();
        //window.addEventListener("resize", updateModel);
        //return () => window.removeEventListener("resize", updateModel);
    }, []);

    return (
        <div 
            onClick={(e) => e.preventDefault()} 
            onTouchStart={(e) => e.preventDefault()}
            style={{ touchAction: "manipulation", border: "solid 1px red" }}>
            <Canvas camera={{ position: [0, 0, -10], fov: 60 }} ref={ref}>
                <group position={position}>
                    <Suspense fallback={<ErrorModel />}>
                        <group rotation={rotation}>
                            { 
                                nodes
                                    ? <Model 
                                        scale={scale} 
                                        inView={inView} 
                                        nodes={nodes}
                                        from={fromAnimation} /> 
                                    : <ErrorModel />
                            }
                        </group>
                        <ambientLight intensity={0.25} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} />
                        <Environment files="/objects/potsdamer_platz_1k.hdr" />
                    </Suspense>
                </group>

                <ContactShadows position={shadows} scale={20} blur={2} far={5} />
            </Canvas>
        </div>
    );
}

export default PhoneProjectScene;
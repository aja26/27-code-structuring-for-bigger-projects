import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from "./EventEmitter.js";

export default class Resources extends EventEmitter{
    constructor(sources){
        super();
        
        // Options
        this.sources = sources

        // Setup
        this.items = {};
        this.toLoad = this.sources.length
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();

    }

    setLoaders(){
        this.loaders = {}
        this.loaders.gltfLoaders = new GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTexutureLoader = new THREE.CubeTextureLoader();
    }

    startLoading(){
        // Load each source
        this.sources.forEach(src => {
            if(src.type === 'gltfModel'){
                this.loaders.gltfLoaders.load(
                    src.path,
                    (file) => {
                        this.sourceLoaded(src, file)
                    }
                )
            } else if(src.type === 'texture'){
                this.loaders.textureLoader.load(
                    src.path,
                    (file) => {
                        this.sourceLoaded(src, file)
                    }
                )
            }
            else if(src.type === 'cubeTexture'){
                this.loaders.cubeTexutureLoader.load(
                    src.path,
                    (file) => {
                        this.sourceLoaded(src, file)
                    }
                )
            }
        }); 
    }
    sourceLoaded(src, file){

        this.items[src.name] = file

        this.loaded++

        // finished loading assets
        if(this.loaded === this.toLoad){
            console.log('Finished');
            this.trigger('ready')
        }
    }
}
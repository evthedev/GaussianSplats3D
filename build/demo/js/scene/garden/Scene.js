import * as GaussianSplat3D from '../../../lib/gaussian-splat-3d.module.js';

export class Scene {

    constructor() {
    }

    load() {
        const viewer = new GaussianSplat3D.Viewer(null, [0, -1, -0.6], [-1, -4, 6], [0, 4, -0],  20);
        viewer.init();
        viewer.loadFile('assets/data/garden/garden.splat') // original cleaner .splat scene
        // viewer.loadFile('assets/data/garden/point_cloud.ply') // sample ply file from https://drive.google.com/drive/folders/1ia7T_OKFsTdJ0PvNuqaW2r6CLhj4NZ4Z
        .then(() => {
            viewer.start();
        });
    }
}
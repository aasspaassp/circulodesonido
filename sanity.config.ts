import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas/';

const config = defineConfig({
    projectId: 'vasnxoso',
    dataset: 'production',
    title: 'Lectura, musica, sonido',
    apiVersion: '2023-04-25',
    basePath: '/admin',
    plugins: [deskTool()],
    //an array
    schema: { types: schemas }

})

export default config;
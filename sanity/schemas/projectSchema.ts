// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// this will probably have to change to a book/lectura schema

const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string',   
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ],
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url', 
        },
        {
            name: 'content',
            title: 'Content',
            //to use markup
            type: 'array',
            of: [{type: 'block'}],           
        },
    ],
};

export default project;
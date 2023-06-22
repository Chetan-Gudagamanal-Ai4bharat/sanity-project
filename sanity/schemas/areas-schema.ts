const area={
    name: 'area',
    title: 'Areas',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source:'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{hotspot:true},
            fields:[
                {
                    name:'alt',
                    title:'Alt',
                    type:'string'
                }
            ]
        },
        {
            name:'url',
            title:'URL',
            type:'url'

        },
        {
            name:'content',
            title:'Content',
            type:'array',
            of: [{type:'block'}]
        },
        {
            title: 'Contributions',
            name: 'contributions',
            type: 'array',
            of: [
                {
                  type: "object",
                  name: "inline",
                  fields: [
                    { 
                        type: "string", 
                        name: "contributer" 
                    },
                    { 
                        type: "string", 
                        name: "contributer_desc" 
                    },
                    {
                        name:'url',
                        title:'URL',
                        type:'url'
            
                    },
                  ]
                }
              ],
          }
          
          
    ]
}

export default area


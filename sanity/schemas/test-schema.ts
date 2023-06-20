const table={
    title: "Table for PortableText",
    name: "table",
    type: "object",
    fields: [
      {
        name: "content",
        title: "Cell Content",
        type: "table",
      },
    ],
    // preview: {
    //   select: {
    //     content: "content",
    //     subtitle: "_type",
    //   },
    //   prepare({ Content, subtitle }) {
    //     switch (content[0]._type) {
    //       case "block":
    //         return {
    //           title: content[0].children[0].text,
    //           subtitle,
    //         };
  
    //       default:
    //         return {
    //           title: `This list item start with '${content[0]._type}''`,
    //           subtitle,
    //         };
    //     }
    //   },
    // },
  };

export default table


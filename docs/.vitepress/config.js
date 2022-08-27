import fs from 'fs'
import path from 'path';
export default {
  title: 'SWE-UK',
  titleTemplate: 'Coursework',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {text: 'CSS',
    items: [{ text: 'CSS', link: '/guides/css/intro' },
    { text: 'CSS - Flex', link: '/guides/css/flexbox' },
    { text: 'CSS - @media', link: '/guides/css/media-queries' },]
    }
      
    ],
    sidebar: [
      {
        text: 'CSS',
        items: [
          { text: 'Intro', link: '/guides/css/intro' },
          { text: 'Flex', link: '/guides/css/flexbox' },
          { text: '@media', link: '/guides/css/media-queries' },
        ],
      },
    ],
  },
};


// function getSideBar(folder, title) {
//   const extension = [".md"];

//   const files = fs
//     .readdirSync(path.join(`${__dirname}/../${folder}`))
//     .filter(
//       (item) =>
//         item.toLowerCase() != "readme.md" &&
//         fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
//         extension.includes(path.extname(item))
//     );

//   return [{ title: title, children: ["", ...files] }];   
// } 

// console.log(fs.readdirSync(path.join(`${__dirname}/../guides/`)))
const fs = require('fs')
const path = require('path')
const dirArray = fs.readdirSync(path.join(`${__dirname}/test/`))

console.log(dirArray.filter((f) => !f.includes('.')))


const mapDir = async (root) => {
    let mdFiles = await root.filter(f => f.includes(".md"))
    if (mdFiles.length>0) {
        console.log(mdFiles)
    }
    // if (root.filter(f => !f.includes(".")).length===0)
    
}

mapDir(dirArray)
const fs = require('fs')
const { join } = require('node:path')
const fsp = fs.promises

const dirWithIcons = 'src/shared/assets/svg'

async function main() {
  const files = await fsp.readdir(dirWithIcons)

  files.forEach(async file => {
    const newName = file.replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '').toLowerCase()
    fsp.rename(join(dirWithIcons, file), join(dirWithIcons, newName))
  })
}

void main()

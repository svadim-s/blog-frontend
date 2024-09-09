const fs = require('fs')
const { join } = require('node:path')
const fsp = fs.promises

const dirWithIcons = 'src/shared/assets/icons'

async function main() {
  const files = await fsp.readdir(dirWithIcons)

  files.forEach(async file => {
    const filePath = join(dirWithIcons, file)
    const fileContent = await fsp.readFile(filePath, 'utf-8')
    const newFileContent = fileContent.replaceAll('#F5F5F5', 'currentColor')
    fsp.writeFile(filePath, newFileContent)
  })
}

void main()

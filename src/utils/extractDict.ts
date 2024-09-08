import extract from 'extract-zip'

import path from 'path'

export const extractDict = async () => {
  const targetFile = path.join(__dirname, '../..')
  try {
    await extract('./dict.json.zip', { dir: targetFile })
  } catch (err) {
    //   exit the application
    console.error(err)
    process.exit()
  }
}

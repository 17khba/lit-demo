import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from "commander"
const program = new Command()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


program
  .version("1.0.0")
  .parse(process.argv);

const packageFileDir = path.join(__dirname, '../package.json')
const packageFile = fs.readFileSync(packageFileDir)
const json = JSON.parse(packageFile)

const versionParts = json.version.split(".").map((str) => parseInt(str, 10))
versionParts[versionParts.length - 1]++
console.log('versionParts: ', versionParts)
json.version = versionParts.map((n) => `${n}`).join(".")
fs.writeFileSync(packageFileDir, JSON.stringify(json, null, 2))

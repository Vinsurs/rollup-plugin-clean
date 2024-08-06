import type { PluginImpl } from "rollup"
import { rimrafSync } from "rimraf"
import { version, name } from "./package.json"

export type Options = {
    targets: string[]
    watch?: boolean
}
function clean(dirs?: string[]) {
    dirs = dirs ?? ["dist/**"]
    for (const dir of dirs) {
        rimrafSync(dir, { preserveRoot: false, glob: true })
    }
}
/** Clean up specified directories before rollup rebuild. */
const plugin: PluginImpl<Options> = (options) => {
    let cleaned = false
    return {
        name,
        version,
        buildStart() {
            if (options?.watch || !cleaned) {
                clean(options?.targets)
                cleaned = true
            }
        }
    }
}
export default plugin
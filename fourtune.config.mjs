import generateTypesFile from "./generateTypesFile.mjs"
import generateExportFile from "./generateExportFile.mjs"

export default {
	realm: "js",
	type: "package",

	target: {
		additional_entry_points: {
			"async": "src/entries/async.mjs",
			"sync": "src/entries/sync.mjs"
		}
	},

	autogenerate: {
		"types/async.d.mts": generateTypesFile("async"),
		"types/sync.d.mts": generateTypesFile("sync"),
		"types/default.d.mts": generateTypesFile("default"),

		"exports.mjs": generateExportFile("index.mjs"),
		"sync_exports.mjs": generateExportFile("sync.mjs"),
		"async_exports.mjs": generateExportFile("async.mjs")
	}
}

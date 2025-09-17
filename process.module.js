const args = () => process.argv.slice(0,2)
const getArgs = () => process.argv.slice(2)

module.exports = {
    args,
    getArgs,
}
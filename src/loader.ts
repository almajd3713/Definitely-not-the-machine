
const reqSvgs = require.context("./", true, /\.svg$/)

interface SvgsObject {
  [index: string]: string
}

export default reqSvgs.keys()
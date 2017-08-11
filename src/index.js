const NOOP = function(){};
const NOOP_STRING = '';
const NOOP_ARRAY = [];
const NOOP_OBJECT = {};

// export default:
module.exports = NOOP;
export default NOOP;

// export string/array/object
export {
  NOOP_STRING,
  NOOP_ARRAY,
  NOOP_OBJECT
};

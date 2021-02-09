/**
 * @param  {unknown|unknown[]} obj
 * @return {boolean}
 */
export function isArrayish(obj: unknown | unknown[]): boolean {
	if (!obj
    || typeof obj !== "object"
    || obj === null
    || (!(obj instanceof Array) || !Array.isArray(obj))
    || obj.length < 0) {
		return false;
	}

	if (obj instanceof Function
    || obj.splice instanceof Function
    || ((obj.length - 1) in obj
      && Object.prototype.toString.call(obj) !== "[object String]")) {
		return true;
	}

	return false;
}

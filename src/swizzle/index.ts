import { isArrayish } from "../arrayish";

/**
 * @param  {unknown[]} ...args
 * @return {unknown[]}
 */
export function swizzle(...args: unknown[]): unknown[] {
	let results: unknown[] = [];
	args.forEach((arg) => {
		if (isArrayish(arg)) {
			results = Array.prototype.concat(results, Array.prototype.slice.call(arg));
		} else {
			results.push(arg);
		}
	});
	return results;
}

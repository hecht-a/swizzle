import { swizzle } from "../src/swizzle";

describe(swizzle, () => {
	it("swizzle a single array", () => {
		expect(swizzle([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
	});

	it("should swizzle interleaved values/arrays", () => {
		expect(swizzle(1, 2, [3, 4])).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle([1], [2], [3], [4])).toStrictEqual([1, 2, 3, 4]);
	});

	it('should correctly swizzle string arguments', () => {
		expect(swizzle('hello')).toStrictEqual(['hello']);
		expect(swizzle(['hello'])).toStrictEqual(['hello']);
		expect(swizzle(['hello'], 'there')).toStrictEqual(['hello', 'there']);
	});

	it('should wrap a function for swizzling', () => {
		expect(swizzle(1, 2, 3, 4)).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle(1, 2, [3, 4])).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
		expect(swizzle([1], [2], [3], [4])).toStrictEqual([1, 2, 3, 4]);
	});
});

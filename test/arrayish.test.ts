import { isArrayish } from "../src/arrayish";

describe("isArrayish", () => {
	it("is a function", () => {
		expect(typeof isArrayish).toBe("function");
	});
	it("with number", () => {
		expect(isArrayish([1])).toBeTruthy();
	});

	it("with array of numbers", () => {
		expect(isArrayish([1, 2, 3, 4])).toBeTruthy();
	});

	it("with array of function", () => {
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		expect(isArrayish([() => true])).toBeTruthy();
	});

	it("with function", () => {
		expect(isArrayish("123")).toBeFalsy();
	});

	it("should check values are array", () => {
		expect(isArrayish([])).toBeTruthy();
		expect(isArrayish([1, "he"])).toBeTruthy();
		expect(isArrayish(["a", "b"])).toBeTruthy();
	});

	it("should check objects inherit from Array", () => {
		expect(isArrayish({
			__proto__: [],
		})).toBeFalsy();
		expect(isArrayish({
			__proto__: Array.prototype,
		})).toBeFalsy();

		if (Object.setPrototypeOf) {
			expect(isArrayish(Object.setPrototypeOf({}, []))).toBeFalsy();
			expect(isArrayish(Object.setPrototypeOf({}, Array.prototype))).toBeFalsy();
		}
	});

	it("should check objects are array-like", () => {
		expect(isArrayish({
			length: 123,
			splice() {},
		})).toBeFalsy();
		expect(isArrayish({
			length: 3,
			0: "a",
			1: "b",
			2: 12,
		})).toBeFalsy();
		expect(isArrayish({
			length: 3,
			2: 12,
		})).toBeFalsy();
	});

	it("should check values are not object", () => {
		expect(isArrayish(undefined)).toBeFalsy();
		expect(isArrayish(null)).toBeFalsy();
		expect(isArrayish(1)).toBeFalsy();
		expect(isArrayish(false)).toBeFalsy();
		expect(isArrayish("123")).toBeFalsy();
	});

	it("should check objects neither array nor array-like", () => {
		expect(isArrayish({})).toBeFalsy();
		expect(isArrayish({
			name: "David",
		})).toBeFalsy();
		expect(isArrayish({
			length: 2,
		})).toBeFalsy();

		// attention
		expect(isArrayish({
			length: 3,
			1: "add",
		})).toBeFalsy();

		expect(isArrayish("123")).toBeFalsy();
		expect(isArrayish("abc")).toBeFalsy();
		expect(isArrayish(123)).toBeFalsy();
	});
});

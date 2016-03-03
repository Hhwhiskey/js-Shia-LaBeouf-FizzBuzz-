describe("shiaLabeouf", function() {
		
	it("should return the number that is passed", function() {
		var result = shiaLabeouf(1);
		expect(result).toEqual(1);
	});

	it("should return Shia if the number is divisible by 3", function() {
		var result = shiaLabeouf(3);
		expect(result).toEqual("Shia");
	});

	it("should return LaBeouf if the number is divisible by 5", function() {
		var result = shiaLabeouf(5);
		expect(result).toEqual("LaBeouf");
	});

	it("should return shiaLabeouf if the number is divisible by 15", function() {
			var result = shiaLabeouf(15);
			expect(result).toEqual("Shia LaBeouf");
	});

});






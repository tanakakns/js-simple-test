describe('test for add function', function() {

    it('1 + 1 = 2', function() {
        expect(calc.add(1, 1)).toBe(2);
    });

    it('1 + 4 = 5', function() {
        expect(calc.add(1, 4)).toBe(5);
    });

    it('1 + 4 = 10 with Stub', function() {
        var calcStub = sinon.stub(calc, "add");
        calcStub.returns(10);
        
        expect(calc.add(1, 4)).toBe(10);
    });
    
});
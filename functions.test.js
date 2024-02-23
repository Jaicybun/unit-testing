const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const n1= 4;
    const n2= 5;
    //ACT
    const result= functions.multiply(n1,n2);
    //ASSERT
    expect(result).toBe(20);
  })
  it('should be return 0 when i sent number and null', () => {
    //ARRANGE
    const b= null;
    const a= 3;
    //ACT
    const result= functions.multiply(a,b);
    //ASSERT    
    expect(result).toBe(0);
  });
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result= functions.isNull();
    //ASSERT
    expect(result).toBeNull();
  });
  it('should be return null when I sent null', () => {
    //ARRANGE
    const a= null;
    //ACT
    const result= functions.isNull(a);
    //ASSERT
    expect(result).toBeNull();
  })
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const a= true;
    //ACT
    const result= functions.checkTruthy(a);
    //ASSERT
    expect(result).toBeTruthy();
  });
  it('should be return false when I sent string', () => {
    //ARRANGE
    const b= "mariposa";
    //ACT
    const result= functions.checkTruthy(b);
    //ASSERT
    expect(result).toBeFalsy();
  })
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastname= "Perez";
    //ACT
    const result= functions.addLastName(lastname);
    //ASSERT
    expect(result.lastname).toBe=("Perez");
  });
  it('should be return NaN when I sent NaN', () => {
    //ARRANGE
    const lastname= NaN;
    //ACT
    const result= functions.addLastName(lastname);
    //ASSERT
    expect(result.lastname).toBeNaN();
  })
})

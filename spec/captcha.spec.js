
var num = [0,1,2,3,4,5,6,7,8,9];
var word = ["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN"];
var operator = [1,2];

function NumberPattern(location){

    this.ToString = function (location){
      return num[location];
    }
}

function StringPattern(location){

    this.ToString = function (location){
      return word[location];
    }
}

function OperatorString(location){

    this.ToString = function (location){
      if(location === 1){
        return "+";
      }else if( location === 2){
        return "-";
      }
    }

}

function Captcha(pattern, Operand, LeftLocation, RightLocation){
    this.combine = function(pattern, Operand, LeftLocation, RightLocation){
        if( pattern === 1){
          var le = new NumberPattern();
          var ri = new StringPattern();
          var op = new OperatorString();

        return le.ToString(LeftLocation) + " " + op.ToString(Operand) + " " + ri.ToString(RightLocation);
        }

        if( pattern === 2){
        var le = new StringPattern();
        var ri = new NumberPattern();
        var op = new OperatorString();

        return le.ToString(LeftLocation) + " " + op.ToString(Operand) + " " + ri.ToString(RightLocation)
        }
    }
}

describe("Captcha()",function() {
	var captcha = new Captcha();
  it('Should Show "3 + SEVEN" ',function(){
		expect(captcha.combine(1,1,3,7)).toBe("3 + SEVEN");
	});
  it('Should Show "5 + FOUR" ',function(){
    expect(captcha.combine(1,1,5,4)).toBe("5 + FOUR");
  });
  it('Should Show "1 + NINE" ',function(){
    expect(captcha.combine(1,1,1,9)).toBe("1 + NINE");
  });
  it('Should Show "2 + EIGHT" ',function(){
		expect(captcha.combine(1,1,2,8)).toBe("2 + EIGHT");
	});
});

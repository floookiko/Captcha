
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
  it('Should Show "6 + TEN" ',function(){
		expect(captcha.combine(1,1,6,0)).toBe("6 + ZERO");
	});
  it('Should Show "9 - ZERO" ',function(){
		expect(captcha.combine(1,2,9,0)).toBe("9 - ZERO");
	});
  it('Should Show "8 - TWO" ',function(){
		expect(captcha.combine(1,2,8,2)).toBe("8 - TWO");
	});
  it('Should Show "7 - THREE" ',function(){
		expect(captcha.combine(1,2,7,3)).toBe("7 - THREE");
	});
  it('Should Show "6 - ONE" ',function(){
		expect(captcha.combine(1,2,6,1)).toBe("6 - ONE");
	});
  it('Should Show "4 - FIVE" ',function(){
		expect(captcha.combine(1,2,4,5)).toBe("4 - FIVE");
	});
  it('Should Show "ZERO + 1" ',function(){
		expect(captcha.combine(2,1,0,1)).toBe("ZERO + 1");
	});
  it('Should Show "TWO + 3" ',function(){
		expect(captcha.combine(2,1,2,3)).toBe("TWO + 3");
	});
  it('Should Show "FOUR + 5" ',function(){
		expect(captcha.combine(2,1,4,5)).toBe("FOUR + 5");
	});
  it('Should Show "SIX + 7" ',function(){
		expect(captcha.combine(2,1,6,7)).toBe("SIX + 7");
	});
  it('Should Show "EIGHT + 9" ',function(){
		expect(captcha.combine(2,1,8,9)).toBe("EIGHT + 9");
	});
});

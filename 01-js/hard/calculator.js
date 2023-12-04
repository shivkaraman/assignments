/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
	#result;
	constructor() {
		this.#result = 0;
	}

	add(num) {
		if (isNaN(num)) throw new Error('Invalid expression');
		this.#result += num;
	}

	subtract(num) {
		if (isNaN(num)) throw new Error('Invalid expression');
		this.#result -= num;
	}

	multiply(num) {
		if (isNaN(num)) throw new Error('Invalid expression');
		this.#result *= num;
	}

	divide(num) {
		if (isNaN(num)) throw new Error('Invalid expression');
		if (num === 0) throw new Error('Division by zero');
		this.#result /= num;
	}

	clear() {
		this.#result = 0;
	}

	getResult() {
		return this.#result;
	}

	#isOperator(exp) {
		return exp === '+' || exp === '-' || exp === '*' || exp === '/';
	}

	#eval(num1, num2, op) {
		switch (op) {
			case '+':
				return num1 + num2;
			case '-':
				return num1 - num2;
			case '*':
				return num1 * num2;
			case '/':
				if (num2 === 0) {
					throw new Error('Division by zero');
				}
				return num1 / num2;
		}
	}

	#precedence(op1) {
		if (op1 === '(') return 0;
		else if (op1 === '+' || op1 === '-') return 1;
		else return 2;
	}

	#validPeranthesis(expression) {
		let stack = new Array();
		for (let i = 0; i < expression.length; i++) {
			if (expression[i] === '(') {
				stack.push('(');
			} else if (expression[i] === ')') {
				if (stack.length === 0) {
					return false;
				}
				stack.pop();
			}
		}
		return stack.length === 0;
	}

	#infixEvaluation(expression) {
		if (!this.#validPeranthesis(expression)) {
			throw new Error('Invalild Peranthesis');
		}

		expression = '(' + expression + ')';
		let operStk = new Array();
		let oprndStk = new Array();
		let i = 0;
		while (i < expression.length) {
			let ch = expression[i];

			if (this.#isOperator(ch)) {
				if (
					operStk.length > 0 &&
					this.#precedence(ch) <
						this.#precedence(operStk[operStk.length - 1])
				) {
					while (
						this.#precedence(operStk[operStk.length - 1]) >
						this.#precedence(ch)
					) {
						const num2 = oprndStk.pop();
						const num1 = oprndStk.pop();
						const op = operStk.pop();

						const res = this.#eval(num1, num2, op);
						oprndStk.push(res);
					}
				}
				operStk.push(ch);
				i++;
			} else {
				if (ch === '(') {
					operStk.push(ch);
					i++;
				} else if (ch === ')') {
					while (operStk[operStk.length - 1] !== '(') {
						const num2 = oprndStk.pop();
						const num1 = oprndStk.pop();
						const op = operStk.pop();

						const res = this.#eval(num1, num2, op);
						oprndStk.push(res);
					}
					operStk.pop();
					i++;
				} else if (ch >= '0' && ch <= '9') {
					let j = i;
					let num = '';
					while (
						j < expression.length &&
						!this.#isOperator(expression[j]) &&
						expression[j] !== ')'
					) {
						num += expression[j];
						j++;
					}
					i = j;
					oprndStk.push(Number(num));
				} else {
					throw new Error('Invalid expression');
				}
			}
		}
		return oprndStk[0];
	}

	calculate(expression) {
		//Checking if expression is valid or not
		const allowedCharactersRegex = /^[0-9+\-/*(). ]*$/;
		if (!allowedCharactersRegex.test(expression)) {
			throw new Error('Invalid expression');
		}

		//Removing unwanted blank spaces
		expression = expression.replace(/[^0-9+\-\/*().]/g, '');

		//Evaluating the input expression
		this.#result = this.#infixEvaluation(expression);
	}
}

module.exports = Calculator;

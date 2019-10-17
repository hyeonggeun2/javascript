## 21 this

### this 키워드

- 객체의 키워드는 자신을 참조할 일이 생긴다. 객체 리터럴 방식으로 생성한 경우, 메소드 내부에서 재귀적으로 참조할 수 있는데 이 방식은 일반적이지도 않고 바람직하지도 않다. (생성자 함수의 경우 사용할 수 없음)

- 그래서 this 키워드를 사용하는데, this는 객체 자신의 프로퍼티나 메소드를 참조하기 위한 **자기 참조 변수**이다. 함수를 호출하면 arguments 객체처럼 this도 암묵적으로 함수 내부에 전달된다. 따라서 this를 지역 변수처럼 사용할 수 있다.

- this가 연결되어 가리키는 값은 함수 호출 방식에 의해 동적으로 결정된다.

  - this는 어디서든지 참조 가능하다.

    ```javascript
    console.log(this); // window (전역에서는 전역 객체 window를 가르킨다.)

    function foo(){
        console.log(this); // window (일반 함수 내부에서도 전역 객체를 가르킨다.)
    }

    const person = {
        name: 'Lee',
        getName() { // 메소드 내부에서는 메소드를 호출한 객체를 가리킨다.
    		//this는 person을 가리키고 따라서 {name: "Lee", getName: f}가 나온다.
            console.log(this);
            return this.name;
        }
    }
    person.getName();

    function Person(name) { // 생성자 함수에서는 생성자 함수가 생성할 인스턴스를 가르킨다.
        this.name = name;
        console.log(this); // Person { name: "Lee" }
    }
    const me = new Person('Lee');
    ```

### 함수 호출 방식과 this 바인딩

- **this가 가리키는 값은 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.** 함수는 렉시컬 스코프를 통해 정의되는 시점에 따라 스코프를 결정하지만, this는 호출 시점에 결정된다.

  ```javascript
  const foo = function () {
    console.dir(this);
  };

  // 1. 일반 함수 호출
  // foo 함수를 일반적인 방식으로 호출
  // this는 전역 객체 window를 가리킨다.
  foo(); // window

  // 2. 메소드 호출
  // foo 함수를 프로퍼티의 값으로 할당하여 호출
  // this는 메소드를 호출한 객체 obj를 가리킨다.
  const obj = { foo };
  obj.foo(); // obj

  // 3. 생성자 함수 호출
  // foo 함수를 new 연산자와 함께 생성자 함수로 호출
  // this는 생성자 함수가 생성한 인스턴스를 가리킨다.
  new foo(); // foo {}

  // 4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
  // this는 인수에 의해 결정된다.
  const bar = { name: 'bar' };

  foo.call(bar);   // bar
  foo.apply(bar);  // bar
  foo.bind(bar)(); // bar
  ```

- 일반 함수 호출

  - 기본적으로 전역 객체가 바인딩된다. strict mode가 적용됐다면 undefined가 바인딩된다.

  - 중첩함수, 콜백함수를 포함한 일반 함수로 호출된 모든함수의 this에는 전역 객체가 바인딩된다.

    - 중첩함수나 콜백함수는 외부 함수를 돕는 헬퍼함수이므로 외부 함수의 일부 로직을 대신하는 경우가 대부분이다. 따라서 외부 함수의 메소인 메소드와 중첩 함수의 this가 일치하지 않는다는 것은 동작을 어렵게 만든다.

    - 메소드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 일치시키기 위해 아래와 같은 방법을 사용한다.

      ```javascript
      var value = 1;

      const obj = {
        value: 100,
        foo() {
          // this 바인딩(obj)를 변수 that에 할당한다.
          const that = this;

          // 콜백 함수 내부에서 this 대신 that을 참조한다.
          setTimeout(function () {
            console.log(that.value); // 100
          }, 100);
        }
      };

      obj.foo();
      ```

      - 이 외에도 자바스크립트는 this를 명시적으로 바인딩할 수 있는 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메소드를 제공한다.

- 메소드 호출

  - 메소드를 호출한 객체, 즉 메소드 이름 앞의 . 앞에 기술한 객체에 바인딩 된다. 메소드를 소유한 객체가 아닌 메소드를 호출한 객체에 바인딩된다는 것을 주의하자.

  - 메소드를 참조해서 넣어도 this는 소유한 객체가 아닌 호출한 객체를 가르키기 때문에 잘 적용된다.

    ```javascript
    const person = {
      name: 'Lee',
      getName() {
        // 메소드의 this는 메소드를 호출한 객체에 바인딩된다.
        return this.name;
      }
    };

    const anotherPerson = {
      name: 'Kim'
    };
    // 메소드 getName을 anotherPerson 객체의 메소드로 할당
    anotherPerson.getName = person.getName;

    // 메소드 getName을 호출한 객체는 anotherPerson이다.
    console.log(anotherPerson.getName()); // kim
    ```

  - 프로토타입 메소드 내부에서 사용된 this도 마찬가지로 동작한다.

- 생성자 함수 호출

  - 생성자 함수가 생성할 인스턴스가 바인딩된다. 이전에 생성자함수는 빈 객체를 만들고 this를 바인딩 후 this를 리턴한다고 했다. 즉 this는 생성할 인스턴스다.
  - new 연산자를 빼고 사용하면 일반 함수로 동작하는 것을 주의하자.

- Function.prototype.apply/call/bind 메소드에 의한 간접 호출

  - apply와 call은 `Function.prototype.apply(thisArg[, argsArray])`, `Function.prototype.call(thisArg[, arg1[, arg2[, ... ]]])` 로 사용한다.

    - apply와 call 메소드는 함수를 호출하면서 첫번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다. (`함수.apply || call(this가 될 인수)`)

      ```javascript
      function getThisBinding() {
        return this;
      }

      // this로 사용할 객체
      const thisArg = { a: 1 };

      console.log(getThisBinding.apply(thisArg)); // { a: 1 }
      console.log(getThisBinding.call(thisArg)); // { a: 1 }
      ```



    -  apply와 call 메소드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐 this로 사용할 객체를 전달하면서 함수를 호출하는 것은 동일하다. (apply는 배열로 전달하고, call은 쉼표로 구분하여 전달한다.)

  - bind는 메소드의 this와 메소드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.

    ```javascript
    Person.prototype.doSomething = function (callback) {
      callback.bind(this)();
    };
    ```

    - 물론 apply나 call도 사용할 수 있다. `callback.apply(this); callback.call(this);`

  - 즉 apply, call, bind 메소드는 인자로 전달된 객체와 this가 바인딩 되게 된다.
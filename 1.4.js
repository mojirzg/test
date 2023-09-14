const targetObject = { someProperty: "M", someMethod: () => "R" };

const handler = {
  get: function (target, prop) {
    return "404";
  },
};

const proxyObject = new Proxy(targetObject, handler);

console.log(targetObject.someMethod());
console.log(proxyObject.someProperty);
console.log(proxyObject.someMethod());

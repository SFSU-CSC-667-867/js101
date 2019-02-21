const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(p) }, 3000);
  });
};

promiseExample()
  .then((res) => res + ' World')
  .catch((e) => console.log('I am an error ;('))
  .then((res) => console.log(res))
  .catch((e) => console.log('I am an error ;('));

console.log('hi');
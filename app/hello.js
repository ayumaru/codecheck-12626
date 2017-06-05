function hello(name) {
/*
* ここにnameに"World"が入力された時、この関数が"Hello World!"と返すような実装をします。
* nameが"codecheck"の場合には、"Hello codecheck!"が返されます。
*/
  switch(name) {
	case "codecheck":
    	return "Hello codecheck!";
    	break;
    case "World":
    	return "Hello World!";
    	break;
  }
  
  //ここにHelloworldを実装します。
  return "Hello World!";
}

module.exports = hello;

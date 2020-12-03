# BINDING

La méthode bind() crée une nouvelle fonction qui, lorsqu'elle est appelée, 
a pour contexte this la valeur passée en paramètre et éventuellement une 
suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.

Le binding est une technique permettant d'associer une instance d'un objet à une fonction par le biais d'une closure.

L'idée consiste à étendre le prototype de l'objet Function directement et de lui offire une méthode facilitant la liaison.

Exemple :

    const module = {
      x: 42,
      getX: function() {
        return this.x;
      }
    };
    
    const unboundGetX = module.getX;
    console.log(unboundGetX()); // The function gets invoked at the global scope
    // expected output: undefined
    
    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX());
    // expected output: 42

### instalar bootstrap

1. en la terminal vamos a parar el servidor, porque vamos a tocar angular.json

2. instalamos

 npm install bootstrap

3. una vez instalado tenesis que referenciar en angular.json las hojas de estilo de bootsrat y los js de bootstrap

En angular.json

- en array de styles 'node_modules/bootstrap/dist/css/bootstrap.min.css'

- En array scripts 'node_modules/bootstrap/dist/js/bootstrap.min.js'

4. Una vez modificado ese fichero volvemos a aarrancar el servidor

ng serve
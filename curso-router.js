angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/Cadastro/:idCliente?', {

            templateUrl: '../cadastro/cadastro.html',
            controller: 'CadastroController as vm'
        })
        .when('/Blog', {

            templateUrl: '../blog/blog.html',
            controller: 'BlogController as vm'
        }).
        when('/Cadastro-Blog/:idBlog?', {

            templateUrl: '../cadastro_blog/cadastro-blog.html',
            controller: 'CadastroBlogController as vm'
        }).
    otherwise({
        templateUrl: '../home/home.html',
        controller: 'HomeController as vm'
    })
})
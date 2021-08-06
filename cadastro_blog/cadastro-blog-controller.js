angular.module('app').controller('CadastroBlogController', CadastroBlogController);
CadastroBlogController.$inject = ['$location', 'CursoService', '$routeParams'];

function CadastroBlogController($location, CursoService, $routeParams) {
    vm = this;
    vm.teste = 'Cadastrar Novo Blog';
    vm.blogs = {} //chamar nas html 
    vm.idBlogs = undefined
    vm.erro = false

    vm.textoButao = 'Cadastrar'

    if ($routeParams.idBlog) {
        vm.idBlogs = $routeParams.idBlog
        buscarId(vm.idBlogs)
        vm.textoButao = 'Editar'

    }

    vm.navegar = function (rota) {
        $location.path(rota)
    }
    
    // POST blogs'

    vm.cadastrar = function () {
        if (vm.textoButao == 'Cadastrar') {
            CursoService.blog_exec_POST(vm.blogs).then(function (resposta) {
                if (resposta) {
                    vm.blogs = resposta
                    vm.erro = true
                }
            })
        } else if (vm.textoButao == 'Editar') {
            CursoService.blog_exec_PUT(vm.blogs).then(function (resposta) {
                if (resposta) {
                    vm.blogs = resposta
                    vm.erro = true
                }
            })
        }
        // redir
        vm.navegar('Blog')

    }
    // EDIT blogs
    function buscarId(id) {
        CursoService.blog_exec_GET_ID(id).then(function (resposta) {
            if (resposta) {
                vm.blogs = resposta
            }
        })
    }


    vm.limpar = function () {
        vm.blogs = {}
    }
}
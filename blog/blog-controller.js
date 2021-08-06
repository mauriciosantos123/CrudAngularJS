angular.module('app').controller('BlogController', BlogController);
BlogController.$inject = ['$location', 'CursoService'];

function BlogController($location, CursoService) {
    vm = this;
    vm.teste = 'Blog';
    vm.blogs = '';
    vm.erro = false

    vm.init = function () {
        vm.listarBlogs()
    }

    vm.navegar = function (rota, id) {
        $location.path(rota + '/' + id)
    }
    vm.navegar_no_id = function (rota) {
        $location.path(rota)
    }
    vm.listarBlogs = function () {

        CursoService.blog_exec_GET().then(function (resposta) {
            if (resposta) {
                vm.blogs = resposta
            } else {
                vm.erro = true
            }
        })
    }

    vm.excluir_blog = function (id) {
        CursoService.blog_exec_DELETE(id).then(function (resposta) {
            if (resposta) {
                //  mensagem de resposta
            }
        })
    }
    vm.editar_blog = function (id) {
        vm.navegar('Cadastro-Blog', id)
    }

}
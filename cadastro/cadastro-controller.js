angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'];

function CadastroController($location, CursoService, $routeParams) {
    vm = this;
    vm.teste = 'Home Cadastro';
    vm.cliente = {} //chamar nas html 
    vm.idCliente = undefined

    vm.textoButao = 'Cadastrar'

    if ($routeParams.idCliente) {
        vm.idCliente = $routeParams.idCliente
        buscarId(vm.idCliente)
        vm.textoButao = 'Editar'

    }

    vm.navegar = function (rota) {
        $location.path(rota)
    }
    // POST CLIENTE'

    vm.cadastrar = function () {
        if (vm.textoButao == 'Cadastrar') {
            CursoService.exec_POST(vm.cliente).then(function (resposta) {
                if (resposta) {
                    vm.cliente = resposta
                }
            })
        } else if (vm.textoButao == 'Editar') {
                CursoService.exec_PUT(vm.cliente).then(function (resposta) {
                    if (resposta) {
                        vm.cliente = resposta
                    }
                })
        }
        // redir
        vm.navegar('/')

    }
    // EDIT CLIENTE
    function buscarId(id) {
        CursoService.exec_GET_ID(id).then(function (resposta) {
            if (resposta) {
                vm.cliente = resposta
            }
        })
    }


    vm.limpar = function () {
        vm.cliente = {}
    }
}
angular.module("app").factory("CursoService", CursoService);

CursoService.$inject = ["$http"]
const REST = 'http://localhost:3000/clientes'
const REST_BLOG = 'http://localhost:3000/blog'

function CursoService($http) {
    var service = {
        // READ 
        exec_GET: function () {
            return $http.get(REST).then(trataResposta, tratarErro);
        },

        // DELETE
        exec_DELETE: function (id) {
            return $http.delete(REST + '/' + id).then(trataResposta, tratarErro);
        },

        // POST
        exec_POST: function (cliente) {
            return $http.post(REST, cliente).then(trataResposta, tratarErro);

        },
        // EDIT 
        exec_GET_ID: function (id) {
            return $http.get(REST + '/' + id).then(trataResposta, tratarErro);
        },

        exec_PUT: function (cliente) {
            return $http.put('http://localhost:3000/clientes' + '/' + cliente.id, cliente).then(trataResposta, tratarErro);

        },


        // BLOG CRUD
        // READ 
        blog_exec_GET: function () {
            return $http.get(REST_BLOG).then(trataResposta, tratarErro);
        },

        // DELETE
        blog_exec_DELETE: function (id) {
            return $http.delete(REST_BLOG + '/' + id).then(trataResposta, tratarErro);
        },

        // POST
        blog_exec_POST: function (blogs) {
            return $http.post(REST_BLOG, blogs).then(trataResposta, tratarErro);

        },
        // EDIT 
        blog_exec_GET_ID: function (id) {
            return $http.get(REST_BLOG + '/' + id).then(trataResposta, tratarErro);
        },

        blog_exec_PUT: function (blogs) {
            return $http.put('http://localhost:3000/blog' + '/' + blogs.id, blogs).then(trataResposta, tratarErro);

        }



    }
    // resposta sucesso
    function trataResposta(response) {
        return response.data
    }
    // resposta erro
    function tratarErro(error) {
        return error.data
    }
    return service;

}
var app = new Vue({
    el: "#app",
    data:{
        /*Mostra o título*/
        title: "Contas a pagar",

        /*Armazena os menus*/
        menus:[
            {id:0, name: "Listar contas"},
            {id:1, name: "Criar conta"}
        ],

        /*Armazena o status do menu*/
        activedView: 0,

        /*Mostra as contas a pagar*/
        bills:[
            {data_due: '20/08/2016', name: 'Conta de luz', value: 70.99, done: 1},
            {data_due: '21/08/2016', name: 'Conta de água', value: 55.99, done: 0},
            {data_due: '22/08/2016', name: 'Conta de telefone', value: 55.99, done: 0},
            {data_due: '23/08/2016', name: 'Suoermercado', value: 625.99, done: 0},
            {data_due: '24/08/2016', name: 'Cartão de crédito', value: 1500.99, done: 0},
            {data_due: '25/08/2016', name: 'Empréstimo', value: 2000.99, done: 0},
            {data_due: '26/08/2016', name: 'Gasolina', value: 200.99, done: 0}
        ]
    },

    /*Calcula as contas a pagar*/
    computed:{
        status: function () {
            var count = 0;
            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    count++;
                }
            }
            return !count ? "Nenhuma conta a pagar" : "Existem " + count + " contas a serem pagas";
            }
        },
    
    /*Executa o método que troca o status do menu*/
        methods:{
            showView: function (id) {
                this.activedView = id;
            }
        }
});
javascript: ( 
    /* Formulário SARPAS - DECEA */ 
    /* @version 1.6.0 */ 
    /* @author Maury M. Marques */ 
    function() {
        /* ----- Variáveis - Alterar esses valores ----- */
        var nome = 'Nome do Operador';           /* Nome do Operador */
        var telefone = '(99) 99999-9999';        /* Telefone do Operador - Formato (99) 99999-9999 */
        var minutos_para_iniciar = 5;            /* Minutos para iniciar o voo a partir de agora (Janela Inicial) */
        var tempo_de_voo_em_minutos = 45;        /* Tempo de voo em minutos (Janela Final) */
        var raio_em_metros = '200';              /* Raio em metros (máximo 200 metros) */
        var altura_ou_altitude = 'Altitude';     /* Opções Altura/Altitude (não precisa alterar) */
        var valor_da_altura_ou_altitude = '131'; /* Valor da Altura ou Altitude - Valor em pés (máximo 131 pés - cerca de 40 metros) */
        
        /* ----- Declarações de datas e horas em string ----- */
        var string_start_date;
        var string_start_time;
        var string_end_date;
        var string_end_time; 
        
        /* ----- Preenchimento do Mapa ou Formulário ----- */
        if (getUrlParam('passo') == '1') {
            /* Aeronave (Passo 1/4) */
            alert('Por favor, selecione a aeronave que será utilizada.');
        } else if (getUrlParam('passo') == '2') {
            /* Tipo de Operação (Passo 2/4) */
            alert('Por favor, selecione o tipo de operação.');
        } else if (getUrlParam('passo') == '3') {
            /* Mapa (Passo 3/4) */
            getLocation();
        } else if (getUrlParam('passo') == '4') {
            /* Formulário (Passo 4/4) */
            formConfirmation();
        } else {
            /* Login DECEA */
            window.location.href = 'https://servicos.decea.mil.br/sarpas/';
        }

        /* ----- Mensagem de alerta ou confirmação ----- */
        function formConfirmation() {
            var message = 'Seu voo iniciará em ' + minutos_para_iniciar + ' minutos e terá duração de ' + tempo_de_voo_em_minutos + ' minutos ';
            message += '(lembre-se que a data e hora estão em UTC). \n\n';
            message += 'Por favor, revise todo o formulário e faça as alterações desejadas. \n\n';
            message += 'Ao continuar você estará concordando com toda a "Declaração de Ciência" do DECEA (leia o formulário).';
            var response = confirm(message); 
            
            /* Aplica todas as regras */
            if (response == true) {
                setDateTime();
                setFormData();
            }
        } 
        
        /* ----- Busca parâmetros da URL ----- */
        function getUrlParam(param) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get(param);
        }

        /* ----- Método de Geolocalização ----- */
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(setPosition, showError);
            } else { 
                alert('Geolocalização não é suportada para esse browser.');
            }
        }

        /* ----- Registra Latitude e Longitude ----- */
        function setPosition(position) {
            /* Latitude */
            var input_lat = document.getElementById('lat');
            input_lat.value = position.coords.latitude;

            /* Longitude */
            var input_lng = document.getElementById('lng');
            input_lng.value = position.coords.longitude;
        }
        /* --------------------------------------------- */

        /* ----- Erros de Geolocalização ----- */
        function showError(error) {
            switch(error.code) {
            case error.PERMISSION_DENIED:
                alert('O usuário negou a solicitação de geolocalização.');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('As informações de localização não estão disponíveis.');
                break;
            case error.TIMEOUT:
                alert('A solicitação para obter a localização do usuário expirou.');
                break;
            case error.UNKNOWN_ERROR:
                alert('Ocorreu um erro desconhecido.');
                break;
            }
        }

        /* ----- Definições de data e hora ----- */
        function setDateTime() {
            /* Adiciona a função "addMinutes" em Date */
            Date.prototype.addMinutes = function(minutes) {
                this.setMinutes(this.getMinutes() + minutes);
                return this;
            }; 

            /* Data e hora iniciais (UTC) */
            var start_date = new Date().addMinutes(minutos_para_iniciar);
            var start_yyyy = start_date.getUTCFullYear(); /* Ano */
            var start_mm = start_date.getUTCMonth() + 1; /* Mês (+1 porque Janeiro é 0) */
            var start_dd = start_date.getUTCDate(); /* Dia */
            var start_hh = start_date.getUTCHours(); /* Hora */
            var start_ii = start_date.getUTCMinutes(); /* Minuto */ 
            
            /* Data e hora finais (UTC) */
            var end_date = new Date().addMinutes(minutos_para_iniciar + tempo_de_voo_em_minutos);
            var end_yyyy = end_date.getUTCFullYear(); /* Ano */
            var end_mm = end_date.getUTCMonth() + 1; /* Mês (+1 porque Janeiro é 0) */
            var end_dd = end_date.getUTCDate(); /* Dia */
            var end_hh = end_date.getUTCHours(); /* Hora */
            var end_ii = end_date.getUTCMinutes(); /* Minuto */ 
            
            /* Datas e horas em string (UTC) */
            string_start_date = String(start_dd).padStart(2, '0') + '/' + String(start_mm).padStart(2, '0') + '/' + String(start_yyyy).padStart(2, '0');
            string_start_time = String(start_hh).padStart(2, '0') + ':' + String(start_ii).padStart(2, '0');
            string_end_date = String(end_dd).padStart(2, '0') + '/' + String(end_mm).padStart(2, '0') + '/' + String(end_yyyy).padStart(2, '0');
            string_end_time = String(end_hh).padStart(2, '0') + ':' + String(end_ii).padStart(2, '0');
        }
        
        /* ----- Formulário ----- */
        function setFormData() {
            /* Tipo de Operação */
            var select_tipo_op = document.getElementById('tipo_op');
            select_tipo_op.options[1].selected = true; 
            
            /* Regra de Voo */
            var select_regra = document.getElementById('regra');
            var option = document.createElement('option');
            option.value = 'V';
            option.innerHTML = 'VFR (V)';
            select_regra.appendChild(option);
            select_regra.options[1].selected = true; 
            
            /* Início */
            var input_dt_i = document.getElementById('dt_i');
            input_dt_i.value = string_start_date; 
            
            /* Fim */
            var input_dt_f = document.getElementById('dt_f');
            input_dt_f.value = string_end_date; 
            
            /* Hora inicial da Janela */
            var input_hr_i = document.getElementById('hr_i');
            input_hr_i.value = string_start_time; 
            
            /* Hora final da Janela */
            var input_hr_f = document.getElementById('hr_f');
            input_hr_f.value = string_end_time; 
            
            /* Insira o raio em metros */
            var input_area = document.getElementsByName('area')[0];
            input_area.value = raio_em_metros; 
            
            /* Altura/Altitude */
            var select_alt = document.getElementsByName('alt')[0];
            select_alt.value = altura_ou_altitude; 
            
            /* Valor da Altura(ft)/Altitude(ft) */
            var select_alt_valor = document.getElementById('alt_valor');
            select_alt_valor.value = valor_da_altura_ou_altitude; 
            
            /* Nome */
            var input_rps_1 = document.getElementById('rps_1');
            input_rps_1.value = nome; 
            
            /* Telefone */
            var input_rps_telefone_1 = document.getElementsByName('rps_telefone_1')[0];
            input_rps_telefone_1.value = telefone; 
            
            /* Declaração de Ciência */
            var checkboxes = document.getElementsByTagName("input");
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].type == 'checkbox') checkboxes[i].checked = true;
            }
        }
    }
)();
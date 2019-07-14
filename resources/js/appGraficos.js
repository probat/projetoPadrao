$(document).ready(function(){
	/*$(document).on('change', '#grafico', function(){
        var routeApiTimeline = '/api/graficos/' + $(":selected").attr("value");
        $.getJSON(routeApiTimeline, function(timeline) {
            var properties = {'x': 'wd_dData_inclusao', 'name': 'wd_sSetor', 'label': 'wd_sSetor', 'description': 'tempo_atendimento'};
            var ObjectsJoin = {
                'properties': properties,
                'query': timeline,
            }
            var dataSeries = getDataSeries(executeJoininObjects(ObjectsJoin));
            carregaTimeline(dataSeries);
        });
    });*/

    $(document).on('change', '#grafico', function(){
        var prev = { "nodes": [ { "Ano": "1996", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "70308", "Quantidade de Vínculos": "76866", "Vl Remuneração (R$)": "233763021,25", "Número Médio Mensal Cont Emprg": "50075", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "1997", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "90413", "Quantidade de Vínculos": "100918", "Vl Remuneração (R$)": "295483231,18", "Número Médio Mensal Cont Emprg": "62109", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "1998", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "110706", "Quantidade de Vínculos": "120272", "Vl Remuneração (R$)": "451102270,80", "Número Médio Mensal Cont Emprg": "77988", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "1999", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "124042", "Quantidade de Vínculos": "146764", "Vl Remuneração (R$)": "429728049,32", "Número Médio Mensal Cont Emprg": "77514", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2000", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "144348", "Quantidade de Vínculos": "173326", "Vl Remuneração (R$)": "431111207,19", "Número Médio Mensal Cont Emprg": "75002", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2001", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "163563", "Quantidade de Vínculos": "194416", "Vl Remuneração (R$)": "685933548,74", "Número Médio Mensal Cont Emprg": "106958", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2002", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "170468", "Quantidade de Vínculos": "201370", "Vl Remuneração (R$)": "762414877,88", "Número Médio Mensal Cont Emprg": "110113", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2003", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "178024", "Quantidade de Vínculos": "209657", "Vl Remuneração (R$)": "904906565,80", "Número Médio Mensal Cont Emprg": "115527", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2004", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "193636", "Quantidade de Vínculos": "229213", "Vl Remuneração (R$)": "1058310037,50", "Número Médio Mensal Cont Emprg": "126725", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2005", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "210694", "Quantidade de Vínculos": "246461", "Vl Remuneração (R$)": "1273231206,46", "Número Médio Mensal Cont Emprg": "137780", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2006", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "218008", "Quantidade de Vínculos": "253839", "Vl Remuneração (R$)": "1485651126,36", "Número Médio Mensal Cont Emprg": "144484", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2008", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "262484", "Quantidade de Vínculos": "317630", "Vl Remuneração (R$)": "2079538831,11", "Número Médio Mensal Cont Emprg": "176919", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2007", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "241994", "Quantidade de Vínculos": "279637", "Vl Remuneração (R$)": "1811443171,77", "Número Médio Mensal Cont Emprg": "165180", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2009", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "298919", "Quantidade de Vínculos": "365986", "Vl Remuneração (R$)": "2719729944,36", "Número Médio Mensal Cont Emprg": "200328", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2010", "Unidade da Federação": "Ignorado", "Qtde Contribuintes Empregados": "84223", "Quantidade de Vínculos": "100893", "Vl Remuneração (R$)": "770060135,99", "Número Médio Mensal Cont Emprg": "60500", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2011", "Unidade da Federação": "Ignorado", "Qtde Contribuintes Empregados": "85855", "Quantidade de Vínculos": "106671", "Vl Remuneração (R$)": "948143370,39", "Número Médio Mensal Cont Emprg": "61481", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2012", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "395936", "Quantidade de Vínculos": "494166", "Vl Remuneração (R$)": "5412693123,66", "Número Médio Mensal Cont Emprg": "276567", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2013", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "393976", "Quantidade de Vínculos": "489821", "Vl Remuneração (R$)": "5736333956,68", "Número Médio Mensal Cont Emprg": "274859", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2014", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "397831", "Quantidade de Vínculos": "468311", "Vl Remuneração (R$)": "6298901338,08", "Número Médio Mensal Cont Emprg": "283705", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2015", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "377009", "Quantidade de Vínculos": "442358", "Vl Remuneração (R$)": "6303927229,05", "Número Médio Mensal Cont Emprg": "270984", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2016", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "340550", "Quantidade de Vínculos": "388341", "Vl Remuneração (R$)": "6201528484,83", "Número Médio Mensal Cont Emprg": "251039", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" }, { "Ano": "2017", "Unidade da Federação": "Rondônia", "Qtde Contribuintes Empregados": "331070", "Quantidade de Vínculos": "376871", "Vl Remuneração (R$)": "6323556879,45", "Número Médio Mensal Cont Emprg": "243398", "Estatísticas Cont Empregado": "Qtde Contribuintes Empregados" } ]};
        //var routeApiTimeline = '/api/graficos/' + $(":selected").attr("value");
        var properties = {'x': 'Ano', 'name': 'Unidade da Federação', 'label': 'Unidade da Federação', 'description': 'Vl Remuneração (R$)'};
        var ObjectsJoin = {
            'properties': properties,
            'query': prev.nodes,
        }
        var dataSeries = getDataSeries(executeJoininObjects(ObjectsJoin));
        carregaTimeline(dataSeries);
    });

function getDataSeries(Series){
        var dataSeries = [];
        Series.forEach(function(t){
            var dateTime = (typeof t.x === 'string') ? new Date(t.x) : t.x;
            var data = new Object();
            data['x']       = Date.UTC(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate());
            data['name']        = t.name;
            data['label']       = t.label;
            data['description'] = t.description;
            dataSeries.push(data);
        });
        return dataSeries;
    };

    function carregaTimeline(dataSeries){
            $('#retorno').highcharts({
            chart: {
                zoomType: 'x',
                type: 'timeline'
            },
            xAxis: {
                type: 'datetime',
                visible: false
            },
            yAxis: {
                gridLineWidth: 1,
                title: null,
                labels: {
                  enabled: false
                }
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'Timeline of Space Exploration'
            },
              subtitle: {
                    text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
              },
              tooltip: {
                  style: {
                      width: 300
                  }
              },
              series: [
                {
                      dataLabels: {
                          allowOverlap: false,
                          format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                                  '{point.x:%d %b %Y}</span><br/>{point.label}'
                      },
                      marker: {
                          symbol: 'circle'
                      },
                      data: dataSeries
                }
            ]
        });
      };


      function executeJoininObjects(ObjectsJoin)
    {
        var properties = ObjectsJoin.properties;
        var dataQuery  = ObjectsJoin.query;
        arrayResult    = [];
        dataQuery.forEach(function(row){
            result = new Object;
            Object.keys(properties).forEach(function(k){
                result[k] = row[properties[k]];
            });
            arrayResult.push(result);
        });
        return arrayResult;
    }
});
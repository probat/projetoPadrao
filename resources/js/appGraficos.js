$(document).ready(function(){
	  $(document).on('change', '#chamado', function(){
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
    });
});
$(document).ready(function(){
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
});
$(document).ready(function(){

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
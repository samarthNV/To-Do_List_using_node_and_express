exports.getDayHin = function(){

    const today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("hi-IN", options);

    return day;

}

exports.getDayEng = function(){

    const today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;

}
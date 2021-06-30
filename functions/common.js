export function isNullField(x) {
    if (x.length == 0) {
        return true;
    } else {
        return false;
    }
}

export function isValidLength(val, len) {
    if (val.length == len) {
        return true;
    } else {
        return false;
    }
}

export function isValidEmailAddress(x) {
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // var mailformat = /.+@.+/;
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailformat.test(x)) {
        return true;
    } else {
        return false;
    }
}

export function myAPI_Validator_JSON(val, API_NAME) {
    if (val.success == true) {
        let pl = {
            success: true,
            data: val
        };
        return pl;

    } else if (val.success == false) {
        let pl = {
            success: false,
            data: {},
            errCode: 1
        };
        return pl;
    } else {
        let pl = {
            success: false,
            data: {},
            errCode: 0
        };
        console.log(" < == ERR == > ")
        console.log(" < == myAPI_Validator for " + API_NAME + " == > ")
        return pl;
    }
}


export function myAPI_Validator_ARRAY(val, API_NAME) {
    if (val.success == true) {
        let pl = {
            success: true,
            data: val
        };
        return pl;

    } else if (val.success == false) {
        let pl = {
            success: false,
            data: [],
            errCode: 1
        };
        return pl;
    } else {
        let pl = {
            success: false,
            data: [],
            errCode: 0
        };
        console.log(" < == ERR == > ")
        console.log(" < == myAPI_Validator for " + API_NAME + " == > ")
        return pl;
    }
}








module.exports = {

    vaildObject: async function (required, non_required, res) {
        let msg ='';
        let empty = [];
        let table_name = (required.hasOwnProperty('table_name')) ? required.table_name : 'users';
        
        for (let key in required) {
            if (required.hasOwnProperty(key)) {
                if (required[key] == undefined || required[key] == '') {
                    empty.push(key)
    ;
                }
            }
        }
    
        if (empty.length != 0) {
            msg = empty.toString();
            if (empty.length > 1) {
                msg += " fields are required"
            } else {
                msg += " field is required"
            }
            res.status(400).json({
                'success': false,
                'msg': msg,
                'code': 400,
                 'body': {}
            });
            return;
        } else {
            if (required.hasOwnProperty('security_key')) {
                if (required.security_key != "") {
                    msg = "Invalid security key";
                    res.status(403).json({
                        'success': false,
                        'msg': msg,
                        'code': 403,
                        'body': []
                    });
                    res.end();
                    return false;
                }
            }
            if (required.hasOwnProperty('password')) {
                
            }
            const marge_object = Object.assign(required, non_required);
            delete marge_object.checkexit;
    
            for(let data in marge_object){
                if(marge_object[data]==undefined){
                    delete marge_object[data];
                }else{
                    if(typeof marge_object[data]=='string'){
                        marge_object[data]=marge_object[data].trim();
                    } 
                }
            }
    
            return marge_object;
        }
    },

 
   

    success: function (res, message, body = {}) {
        return res.status(200).json({
            'success': true,
            'status': 200,
            'message': message,
            'body': body
        });
    },
    
    
    error: function (res, err, body = {}) {
        console.log(err, '===========================>error');
        
        let status = (typeof err === 'object') ? (err.code) ? err.code : 200 : 200;
        let message = (typeof err === 'object') ? (err.message ? err.message : '') : err;
        res.status(status).json({
            'success': false,
            'status': 400,
            'message': message,
            'body': body
        });
    },
    
    error401:function(res,err,body={}){
        let message = (typeof err === 'object') ? (err.message ? err.message : '') : err;
       
        res.status(200).json({
        'success': false,
        'status': 401,
        'message': message,
        'body': body
    });
    
    },


}
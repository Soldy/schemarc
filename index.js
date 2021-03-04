/*
 *  @Soldy\schemarc\2021.02.18\GPL3
 */
'use strict';
const typeHardening =  new (require('typehardeningrc')).base();
/*
 * @prototype
 */
const schemaBase=function(schemaIn){
    this.check = function(name, value){
        if (
            (typeof name !== 'string')||
            (typeof value === 'undefined')||
            (typeof _schema[name] === 'undefined')
        )
            return false;
        return _check(name, value);
    }
    this.getOne = function(){
        return _getOne();
    }
    this.get = function(name){
        if (
            (typeof name === 'undefined')||
            (typeof _schema[name] === 'undefined')
        )
           return false;
        return _get(name);

    }
    const _check = function(name, value){
        if(typeHardening.check(_schema[name], value) === false)
            return false;
        return true;
    }
    const _getOne = function(){
        let out = [];
        for (let i in _schema)
            out[i] = get(i);
        return out;
    }
    const _get = function(name){
        if (typeof _schema[name]['default'] === 'undefined')
            return '';
        return _schema[name]['default'];
    }
    const _schema = schemaIn;
}



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
            (typeof name === 'undefined')||
            (typeof value === 'undefined')||
            (typeof schema[name] === 'undefined')
        )
            return false;
        return check(name, value);
    }
    this.getOne = function(){
        return getOne();
    }
    this.get = function(name){
        if (
            (typeof name === 'undefined')||
            (typeof schema[name] === 'undefined')
        )
           return false;
        return get(name);

    }
    const check = function(name, value){
        if(typeHardening.check(schema[name], value) === false)
            return false;
        return true;
    }
    const getOne = function(){
        let out = [];
        for (let i in schema)
            out[i] = get(i);
        return out;
    }
    const get = function(name){
        if (typeof schema[name]['default'] === 'undefined')
            return '';
        return schema[name]['default'];
    }
    const noDefault = function(){

    }

    const schema = schemaIn;
}



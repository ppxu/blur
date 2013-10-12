/*
combined files : 

gallery/blur/1.0/index

*/
/**
 * @fileoverview 
 * @author 自寒<zihan.yx@taobao.com>
 * @module blur
 **/
KISSY.add('gallery/blur/1.0/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Blur
     * @constructor
     * @extends Base
     */
    function Blur(comConfig) {
        var self = this;
        //调用父类构造函数
        Blur.superclass.constructor.call(self, comConfig);
    }
    S.extend(Blur, Base, /** @lends Blur.prototype*/{

    }, {ATTRS : /** @lends Blur*/{

    }});
    return Blur;
}, {requires:['node', 'base']});





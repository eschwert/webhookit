/*
YUI 3.5.0pr1 (build 4342)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("widget-skin",function(e){var d="boundingBox",b="contentBox",a="skin",c=e.ClassNameManager.getClassName;e.Widget.prototype.getSkinName=function(){var f=this.get(b)||this.get(d),h=new RegExp("\\b"+c(a)+"-(\\S+)"),g;if(f){f.ancestor(function(i){g=i.get("className").match(h);return g;});}return(g)?g[1]:null;};},"3.5.0pr1",{requires:["widget-base"]});
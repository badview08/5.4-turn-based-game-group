this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["characterselect"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"popup-div\">\n	<img src=\"http://placehold.it/100x100\">\n	<h4>Created by: </h4>\n			<p>M G K</p>\n		<div class=\"backstory\">\n			<h3>Backstory</h3>\n			<p>You are a hero who likes to punch bad people in the face, dont worry you're not a bad person just because you punch people\n				in the face, you take the law into your own hands. Get ready for some street justice.\n			</p>\n			<h3> Instructions</h3>\n			<p>Instructions on how to play</p>\n		</div>\n		<button class=\"characterSelectButton\">Select Your Hero</button>\n		<div class=\"footer-div\">\n			<input type=\"submit\" class=\"facebookShare\" value=\"Share to Facebook\">\n			<input type=\"submit\" class=\"twitterShare\" value=\"Share to Twitter\">\n		</div>\n</div>\n<div class = \"center-container\">\n<div class=\"selection-container\">\n\n	<div class=\"hero-selection\">\n		<ul>\n			<li class=\"hero\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id=\"hero1\" src=\"../asset/heros/hero1.png\">\n			</li>\n			<li class=\"hero\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id=\"hero2\" src=\"../asset/heros/hero2.png\">\n			</li>\n			<li class=\"hero\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id=\"hero3\" src=\"../asset/heros/hero3.png\">\n			</li>\n		</ul>\n	</div>\n	<div class=\"random-location\">\n		<ul>\n			<li class=\"arena\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id = \"arena1\" src=\"../asset/locations/arena1.jpg\">\n			</li>\n			<li class=\"arena\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id = \"arena2\" src=\"../asset/locations/arena2.jpg\">\n			</li>\n			<li class=\"arena\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id = \"arena3\" src=\"../asset/locations/arena3.jpg\">\n			</li>\n		</ul>\n	</div>\n	<div class=\"random-villain\">\n		<ul>\n			<li class=\"villain\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id = \"villain1\"  src=\"../asset/villain/villain1.png\">\n			</li>\n			<li class=\"villain\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id = \"villain2\" src=\"../asset/villain/villain2.png\">\n			</li>\n			<li class=\"villain\">\n				<i class  =  \"fa fa-cog fa-spin fa-3x\"></i>\n				<img id = \"villain3\" src=\"../asset/villain/villain3.png\">\n			</li>\n		</ul>\n	</div>\n	<button id = 'fightButton'>Press to Fight!!</button>\n</div>\n</div>\n\n\n</section>\n";
},"useData":true});
this["JST"]["fight-screen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<header class=\"fight-header\">\n	<div class=\"villain-info\">\n		<h3 class=\"villain-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"health-red villain\">\n			<div class=\"health-green villain\"></div>\n		</div>\n	</div>\n	<div class=\"hero-info\">\n		<h3 class=\"villain-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"health-red hero\">\n			<div class=\"health-green hero\"></div>\n		</div>\n	</div>\n	<img src=\"\" alt=\"\" class=\"logo\">\n</header>\n\n<section class=\"fight-content\">\n	<div class=\"villain-img\">\n		<img src=\"\" alt=\"\">\n	</div>\n	<div class=\"hero-img\">\n		<img src=\"\" alt=\"\">\n	</div>\n</section>\n\n<footer class=\"fight-status\">\n	<h2 class=\"instructions\">Press SPACE to attack!</h2>\n	<h2 class=\"villain-turn\">"
    + alias3(((helper = (helper = helpers['villain-name'] || (depth0 != null ? depth0['villain-name'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"villain-name","hash":{},"data":data}) : helper)))
    + "'s turn!</h2>\n	<button class=\"hide-footer\">Hide</button>\n	<button class=\"show-footer\">Show</button>\n</footer>\n";
},"useData":true});
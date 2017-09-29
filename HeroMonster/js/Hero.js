
/*function Hero(level){
	this.level=level;
	
}*/
function Hero(obj){
	this.level=obj.level;
	this.exp=obj.exp;
	this.minAttack=obj.minAttack;
	this.maxAttack=obj.maxAttack;
	this.minDefend=obj.minDefend;
	this.maxDefend=obj.maxDefend;
	this.blood=obj.blood;
	this.hasDie=false;
	
	this.attackMonster=function(monster){
		monster.beiAttack(this.attack);//妖怪被打
	}
	this.beiAttack=function(attackValue){
		var infactAttack=attackValue-this.defend;//这个才是受到的伤害值
		this.blood-=infactAttack;
		if(this.blood<=0){
			this.die();
		}
	}
	this.die=function(){
		this.hasDie=true;
	}
	this.addExp=function(expValue){
		this.exp+=expValue;
		if(this.exp>=100){
			this.levelUp();
		}
	}
	this.levelUp=function(){
		this.level++;
		this.minAttack++;
		this.maxAttack++;
		this.minDefend++;
		this.maxDefend++;
		this.blood+=10;
		this.exp=0; 
	}
}
function getRandom(num){
	return Math.round(Math.random()*num);
}

/*使用工厂模式而不是new*/

function createHero(obj){
	
	var hero=new Hero(obj);
	Object.defineProperty(hero,"attack",{
			get:function(){
				return this.minAttack+getRandom(this.maxAttack-this.minAttack);
			}
		})
	
	Object.defineProperty(hero,"defend",{
			get:function(){
				return this.minDefend+getRandom(this.maxDefend-this.minDefend);
			}
		})
	return hero;
}


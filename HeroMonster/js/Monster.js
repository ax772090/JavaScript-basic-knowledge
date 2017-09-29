function Monster(monster){

	this.minAttack=monster.minAttack;
	this.maxAttack=monster.maxAttack;
	this.blood=monster.blood;
	this.hasDie=false;
	this.attackHero=function(hero){
		hero.beiAttack(this.attack);//英雄被妖怪打
	}
	this.beiAttack=function(attackValue){
		this.blood-=attackValue;
		if(this.blood<=0){
			this.die();
		}
	}
	this.die=function(){
		this.hasDie=true;
	}
	
}
function getRandom(num){
	return Math.round(Math.random()*num);
}

/*使用工厂模式而不是new*/

function createMonster(obj){
	
	var monster=new Monster(obj);
	Object.defineProperty(monster,"attack",{
			get:function(){
				return this.minAttack+getRandom(this.maxAttack-this.minAttack);
			}
		})
	return monster;
}